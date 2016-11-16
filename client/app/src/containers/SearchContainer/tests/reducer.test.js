import expect from 'expect';
import * as types from '../constants';
import searchReducer, { initialState } from '../reducer';

describe('searchReducer', () => {
  it('returns the initial state', () => {
    expect(
      searchReducer(undefined, {})
    ).toEqual(initialState);
  });
});
