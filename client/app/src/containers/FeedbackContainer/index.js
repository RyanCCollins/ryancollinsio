import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FeedbackActionCreators from './actions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { FeedbackFab, FeedbackForm, WithLoading } from 'components';
import Layer from 'grommet-udacity/components/Layer';
import { reduxForm } from 'redux-form';
import validation from './utils';

export const formFields = [
  'urlInput',
  'feedbackInput',
];

class FeedbackContainer extends Component {
  constructor() {
    super();
    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps({ user }) {
    if (!user.authToken) {
      this.context.router.push('/login');
    }
  }
  handleToggleModal() {
    this.props.actions.toggleFeedbackModal();
  }
  handleSubmit() {
    const data = {
      variables: {
        authToken: this.props.user.authToken,
        description: this.props.fields.feedbackInput.value,
        url: this.props.fields.urlInput.value,
      },
    };
    this.props.actions.feedbackSubmissionInitiation();
    this.props.submitFeedbackMutation(data)
      .then(() => {
        const message = 'Thanks for submitting feedback!' +
          '  I appreciate it greatly as it will help me to make this site better.';
        this.props.actions.feedbackSubmissionMessage(message);
      })
      .catch(err => {
        this.props.actions.feedbackSubmissionError(err);
      });
  }
  render() {
    const {
      isVisible,
      fields,
      invalid,
      isSubmitting,
      submissionError,
      message,
    } = this.props;
    return (
      <div>
        {!isVisible &&
          <FeedbackFab handleClick={this.handleToggleModal} />
        }
        <Layer
          align="center"
          closer
          hidden={!isVisible}
          onClose={this.handleToggleModal}
        >
          <WithLoading
            isLoading={isSubmitting}
          >
            <FeedbackForm
              {...fields}
              invalid={invalid}
              message={message}
              onCloseAlert={this.props.actions.clearFeedbackAlerts}
              onSubmit={this.handleSubmit}
              error={submissionError}
            />
          </WithLoading>
        </Layer>
      </div>
    );
  }
}

FeedbackContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  submitFeedbackMutation: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  submissionError: PropTypes.object,
  user: PropTypes.object.isRequired,
  message: PropTypes.string,
};

FeedbackContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isVisible: state.feedback.modal.isVisible,
  isSubmitting: state.feedback.isSubmitting,
  message: state.feedback.message,
  submissionError: state.feedback.error,
  user: state.app.user,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    FeedbackActionCreators,
    dispatch
  ),
});

const Container = reduxForm({
  form: 'FeedbackForm',
  fields: formFields,
  validate: validation,
})(FeedbackContainer);

const feedbackMutation = gql`
  mutation createFeedback($authToken:String!, $feedback: FeedbackInput) {
    CreateFeedback(input:{ feedback: $feedback, auth_token: $authToken }) {
      __typename
    }
  }
`;

const ContainerWithMutation = graphql(feedbackMutation, {
  props: ({ mutate }) => ({
    submitFeedbackMutation: mutate,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
