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
  it('should have a type of LANDING_SHOW_BUTTON', () => {
    const expected = {
      type: types.LANDING_SHOW_BUTTON,
    };
    expect(
      actions.landingShowButton()
    ).toEqual(expected);
  });
  it('should have a type of LOAD_GIT_DATA_INITIATION', () => {
    const expected = {
      type: types.LOAD_GIT_DATA_INITIATION,
    };
    expect(
      actions.loadGitDataInitation()  
    ).toEqual(expected);
  });
  it('should have a type of LOAD_GIT_DATA_SUCCESS', () => {
    const data = { foo: 'bar' };
    const expected = {
      type: types.LOAD_GIT_DATA_SUCCESS,
      data,
    };
    expect(
      actions.loadGitDataSuccess(data)
    ).toEqual(expected);
  });
  it('should have a type of LOAD_GIT_DATA_FAILURE', () => {
    const error = new Error('Ooops');
    const expected = {
      type: types.LOAD_GIT_DATA_FAILURE,
      error,
    };
    expect(
      actions.loadGitDataFailure(error)  
    ).toEqual(expected);
  });
  it('should have a type of CLEAR_LANDING_ERROR', () => {
    const expected = {
      type: types.CLEAR_LANDING_ERROR,
    };
    expect(
      actions.clearLandingError()  
    ).toEqual(expected);
  });
  it('should have a type of TOGGLE_LANDING_LOGO_HOVERED', () => {
    const expected = {
      type: types.TOGGLE_LANDING_LOGO_HOVERED,
    };
    expect(
      actions.toggleLogoHovered()
    ).toEqual(expected);
  });
});
