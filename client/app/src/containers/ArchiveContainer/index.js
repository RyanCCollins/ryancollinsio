import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ArchiveActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

class Archive extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.archive}>
      </div>
    );
  }
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ArchiveActionCreators,
    dispatch
  ),
});

const Container = cssModules(Archive, styles);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
