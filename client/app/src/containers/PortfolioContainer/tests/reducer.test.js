import expect from 'expect';
import portfolioReducer, { initialState } from '../reducer';

describe('portfolioReducer', () => {
  it('returns the initial state', () => {
    expect(
      portfolioReducer(undefined, {})
    ).toEqual(initialState);
  });
});
