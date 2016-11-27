import * as validation from '../../../utils/validation';
import memoize from 'lru-memoize';

// Compose validation functions for all input fields
const urlInput = [
  validation.minLength(3),
  validation.maxLength(50),
  validation.valueRequired,
];

const feedbackInput = [
  validation.maxLength(300),
  validation.valueRequired,
];

// Create the validator
const feedbackValidation = validation.createValidator({
  urlInput,
  feedbackInput,
});

/* Memoize and export */
const validator = memoize(10)(feedbackValidation);
export default validator;
