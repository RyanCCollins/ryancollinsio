import expect from 'expect';
import blogReducer, { initialState } from '../reducer';

describe('blogReducer', () => {
  it('returns the initial state', () => {
    expect(
      blogReducer(undefined, {})
    ).toEqual(initialState);
  });
});
