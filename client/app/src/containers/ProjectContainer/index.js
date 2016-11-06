import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ProjectActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { WithLoading, WithToast, Project, CommentFeed } from 'components';
import projectData from 'fragments/projectData';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
let RichTextEditor;
if (typeof window !== 'undefined') {
  RichTextEditor = require('react-rte').default;
}


class ProjectContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.checkAuthToken = this.checkAuthToken.bind(this);
    if (RichTextEditor) {
      props.actions.projectEditComment(RichTextEditor.createEmptyValue());
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
    }).catch((err) => {
      this.props.actions.projectError(err);
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
        id: this.props.project.id,
      },
    };
    mutate(data).then(() => {
      refetch();
      this.props.actions.projectMessage('Comment successfully submitted!');
    }).catch((err) => {
      this.props.actions.projectError(err);
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
      project,
      loadingError,
      actions,
      user,
      projectError,
      message,
      commentInput,
    } = this.props;
    return (
      <WithLoading isLoading={isLoading}>
        <WithToast
          error={loadingError || projectError}
          message={message}
          onClose={() => actions.projectClearToast()}
        >
          {project &&
            <Project project={project} />
          }
          <CommentFeed
            value={commentInput}
            onChange={(value) => actions.projectEditComment(value)}
            onSubmit={this.handleSubmit}
            comments={project && project.comments}
            onUpvote={this.handleUpvote}
            user={user}
          />
        </WithToast>
      </WithLoading>
    );
  }
}

ProjectContainer.propTypes = {
  isLoading: PropTypes.bool,
  project: PropTypes.object,
  loadingError: PropTypes.object,
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  projectError: PropTypes.object,
  message: PropTypes.string,
  commentInput: PropTypes.object,
  params: PropTypes.object.isRequired,
  upvoteComment: PropTypes.func,
  mutate: PropTypes.func,
  refetch: PropTypes.func,
};

ProjectContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.app.user,
  projectError: state.project.error,
  message: state.project.message,
  commentInput: state.project.commentInput,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ProjectActionCreators,
    dispatch
  ),
});

const Container = cssModules(ProjectContainer, styles);

const getProjectsQuery = gql`
  query loadProject($slug: String!) {
    project(slug: $slug) {
      ...projectData
    }
  }
`;

const ContainerWithData = graphql(getProjectsQuery, {
  options: (ownProps) => ({
    fragments: [projectData],
    skip: !ownProps.params.slug,
    variables: {
      slug: ownProps.params.slug,
    },
  }),
  props: ({ data: { project, loading, error, refetch } }) => ({
    project,
    isLoading: loading,
    loadingError: error,
    refetch,
  }),
})(Container);

const createCommentMutation = gql`
  mutation createProjectComment($authToken: String!,
    $comment: CommentInput, $id: ID!) {
      CreateProjectComment(input: {
        auth_token: $authToken,
        comment: $comment,
        project_id: $id
      }) {
        project_comment {
          id
        }
      }
    }
`;

const ContainerWithMutation = graphql(createCommentMutation)(ContainerWithData);

const upvoteCommentMutation = gql`
mutation upvoteComment($authToken: String!, $id: ID!) {
  VoteProjectComment(input: { auth_token: $authToken, project_comment_id: $id }) {
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
