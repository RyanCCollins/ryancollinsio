import { createSelector } from 'reselect';

export const selectApp = () => state => state.app;

export const selectNavDocked = createSelector(
  selectApp(),
  app => app.navDocked,
);
