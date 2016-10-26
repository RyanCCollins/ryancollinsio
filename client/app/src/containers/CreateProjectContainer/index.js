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
import { Divider, CreateProjectForm, WithToast } from 'components';
import fieldsToSubmission from './model/serialization';

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
  'categoryInput',
  'featureImageInput',
];

class CreateProjectContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const {
      mutate,
      fields,
      actions,
    } = this.props;
    const user = {
      id: 1,
      authToken: 'EKeE_j49qzXp3GvzfP7N',
    };
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
        this.context.router.push('/portfolio');
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
    } = this.props;
    return (
      <WithToast
        message={message}
        error={createEventError}
        onClose={(type) => actions.clearCreateProjectToast(type)}
      >
        <Box className={styles.createProject}>
          <Headline align="center">
            Create Project
          </Headline>
          <Divider />
          <Section align="center" justify="center">
            <CreateProjectForm
              invalid={invalid}
              onSubmit={this.handleSubmit}
              fields={fields}
            />
          </Section>
        </Box>
      </WithToast>
    );
  }
}

CreateProjectContainer.propTypes = {
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  mutate: PropTypes.func.isRequired,
  createEventError: PropTypes.object,
  message: PropTypes.string,
  actions: PropTypes.object.isRequired,
};

CreateProjectContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  createEventError: state.createProject.error,
  message: state.createProject.message,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CreateProjectActionCreators,
    dispatch
  ),
});

const Container = cssModules(CreateProjectContainer, styles);

const createProjectMutation = gql`
mutation createProject($authToken: String!, $project: ProjectInput) {
  CreateProject(input: { auth_token: $authToken, project: $project }) {
    project {
      title
    }
  }
}
`;

const ContainerWithMutation = graphql(createProjectMutation)(Container);

const FormContainer = reduxForm({
  form: 'CreateProject',
  fields: formFields,
})(ContainerWithMutation);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
