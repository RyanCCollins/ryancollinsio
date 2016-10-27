import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { WithLoading, WithToast } from 'components';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Card from 'grommet-udacity/components/Card';
import Columns from 'grommet-udacity/components/Columns';
import Anchor from 'grommet-udacity/components/Anchor';
import Heading from 'grommet-udacity/components/Heading';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Search from 'grommet-udacity/components/Search';
import { ResponsiveImage, Divider } from 'components';

const SinglePost = ({
  post,
}) => (
  <Box pad="large">
    <Card
      heading={post.title}
      label={post.author.name}
      thumbnail={
        <ResponsiveImage src={post.image} matchHeight />
      }
      description={`${post.body.slice(0, 300)}...`}
      link={
        <Anchor
          primary
          label="Read More"
          href={`/blog/posts/${post.slug}`}
        />
      }
    />
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
    } = this.props;
    const filterableTerm = searchTerm !== '' && searchTerm.toLowerCase();
    const filteredPosts = posts && posts.filter(post =>
      post.title.toLowerCase().includes(filterableTerm) ||
        post.content.toLowerCase().includes(filterableTerm) ||
          post.user.name.toLowerCase().includes(filterableTerm)
    );
    return (
      <Section className={styles.landing} colorIndex="light-2">
        <WithLoading isLoading={isLoading}>
          <WithToast
            error={postError}
            onClose={() => actions.clearBlogToast('error')}
          >
            <Box pad="large" align="center" justify="center">
              <Heading align="center">
                Blog
              </Heading>
              <Divider />
              <Search
                inline
                value={searchTerm}
                onDOMChange={({ target }) => actions.blogSetSearchTerm(target.value)}
              />
              <Columns
                masonry
                maxCount={2}
                align="center"
                justify="center"
              >
                {filteredPosts && filteredPosts.length > 0 && filteredPosts.map((post, i) =>
                  <SinglePost
                    key={i} post={post}
                  />
                )}
              </Columns>
            </Box>
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
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  searchTerm: state.blog.searchTerm,
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
