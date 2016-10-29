import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';

const postDataFragment = createFragment(
  gql`
    fragment postDataFragment on Post {
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
  `
);

export default postDataFragment;
