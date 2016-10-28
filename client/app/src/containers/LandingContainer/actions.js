import * as types from './constants';

export const landingShowImage = () => ({
  type: types.LANDING_SHOW_IMAGE,
});

export const landingShowHeadline = () => ({
  type: types.LANDING_SHOW_HEADLINE,
});

export const performLandingAnimation = () => (dispatch) => {
  setTimeout(() => {
    dispatch(
      landingShowImage()
    );
  }, 1000);
  setTimeout(() => {
    dispatch(
      landingShowHeadline()
    );
  }, 2000);
};
