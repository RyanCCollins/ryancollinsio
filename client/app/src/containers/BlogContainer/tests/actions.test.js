import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Blog actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.BLOG_DEFAULT_ACTION,
      };
      expect(actions.blogDefaultAction()).toEqual(expected);
    });
  });
});
