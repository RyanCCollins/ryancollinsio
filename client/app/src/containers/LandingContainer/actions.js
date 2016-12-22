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

export const performLandingAnimation = () => (dispatch) => {
  setTimeout(() => {
    dispatch(
      landingShowImage(),
    );
  }, 1000);
  setTimeout(() => {
    dispatch(
      landingShowHeadline(),
    );
  }, 2000);
  setTimeout(() => {
    dispatch(
      landingShowButton(),
    );
  }, 3000);
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

export const loadGitData = () => (dispatch) => {
  dispatch(
    loadGitDataInitation(),
  );
  fetch('https://api.github.com/users/ryanccollins/events/public')
    .then(res => res.json())
    .then((json) => {
      dispatch(
        loadGitDataSuccess(json),
      );
    }).catch((err) => {
      dispatch(
        loadGitDataFailure(err),
      );
    });
};

export const toggleLogoHovered = () => ({
  type: types.TOGGLE_LANDING_LOGO_HOVERED,
});

export const cycleThroughLogoHovered = () => (dispatch) => {
  dispatch(toggleLogoHovered());
  // window.interval = setInterval(() => {
  //   dispatch(
  //     toggleLogoHovered(),
  //   );
  // }, 20000);
};
