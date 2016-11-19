import expect from 'expect';
import * as types from '../constants';
import loginReducer, { initialState } from '../reducer';

describe('loginReducer', () => {
  it('should return the initial state', () => {
    expect(
      loginReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for LOGIN_SHOW_ERROR', () => {
    const error = new Error('Confounded');
    const stateBefore = {
      error: null,
    };
    const stateAfter = {
      error,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.LOGIN_SHOW_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOGIN_SHOW_MESSAGE', () => {
    const message = 'OOlalala';
    const stateBefore = {
      message: null,
    };
    const stateAfter = {
      message,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.LOGIN_SHOW_MESSAGE,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOGIN_CLEAR_ERROR', () => {
    const stateBefore = {
      error: new Error('Confounded'),
    };
    const stateAfter = {
      error: null,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.LOGIN_CLEAR_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOGIN_CLEAR_MESSAGE', () => {
    const stateBefore = {
      message: 'Dagnabbit',
    };
    const stateAfter = {
      message: null,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.LOGIN_SHOW_MESSAGE,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for LOGIN_SET_LOADING', () => {
    const stateBefore = {
      isLoading: false,
    };
    const stateAfter = {
      isLoading: true,
    };
    expect(
      loginReducer(stateBefore, {
        type: types.LOGIN_SET_LOADING,
      })
    ).toEqual(stateAfter);
  });
});