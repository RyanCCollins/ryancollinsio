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
  render() {
    const {
      isLoading,
      postError,
      posts,
      actions,
      searchTerm,
      currentPage,
    } = this.props;
    const filterableTerm = searchTerm && searchTerm !== '' && searchTerm.toLowerCase();
    const filteredPosts = searchTerm !== null ? (
      posts && posts.filter(post =>
      post.title.toLowerCase().includes(filterableTerm) ||
        post.body.toLowerCase().includes(filterableTerm) ||
          post.author.name.toLowerCase().includes(filterableTerm)
        )
      )
    :
      (
        posts
      );
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
              <SearchData searchTerm={searchTerm} posts={filteredPosts} />
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
              <Columns
                masonry
                maxCount={2}
                align="center"
                justify="center"
              >
                {filteredPosts && filteredPosts.length > 0 && filteredPosts.map((post, i) =>
                  <PostPreview
                    searchTerm={filterableTerm}
                    key={i}
                    post={post}
                  />
                )}
              </Columns>
            </Box>
            {filteredPosts && filteredPosts.length > 6 &&
              <Footer align="center" justify="center" pad="large">
                <Pagination defaultCurrent={1} pageSize={6} total={filteredPosts.length} />
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
  actions: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  searchTerm: state.blog.searchTerm,
  currentPage: state.blog.currentPage,
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
