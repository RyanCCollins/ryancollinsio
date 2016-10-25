import React, { PropTypes } from 'react';
import Form from 'grommet-udacity/components/Form';
import FormField from 'grommet-udacity/components/FormField';
import FormFields from 'grommet-udacity/components/FormFields';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import { MarkdownInput } from 'components';

const CreateProjectForm = ({
  fields,
  invalid,
  onSubmit,
}) => (
  <Form>
    <FormFields>
      <fieldset>
        <legend>
          Project Info
        </legend>
        <FormField
          label="Title"
          htmlFor="title-input"
        >
          <input
            {...fields.titleInput}
            required
            autoFocus
            type="text"
            id="title-input"
            placeholder="Amazing Project"
            name="name"
            autoComplete="off"
            aria-invalid={fields.titleInput.error}
            aria-required
          />
        </FormField>
        <FormField
          label="Caption"
          htmlFor="caption-input"
        >
          <input
            {...fields.captionInput}
            type="text"
            id="caption-input"
            placeholder="A blazing fast, server-rendered app"
            name="caption"
            aria-invalid={fields.captionInput.error}
          />
        </FormField>
        <FormField
          label="Description"
          help="Describe the project.  Markdown supported."
          htmlFor="description-input"
        >
          <MarkdownInput
            required
            field={fields.descriptionInput}
            id="description-input"
            aria-invalid={fields.titleInput.error}
            aria-required
          />
        </FormField>
        <FormField
          label="Repository Url"
          htmlFor="repo-url-input"
        >
          <input
            {...fields.repoUrlInput}
            type="text"
            id="repo-url-input"
            placeholder="https://github.com/ryanccollins/ryancollinsio"
            name="url"
            autoComplete="off"
            aria-invalid={fields.repoUrlInput.error}
            aria-required
          />
        </FormField>
        <FormField
          label="Project Url"
          htmlFor="project-url-input"
        >
          <input
            {...fields.projectUrlInput}
            type="text"
            id="project-url-input"
            placeholder="Amazing Project"
            name="project-url"
            autoComplete="off"
            aria-invalid={fields.projectUrlInput.error}
            aria-required
          />
        </FormField>
      </fieldset>
      <fieldset>
        <legend>
          Milestones
        </legend>
        <FormField
          label="Milestones"
          help="Describe the main milestones.  Markdown supported."
          htmlFor="milestones-input"
        >
          <MarkdownInput
            field={fields.milestonesInput}
            id="milestones-input"
            aria-invalid={fields.milestonesInput.error}
          />
        </FormField>
      </fieldset>
      <fieldset>
        <legend>
          Technical Review
        </legend>
        <FormField
          label="Technical Review"
          help="Include a snippet from the technical review, if available"
          htmlFor="technical-review-input"
        >
          <MarkdownInput
            field={fields.technicalReviewInput}
            id="technical-review-input"
            aria-invalid={fields.technicalReviewInput.error}
          />
        </FormField>
        <FormField
          label="Reviewer Name"
          help="What is the name of the reviewer?"
          htmlFor="reviewer-name-input"
        >
          <input
            {...fields.reviewerNameInput}
            type="text"
            id="project-url-input"
            placeholder="Expert Technical Reviewer"
            name="reviewer-name-url"
            autoComplete="off"
            aria-invalid={fields.reviewerNameInput.error}
            aria-required
          />
        </FormField>
      </fieldset>
      <fieldset>
        <legend>
          Technical Information
        </legend>
        <FormField
          label="Technical Information"
          help="The technical information for the project.  Markdown supported."
          htmlFor="technical-information-input"
        >
          <MarkdownInput
            field={fields.technicalInformationInput}
            id="technical-information-input"
            aria-invalid={fields.technicalInformationInput.error}
          />
        </FormField>
      </fieldset>
      <fieldset>
        <legend>
          Design Patterns
        </legend>
        <FormField
          label="Design Patterns"
          help="The design patterns used in the project.  Markdown supported."
          htmlFor="design-patterns-input"
        >
          <MarkdownInput
            field={fields.designPatternsInput}
            id="design-patterns-input"
            aria-invalid={fields.designPatternsInput.error}
          />
        </FormField>
      </fieldset>
    </FormFields>
    <Footer justify="center" pad={{ vertical: 'small' }}>
      <Button label="Submit" onClick={invalid ? null : onSubmit} />
    </Footer>
  </Form>
);

CreateProjectForm.propTypes = {
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CreateProjectForm;
