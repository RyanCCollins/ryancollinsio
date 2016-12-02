import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ContactActionCreators from './actions';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Status from 'grommet-udacity/components/icons/Status';
import Pulse from 'grommet-udacity/components/icons/Pulse';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { WithLoading, Divider, ContactForm, WithToast } from 'components';
import { reduxForm } from 'redux-form';
import contactValidation from './utils/validation';
import { StyledSection, StyledBottomSection, Boxxy } from './styles';

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
      setTimeout(() => {
        this.props.history.goBack();
      }, 2000);
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
            <StyledSection primary align="center" justify="center">
              <Headline align="center" className="heading">
                Contact Me
              </Headline>
              <Divider />
            </StyledSection>
            <Section
              pad={{ horizontal: 'large' }}
              align="center"
              colorIndex="light-1"
            >
              <ContactForm
                {...fields}
                categories={categories}
                invalid={invalid}
                onSubmit={this.handleSubmit}
              />
            </Section>
            <StyledBottomSection align="center" justify="center">
              <Boxxy pad="large" size="large" align="center">
                <Box pad="medium" align="center">
                  <Pulse
                    icon={<Status size="large" value="warning" />}
                  />
                </Box>
                <Heading tag="h2" align="center">
                  Note to Recruiters
                </Heading>
                <Heading tag="h4" align="center">
                  As much as I appreciate what you do,
                  I am not seeking employment at present so please
                  refrain from sending me job postings.
                </Heading>
                <Heading tag="h4" align="center">
                  If you want to make a connection, please find me on
                  <a href="https://www.linkedin.com/in/ryancollinsio"> LinkedIn</a>
                  <br />Thanks 🙏
                </Heading>
              </Boxxy>
            </StyledBottomSection>
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
  history: PropTypes.object.isRequired,
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

const FormContainer = reduxForm({
  form: 'Contact',
  fields: formFields,
  validate: contactValidation,
})(ContactContainer);

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
