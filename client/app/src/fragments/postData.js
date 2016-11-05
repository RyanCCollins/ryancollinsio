import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';

export const postData = createFragment(
  gql`
    fragment postData on Post {
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
  `
);

export default postData;
