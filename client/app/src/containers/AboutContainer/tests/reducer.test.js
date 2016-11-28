import expect from 'expect';
import * as types from '../constants';
import aboutReducer, { initialState } from '../reducer';

describe('aboutReducer', () => {
  it('returns the initial state', () => {
    expect(
      aboutReducer(undefined, {})
    ).toEqual(initialState);
  });
});
