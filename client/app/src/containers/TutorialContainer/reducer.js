import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  // Initial State goes here!
};

const tutorialReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.DEFAULT_ACTION:
        return state;
      default:
        return state;
    }
  };

export default tutorialReducer;
