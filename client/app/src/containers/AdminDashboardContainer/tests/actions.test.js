import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('AdminDashboard actions', () => {
  it('has a type of ADMINDASHBOARD_DEFAULT_ACTION', () => {
    const expected = {
      type: types.ADMINDASHBOARD_DEFAULT_ACTION,
    };
    expect(actions.adminDashboardDefaultAction()).toEqual(expected);
  });
});
