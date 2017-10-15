import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Form from 'grommet-udacity/components/Form';
import Heading from 'grommet-udacity/components/Heading';
import FormField from 'grommet-udacity/components/FormField';
import FormFields from 'grommet-udacity/components/FormFields';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Box from 'grommet-udacity/components/Box';
import { AuthFormFooter, LogoImage } from 'components';
import calculatedError from './utils/error';
import styles from './index.module.scss';

const checkMatches = (field1, field2) => // eslint-disable-line
  field1.value !== field2.value && field2.touched ?
    'Passwords must match' : null;

const SignupForm = ({
  onSubmit,
  nameInput,
  emailInput,
  passwordInput,
  passwordConfirmationInput,
  invalid,
}) => (
  <Box
    className={styles.signupForm}
    pad={{ horizontal: 'large' }}
  >
    <Form>
      <Box align="center" justify="center" pad="large">
        <LogoImage />
      </Box>
      <Heading strong align="center">
        RyanCollins.io
      </Heading>
      <Heading align="center" tag="h5">
        Signup
      </Heading>
      <FormFields>
        <FormField
          help="What should we call you?"
          error={calculatedError(nameInput)}
          label="Name *"
          htmlFor="nameInput"
          className={styles.formField}
        >
          <input
            {...nameInput}
            required
            autoFocus
            placeholder="Bill Clinton"
            id="nameInput"
            autoComplete="on"
            name="name"
            type="text"
            aria-invalid={nameInput.error}
            aria-required
            className={styles.input}
          />
        </FormField>
        <FormField
          help="How should we get in touch with you?"
          error={calculatedError(emailInput)}
          label="Email *"
          htmlFor="emailInput"
          className={styles.formField}
        >
          <input
            {...emailInput}
            required
            id="emailInput"
            autoComplete="on"
            aria-required
            aria-invalid={emailInput.error}
            name="email"
            placeholder="bill@clinton.com"
            type="email"
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Start typing for password tips"
          error={calculatedError(passwordInput)}
          label="Password *"
          htmlFor="passwordInput"
          className={styles.formField}
        >
          <input
            {...passwordInput}
            required
            id="passwordInput"
            name="password"
            type="password"
            autoComplete="off"
            aria-required
            aria-invalid={passwordInput.error}
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Confirm your password"
          label="Password Confirmation *"
          htmlFor="passwordConfirmationInput"
          className={styles.formField}
          error={
            calculatedError(passwordConfirmationInput) ||
              checkMatches(passwordInput, passwordConfirmationInput)
          }
        >
          <input
            {...passwordConfirmationInput}
            required
            id="passwordConfirmationInput"
            type="password"
            aria-invalid={passwordConfirmationInput.error}
            aria-required
            name="password"
            className={styles.input}
          />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button
          onClick={
            invalid ||
              checkMatches(passwordInput, passwordConfirmationInput) !== null ?
                null : onSubmit
          }
          fill
          label="Submit"
          primary
        />
      </Footer>
      <AuthFormFooter text="Already a member?" link="/login" />
    </Form>
  </Box>
);

SignupForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  nameInput: PropTypes.object.isRequired,
  emailInput: PropTypes.object.isRequired,
  passwordInput: PropTypes.object.isRequired,
  passwordConfirmationInput: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
};

export default cssModules(SignupForm, styles);
