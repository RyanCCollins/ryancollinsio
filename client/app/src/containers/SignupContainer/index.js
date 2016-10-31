import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SignupActionCreators from './actions';
import * as AppActions from 'containers/AppContainer/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import { SignupForm, WithToast, LoadingIndicator } from 'components';
import validation from './utils/validation';
import { reduxForm } from 'redux-form';
import authUserDataFragment from 'fragments/authUserDataFragment';
import Box from 'grommet-udacity/components/Box';

export const formFields = [
  'nameInput',
  'emailInput',
  'passwordInput',
  'passwordConfirmationInput',
];

class SignupContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const {
      user,
    } = this.props;
    if (user.authToken != null) { // eslint-disable-line
      this.context.router.push('/user/profile');
    }
  }
  handleSubmit() {
    const {
      fields,
      actions,
      mutate,
    } = this.props;
    const variables = {
      variables: SignupActionCreators.fieldsToData(fields),
    };
    actions.signupSetLoading();
    mutate(variables)
      .then(result => {
        const {
          user,
        } = result.data.SignUp;
        if (!user) {
          throw new Error('An error has occured.');
        }
        actions.setPersistentUser(user);
        actions.signupShowMessage('Thanks for signing up! Just a moment while we tidy up.');
        setTimeout(() => {
          this.context.router.push('/user/profile');
        }, 2000);
      })
      .catch(err => {
        actions.signupShowError(err.message || 'An unknown error has occured');
      });
  }
  render() {
    const {
      fields,
      loadingError,
      message,
      isLoading,
      invalid,
      actions,
    } = this.props;
    return (
      <WithToast
        error={loadingError ? { message: loadingError } : null}
        message={message}
        onClose={(type) => actions.clearSignupToast(type)}
      >
        <Section
          size="auto"
          pad={{ horizontal: 'large' }}
          align="center"
          justify="center"
          colorIndex="light-2"
          className={styles.signup}
        >
          {isLoading &&
            <LoadingIndicator message="Submitting" isLoading={isLoading} />
          }
          <Box pad="large">
            <SignupForm
              {...fields}
              invalid={invalid}
              onSubmit={this.handleSubmit}
            />
          </Box>
        </Section>
      </WithToast>
    );
  }
}

SignupContainer.propTypes = {
  fields: PropTypes.object.isRequired,
  mutate: PropTypes.func.isRequired,
  loadingError: PropTypes.string,
  message: PropTypes.string,
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

SignupContainer.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  message: state.signup.message,
  loadingError: state.signup.error,
  isLoading: state.signup.isLoading,
  user: state.app.user,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      SignupActionCreators,
      AppActions
    ),
    dispatch
  ),
});

const Container = cssModules(SignupContainer, styles);

const createUserMutation = gql`
  mutation signUpUser($userSignup: UserSignupInput) {
    SignUp(input: { user_signup: $userSignup }) {
        user {
          ...authUserData
        }
      }
    }
`;

const ContainerWithMutations = graphql(createUserMutation, {
  options: () => ({
    fragments: [authUserDataFragment],
  }),
})(Container);

const FormContainer = reduxForm({
  form: 'Signup',
  fields: formFields,
  validate: validation,
})(ContainerWithMutations);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
