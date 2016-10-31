import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PortfolioActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { WithLoading, Divider, PaginatorFooter } from 'components';
import Section from 'grommet-udacity/components/Section';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Columns from 'grommet-udacity/components/Columns';
import Box from 'grommet-udacity/components/Box';
import Anchor from 'grommet-udacity/components/Anchor';
import Headline from 'grommet-udacity/components/Headline';
import Search from 'grommet-udacity/components/Search';
import Button from 'grommet-udacity/components/Button';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import { getVisibleProjectsFilteredBySearchTerm } from 'selectors';

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
          <Divider />
          <Section direction="row">
            <Search
              inline
              value={searchTerm || ''}
              onDOMChange={({ target }) => actions.portfolioSetSearchTerm(target.value)}
            />
            {searchTerm !== '' &&
              <Button
                onClick={actions.blogClearSearchTerm}
                icon={<CloseIcon />}
              />
            }
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
                      <img src={project.featureImage} className={styles.image} />
                    </Anchor>
                  </Box>
                )}
              </Columns>
            }
          </Section>
        </Box>
        {allProjects && allProjects.length > 6 &&
          <PaginatorFooter
            onChange={(newPage) => actions.blogSetCurrentPage(newPage)}
            current={currentPage}
            total={allProjects.length}
            pageSize={perPage}
          />
        }
      </WithLoading>
    );
  }
}

PortfolioContainer.propTypes = {
  allProjects: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  loadingError: PropTypes.object,
  projects: PropTypes.array,
  actions: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  searchTerm: PropTypes.string,
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
  }
`;

const ContainerWithData = graphql(getProjectsQuery, {
  props: ({ data: { projects, loading, error } }) => ({
    allProjects: projects,
    isLoading: loading,
    loadingError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
