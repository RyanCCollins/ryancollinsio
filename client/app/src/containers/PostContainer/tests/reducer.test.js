import expect from 'expect';
import postReducer, { initialState } from '../reducer';

describe('postReducer', () => {
  it('returns the initial state', () => {
    expect(
      postReducer(undefined, {})
    ).toEqual(initialState);
  });
});
