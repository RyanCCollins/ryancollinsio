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
    } = this.props;
    return (
      <App inline centered={false}>
        <Navigation
          pathname={location.pathname}
          isMobile={isMobile}
          user={user}
          navIsActive={navIsActive}
          navLinks={navLinks}
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
};


// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.app.user,
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
