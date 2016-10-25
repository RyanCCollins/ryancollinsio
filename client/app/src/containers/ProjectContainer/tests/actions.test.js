import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Project actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.PROJECT_DEFAULT_ACTION,
      };
      expect(actions.projectDefaultAction()).toEqual(expected);
    });
  });
});
