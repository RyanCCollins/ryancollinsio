import expect from 'expect';
import * as types from '../constants';
import loginReducer, { initialState } from '../reducer';

describe('loginReducer', () => {
  it('returns the initial state', () => {
    expect(
      loginReducer(undefined, {})
    ).toEqual(initialState);
  });
});
