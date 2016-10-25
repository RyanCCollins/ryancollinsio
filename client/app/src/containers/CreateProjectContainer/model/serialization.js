const fieldsToSubmission = (fields, user) => ({
  variables: {
    authToken: user.authToken,
    project: {
      title: fields.titleInput.value,
      description: fields.titleInput.value,
      caption: fields.captionInput.value,
      repositoryUrl: fields.repoUrlInput.value,
      projectUrl: fields.projectUrlInput.value,
      milestones: fields.milestonesInput.value,
      technicalReview: fields.technicalReviewInput.value,
      reviewerName: fields.reviewerNameInput.value,
      technicalInformation: fields.technicalInformationInput.value,
      designPatterns: fields.designPatterns.value,
    },
  },
});

export default fieldsToSubmission;
