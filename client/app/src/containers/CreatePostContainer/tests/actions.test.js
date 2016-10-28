import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CreatePost actions', () => {
  it('should have a type of CREATE_POST_SET_SELECTED_TAGS', () => {
    const tags = [
      {
        title: 'Yes amazing',
      },
      {
        title: 'So cool',
      },
    ];
    const expected = {
      type: types.CREATE_POST_SET_SELECTED_TAGS,
      tags,
    };
    expect(
      actions.createPostSetSelectedTags(tags)
    ).toEqual(expected);
  });
  it('should have a type of CREATE_POST_SET_MESSAGE', () => {
    const message = 'Hello world';
    const expected = {
      type: types.CREATE_POST_SET_MESSAGE,
      message,
    };
    expect(
      actions.createPostSetMessage(message)
    ).toEqual(expected);
  });
  it('should have a type of CREATE_POST_SET_ERROR', () => {
    const error = new Error('OOps');
    const expected = {
      type: types.CREATE_POST_SET_MESSAGE,
      error,
    };
    expect(
      actions.createPostSetError(error)
    ).toEqual(expected);
  });
  it('should have a type of CREATE_POST_CLEAR_MESSAGE', () => {
    const expected = {
      type: types.CREATE_POST_CLEAR_MESSAGE,
    };
    expect(
      actions.createPostClearMessage()
    ).toEqual(expected);
  });
  it('should have a type of CREATE_POST_CLEAR_ERROR', () => {
    const expected = {
      type: types.CREATE_POST_CLEAR_ERROR,
    };
    expect(
      actions.createPostClearError()
    ).toEqual(expected);
  });
});
