import * as types from './constants';

export const initialState = {
  authToken: 'nHqNxnWy5M2rjsryoG3x',
  user: null,
};

const appContainerReducer =
  (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

export default appContainerReducer;
