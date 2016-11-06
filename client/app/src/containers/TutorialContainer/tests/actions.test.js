import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Tutorial actions', () => {
  it('has a type of TUTORIAL_DEFAULT_ACTION', () => {
    const expected = {
      type: types.TUTORIAL_DEFAULT_ACTION,
    };
    expect(actions.tutorialDefaultAction()).toEqual(expected);
  });
});
