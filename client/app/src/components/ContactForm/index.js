import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Form from 'grommet-udacity/components/Form';
import FormField from 'grommet-udacity/components/FormField';
import FormFields from 'grommet-udacity/components/FormFields';
import Heading from 'grommet-udacity/components/Heading';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Select from 'grommet-udacity/components/Select';
import { LogoImage, MarkdownInput } from 'components';

const calculatedError = (input) =>
  input.dirty || input.touched && input.error ? input.error : null;

const ContactForm = ({
  nameInput,
  emailInput,
  categoryInput,
  messageInput,
  categories,
  invalid,
  onSubmit,
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
          help="First and last name"
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
          label="Category *"
          className={styles.formField}
          help="What is the purpose of your message?"
          error={calculatedError(categoryInput)}
          htmlFor="category-input"
        >
          <Select
            {...categoryInput}
            required
            id="category-input"
            name="category"
            type="text"
            aria-invalid={categoryInput.error}
            aria-required
            onBlur={() => categoryInput.onBlur(categoryInput.value)}
            onChange={(option) => {
              if (option && option.value) {
                categoryInput.onChange(option.value);
              } else {
                categoryInput.onChange(null);
              }
            }}
            options={categories.map(i =>
              ({
                value: `${i.charAt(0).toUpperCase()}${i.slice(1)}`,
                label: `${i.charAt(0).toUpperCase()}${i.slice(1)}`,
              }))
            }
          />
        </FormField>
      </FormFields>
      <FormField
        label="Message"
        htmlFor="message-input"
      >
        <MarkdownInput
          required
          field={messageInput}
          id="message-input"
          aria-invalid={messageInput.error}
          aria-required
        />
      </FormField>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button
          onClick={invalid ? null : onSubmit}
          fill
          label="Submit"
          primary
        />
      </Footer>
    </Form>
  </Box>
);

ContactForm.propTypes = {
  nameInput: PropTypes.object.isRequired,
  emailInput: PropTypes.object.isRequired,
  categoryInput: PropTypes.object.isRequired,
  messageInput: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  invalid: PropTypes.bool.isRequired,
};

export default cssModules(ContactForm, styles);
