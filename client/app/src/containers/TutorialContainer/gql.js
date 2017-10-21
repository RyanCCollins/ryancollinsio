import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';

export const tutorialQuery = gql`
  query tutorial($slug: String!) {
    tutorial(slug: $slug) {
      id
      link
      title
      description
      status
      slug
      comments {
        id
        body
        total_votes
        user {
          name
          avatar
          bio
        }
      }
      user {
        name
        avatar
        bio
      }
      body
      image
    }
  }
`;

export const createCommentMutation = gql`
  mutation createTutorialComment($authToken: String!,
    $comment: CommentInput, $id: ID!
  ) {
    CreateTutorialComment(input: {
      auth_token: $authToken,
      comment: $comment,
      tutorial_id: $id
    }) {
      tutorial_comment {
        id
      }
    }
  }
`;

export const upvoteCommentMutation = gql`
  mutation upvoteComment($authToken: String!, $id: ID!) {
    VoteTutorialComment(input: { auth_token: $authToken, tutorial_comment_id: $id }) {
      total_votes
    }
  }
`;

export default compose(
  graphql(tutorialQuery, {
    options: ownProps => ({
      skip: !ownProps.params.slug,
      variables: {
        slug: ownProps.params.slug,
      },
    }),
    props: ({ data: { loading, tutorial, refetch } }) => ({
      tutorial,
      isLoading: loading,
      refetch,
    }),
  }),
  graphql(createCommentMutation),
  graphql(upvoteCommentMutation, {
    props: ({ mutate }) => ({
      upvoteComment: mutate,
    }),
  }),
);