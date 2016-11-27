import * as types from './constants';

// toggleFeedbackModal :: None -> {Action}
export const toggleFeedbackModal = () => ({
  type: types.TOGGLE_FEEDBACK_MODAL,
});

export const feedbackSubmissionInitiation = () => ({
  type: types.FEEDBACK_SUBMISSION_INITIATION,
});

export const feedbackSubmissionError = (error) => ({
  type: types.FEEDBACK_SUBMISSION_ERROR,
  error,
});

export const feedbackSubmissionMessage = (message) => ({
  type: types.FEEDBACK_SUBMISSION_MESSAGE,
  message,
});

export const clearFeedbackAlerts = () => ({
  type: types.FEEDBACK_CLEAR_ALERTS,
});
