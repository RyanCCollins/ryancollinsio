import expect from 'expect';
import * as types from '../constants';
import userProfileReducer, { initialState } from '../reducer';

describe('userProfileReducer', () => {
  it('returns the initial state', () => {
    expect(
      userProfileReducer(undefined, {})
    ).toEqual(initialState);
  });
});
