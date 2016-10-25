import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Portfolio actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.PORTFOLIO_DEFAULT_ACTION,
      };
      expect(actions.portfolioDefaultAction()).toEqual(expected);
    });
  });
});
