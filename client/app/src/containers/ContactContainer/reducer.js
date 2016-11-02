import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  isLoading: false,
  message: null,
  error: null,
};

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
