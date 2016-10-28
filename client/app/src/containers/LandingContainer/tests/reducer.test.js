import expect from 'expect';
import * as types from '../constants';
import landingReducer, { initialState } from '../reducer';

describe('landingReducer', () => {
  it('returns the initial state', () => {
    expect(
      landingReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for LANDING_SHOW_IMAGE', () => {
    const stateBefore = {
      image: false,
    };
    const stateAfter = {
      image: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.LANDING_SHOW_IMAGE,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LANDING_SHOW_HEADLINE', () => {
    const stateBefore = {
      headline: false,
    };
    const stateAfter = {
      headline: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.LANDING_SHOW_HEADLINE,
      })
    ).toEqual(stateAfter);
  });
});
