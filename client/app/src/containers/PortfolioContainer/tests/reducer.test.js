import expect from 'expect';
import * as types from '../constants';
import portfolioReducer, { initialState } from '../reducer';

describe('portfolioReducer', () => {
  it('returns the initial state', () => {
    expect(
      portfolioReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should respond to PORTFOLIO_SET_PROJECTS', () => {
    const projects = [
      {
        id: 1,
      },
    ];
    const stateBefore = {
      projects: [],
    };
    const stateAfter = {
      projects,
    };
    expect(
      portfolioReducer(stateBefore, {
        type: types.PORTFOLIO_SET_PROJECTS,
        projects,
      })
    ).toEqual(stateAfter);
  });
});
