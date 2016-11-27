import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as FeedbackActionCreators from './actions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { FeedbackFab, FeedbackForm } from 'components';
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
  }
  handleToggleModal() {
    this.props.actions.toggleFeedbackModal();
  }
  render() {
    const {
      isVisible,
      fields,
      invalid,
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
          <FeedbackForm
            {...fields}
            invalid={invalid}
            onSubmit={this.handleSubmit}
          />
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
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isVisible: state.feedback.modal.isVisible,
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

const feedbackQuery = gql`
  query feedback {
    feedback {
      __typename
    }
  }
`;

const ContainerWithData = graphql(feedbackQuery, {
  props: ({ data: { loading, error, feedback } }) => ({
    feedback,
    loading,
    error,
  }),
})(Container);

const feedbackMutation = gql`
  mutation feedback {
    feedback {
      __typename
    }
  }
`;

const ContainerWithMutation = graphql(feedbackMutation)(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
