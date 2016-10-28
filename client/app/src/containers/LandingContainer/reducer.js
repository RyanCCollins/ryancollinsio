import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  image: false,
  headline: false,
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.LANDING_SHOW_IMAGE:
        return update(state, {
          image: {
            $set: true,
          },
        });
      case types.LANDING_SHOW_HEADLINE:
        return update(state, {
          headline: {
            $set: true,
          },
        });
      default:
        return state;
    }
  };

export default landingReducer;
