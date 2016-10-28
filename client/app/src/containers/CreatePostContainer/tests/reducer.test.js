import expect from 'expect';
import createPostReducer, { initialState } from '../reducer';

describe('createPostReducer', () => {
  it('returns the initial state', () => {
    expect(
      createPostReducer(undefined, {})
    ).toEqual(initialState);
  });
});
