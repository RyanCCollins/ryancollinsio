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
  ResponsiveImage,
  SearchForm,
} from 'components';
import Section from 'grommet-udacity/components/Section';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import Anchor from 'grommet-udacity/components/Anchor';
import Headline from 'grommet-udacity/components/Headline';
import { reduxForm } from 'redux-form';
import { getFilteredProjects } from './selectors';
import FlipMove from 'react-flip-move';

export const formFields = [
  'tagSelectionInput',
];

class PortfolioContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleTags = this.handleTags.bind(this);
    this.renderProjects = this.renderProjects.bind(this);
    this.handleApplyingFilter = this.handleApplyingFilter.bind(this);
    this.handleResettingFilter = this.handleResettingFilter.bind(this);
  }
  componentWillReceiveProps({ allProjects }) {
    if (allProjects !== this.props.allProjects) {
      this.props.actions.portfolioSetProjects(allProjects);
    }
  }
  handleTags(value) {
    const {
      tags,
    } = this.props;
    const newTags = value.map((tag) => tags[tag] || tag);
    this.props.actions.portfolioSetTags(newTags);
  }
  handleApplyingFilter() {
    this.props.actions.portfolioApplyFilters();
  }
  handleResettingFilter() {
    this.props.actions.portfolioClearFilters();
  }
  renderProjects(projects) {
    return projects.map((project, i) =>
      <Box className={styles.wrapper} key={i}>
        <Box className={styles.card} size="medium">
          <Anchor href={`/portfolio/projects/${project.slug}`}>
            <ResponsiveImage
              matchHeight={false}
              src={project.featureImage}
              className={styles.image}
            />
          </Anchor>
        </Box>
      </Box>
    );
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
      tags,
      isFiltering,
      isShowingModal,
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
          {projectTags && projectTags.length > 0 &&
            <SearchForm
              inputTags={tags}
              onChangeTags={this.handleTags}
              tags={projectTags}
              searchTerm={searchTerm}
              onChange={({ target }) => actions.portfolioSetSearchTerm(target.value)}
              onToggleModal={actions.portfolioToggleModal}
              isShowingModal={isShowingModal}
              onApplyFilters={this.handleApplyingFilter}
              onClearFilters={this.handleResettingFilter}
              isFiltering={isFiltering}
            />
          }
          <Headline className="heading" align="center">
            Portfolio
          </Headline>
          <Divider />
          <Section primary className={styles.innerBox}>
            {projects && projects.length > 0 &&
              <FlipMove easing="cubic-bezier(0, 0.7, 0.8, 0.1)">
                {this.renderProjects(projects)}
              </FlipMove>
            }
          </Section>
          {!isFiltering && allProjects && allProjects.length > perPage &&
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
  isFiltering: PropTypes.bool.isRequired,
  projectTags: PropTypes.array,
  allProjects: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  loadingError: PropTypes.object,
  projects: PropTypes.array,
  actions: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  searchTerm: PropTypes.string,
  fields: PropTypes.object.isRequired,
  tags: PropTypes.array,
  isShowingModal: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  projects: getFilteredProjects(state.portfolio),
  currentPage: state.portfolio.currentPage,
  perPage: state.portfolio.perPage,
  searchTerm: state.portfolio.searchTerm,
  tags: state.portfolio.tags,
  isFiltering: state.portfolio.isFiltering,
  isShowingModal: state.portfolio.modal.isShowing,
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
    projects(status: "published") {
      title
      status
      category
      description
      user {
        name
      }
      slug
      caption
      featureImage
      tags {
        title
      }
    }
    projectTags {
      id
      title
    }
    projectCategories {
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
  form: 'ProjectTags',
  fields: formFields,
})(ConnectedContainer);
