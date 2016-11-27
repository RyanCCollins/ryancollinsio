import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Feedback actions', () => {
  it('has a type of FEEDBACK_DEFAULT_ACTION', () => {
    const expected = {
      type: types.FEEDBACK_DEFAULT_ACTION,
    };
    expect(actions.feedbackDefaultAction()).toEqual(expected);
  });
});
