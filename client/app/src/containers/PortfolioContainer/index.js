import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';
import {
  WithLoading,
  Divider,
  PaginatorFooter,
  ResponsiveImage,
  SearchForm,
  QueryNotFound,
} from 'components';
import Section from 'grommet-udacity/components/Section';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import Anchor from 'grommet/components/Anchor';
import Headline from 'grommet-udacity/components/Headline';
import { reduxForm } from 'redux-form';
import FlipMove from 'react-flip-move';
import { getFilteredProjects } from './selectors';
import * as PortfolioActionCreators from './actions';
import styles from './index.module.scss';

export const formFields = [
  'tagSelectionInput',
];

class PortfolioContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  static renderProjects(projects) {
    return projects.map(project =>
      <Box className={styles.wrapper} key={project.id}>
        <Box className={styles.card}>
          <Anchor path={`/portfolio/projects/${project.slug}`}>
            <ResponsiveImage
              matchHeight={false}
              src={project.featureImage}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <p>{project.title}</p>
            </div>
          </Anchor>
        </Box>
      </Box>,
    );
  }
  constructor() {
    super();
    this.handleTags = this.handleTags.bind(this);
    this.handleApplyingFilter = this.handleApplyingFilter.bind(this);
    this.handleResettingFilter = this.handleResettingFilter.bind(this);
    this.handleSearching = this.handleSearching.bind(this);
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
    const newTags = value.map(tag => tags[tag] || tag);
    this.props.actions.portfolioSetTags(newTags);
  }
  handleApplyingFilter() {
    this.props.actions.portfolioApplyFilters();
  }
  handleResettingFilter() {
    this.props.actions.portfolioClearFilters();
  }
  handleSearching({ target }) {
    const term = target.value;
    if (term === null || term === '') {
      this.props.actions.portfolioClearSearchTerm();
    } else {
      this.props.actions.portfolioSetSearchTerm(term);
    }
  }
  render() {
    const {
      isLoading,
      categories,
      selectedCategories,
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
          pad="large"
        >
          {projectTags && projectTags.length > 0 &&
            <SearchForm
              categories={categories}
              onChangeCategories={({ value }) =>
                actions.portfolioSetSelectedCategories(value)
              }
              selectedCategories={selectedCategories}
              inputTags={tags}
              onChangeTags={this.handleTags}
              tags={projectTags}
              searchTerm={searchTerm}
              onChange={this.handleSearching}
              onToggleModal={actions.portfolioToggleModal}
              isShowingModal={isShowingModal}
              onApplyFilters={this.handleApplyingFilter}
              onClearFilters={this.handleResettingFilter}
              isFiltering={isFiltering}
              filteredTotal={isFiltering && projects ? projects.length : 0}
              unfilteredTotal={allProjects ? allProjects.length : 0}
            />
          }
          <Headline className="heading" align="center">
            Portfolio
          </Headline>
          <Divider />
          <Section primary className={styles.innerBox}>
            {projects && projects.length > 0 ?
              <FlipMove
                delay={350}
                staggerDelayBy={40}
                staggerDurationBy={40}
              >
                {PortfolioContainer.renderProjects(projects)}
              </FlipMove>
            :
              <Section>
                <QueryNotFound
                  itemName="projects"
                  fontSize="medium"
                  onReset={this.handleResettingFilter}
                />
              </Section>
            }
          </Section>
          {!isFiltering && allProjects && allProjects.length > perPage &&
            <PaginatorFooter
              onChange={newPage => actions.portfolioSetCurrentPage(newPage)}
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
  categories: PropTypes.array,
  selectedCategories: PropTypes.array,
  filterString: PropTypes.string,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = state => ({
  projects: getFilteredProjects(state.portfolio),
  currentPage: state.portfolio.currentPage,
  perPage: state.portfolio.perPage,
  searchTerm: state.portfolio.searchTerm,
  tags: state.portfolio.tags,
  isFiltering: state.portfolio.isFiltering,
  isShowingModal: state.portfolio.modal.isShowing,
  selectedCategories: state.portfolio.filter.categories.selected,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    PortfolioActionCreators,
    dispatch,
  ),
});

const Container = cssModules(PortfolioContainer, styles);

const getProjectsQuery = gql`
  query loadProjects {
    projects(status: "published") {
      id
      title
      status
      date: updated_at
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
    projectCategories
  }
`;

const ContainerWithData = graphql(getProjectsQuery, {
  props: ({ data: { projects, projectTags, projectCategories, loading, error } }) => ({
    allProjects: projects,
    isLoading: loading,
    loadingError: error,
    projectTags,
    categories: projectCategories,
  }),
})(Container);

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerWithData);

export default reduxForm({
  form: 'ProjectTags',
  fields: formFields,
})(ConnectedContainer);
