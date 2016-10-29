import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Archive actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.ARCHIVE_DEFAULT_ACTION,
      };
      expect(actions.archiveDefaultAction()).toEqual(expected);
    });
  });
});
