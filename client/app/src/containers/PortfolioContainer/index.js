import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PortfolioActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { WithLoading, Divider } from 'components';
import Section from 'grommet-udacity/components/Section';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Columns from 'grommet-udacity/components/Columns';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import Headline from 'grommet-udacity/components/Headline';

class PortfolioContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      isLoading,
      projects,
      loadingError,
    } = this.props;
    return (
      <WithLoading isLoading={isLoading}>
        <Section className={styles.portfolio}>
          <Headline align="center">
            Portfolio
          </Headline>
          <Divider />
          <Box>
            <Columns
              className={styles.masonry}
              masonry
              justify="center"
              size="small"
              maxCount={3}
            >
              {projects && projects.map((project, i) =>
                <Box className={styles.card} size="medium" key={i}>
                  <Anchor href={`/projects/${project.slug}`}>
                    <img src={project.featureImage} className={styles.image} />
                  </Anchor>
                  <Heading align="center">
                    {project.title}
                  </Heading>
                </Box>
              )}
            </Columns>
          </Box>
        </Section>
      </WithLoading>
    );
  }
}

PortfolioContainer.propTypes = {
  projects: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  loadingError: PropTypes.object,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    PortfolioActionCreators,
    dispatch
  ),
});

const Container = cssModules(PortfolioContainer, styles);

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
    loadingError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
