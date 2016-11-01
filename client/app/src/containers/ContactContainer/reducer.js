import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  // Initial State goes here!
};
export const CONTACT_INITIATE_LOADING = 'CONTACT_INITIATE_LOADING';
export const CONTACT_SUCCESS = 'CONTACT_SUCCESS';
export const CONTACT_ERROR = 'CONTACT_ERROR';
export const CONTACT_CLEAR_ERROR = 'CONTACT_CLEAR_ERROR';
export const CONTACT_CLEAR_MESSAGE = 'CONTACT_CLEAR_MESSAGE';
const contactReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.CONTACT_INITIATE_LOADING:
        return update(state, {
          isLoading: {
            $set: true,
          },
        });
      case types.CONTACT_SUCCESS:
        return update(state, {
          isLoading: {
            $set: false,
          },
          message: {
            $set: action.message,
          },
        });
      case types.CONTACT_ERROR:
        return update(state, {
          isLoading: {
            $set: false,
          },
          error: {
            $set: action.error,
          },
        });
      case types.CONTACT_CLEAR_ERROR:
        return update(state, {
          error: {
            $set: null,
          },
        });
      case types.CONTACT_CLEAR_MESSAGE:
        return update(state, {
          message: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default contactReducer;
