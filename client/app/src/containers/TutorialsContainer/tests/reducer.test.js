import expect from 'expect';
import * as types from '../constants';
import tutorialsReducer, { initialState } from '../reducer';

describe('tutorialsReducer', () => {
  it('returns the initial state', () => {
    expect(
      tutorialsReducer(undefined, {})
    ).toEqual(initialState);
  });
});
