const categoryEnum = {
  'Front End': 'frontend',
  'Full Stack': 'fullstack',
  'Back End': 'backend',
  iOS: 'ios',
};

const fieldsToSubmission = (fields, user) => ({
  variables: {
    authToken: user.authToken,
    project: {
      title: fields.titleInput.value,
      description: fields.descriptionInput.value,
      caption: fields.captionInput.value,
      repoUrl: fields.repoUrlInput.value,
      projectUrl: fields.projectUrlInput.value,
      milestones: fields.milestonesInput.value,
      technicalReview: fields.technicalReviewInput.value,
      reviewerName: fields.reviewerNameInput.value,
      technicalInformation: fields.technicalInformationInput.value,
      designPatterns: fields.designPatternsInput.value,
      category: categoryEnum[`${fields.categoryInput.value}`],
      featureImage: fields.featureImageInput.value,
    },
  },
});

export default fieldsToSubmission;
