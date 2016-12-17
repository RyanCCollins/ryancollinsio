import gql from 'graphql-tag';
import { createFragment } from 'apollo-client';

const referenceFragment = createFragment(
  gql`
    fragment referenceFragment on Reference {
      name
      title
      body
      avatar
      company
      priority: sort_priority
    }
  `,
);

export default referenceFragment;
