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
import Heading from 'grommet-udacity/components/Heading';
import Button from 'grommet-udacity/components/Button';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Search from 'grommet-udacity/components/Search';
import Footer from 'grommet-udacity/components/Footer';
import { Pagination } from 'antd';
import { PostPreview, Divider } from 'components';
import { getVisiblePostsFilteredBySearchTerm } from './selectors';

const SearchData = ({
  searchTerm,
  posts,
}) => (
  <Box>
    {posts && posts.length > 0 && searchTerm &&
      <Heading align="center" tag="h3">
        {`Search Term: ${searchTerm}`}
      </Heading>
    }
    {searchTerm && !posts || !posts.length > 0 &&
      <Heading align="center" tag="h3">
        No Posts Found
      </Heading>
    }
  </Box>
);

class BlogContainer extends Component {
  componentWillReceiveProps({ posts }) {
    if (posts !== this.props.posts) {
      this.props.actions.setBlogPosts(posts);
    }
  }
  render() {
    const {
      isLoading,
      postError,
      actions,
      blogPosts,
      posts,
      searchTerm,
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
              <Heading align="center">
                Blog
              </Heading>
              {blogPosts &&
                <SearchData searchTerm={searchTerm} posts={blogPosts} />
              }
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
              {blogPosts && blogPosts.length > 0 &&
                <Columns
                  masonry
                  maxCount={2}
                  align="center"
                  justify="center"
                >
                  {blogPosts.map((post, i) =>
                    <PostPreview
                      searchTerm={filterableTerm}
                      key={i}
                      post={post}
                    />
                  )}
                </Columns>
              }
            </Box>
            {posts && posts.length > 6 &&
              <Footer align="center" justify="center" pad="large">
                <Pagination
                  defaultCurrent={1}
                  pageSize={6}
                  total={posts.length}
                />
              </Footer>
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
  blogPosts: PropTypes.array,
  actions: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  searchTerm: state.blog.searchTerm,
  currentPage: state.blog.currentPage,
  blogPosts: getVisiblePostsFilteredBySearchTerm(state.blog),
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
    posts,
    isLoading: loading,
    postError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
