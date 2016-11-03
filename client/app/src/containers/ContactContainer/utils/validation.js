import * as validation from '../../../utils/validation';
import memoize from 'lru-memoize';

const nameInput = [
  validation.containsTwoWords,
  validation.valueRequired,
  validation.maxLength(50),
];

const emailInput = [
  validation.isEmail,
  validation.valueRequired,
  validation.maxLength(50),
  validation.minLength(2),
];

const categoryInput = [
  validation.valueRequired,
];

const messageInput = [
  validation.valueRequired,
  validation.maxLength(500),
  validation.minLength(10),
];

// Create the validator
const contactValidation = validation.createValidator({
  nameInput,
  emailInput,
  categoryInput,
  messageInput,
});

/* Memoize and export */
const validator = memoize(10)(contactValidation);
export default validator;
