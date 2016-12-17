import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';

const postFragment = createFragment(
  gql`
    fragment postFragment on Post {
      id
      title
      status
      body
      slug
      created_at
      image: feature_image
      tags {
        id
        title
      }
      user {
        name
        avatar
        bio
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
  `,
);

export default postFragment;
