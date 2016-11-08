import * as types from './constants';

export const authenticateUser = (user) => ({
  type: types.AUTHENTICATE_USER,
  user,
});

export const invalidateUser = () => ({
  type: types.INVALIDATE_USER,
});

export const appSetMobile = (isMobile) => ({
  type: types.APP_SET_MOBILE,
  isMobile,
});

export const appToggleNav = () => ({
  type: types.APP_ON_TOGGLE_NAV,
});

export const logoutUser = () => (dispatch) => {
  localStorage.setItem('user', null);
  dispatch(
    invalidateUser()
  );
};

export const setPersistentUser = (user) => (dispatch) => {
  localStorage.setItem('user', JSON.stringify(user));
  dispatch(
    authenticateUser(user)
  );
};

export const loadPersistedUser = () => (dispatch) => {
  const user = localStorage.getItem('user');
  if (user) {
    const parsedUser = JSON.parse(user);
    dispatch(
      authenticateUser(parsedUser)
    );
  } else {
    dispatch(
      invalidateUser()
    );
  }
};
