import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  image: false,
  headline: false,
  button: false,
  gitData: null,
  isLoading: false,
  error: null,
  isHovered: false,
  location: {
    content: `As a digital Nomad, you will find me working from all over the world.
    I currently rest my head in a quaint beach house in the Outer Banks, North Carolina
    and in a condo in Trumbull, CT.  Someday, I would like to move to California.`,
  },
};

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.TOGGLE_LANDING_LOGO_HOVERED:
        return {
          ...state,
          isHovered: !state.isHovered,
        };
      case types.CLEAR_LANDING_ERROR:
        return {
          ...state,
          error: null,
        };
      case types.LOAD_GIT_DATA_INITIATION:
        return {
          ...state,
          isLoading: true,
        };
      case types.LOAD_GIT_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          gitData: action.data,
        };
      case types.LOAD_GIT_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.error,
        };
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
      case types.LANDING_SHOW_BUTTON:
        return {
          ...state,
          button: true,
        };
      default:
        return state;
    }
  };

export default landingReducer;
