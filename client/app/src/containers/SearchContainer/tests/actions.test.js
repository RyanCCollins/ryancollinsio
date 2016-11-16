import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Search actions', () => {
  it('has a type of SEARCH_DEFAULT_ACTION', () => {
    const expected = {
      type: types.SEARCH_DEFAULT_ACTION,
    };
    expect(actions.searchDefaultAction()).toEqual(expected);
  });
});
