import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Article from 'grommet-udacity/components/Article';
import Button from 'grommet-udacity/components/Button';
import Box from 'grommet-udacity/components/Box';
import Footer from 'grommet-udacity/components/Footer';
import Columns from 'grommet-udacity/components/Columns';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import { WithLoading, Post, Divider, Comment, PostMeta } from 'components';
import RichTextEditor from 'react-rte';

class PostContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    if (RichTextEditor) {
      this.state = {
        value: RichTextEditor.createEmptyValue(),
      };
    }
  }
  handleUpvote(id) {
    const {
      upvoteComment,
      refetch,
    } = this.props;
    const data = {
      variables: {
        auth_token: '_qABAmYzDj2MVq2jePih',
        id,
      },
    };
    upvoteComment(data).then(() => {
      refetch();
    });
  }
  handleSubmit() {
    const {
      mutate,
      refetch,
    } = this.props;
    const user = {
      id: 1,
      authToken: '_qABAmYzDj2MVq2jePih',
    };
    const data = {
      variables: {
        authToken: user.authToken,
        comment: {
          body: this.state.value.toString('markdown'),
        },
        id: this.props.post.id,
      },
    };
    mutate(data).then(() => {
      refetch();
    }).catch((err) => {
      console.log(`It failed ${err}`);
    });
  }
  render() {
    const {
      isLoading,
      post,
    } = this.props;
    return (
      <Section className={styles.postPage}>
        <WithLoading isLoading={isLoading || !post} fullscreen>
          {post &&
            <div>
              <Post
                post={post}
              />
              <PostMeta post={post} />
            </div>
          }
        </WithLoading>
        <Section>
          <Heading align="center">
            Comments
          </Heading>
          <Divider />
          <Box className="container">
            <Article className="panel">
              <RichTextEditor
                value={this.state.value}
                onChange={(value) => this.setState({ value }) }
              />
              <Footer
                align="center"
                justify="center"
                pad="medium"
              >
                <Button label="Submit Comment" onClick={this.handleSubmit} />
              </Footer>
            </Article>
            <Article className="panel">
              <Columns size="large" justify="center">
                <List>
                  {post &&
                    post.comments
                      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                      .map((comment, i) =>
                    <ListItem key={i}>
                      <Comment
                        onUpvote={this.handleUpvote}
                        comment={comment}
                      />
                    </ListItem>
                  )}
                </List>
              </Columns>
            </Article>
          </Box>
        </Section>
      </Section>
    );
  }
}

PostContainer.propTypes = {
  upvoteComment: PropTypes.func.isRequired,
  post: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  postError: PropTypes.object,
  mutate: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    PostActionCreators,
    dispatch
  ),
});

const Container = cssModules(PostContainer, styles);

const loadPostQuery = gql`
  query loadPost($slug: String) {
    post(slug: $slug) {
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
      comments {
        id
        total_votes
        body
        created_at
        user {
          name
          bio
          avatar
        }
      }
    }
  }
`;

const ContainerWithData = graphql(loadPostQuery, {
  options: (ownProps) => ({
    skip: !ownProps.params.slug,
    variables: {
      slug: ownProps.params.slug,
    },
  }),
  props: ({ data: { post, loading, error, refetch } }) => ({
    post,
    isLoading: loading,
    postError: error,
    refetch,
  }),
})(Container);

const createCommentMutation = gql`
  mutation createPostComment($authToken: String!,
    $comment: CommentInput, $id: ID!) {
      CreatePostComment(input: {
        auth_token: $authToken,
        comment: $comment,
        post_id: $id
      }) {
        post_comment {
          body
        }
      }
    }
`;

const ContainerWithMutation = graphql(createCommentMutation)(ContainerWithData);

const upvoteCommentMutation = gql`
  mutation upvoteComment($auth_token: String!, $id: ID!) {
    VotePostComment(input: { auth_token: $auth_token, post_comment_id: $id }) {
      total_votes
    }
  }
`;

const ContainerWithMoreMutations = graphql(upvoteCommentMutation, {
  props: ({ mutate }) => ({
    upvoteComment: mutate,
  }),
})(ContainerWithMutation);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMoreMutations);
