import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from 'grommet-udacity/components/App';
import { Navigation, AppFooter } from 'components';
import { FeedbackContainer } from 'containers'; // eslint-disable-line
import { debounce } from '../../utils';
import * as AppContainerActionCreators from './actions';
import { selectNavDocked } from './selectors';

class AppContainer extends Component {
  constructor() {
    super();
    this.handleMobile = this.handleMobile.bind(this);
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNavDocking = this.handleNavDocking.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    this.props.actions.loadPersistedUser();
    this.handleMobile();
    this.handleNavDocking();
    if (window) {
      window.addEventListener('resize', this.handleMobile);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleMobile);
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
  handleSearch({ target }) {
    if (target.value) {
      this.props.actions.setSearchTerm(target.value);
      if (this.props.location.pathname !== '/search') {
        this.context.router.push('/search');
      }
    } else {
      this.props.actions.clearSearchTerm();
    }
  }
  handleMobile() {
    const isMobile = window.innerWidth <= 768;
    const {
      appSetMobile,
    } = this.props.actions;
    if (isMobile !== this.props.isMobile) {
      appSetMobile(isMobile);
    }
  }
  handleNavDocking() {
    if (this.props.location.pathname !== '/') {
      this.props.actions.unDockNavigation();
    } else if (this.props.navDocked) {
      window.addEventListener('scroll', this.handleScroll);
    }
  }
  handleScroll() {
    const crown = document.querySelector('.app-src-components-StaticLandingSections-HeroSection-___index-module__logoImageWrapper___sVW1s');
    const { navDocked } = this.props;
    const crownTop = crown.getBoundingClientRect().top;
    if (crownTop <= 79 && navDocked) {
      debounce(this.props.actions.unDockNavigation());
    } else if (crownTop > 79 && !navDocked) {
      debounce(this.props.actions.dockNavigation());
    }
  }
  handleToggleNav() {
    this.props.actions.appToggleNav();
  }
  render() {
    const {
      location,
      navLinks,
      user,
      isMobile,
      navIsActive,
      searchTerm,
      navDocked,
    } = this.props;
    return (
      <App inline centered={false}>
        <Navigation
          docked={navDocked}
          searchTerm={searchTerm}
          onSearch={this.handleSearch}
          pathname={location.pathname}
          isMobile={isMobile}
          user={user}
          navIsActive={navIsActive}
          navLinks={navLinks}
          onToggleNav={this.handleToggleNav}
        >
          {React.cloneElement(this.props.children, this.props)}
        </Navigation>
        <FeedbackContainer />
        {!navIsActive && <AppFooter />}
      </App>
    );
  }
}

AppContainer.propTypes = {
  navDocked: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired, // eslint-disable-line
  location: PropTypes.object.isRequired, // eslint-disable-line
  children: PropTypes.node.isRequired,
  navLinks: PropTypes.array.isRequired, // eslint-disable-line
  actions: PropTypes.object.isRequired, // eslint-disable-line
  isMobile: PropTypes.bool.isRequired,
  navIsActive: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
};

AppContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = state => ({
  user: state.app.user,
  searchTerm: state.app.searchTerm,
  isMobile: state.app.isMobile,
  navLinks: state.app.navLinks,
  navIsActive: state.app.navIsActive,
  navDocked: selectNavDocked(state),
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    AppContainerActionCreators,
    dispatch,
  ),
});

const Container = AppContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
