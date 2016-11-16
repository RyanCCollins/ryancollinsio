import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';

export const tutorialData = createFragment(
  gql`
    fragment tutorialData on Tutorial {
      link
      title
      description
      status
      slug
      user {
        name
        avatar
        bio
      }
      body
      image
    }
  `
);

export default tutorialData;
