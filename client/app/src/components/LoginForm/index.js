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

const LoginForm = ({
  passwordInput,
  emailInput,
  onSubmit,
  invalid,
}) => (
  <Box
    className={styles.loginForm}
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
        Login
      </Heading>
      <FormFields>
        <FormField
          help="Enter the email you used to create your account"
          error={calculatedError(emailInput)}
          label="Email *"
          htmlFor="emailInput"
          className={styles.formField}
        >
          <input
            {...emailInput}
            required
            aria-required
            aria-invalid={emailInput.error}
            autoComplete="email"
            autoFocus
            id="emailInput"
            name="email"
            placeholder="bill@clinton.com"
            type="email"
            className={styles.input}
          />
        </FormField>
        <FormField
          help="Enter the password you used to create your account"
          error={calculatedError(passwordInput)}
          label="Password *"
          htmlFor="passwordInput"
          className={styles.formField}
        >
          <input
            {...passwordInput}
            required
            aria-required
            aria-invalid={passwordInput.error}
            autoComplete="current-password"
            name="password"
            id="passwordInput"
            type="password"
            className={styles.input}
          />
        </FormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button onClick={invalid ? null : onSubmit} fill label="Submit" primary />
      </Footer>
      <AuthFormFooter text="Need an Account?" link="/signup" />
    </Form>
  </Box>
);

LoginForm.propTypes = {
  passwordInput: PropTypes.object.isRequired,
  emailInput: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
};

export default cssModules(LoginForm, styles);
