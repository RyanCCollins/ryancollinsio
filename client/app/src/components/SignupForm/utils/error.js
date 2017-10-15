const calculatedError = (input) => // eslint-disable-line
  (input.dirty || input.touched) && input.error ? input.error : null;

export default calculatedError;
