import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { WithLoading, WithToast } from 'components';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Columns from 'grommet-udacity/components/Columns';
import Headline from 'grommet-udacity/components/Headline';
import Button from 'grommet-udacity/components/Button';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Search from 'grommet-udacity/components/Search';
import { PostPreview, Divider, PaginatorFooter, SearchMeta } from 'components';
import { getVisiblePostsFilteredBySearchTerm } from './selectors';

class BlogContainer extends Component {
  componentWillReceiveProps({ allPosts }) {
    if (allPosts !== this.props.allPosts) {
      this.props.actions.setBlogPosts(allPosts);
    }
  }
  render() {
    const {
      isLoading,
      postError,
      actions,
      allPosts,
      posts,
      searchTerm,
      currentPage,
      perPage,
    } = this.props;
    const filterableTerm = searchTerm && searchTerm !== '' ?
      searchTerm.toLowerCase() : null;
    return (
      <Section className={styles.blog} colorIndex="light-2">
        <WithLoading isLoading={isLoading}>
          <WithToast
            error={postError}
            onClose={() => actions.clearBlogToast('error')}
          >
            <Box pad="large" align="center" justify="center">
              <Headline align="center">
                Blog
              </Headline>
              <SearchMeta searchTerm={searchTerm} array={posts} />
              <Divider />
              <Box direction="row">
                <Search
                  inline
                  value={searchTerm || ''}
                  onDOMChange={({ target }) => actions.blogSetSearchTerm(target.value)}
                />
                {searchTerm !== '' &&
                  <Button
                    onClick={actions.blogClearSearchTerm}
                    icon={<CloseIcon />}
                  />
                }
              </Box>
              {posts && posts.length > 0 &&
                <Columns
                  masonry
                  maxCount={2}
                  align="center"
                  justify="center"
                >
                  {posts.map((post, i) =>
                    <PostPreview
                      searchTerm={filterableTerm}
                      key={i}
                      post={post}
                    />
                  )}
                </Columns>
              }
            </Box>
            {allPosts && allPosts.length > perPage &&
              <PaginatorFooter
                onChange={(newPage) => actions.blogSetCurrentPage(newPage)}
                currentPage={currentPage}
                total={allPosts.length}
                pageSize={perPage}
              />
            }
          </WithToast>
        </WithLoading>
      </Section>
    );
  }
}

BlogContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  postError: PropTypes.object,
  posts: PropTypes.array,
  allPosts: PropTypes.array,
  actions: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  searchTerm: state.blog.searchTerm,
  currentPage: state.blog.currentPage,
  perPage: state.blog.perPage,
  posts: getVisiblePostsFilteredBySearchTerm(state.blog),
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    BlogActionCreators,
    dispatch
  ),
});

const Container = cssModules(BlogContainer, styles);

const loadPostsQuery = gql`
  query loadPosts {
    posts {
      id
      title
      body
      slug
      created_at
      image: feature_image
      tags {
        id
        title
      }
      author: user {
        name
        avatar
        bio
      }
      comments {
        body
        user {
          name
          bio
          avatar
        }
      }
    }
  }
`;

const ContainerWithData = graphql(loadPostsQuery, {
  props: ({ data: { posts, loading, error } }) => ({
    allPosts: posts,
    isLoading: loading,
    postError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
