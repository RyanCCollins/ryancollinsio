import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CreatePost actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.CREATEPOST_DEFAULT_ACTION,
      };
      expect(actions.createPostDefaultAction()).toEqual(expected);
    });
  });
});
