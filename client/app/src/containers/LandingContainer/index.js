import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Columns from 'grommet-udacity/components/Columns';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import { WithLoading } from 'components';

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      projects,
      isLoading,
    } = this.props;
    return (
      <Section className={styles.landing}>
        <WithLoading isLoading={isLoading}>
          <Columns
            className={styles.masonry}
            masonry
            justify="center"
            size="small"
            maxCount={3}
          >
            {projects && projects.map((project, i) =>
              <Box key={i}>
                <Anchor href={`/projects/${project.slug}`}>
                  <img src={project.featureImage} />
                </Anchor>
                <Heading align="center">
                  {project.title}
                </Heading>
              </Box>
            )}
          </Columns>
        </WithLoading>
      </Section>
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
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(Landing, styles);

const getProjectsQuery = gql`
  query loadProjects {
    projects {
      title
      slug
      caption
      featureImage
    }
  }
`;

const ContainerWithData = graphql(getProjectsQuery, {
  props: ({ data: { projects, loading, error } }) => ({
    projects,
    isLoading: loading,
    error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
