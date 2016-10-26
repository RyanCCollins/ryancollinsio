import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Post actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.POST_DEFAULT_ACTION,
      };
      expect(actions.postDefaultAction()).toEqual(expected);
    });
  });
});
