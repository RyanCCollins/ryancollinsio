import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AdminDashboardActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import Headline from 'grommet-udacity/components/Headline';
import Section from 'grommet-udacity/components/Section';
import { Divider } from 'components';

class AdminDashboardContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Box className={styles.adminDashboard} colorIndex="light-2">
        <Section className="section" full="horizontal">
          <Headline className="heading" align="center">
            Dashboard
          </Headline>
          <Divider />
        </Section>
      </Box>
    );
  }
}

AdminDashboardContainer.propTypes = {
  // isLoading: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AdminDashboardActionCreators,
    dispatch
  ),
});

const Container = cssModules(AdminDashboardContainer, styles);

const adminDashboardQuery = gql`
  query adminDashboard {
    adminDashboard {
      __typename
    }
  }
`;

const ContainerWithData = graphql(adminDashboardQuery, {
  props: ({ data: { loading, error, adminDashboard } }) => ({
    adminDashboard,
    loading,
    error,
  }),
})(Container);

const adminDashboardMutation = gql`
  mutation adminDashboard {
    adminDashboard {
      __typename
    }
  }
`;

const ContainerWithMutation = graphql(adminDashboardMutation)(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
