import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { WithLoading, Project } from 'components';
import projectData from './graph/fragments';
import Section from 'grommet-udacity/components/Section';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Heading from 'grommet-udacity/components/Heading';


class ProjectContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
  }
  render() {
    const {
      isLoading,
      project,
      loadingError,
    } = this.props;
    return (
      <WithLoading isLoading={isLoading}>
        {project &&
          <Project project={project} />
        }
      </WithLoading>
    );
  }
}

ProjectContainer.propTypes = {
  params: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ProjectActionCreators,
    dispatch
  ),
});

const Container = cssModules(ProjectContainer, styles);

const getProjectsQuery = gql`
  query loadProject($slug: String!) {
    project(slug: $slug) {
      ...projectData
    }
  }
`;

const ContainerWithData = graphql(getProjectsQuery, {
  options: (ownProps) => ({
    fragments: [projectData],
    skip: !ownProps.params.slug,
    variables: {
      slug: ownProps.params.slug,
    },
  }),
  props: ({ data: { project, loading, error } }) => ({
    project,
    isLoading: loading,
    loadingError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
