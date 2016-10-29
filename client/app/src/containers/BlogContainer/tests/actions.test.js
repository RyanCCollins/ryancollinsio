import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Blog actions', () => {
  it('should have a type of BLOG_ERROR', () => {
    const error = new Error('Oops');
    const expected = {
      type: types.BLOG_ERROR,
      error,
    };
    expect(
      actions.blogError(error)
    ).toEqual(expected);
  });
  it('should have a type of BLOG_MESSAGE', () => {
    const message = 'Hello world';
    const expected = {
      type: types.BLOG_MESSAGE,
      message,
    };
    expect(
      actions.blogMessage(message)
    ).toEqual(expected);
  });
  it('should have a type of CLEAR_BLOG_ERROR', () => {
    const expected = {
      type: types.CLEAR_BLOG_ERROR,
    };
    expect(
      actions.clearBlogError()
    ).toEqual(expected);
  });
  it('should have a type of CLEAR_BLOG_MESSAGE', () => {
    const expected = {
      type: types.CLEAR_BLOG_MESSAGE,
    };
    expect(
      actions.clearBlogMessage()
    ).toEqual(expected);
  });
  it('should have a type of BLOG_INCREMENT_CURRENT_PAGE', () => {
    const expected = {
      type: types.BLOG_INCREMENT_CURRENT_PAGE,
    };
    expect(
      actions.blogIncrementCurrentPage()
    ).toEqual(expected);
  });
  it('should have a type of BLOG_DECREMENT_CURRENT_PAGE', () => {
    const expected = {
      type: types.BLOG_DECREMENT_CURRENT_PAGE,
    };
    expect(
      actions.blogDecrementCurrentPage()
    ).toEqual(expected);
  });
  it('should have a type of BLOG_SET_CURRENT_PAGE', () => {
    const page = 2;
    const expected = {
      type: types.BLOG_SET_CURRENT_PAGE,
      page,
    };
    expect(
      actions.blogSetCurrentPage(page)
    ).toEqual(expected);
  });
});
