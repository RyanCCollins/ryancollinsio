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
import Heading from 'grommet-udacity/components/Heading';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PostPreview, Divider, PaginatorFooter } from 'components';
import { getVisiblePostsFiltered } from './selectors';

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
      currentPage,
      perPage,
    } = this.props;
    return (
      <Box className={styles.blog} colorIndex="light-2">
        <WithLoading isLoading={isLoading}>
          <WithToast
            error={postError}
            onClose={() => actions.clearBlogToast('error')}
          >
            <Box pad="large" align="center">
              <Headline className="heading" align="center">
                Blog
              </Headline>
              <Divider />
              {posts && posts.length > 0 ?
                <Section primary className={styles.innerBox}>
                  <Columns
                    className={styles.columns}
                    masonry
                    maxCount={2}
                    align="center"
                    justify="center"
                    size="large"
                  >
                    {posts.map((post, i) =>
                      <PostPreview
                        isFiltering={false}
                        key={i}
                        post={post}
                      />
                    )}
                  </Columns>
                </Section>
              :
                <Section align="center" justify="center" pad="large">
                  <Heading align="center">
                    No posts found
                  </Heading>
                </Section>
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
      </Box>
    );
  }
}

BlogContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  postTags: PropTypes.array,
  postError: PropTypes.object,
  posts: PropTypes.array,
  allPosts: PropTypes.array,
  actions: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  currentPage: state.blog.currentPage,
  perPage: state.blog.perPage,
  posts: getVisiblePostsFiltered(state.blog),
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
    posts(status: "published") {
      id
      title
      status
      body
      slug
      created_at
      image: feature_image
      category
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
    postTags {
      title
    }
    postCategories
  }
`;

const ContainerWithData = graphql(loadPostsQuery, {
  props: ({ data: { posts, loading, error, postTags } }) => ({
    allPosts: posts,
    isLoading: loading,
    postError: error,
    postTags,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
