import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  image: false,
  headline: false,
  subheadline: false,
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
      case types.LANDING_SHOW_SUBHEADLINE:
        return update(state, {
          subheadline: {
            $set: true,
          },
        });
      default:
        return state;
    }
  };

export default landingReducer;
