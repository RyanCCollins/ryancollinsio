import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from 'grommet-udacity/components/App';
import { Navigation, AppFooter } from 'components';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { FeedbackContainer } from 'containers'; // eslint-disable-line
import * as AppContainerActionCreators from './actions';
import { selectNavDocked } from './selectors';

class AppContainer extends Component {
  constructor() {
    super();
    this.handleMobile = this.handleMobile.bind(this);
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleNavDocking = this.handleNavDocking.bind(this);
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
        this.props.actions.unDockNavigation();
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
    if (this.props.location.pathname === '/') {
      this.props.actions.dockNavigation();
    } else {
      this.props.actions.unDockNavigation();
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
          <ReactCSSTransitionGroup
            transitionName="appear"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={1}
          >
            {React.cloneElement(this.props.children, this.props)}
          </ReactCSSTransitionGroup>
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
