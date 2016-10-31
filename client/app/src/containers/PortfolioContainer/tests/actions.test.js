import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Portfolio actions', () => {
  describe('Default Action', () => {
    it('has a type of PORTFOLIO_SET_PROJECTS', () => {
      const projects = [];
      const expected = {
        type: types.PORTFOLIO_SET_PROJECTS,
        projects,
      };
      expect(actions.portfolioSetProjects(projects)).toEqual(expected);
    });
  });
});
