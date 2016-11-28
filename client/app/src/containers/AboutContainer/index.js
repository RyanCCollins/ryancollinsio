import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AboutActionCreators from './actions';
import { StyledWrapper } from './styles';

class AboutContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

AboutContainer.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AboutActionCreators,
    dispatch
  ),
});

const Container = AboutContainer;


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
