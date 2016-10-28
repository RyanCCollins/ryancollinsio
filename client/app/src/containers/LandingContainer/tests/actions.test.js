import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Landing actions', () => {
  it('should have a type of LANDING_SHOW_IMAGE', () => {
    const expected = {
      type: types.LANDING_SHOW_IMAGE,
    };
    expect(
      actions.landingShowImage()
    ).toEqual(expected);
  });
  it('should have a type of LANDING_SHOW_HEADLINE', () => {
    const expected = {
      type: types.LANDING_SHOW_HEADLINE,
    };
    expect(
      actions.landingShowHeadline()
    ).toEqual(expected);
  });
});
