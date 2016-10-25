import expect from 'expect';
import createProjectReducer, { initialState } from '../reducer';

describe('createProjectReducer', () => {
  it('returns the initial state', () => {
    expect(
      createProjectReducer(undefined, {})
    ).toEqual(initialState);
  });
});
