import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Archive actions', () => {
  it('has a type of ARCHIVE_SET_SELECTED_TAG', () => {
    const tag = {};
    const expected = {
      type: types.ARCHIVE_SET_SELECTED_TAG,
      tag,
    };
    expect(actions.setSelectedTag(tag)).toEqual(expected);
  });
});
