import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';

export const projectData = createFragment(
  gql`
    fragment projectData on Project {
      id
      title
      slug
      caption
      status
      featureImage
      description
      milestones
      designPatterns
      technicalReview
      technicalInformation
      reviewerName
      category
      created_at
      repoUrl
      projectUrl
      user {
        name
        avatar
        bio
      }
      tags {
        title
      }
      images {
        src
      }
      comments {
        id
        body
        user {
          name
          avatar
          bio
        }
      }
    }
  `
);

export default projectData;
