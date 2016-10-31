import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Login actions', () => {
  it('has a type of LOGIN_DEFAULT_ACTION', () => {
    const expected = {
      type: types.LOGIN_DEFAULT_ACTION,
    };
    expect(actions.loginDefaultAction()).toEqual(expected);
  });
});
