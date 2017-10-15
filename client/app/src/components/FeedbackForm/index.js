import React, { PropTypes } from 'react';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import FormFields from 'grommet-udacity/components/FormFields';
import Heading from 'grommet-udacity/components/Heading';
import { MarkdownInput, Alert } from 'components';
import calculatedError from './utils';
import { StyledFormField, StyledForm, StyledBox } from './styles';

const FeedbackForm = ({
  feedbackInput,
  urlInput,
  invalid,
  onSubmit,
  error,
  message,
  onCloseAlert,
}) => (
  <StyledBox
    pad={{ horizontal: 'large' }}
  >
    <StyledForm>
      <Heading align="center" tag="h2" strong>
        Submit Feedback
      </Heading>
      <Heading align="center" tag="h4">
        Thank you for submitting feedback!  It is very much appreciated.
      </Heading>
      <FormFields>
        <StyledFormField
          label="URL"
          htmlFor="url-input"
          error={calculatedError(urlInput)}
        >
          <input
            {...urlInput}
            type="text"
            id="url-input"
            placeholder="http://ryancollins.io/portfolio"
            aria-invalid={urlInput.error}
          />
        </StyledFormField>
        <StyledFormField
          label="Description"
          htmlFor="feedback-input"
          help="Describe the issue you came across, or your general feedback for the site."
          error={calculatedError(feedbackInput)}
        >
          <MarkdownInput
            required
            field={feedbackInput}
            id="feedback-input"
            aria-invalid={feedbackInput.error}
            aria-required
          />
        </StyledFormField>
      </FormFields>
      <Footer pad={{ vertical: 'medium' }} align="center">
        <Button
          onClick={invalid ? null : onSubmit}
          fill
          label="Submit"
          primary
        />
      </Footer>
    </StyledForm>
    {error &&
      <Alert
        message={error.message}
        status={'critical'}
        onClose={onCloseAlert}
      />
    }
    {message &&
      <Alert
        message={message}
        status={'ok'}
        onClose={onCloseAlert}
      />
    }
  </StyledBox>
);

FeedbackForm.propTypes = {
  message: PropTypes.string.isRequired,
  feedbackInput: PropTypes.object.isRequired,
  urlInput: PropTypes.object.isRequired,
  invalid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  onCloseAlert: PropTypes.func.isRequired,
};

export default FeedbackForm;
