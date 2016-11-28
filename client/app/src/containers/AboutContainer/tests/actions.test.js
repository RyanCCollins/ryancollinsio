import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('About actions', () => {
  it('has a type of ABOUT_DEFAULT_ACTION', () => {
    const expected = {
      type: types.ABOUT_DEFAULT_ACTION,
    };
    expect(actions.aboutDefaultAction()).toEqual(expected);
  });
});
