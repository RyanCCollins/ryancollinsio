import expect from 'expect';
import * as types from '../constants';
import tutorialReducer, { initialState } from '../reducer';

describe('tutorialReducer', () => {
  it('returns the initial state', () => {
    expect(
      tutorialReducer(undefined, {})
    ).toEqual(initialState);
  });
});
