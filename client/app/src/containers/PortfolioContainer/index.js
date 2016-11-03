import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PortfolioActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import {
  WithLoading,
  Divider,
  PaginatorFooter,
  SearchMeta,
  ResponsiveImage,
  SearchForm,
} from 'components';
import Section from 'grommet-udacity/components/Section';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Columns from 'grommet-udacity/components/Columns';
import Box from 'grommet-udacity/components/Box';
import Anchor from 'grommet-udacity/components/Anchor';
import Headline from 'grommet-udacity/components/Headline';
import { reduxForm } from 'redux-form';
import { getVisibleProjectsFilteredBySearchTerm } from './selectors';

export const formFields = [
  'tagSelectionInput',
];

class PortfolioContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillReceiveProps({ allProjects }) {
    if (allProjects !== this.props.allProjects) {
      this.props.actions.portfolioSetProjects(allProjects);
    }
  }
  render() {
    const {
      isLoading,
      allProjects,
      projects,
      currentPage,
      perPage,
      actions,
      searchTerm,
      projectTags,
      fields,
    } = this.props;
    return (
      <WithLoading isLoading={isLoading}>
        <Box
          className={styles.portfolio}
          colorIndex="light-2"
          align="center"
          justify="center"
          pad="large"
        >
          <Headline align="center">
            Portfolio
          </Headline>
          <SearchMeta array={projects} searchTerm={searchTerm} />
          <Divider />
          <Section direction="column" full="horizontal" justify="center" align="center">
            <Box>
              {projectTags && projectTags.length > 0 &&
                <SearchForm
                  tagSelectionInput={fields.tagSelectionInput}
                  tags={projectTags}
                  onClear={actions.portfolioClearSearchTerm}
                  searchTerm={searchTerm}
                  onChange={({ target }) => actions.portfolioSetSearchTerm(target.value)}
                />
              }
            </Box>
          </Section>
          <Section className={styles.innerBox}>
            {projects && projects.length > 0 &&
              <Columns
                className={styles.masonry}
                masonry
                justify="center"
                size="small"
                maxCount={3}
              >
                {projects.map((project, i) =>
                  <Box className={styles.card} size="medium" key={i}>
                    <Anchor href={`/projects/${project.slug}`}>
                      <ResponsiveImage
                        matchHeight={false}
                        src={project.featureImage}
                        className={styles.image}
                      />
                    </Anchor>
                  </Box>
                )}
              </Columns>
            }
          </Section>
          {allProjects && allProjects.length > perPage &&
            <PaginatorFooter
              onChange={(newPage) => actions.portfolioSetCurrentPage(newPage)}
              currentPage={currentPage}
              total={allProjects.length}
              pageSize={perPage}
            />
          }
        </Box>
      </WithLoading>
    );
  }
}

PortfolioContainer.propTypes = {
  projectTags: PropTypes.array.isRequired,
  allProjects: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  loadingError: PropTypes.object,
  projects: PropTypes.array,
  actions: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  searchTerm: PropTypes.string,
  fields: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  projects: getVisibleProjectsFilteredBySearchTerm(state.portfolio),
  currentPage: state.portfolio.currentPage,
  perPage: state.portfolio.perPage,
  searchTerm: state.portfolio.searchTerm,
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
      description
      user {
        name
      }
      slug
      caption
      featureImage
    }
    projectTags {
      id
      title
    }
  }
`;

const ContainerWithData = graphql(getProjectsQuery, {
  props: ({ data: { projects, projectTags, loading, error } }) => ({
    allProjects: projects,
    isLoading: loading,
    loadingError: error,
    projectTags,
  }),
})(Container);

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);

export default reduxForm({
  name: 'ProjectTags',
  fields: formFields
})(ConnectedContainer);
