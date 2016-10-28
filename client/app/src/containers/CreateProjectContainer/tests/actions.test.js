import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('CreateProject actions', () => {
  it('should have a type of CREATE_PROJECT_ERROR', () => {
    const error = new Error('Oops');
    const expected = {
      type: types.CREATE_PROJECT_ERROR,
      error,
    };
    expect(
      actions.createProjectError(error)
    ).toEqual(expected);
  });
  it('should have a type of CREATE_PROJECT_MESSAGE', () => {
    const message = 'Hello world';
    const expected = {
      type: types.CREATE_PROJECT_MESSAGE,
      message,
    };
    expect(
      actions.createProjectMessage(message)
    ).toEqual(expected);
  });
  it('should have a type of CLEAR_CREATE_PROJECT_ERROR', () => {
    const expected = {
      type: types.CLEAR_CREATE_PROJECT_ERROR,
    };
    expect(
      actions.clearCreateProjectError()
    ).toEqual(expected);
  });
  it('should have a type of CLEAR_CREATE_PROJECT_MESSAGE', () => {
    const expected = {
      type: types.CLEAR_CREATE_PROJECT_MESSAGE,
    };
    expect(
      actions.clearCreateProjectMessage()
    ).toEqual(expected);
  });
  it('should have a type of CREATE_PROJECT_SET_TAGS', () => {
    const tags = [{
      title: 'Hello World',
    }];
    const expected = {
      type: types.CREATE_PROJECT_SET_TAGS,
      tags,
    };
    expect(
      actions.createProjectSetTags(tags)
    ).toEqual(expected);
  });
});
