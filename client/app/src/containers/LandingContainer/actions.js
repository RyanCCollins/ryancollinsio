import * as types from './constants';

export const landingShowImage = () => ({
  type: types.LANDING_SHOW_IMAGE,
});

export const landingShowHeadline = () => ({
  type: types.LANDING_SHOW_HEADLINE,
});

export const landingShowSubHeadline = () => ({
  type: types.LANDING_SHOW_SUBHEADLINE,
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
  setTimeout(() => {
    dispatch(
      landingShowSubHeadline()
    );
  }, 3000);
};
