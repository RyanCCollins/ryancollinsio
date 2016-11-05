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
      user,
    } = this.props;
    return (
      <App inline centered={false}>
        <Navbar pathname={location.pathname} user={user} navLinks={navLinks} />
        {React.cloneElement(this.props.children, this.props)}
        <AppFooter />
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
};


// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.app.user,
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
