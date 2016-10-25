import expect from 'expect';
import projectReducer, { initialState } from '../reducer';

describe('projectReducer', () => {
  it('returns the initial state', () => {
    expect(
      projectReducer(undefined, {})
    ).toEqual(initialState);
  });
});
