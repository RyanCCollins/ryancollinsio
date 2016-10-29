import expect from 'expect';
import archiveReducer, { initialState } from '../reducer';

describe('archiveReducer', () => {
  it('returns the initial state', () => {
    expect(
      archiveReducer(undefined, {})
    ).toEqual(initialState);
  });
});
