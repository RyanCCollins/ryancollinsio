import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Contact actions', () => {
  it('has a type of CONTACT_DEFAULT_ACTION', () => {
    const expected = {
      type: types.CONTACT_DEFAULT_ACTION,
    };
    expect(actions.contactDefaultAction()).toEqual(expected);
  });
});
