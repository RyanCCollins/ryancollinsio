import expect from 'expect';
import * as types from '../constants';
import createPostReducer, { initialState } from '../reducer';

describe('createPostReducer', () => {
  it('returns the initial state', () => {
    expect(
      createPostReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for CREATE_POST_CLEAR_ERROR', () => {
    const stateBefore = {
      error: new Error('Oops'),
    };
    const stateAfter = {
      error: null,
    };
    expect(
      createPostReducer(stateBefore, {
        type: types.CREATE_POST_CLEAR_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CREATE_POST_CLEAR_MESSAGE', () => {
    const stateBefore = {
      message: 'Hello world',
    };
    const stateAfter = {
      message: null,
    };
    expect(
      createPostReducer(stateBefore, {
        type: types.CREATE_POST_CLEAR_MESSAGE,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CREATE_POST_SET_MESSAGE', () => {
    const message = 'yay, it works!';
    const stateBefore = {
      message: null,
    };
    const stateAfter = {
      message,
    };
    expect(
      createPostReducer(stateBefore, {
        type: types.CREATE_POST_SET_MESSAGE,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CREATE_POST_SET_ERROR', () => {
    const error = new Error('Oops!');
    const stateBefore = {
      error: null,
    };
    const stateAfter = {
      error,
    };
    expect(
      createPostReducer(stateBefore, {
        type: types.CREATE_POST_SET_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CREATE_POST_SET_SELECTED_TAGS', () => {
    const tags = [
      {
        title: 'Redux',
      },
      {
        title: 'React',
      },
    ];
    const stateBefore = {
      selectedTags: [],
    };
    const stateAfter = {
      selectedTags: tags,
    };
    expect(
      createPostReducer(stateBefore, {
        type: types.CREATE_POST_SET_SELECTED_TAGS,
        tags,
      })
    ).toEqual(stateAfter);
  });
});
