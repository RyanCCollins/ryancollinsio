import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CreateProject actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.CREATEPROJECT_DEFAULT_ACTION,
      };
      expect(actions.createProjectDefaultAction()).toEqual(expected);
    });
  });
});
