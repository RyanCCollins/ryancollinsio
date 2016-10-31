import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Signup actions', () => {
  it('has a type of SIGNUP_DEFAULT_ACTION', () => {
    const expected = {
      type: types.SIGNUP_DEFAULT_ACTION,
    };
    expect(actions.signupDefaultAction()).toEqual(expected);
  });
});
