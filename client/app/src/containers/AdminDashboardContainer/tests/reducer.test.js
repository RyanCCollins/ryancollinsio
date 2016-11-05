import expect from 'expect';
import * as types from '../constants';
import adminDashboardReducer, { initialState } from '../reducer';

describe('adminDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(
      adminDashboardReducer(undefined, {})
    ).toEqual(initialState);
  });
});
