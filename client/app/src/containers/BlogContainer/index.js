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
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const SinglePost = ({
  post,
}) => (
  <Card
    label={post.title}
    thumbnail={
      <img className={styles.matchHeight} src={post.image} />
    }
    description={`${post.body.slice(0, 120)}...`}
    link={
      <Anchor
        primary
        label="Read More"
        href={`/blog/posts/${post.slug}`}
      />
    }
  />
);

class BlogContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      isLoading,
      postError,
      posts,
      actions,
    } = this.props;
    return (
      <Section className={styles.landing}>
        <WithLoading isLoading={isLoading}>
          <WithToast
            error={postError}
            onClose={() => actions.clearBlogToast('error')}
          >
            <Box pad="large" align="center" justify="center">
              <Columns
                masonry
                maxCount={4}
                align="center"
                justify="center"
              >
                {posts && posts.length > 0 && posts.map((post, i) =>
                  <SinglePost key={i} post={post} />
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
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  //
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
