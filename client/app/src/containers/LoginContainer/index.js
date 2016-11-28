import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginActionCreators from './actions';
import * as AppActions from 'containers/AppContainer/actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import { reduxForm } from 'redux-form';
import authUserDataFragment from 'fragments/authUserDataFragment';
import validation from './utils/validation';
import {
  LoadingIndicator,
  LoginForm,
  WithToast,
} from 'components';

export const formFields = [
  'emailInput',
  'passwordInput',
];

class LoginContainer extends Component { // eslint-disable-line react/prefer-stateless-function
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
      mutate,
      actions,
      fields,
    } = this.props;
    actions.loginSetLoading();
    mutate({
      variables:
      {
        email: fields.emailInput.value,
        password: fields.passwordInput.value,
      },
    })
      .then(result => {
        const user = result.data.SignIn.user;
        if (!user) {
          throw new Error('An error has occured while signing in.  Please try again.');
        }
        actions.setPersistentUser(user);
        actions.loginShowMessage(
          'You were successfully logged in. Redirecting to the profile page.'
        );
        setTimeout(() => {
          const { router } = this.context;
          router.push('/user/profile');
        }, 1000);
      })
      .catch(err => {
        actions.loginShowError(err.message || 'An unknown error has occured.');
      });
  }
  render() {
    const {
      message,
      isLoading,
      fields,
      invalid,
      loadingError,
      actions,
    } = this.props;
    return (
      <WithToast
        error={loadingError ? { message: loadingError } : null}
        message={message}
        onClose={(type) => actions.clearLoginToast(type)}
      >
        <Section
          pad={{ horizontal: 'large' }}
          align="center"
          justify="center"
          colorIndex="light-2"
          className={styles.login}
        >
         {isLoading &&
           <LoadingIndicator message="Submitting" isLoading={isLoading} />
         }
         <Box pad="large" primary>
           <LoginForm
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

LoginContainer.propTypes = {
  mutate: PropTypes.func.isRequired,
  message: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  fields: PropTypes.object.isRequired,
  loadingError: PropTypes.string,
  invalid: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

LoginContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  loadingError: state.login.error,
  message: state.login.message,
  isLoading: state.login.isLoading,
  user: state.app.user,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({},
      LoginActionCreators,
      AppActions
    ),
    dispatch
  ),
});

const Container = cssModules(LoginContainer, styles);
const signinUserMutation = gql`
  mutation signInUser($email: String!, $password: String!) {
    SignIn(input: { email: $email, password: $password }) {
      user {
        ...authUserData
      }
    }
  }
`;

const ContainerWithMutation = graphql(signinUserMutation, {
  options: () => ({
    fragments: [authUserDataFragment],
  }),
})(Container);

const FormContainer = reduxForm({
  form: 'Login',
  fields: formFields,
  validate: validation,
})(ContainerWithMutation);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormContainer);
