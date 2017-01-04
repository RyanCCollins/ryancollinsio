import * as types from './constants';

export const landingShowImage = () => ({
  type: types.LANDING_SHOW_IMAGE,
});

export const landingShowHeadline = () => ({
  type: types.LANDING_SHOW_HEADLINE,
});

export const landingShowButton = () => ({
  type: types.LANDING_SHOW_BUTTON,
});

const dispatchWaterfall = (dispatch, interval = 1000) => (fs) => {
  fs.forEach((f, i) => {
    setTimeout(() => dispatch(f()), (interval * (i + 1)));
  });
};

export const performLandingAnimation = () => (dispatch) => {
  const waterfall = dispatchWaterfall(dispatch);
  waterfall([
    landingShowImage,
    landingShowHeadline,
    landingShowButton,
  ]);
};

export const clearLandingError = () => ({
  type: types.CLEAR_LANDING_ERROR,
});

export const loadGitDataInitation = () => ({
  type: types.LOAD_GIT_DATA_INITIATION,
});

export const loadGitDataSuccess = data => ({
  type: types.LOAD_GIT_DATA_SUCCESS,
  data,
});

export const loadGitDataFailure = error => ({
  type: types.LOAD_GIT_DATA_FAILURE,
  error,
});

export const loadGitData = () => async (dispatch) => {
  dispatch(loadGitDataInitation());
  try {
    await setTimeout(() => {}, 2000);
    const res = await fetch('https://api.github.com/users/ryanccollins/events/public');
    const json = await res.json();
    dispatch(
      loadGitDataSuccess(json),
    );
  } catch (err) {
    dispatch(
      loadGitDataFailure(err),
    );
  }
};

export const toggleLogoHovered = () => ({
  type: types.TOGGLE_LANDING_LOGO_HOVERED,
});

export const cycleThroughLogoHovered = () => (dispatch) => {
  window.interval = setInterval(() => {
    dispatch(
      toggleLogoHovered(),
    );
  }, 10000);
};
