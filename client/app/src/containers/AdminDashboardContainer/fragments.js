import gql from 'graphql-tag';
import { createFragment } from 'apollo-client';

export const postFragmentAdminDash = createFragment(
  gql`
    fragment postFragmentAdminDash on Post {
      id
      title
      status
      created_at
      image: feature_image
      user {
        name
      }
    }
  `,
);

export const projectFragmentAdminDash = createFragment(
  gql`
    fragment projectFragmentAdminDash on Project {
      id
      title
      status
      featureImage
      category
      created_at
      user {
        name
      }
    }
  `,
);

export const userFragmentAdminDash = createFragment(
  gql`
    fragment userFragmentAdminDash on AuthUser {
      id
      bio
      email
      name
      avatar
      role
    }
  `,
);
