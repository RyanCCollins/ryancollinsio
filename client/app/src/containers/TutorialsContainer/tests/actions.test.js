import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Tutorials actions', () => {
  it('has a type of TUTORIALS_DEFAULT_ACTION', () => {
    const expected = {
      type: types.TUTORIALS_DEFAULT_ACTION,
    };
    expect(actions.tutorialsDefaultAction()).toEqual(expected);
  });
});
