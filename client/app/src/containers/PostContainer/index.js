import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import postData from 'fragments/postData';
import { WithLoading, Post, CommentFeed, WithToast } from 'components';
let RichTextEditor;
if (typeof window !== 'undefined') {
  RichTextEditor = require('react-rte').default;
}

class PostContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.checkAuthToken = this.checkAuthToken.bind(this);
    if (RichTextEditor) {
      props.actions.postEditComment(RichTextEditor.createEmptyValue());
    }
  }
  handleUpvote(id) {
    const {
      upvoteComment,
      refetch,
      user,
    } = this.props;
    this.checkAuthToken();
    const data = {
      variables: {
        authToken: user.authToken,
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
      user,
      commentInput,
    } = this.props;
    this.checkAuthToken();
    const data = {
      variables: {
        authToken: user.authToken,
        comment: {
          body: commentInput.toString('markdown'),
        },
        id: this.props.post.id,
      },
    };
    mutate(data).then(() => {
      refetch();
      this.props.actions.postMessage('Comment successfully submitted!');
    }).catch((err) => {
      this.props.actions.postError(err);
    });
  }
  checkAuthToken() {
    const {
      user,
    } = this.props;
    if (!user.authToken) {
      this.context.router.push('/login');
    }
  }
  render() {
    const {
      isLoading,
      post,
      user,
      actions,
      loadingError,
      postError,
      message,
      commentInput,
    } = this.props;
    return (
      <Box className={styles.postPage}>
        <WithToast
          error={loadingError || postError}
          message={message}
          onClose={() => actions.postClearToast()}
        >
          <WithLoading isLoading={isLoading || !post} fullscreen>
            {post &&
              <Post
                post={post}
              />
            }
            <CommentFeed
              value={commentInput}
              onChange={(value) => actions.postEditComment(value)}
              onSubmit={this.handleSubmit}
              comments={post && post.comments}
              onUpvote={this.handleUpvote}
              user={user}
            />
          </WithLoading>
        </WithToast>
      </Box>
    );
  }
}

PostContainer.propTypes = {
  upvoteComment: PropTypes.func.isRequired,
  post: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  postError: PropTypes.object,
  loadingError: PropTypes.object,
  mutate: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  message: PropTypes.string,
  commentInput: PropTypes.object,
  actions: PropTypes.object.isRequired,
};

PostContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.app.user,
  postError: state.post.error,
  message: state.post.message,
  commentInput: state.post.commentInput,
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
      ...postData
    }
  }
`;

const ContainerWithData = graphql(loadPostQuery, {
  options: (ownProps) => ({
    fragments: [postData],
    skip: !ownProps.params.slug,
    variables: {
      slug: ownProps.params.slug,
    },
  }),
  props: ({ data: { post, loading, error, refetch } }) => ({
    post,
    isLoading: loading,
    loadingError: error,
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
  mutation upvoteComment($authToken: String!, $id: ID!) {
    VotePostComment(input: { auth_token: $authToken, post_comment_id: $id }) {
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
