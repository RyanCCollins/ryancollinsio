import expect from 'expect';
import * as types from '../constants';
import createProjectReducer, { initialState } from '../reducer';

describe('createProjectReducer', () => {
  it('returns the initial state', () => {
    expect(
      createProjectReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for CREATE_PROJECT_ADD_TAG', () => {
    const tags = [
      {
        title: 'Hello world',
      },
    ];
    const stateBefore = {
      selectedTags: [],
    };
    const stateAfter = {
      selectedTags: tags,
    };
    expect(
      createProjectReducer(stateBefore, {
        type: types.CREATE_PROJECT_ADD_TAG,
        tags,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CREATE_PROJECT_ERROR', () => {
    const error = new Error('An error has occured');
    const stateBefore = {
      error: null,
    };
    const stateAfter = {
      error,
    };
    expect(
      createProjectReducer(stateBefore, {
        type: types.CREATE_PROJECT_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CREATE_PROJECT_MESSAGE', () => {
    const message = 'Hello world';
    const stateBefore = {
      message: null,
    };
    const stateAfter = {
      message,
    };
    expect(
      createProjectReducer(stateBefore, {
        type: types.CREATE_PROJECT_MESSAGE,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_CREATE_PROJECT_ERROR', () => {
    const error = new Error('An error has occured');
    const stateBefore = {
      error,
    };
    const stateAfter = {
      error: null,
    };
    expect(
      createProjectReducer(stateBefore, {
        type: types.CLEAR_CREATE_PROJECT_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_CREATE_PROJECT_MESSAGE', () => {
    const message = 'Hello world';
    const stateBefore = {
      message,
    };
    const stateAfter = {
      message: null,
    };
    expect(
      createProjectReducer(stateBefore, {
        type: types.CLEAR_CREATE_PROJECT_MESSAGE,
      })
    ).toEqual(stateAfter);
  });
});
