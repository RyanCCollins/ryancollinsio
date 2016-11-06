import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TutorialsActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TutorialsContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.tutorials}>
      </div>
    );
  }
}

TutorialsContainer.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
}

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    TutorialsActionCreators,
    dispatch
  ),
});

const Container = cssModules(TutorialsContainer, styles);

const tutorialsQuery = gql`
  query tutorials {
    tutorials {
      __typename
    }
  }
`;

const ContainerWithData = graphql(tutorialsQuery, {
  props: ({ data: { loading, error, tutorials } }) => ({
    tutorials,
    loading,
    error,
  }),
})(Container);

const tutorialsMutation = gql`
  mutation tutorials {
    tutorials {
      __typename
    }
  }
`;

const ContainerWithMutation = graphql(tutorialsMutation)(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
