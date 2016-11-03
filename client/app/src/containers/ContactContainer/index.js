import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContactActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { WithLoading, Divider, ContactForm, WithToast } from 'components';
import { reduxForm } from 'redux-form';
import contactValidation from './utils/validation';

export const formFields = [
  'nameInput',
  'emailInput',
  'categoryInput',
  'messageInput',
];

class ContactContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    const {
      fields,
      submitInquiry,
      actions,
    } = this.props;
    actions.contactInitiateLoading();
    submitInquiry({
      variables: {
        inquiry: {
          name: fields.nameInput.value,
          email: fields.emailInput.value,
          category: fields.categoryInput.value.option.toLowerCase(),
          message: fields.messageInput.value,
        },
      },
    }).then(() => {
      const message = 'Thanks so much for contacting me!' +
        '  I will get back with you as soon as possible';
      actions.contactSuccess(message);
    }).catch((err) => {
      actions.contactFailure(err);
    });
  }
  render() {
    const {
      isLoading,
      fields,
      isSubmitting,
      invalid,
      message,
      errorLoading,
      actions,
      categories,
    } = this.props;
    return (
      <Box
        className={styles.contact}
        colorIndex="light-2"
        align="center"
        justify="center"
      >
        <WithToast
          message={message}
          error={errorLoading}
          onClose={(type) => actions.clearContactToast(type)}
        >
          <WithLoading isLoading={isLoading || isSubmitting}>
            <Section align="center" justify="center">
              <Headline align="center">
                Contact Me
              </Headline>
              <Divider />
            </Section>
            <Section pad={{ horizontal: 'large' }} align="center">
              <ContactForm
                {...fields}
                categories={categories}
                invalid={invalid}
                onSubmit={this.handleSubmit}
              />
            </Section>
          </WithLoading>
        </WithToast>
      </Box>
    );
  }
}

ContactContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  submitInquiry: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  message: PropTypes.string,
  errorLoading: PropTypes.object,
  categories: PropTypes.array.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  errorLoading: state.contact.error,
  message: state.contact.message,
  isSubmitting: state.contact.isLoading,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ContactActionCreators,
    dispatch
  ),
});

const Container = cssModules(ContactContainer, styles);

const FormContainer = reduxForm({
  form: 'Contact',
  fields: formFields,
  validate: contactValidation,
})(Container);

const loadCategoriesQuery = gql`
  query loadCategories {
    inquiryCategories
  }
`;

const ContainerWithData = graphql(loadCategoriesQuery, {
  props: ({ data: { loading, inquiryCategories, error } }) => ({
    isLoading: loading,
    categories: inquiryCategories,
    loadingError: error,
  }),
})(FormContainer);

const submitInquiryMutation = gql`
  mutation submitInquiry($inquiry: InquiryInput) {
    CreateInquiry(input: { inquiry: $inquiry }) {
      id
    }
  }
`;

const ContainerWithMutation = graphql(submitInquiryMutation, {
  props: ({ mutate }) => ({
    submitInquiry: mutate,
  }),
})(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
