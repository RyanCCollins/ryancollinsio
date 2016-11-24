import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppContainerActionCreators from './actions';
import App from 'grommet-udacity/components/App';
import { Navigation, AppFooter } from 'components';

class AppContainer extends Component {
  constructor() {
    super();
    this.handleMobile = this.handleMobile.bind(this);
    this.handleToggleNav = this.handleToggleNav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidMount() {
    this.props.actions.loadPersistedUser();
    this.handleMobile();
    if (window) {
      window.addEventListener('resize', this.handleMobile);
    }
  }
  componentWillUnmount() {
    if (window) {
      window.removeEventListener('resize', this.handleMobile);
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
    } = this.props;
    return (
      <App inline centered={false}>
        <Navigation
          searchTerm={searchTerm}
          onSearch={this.handleSearch}
          pathname={location.pathname}
          isMobile={isMobile}
          user={user}
          navIsActive={navIsActive}
          navLinks={navLinks.reverse()}
          onToggleNav={this.handleToggleNav}
        >
          {React.cloneElement(this.props.children, this.props)}
        </Navigation>
        {!navIsActive && <AppFooter />}
      </App>
    );
  }
}

AppContainer.propTypes = {
  user: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  navLinks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  isMobile: PropTypes.bool.isRequired,
  navIsActive: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
};

AppContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.app.user,
  searchTerm: state.app.searchTerm,
  isMobile: state.app.isMobile,
  navLinks: state.app.navLinks,
  navIsActive: state.app.navIsActive,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AppContainerActionCreators,
    dispatch
  ),
});

const Container = AppContainer;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
