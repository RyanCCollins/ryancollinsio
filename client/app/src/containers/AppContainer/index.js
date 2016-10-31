import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppContainerActionCreators from './actions';
import App from 'grommet-udacity/components/App';
import { Navbar, AppFooter } from 'components';

class AppContainer extends Component {
  componentDidMount() {
    this.props.actions.loadPersistedUser();
  }
  render() {
    const {
      location,
      navLinks,
    } = this.props;
    return (
      <App inline centered={false}>
        <Navbar pathname={location.pathname} navLinks={navLinks} />
        {React.cloneElement(this.props.children, this.props)}
        <AppFooter />
      </App>
    );
  }
}

AppContainer.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  navLinks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};


// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  authToken: state.app.authToken,
  navLinks: state.app.navLinks,
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
