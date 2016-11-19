import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

export const BLOG_SET_TAGS = 'BLOG_SET_TAGS';


describe('Blog actions', () => {
  it('should have a type of BLOG_SET_TAGS', () => {
    const tags = [{}, {}];
    const expected = {
      type: types.BLOG_SET_TAGS,
      tags,
    };
    expect(
      actions.blogSetTags(tags)
    ).toEqual(expected);
  });
  it('should have a type of BLOG_SET_SEARCH_TERM', () => {
    const searchTerm = 'redux';
    const expected = {
      type: types.BLOG_SET_SEARCH_TERM,
      searchTerm,
    };
    expect(actions.blogSetSearchTerm(searchTerm)).toEqual(expected);
  });
  it('should have a type of BLOG_CLEAR_SEARCH_TERM', () => {
    const expected = {
      type: types.BLOG_CLEAR_SEARCH_TERM,
    };
    expect(
      actions.blogClearSearchTerm()
    ).toEqual(expected);
  });
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
  it('should have a type of SET_BLOG_POSTS', () => {
    const posts = [];
    const expected = {
      type: types.SET_BLOG_POSTS,
      posts,
    };
    expect(
      actions.setBlogPosts(posts)
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
