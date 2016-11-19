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
  it('should handle reducer for LANDING_SHOW_BUTTON', () => {
    const stateBefore = {
      button: false,
    };
    const stateAfter = {
      button: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.LANDING_SHOW_BUTTON,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOAD_GIT_DATA_INITIATION', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.LOAD_GIT_DATA_INITIATION,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOAD_GIT_DATA_SUCCESS', () => {
    const data = [{ foo: 'bar' }, { foo: 'baz' }];
    const stateBefore = {
      isLoading: true,
      gitData: null,
    };
    const stateAfter = {
      isLoading: false,
      gitData: data,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.LOAD_GIT_DATA_SUCCESS,
        data,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOAD_GIT_DATA_FAILURE', () => {
    const error = new Error('Oops');
    const stateBefore = {
      isLoading: true,
      error: null,
    };
    const stateAfter = {
      isLoading: false,
      error,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.LOAD_GIT_DATA_FAILURE,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_LANDING_ERROR', () => {
    const error = new Error('Oops');
    const stateBefore = {
      error,
    };
    const stateAfter = {
      error: null,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.CLEAR_LANDING_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for TOGGLE_LANDING_LOGO_HOVERED', () => {
    const stateBefore = {
      isHovered: false,
    };
    const stateAfter = {
      isHovered: true,
    };
    expect(
      landingReducer(stateBefore, {
        type: types.TOGGLE_LANDING_LOGO_HOVERED,
      })
    ).toEqual(stateAfter);
  });
});

