import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserProfileActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class UserProfileContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.userProfile}>
      </div>
    );
  }
}

UserProfileContainer.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    UserProfileActionCreators,
    dispatch
  ),
});

const Container = cssModules(UserProfileContainer, styles);

const userProfileQuery = gql`
  query userProfile {
    userProfile {
      __typename
    }
  }
`;

const ContainerWithData = graphql(userProfileQuery, {
  props: ({ data: { loading, error, userProfile } }) => ({
    userProfile,
    loading,
    error,
  }),
})(Container);

const userProfileMutation = gql`
  mutation userProfile {
    userProfile {
      __typename
    }
  }
`;

const ContainerWithMutation = graphql(userProfileMutation)(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
