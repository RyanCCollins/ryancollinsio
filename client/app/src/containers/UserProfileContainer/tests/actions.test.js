import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('UserProfile actions', () => {
  it('has a type of USERPROFILE_DEFAULT_ACTION', () => {
    const expected = {
      type: types.USERPROFILE_DEFAULT_ACTION,
    };
    expect(actions.userProfileDefaultAction()).toEqual(expected);
  });
});
