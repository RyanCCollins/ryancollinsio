import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CreateProjectActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import { Divider, CreateProjectForm, WithToast, WithLoading } from 'components';
import fieldsToSubmission from './model/serialization';
import { projectData } from 'fragments';

export const formFields = [
  'titleInput',
  'descriptionInput',
  'captionInput',
  'repoUrlInput',
  'projectUrlInput',
  'categoryInput',
  'milestonesInput',
  'technicalReviewInput',
  'reviewerNameInput',
  'technicalInformationInput',
  'designPatternsInput',
  'featureImageInput',
];

class CreateProjectContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleLoadingFromProject = this.handleLoadingFromProject.bind(this);
  }
  componentDidMount() {
    if (!this.props.user.authToken) {
      this.context.router.push('/');
    }
  }
  componentWillReceiveProps({ project }) {
    if (project && project !== this.props.project) {
      this.handleLoadingFromProject(project);
    }
  }
  handleLoadingFromProject(project) {
    const {
      fields,
    } = this.props;
    fields.titleInput.onChange(project.title);
    fields.descriptionInput.onChange(project.description);
    fields.captionInput.onChange(project.caption);
    fields.descriptionInput.onChange(project.description);
    fields.repoUrlInput.onChange(project.repoUrl);
    fields.categoryInput.onChange(
      `${project.category.charAt(0).toUpperCase()}${project.category.slice(1)}`
    );
    fields.milestonesInput.onChange(project.milestones);
    fields.technicalReviewInput.onChange(project.technicalReview);
    fields.reviewerNameInput.onChange(project.reviewerName);
    fields.technicalInformationInput.onChange(project.technicalInformation);
    fields.designPatternsInput.onChange(project.designPatterns);
    fields.featureImageInput.onChange(project.featureImage);
    this.props.actions.createProjectSetTags(project.tags.map((item) => ({ title: item.title })));
  }
  handleTags(value) {
    const {
      tags,
    } = this.props;
    const newTags = value.map((tag) => tags[tag] || { title: tag });
    this.props.actions.createProjectSetTags(newTags);
  }
  handleSubmit() {
    const {
      mutate,
      fields,
      actions,
      user,
    } = this.props;
    mutate(
      fieldsToSubmission(
        fields,
        user,
      )
    )
    .then(() => {
      const message = 'The project has successfully been created.';
      actions.createProjectMessage(message);
      setTimeout(() => {
        this.context.router.push('/user/portfolio');
      }, 3000);
    })
    .catch((err) => {
      actions.createProjectError(err);
    });
  }
  render() {
    const {
      fields,
      invalid,
      actions,
      message,
      createEventError,
      tagsLoading,
      tagsError,
      tags,
      selectedTags,
    } = this.props;
    return (
      <WithLoading
        isLoading={tagsLoading}
      >
        <WithToast
          message={message}
          error={createEventError || tagsError}
          onClose={(type) => actions.clearCreateProjectToast(type)}
        >
          <Box className={styles.createProject}>
            <Headline align="center">
              Create Project
            </Headline>
            <Divider />
            <Section primary align="center" justify="center" className="section__last">
              <CreateProjectForm
                invalid={invalid}
                onSubmit={this.handleSubmit}
                fields={fields}
                pastTags={tags}
                initialTags={selectedTags}
                onChangeTags={this.handleTags}
              />
            </Section>
          </Box>
        </WithToast>
      </WithLoading>
    );
  }
}

CreateProjectContainer.propTypes = {
  fields: PropTypes.object.isRequired,
  tags: PropTypes.array,
  tagsError: PropTypes.object,
  tagsLoading: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  mutate: PropTypes.func.isRequired,
  createEventError: PropTypes.object,
  message: PropTypes.string,
  actions: PropTypes.object.isRequired,
  selectedTags: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  project: PropTypes.object,
};

CreateProjectContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  createEventError: state.createProject.error,
  message: state.createProject.message,
  selectedTags: state.createProject.selectedTags,
  user: state.app.user,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CreateProjectActionCreators,
    dispatch
  ),
});

const Container = cssModules(CreateProjectContainer, styles);

const loadPastTagsQuery = gql`
  query loadPastTags {
    projectTags {
      id
      title
    }
  }
`;

const ContainerWithData = graphql(loadPastTagsQuery, {
  props: ({ data: { projectTags, error, loading } }) => ({
    tags: projectTags,
    tagsError: error,
    tagsLoading: loading,
  }),
})(Container);

const loadProjectQuery = gql`
  query loadProject($id: ID!) {
    project(id: $id) {
      ...projectData
    }
  }
`;

const ContainerWithProjects = graphql(loadProjectQuery, {
  options: (ownProps) => ({
    skip: !ownProps.location.query.projectId,
    fragments: [projectData],
    variables: {
      id: ownProps.location.query.projectId,
    },
  }),
  props: ({ data: { project } }) => ({
    project,
  }),
})(ContainerWithData);

const createProjectMutation = gql`
mutation createProject($authToken: String!, $project: ProjectInput) {
  CreateProject(input: { auth_token: $authToken, project: $project }) {
    project {
      title
    }
  }
}
`;

const ContainerWithMutation = graphql(createProjectMutation)(ContainerWithProjects);

const FormContainer = reduxForm({
  form: 'CreateProject',
  fields: formFields,
})(ContainerWithMutation);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
