import expect from 'expect';
import * as types from '../constants';
import adminDashboardReducer, { initialState } from '../reducer';

describe('adminDashboardReducer', () => {
  it('should return the initial state', () => {
    expect(
      adminDashboardReducer(undefined, {})
    ).toEqual(initialState);
  });
  it.skip('should handle reducer for SET_POSTS', () => {});
  it.skip('should handle reducer for SET_PROJECTS', () => {});
  it.skip('should handle reducer for SET_USERS', () => {});
  it.skip('should handle reducer for SET_POSTS_PAGE', () => {});
  it.skip('should handle reducer for SET_PROJECTS_PAGE', () => {});
  it.skip('should handle reducer for SET_USERS_PAGE', () => {});
  it.skip('should handle reducer for SET_ACTIVE_TAB', () => {});
});
