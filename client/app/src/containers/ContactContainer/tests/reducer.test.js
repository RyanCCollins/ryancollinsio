import expect from 'expect';
import * as types from '../constants';
import contactReducer, { initialState } from '../reducer';

describe('contactReducer', () => {
  it('returns the initial state', () => {
    expect(
      contactReducer(undefined, {})
    ).toEqual(initialState);
  });
});
