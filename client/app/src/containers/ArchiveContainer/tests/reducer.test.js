import expect from 'expect';
import * as types from '../constants';
import archiveReducer, { initialState } from '../reducer';

describe('archiveReducer', () => {
  it('returns the initial state', () => {
    expect(
      archiveReducer(undefined, {})
    ).toEqual(initialState);
  });
});
