import * as types from './constants';

// tutorialEditComment :: String -> {Action}
export const tutorialEditComment = (value) => ({
  type: types.ON_EDIT_COMMENT,
  value,
});
