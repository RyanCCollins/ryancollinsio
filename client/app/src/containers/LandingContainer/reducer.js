import { fromJS } from 'immutable';
import * as types from './constants';

export const initialState = fromJS({
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
});

const landingReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.TOGGLE_LANDING_LOGO_HOVERED:
        return state
          .set('isHovered', !state.get('isHovered'));
      case types.CLEAR_LANDING_ERROR:
        return state
          .set('error', null);
      case types.LOAD_GIT_DATA_INITIATION:
        return state
          .set('isLoading', true);
      case types.LOAD_GIT_DATA_SUCCESS:
        return state
          .set('isLoading', true)
          .set('gitData', action.data);
      case types.LOAD_GIT_DATA_FAILURE:
        return state
          .set('isLoading', false)
          .set('error', action.error);
      case types.LANDING_SHOW_IMAGE:
        return state
          .set('image', true);
      case types.LANDING_SHOW_HEADLINE:
        return state
          .set('headline', true);
      case types.LANDING_SHOW_BUTTON:
        return state
          .set('button', true);
      default:
        return state;
    }
  };

export default landingReducer;
