import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SearchActionCreators from './actions';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import SearchIcon from 'grommet-udacity/components/icons/base/Search';
import LinkPreviousIcon from 'grommet-udacity/components/icons/base/LinkPrevious';
import Anchor from 'grommet-udacity/components/Anchor';
import Markdown from 'grommet-udacity/components/Markdown';
import Heading from 'grommet-udacity/components/Heading';
import Menu from 'grommet-udacity/components/Menu';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { getFilteredSearchData } from './selectors';
import { WithLoading, ResponsiveImage } from 'components';
import {
  StyledTitle,
  SectionLast,
  NavigationItem,
} from './styles';
import {
  tutorialData,
  postData,
  projectData,
} from 'fragments';

const Maybe = ({ predicate, children }) => predicate ?
  <div>
    {children}
  </div>
 :
  <noscript />;

const totalResults = (data) => {
  let total = 0;
  if (data) {
    if (data.posts) {
      total += data.posts.length;
    }
    if (data.projects) {
      total += data.projects.length;
    }
    if (data.tutorials) {
      total += data.tutorials.length;
    }
  }
  return total;
};

class SearchContainer extends Component {
  componentWillReceiveProps({ projects, posts, tutorials }) {
    if (projects && projects !== this.props.projects) {
      if (this.props.requiresFetch) {
        this.props.actions.setSearchData({ projects, posts, tutorials });
      }
    }
  }
  render() {
    const {
      searchTerm,
      filteredSearchData,
      isLoading,
      activeIndex,
      actions,
    } = this.props;
    return (
      <SectionLast>
        <WithLoading
          isLoading={isLoading}
        >
          <Box className={styles.search} colorIndex="light-2">
            <Maybe predicate={searchTerm !== null}>
              <div className={styles.container}>
                <Section>
                  <Header justify="between" className={styles.header}>
                    <Title>
                      {`Found ${totalResults(filteredSearchData)} results for the term "${searchTerm}"`}
                    </Title>
                  </Header>
                </Section>
                <Section direction="row" className={styles.sectionMain}>
                  <Box basis="1/4" className={styles.leftColumn}>
                    <Menu responsive={false} direction="column">
                      <NavigationItem
                        active={activeIndex === 0}
                        onClick={() => actions.setActiveIndex(0)}
                      >
                        Posts
                        <span className={styles.numberIndicator}>
                          {filteredSearchData.posts && filteredSearchData.posts.length || 0}
                        </span>
                      </NavigationItem>
                      <NavigationItem
                        active={activeIndex === 1}
                        onClick={() => actions.setActiveIndex(1)}
                      >
                        Projects
                        <span className={styles.numberIndicator}>
                          {filteredSearchData.projects && filteredSearchData.projects.length || 0}
                        </span>
                      </NavigationItem>
                      <NavigationItem
                        active={activeIndex === 2}
                        onClick={() => actions.setActiveIndex(2)}
                      >
                        Tutorials
                        <span className={styles.numberIndicator}>
                          {filteredSearchData.tutorials && filteredSearchData.tutorials.length || 0}
                        </span>
                      </NavigationItem>
                    </Menu>
                  </Box>
                  <Box basis="3/4" flex="grow" className={styles.rightColumn}>
                    <Maybe predicate={activeIndex === 0}>
                      {filteredSearchData.posts &&
                        filteredSearchData.posts.length > 0 &&
                          filteredSearchData.posts.map((item, i) =>
                            <div className={styles.card} key={i}>
                              <div className={styles.textContent}>
                                <Heading tag="h3" strong>
                                  {item.title}
                                </Heading>
                                <Markdown content={item.body.slice(0, 100)} />
                                <Anchor primary href={`/blog/posts/${item.slug}`}>
                                  Read More
                                </Anchor>
                              </div>
                              <div className={styles.itemImage}>
                                <ResponsiveImage matchHeight={false} src={item.image} />
                              </div>
                            </div>
                      )}
                    </Maybe>
                    <Maybe predicate={activeIndex === 1}>
                      {filteredSearchData.projects &&
                        filteredSearchData.projects.length > 0 &&
                        filteredSearchData.projects.map((item, i) =>
                            <div className={styles.card} key={i}>
                              <div className={styles.textContent}>
                                <Heading tag="h3" strong>
                                  {item.title}
                                </Heading>
                                <Markdown content={item.description.slice(0, 100)} />
                                <Anchor primary href={`/portfolio/projects/${item.slug}`}>
                                  View Project
                                </Anchor>
                              </div>
                              <div className={styles.itemImage}>
                                <ResponsiveImage matchHeight={false} src={item.featureImage} />
                              </div>
                            </div>
                      )}
                    </Maybe>
                    <Maybe predicate={activeIndex === 2}>
                      {filteredSearchData.tutorials &&
                        filteredSearchData.tutorials.length > 0 &&
                          filteredSearchData.tutorials.map((item, i) =>
                            <div className={styles.card} key={i}>
                              <div className={styles.textContent}>
                                <Heading tag="h3" strong>
                                  {item.title}
                                </Heading>
                                <Markdown content={item.description.slice(0, 100)} />
                                <Anchor primary href={`/tutorials/tutorial/${item.slug}`}>
                                  View Tutorial
                                </Anchor>
                              </div>
                              <div className={styles.itemImage}>
                                <ResponsiveImage matchHeight={false} src={item.image} />
                              </div>
                            </div>
                      )}
                    </Maybe>
                  </Box>
                </Section>
              </div>
            </Maybe>
            <Maybe predicate={(!searchTerm || searchTerm === '')}>
              <Section align="center" justify="center" className={styles.centerBox}>
                <SearchIcon size="xlarge" colorIndex="brand" />
                <Anchor
                  icon={<LinkPreviousIcon size="small" />}
                  href="/"
                  label="Back to Home"
                />
              </Section>
            </Maybe>
          </Box>
        </WithLoading>
      </SectionLast>
    );
  }
}

SearchContainer.propTypes = {
  searchTerm: PropTypes.string,
  searchData: PropTypes.object,
  filteredSearchData: PropTypes.object,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  requiresFetch: PropTypes.bool.isRequired,
  projects: PropTypes.array,
  posts: PropTypes.array,
  tutorials: PropTypes.array,
  activeIndex: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  searchTerm: state.app.searchTerm,
  searchData: state.search.searchData,
  requiresFetch: state.search.requiresFetch,
  activeIndex: state.search.activeIndex,
  filteredSearchData: getFilteredSearchData(state.search, state.app),
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    SearchActionCreators,
    dispatch
  ),
});

const Container = cssModules(SearchContainer, styles);

const searchQuery = gql`
  query search($status: String!) {
    projects(status: $status) {
      ...projectData
    }
    posts(status: $status) {
      ...postData
    }
    tutorials(status: $status) {
      ...tutorialData
    }
  }
`;

const ContainerWithData = graphql(searchQuery, {
  options: () => ({
    fragments: [tutorialData, projectData, postData],
    variables: {
      status: 'published',
    },
  }),
  props: ({ data: { loading, error, projects, posts, tutorials } }) => ({
    projects,
    posts,
    tutorials,
    isLoading: loading,
    errorLoading: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
