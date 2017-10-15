import update from 'react-addons-update';
import * as types from './constants';

export const initialState = {
  error: null,
  message: null,
  selectedTags: [],
};

const createProjectReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.CREATE_PROJECT_SET_TAGS:
        return update(state, {
          selectedTags: {
            $set: action.tags,
          },
        });
      case types.CREATE_PROJECT_ERROR:
        return update(state, {
          error: {
            $set: action.error,
          },
        });
      case types.CREATE_PROJECT_MESSAGE:
        return update(state, {
          message: {
            $set: action.message,
          },
        });
      case types.CLEAR_CREATE_PROJECT_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.CLEAR_CREATE_PROJECT_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default createProjectReducer;
