import expect from 'expect';
import * as types from '../constants';
import blogReducer, { initialState } from '../reducer';

describe('blogReducer', () => {
  it('returns the initial state', () => {
    expect(
      blogReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should handle reducer for BLOG_CLEAR_SEARCH_TERM', () => {
    const stateBefore = {
      searchTerm: 'Hi!',
    };
    const stateAfter = {
      searchTerm: null,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.BLOG_CLEAR_SEARCH_TERM,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for BLOG_SET_SEARCH_TERM', () => {
    const searchTerm = 'Hi!';
    const stateBefore = {
      searchTerm: null,
    };
    const stateAfter = {
      searchTerm,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.BLOG_SET_SEARCH_TERM,
        searchTerm,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for BLOG_ERROR', () => {
    const error = new Error('An error has occured');
    const stateBefore = {
      error: null,
    };
    const stateAfter = {
      error,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.BLOG_ERROR,
        error,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for BLOG_MESSAGE', () => {
    const message = 'It worked!';
    const stateBefore = {
      message: null,
    };
    const stateAfter = {
      message,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.BLOG_MESSAGE,
        message,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_BLOG_ERROR', () => {
    const error = new Error('An error has occured');
    const stateBefore = {
      error,
    };
    const stateAfter = {
      error: null,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.CLEAR_BLOG_ERROR,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for CLEAR_BLOG_MESSAGE', () => {
    const message = 'It worked!';
    const stateBefore = {
      message,
    };
    const stateAfter = {
      message: null,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.CLEAR_BLOG_MESSAGE,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for BLOG_SET_CURRENT_PAGE', () => {
    const page = 4;
    const stateBefore = {
      currentPage: 1,
    };
    const stateAfter = {
      currentPage: 4,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.BLOG_SET_CURRENT_PAGE,
        page,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for SET_BLOG_POSTS', () => {
    const posts = [{ id: 0 }, { id: 1 }];
    const stateBefore = {
      posts: []
    };
    const stateAfter = {
      posts,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.SET_BLOG_POSTS,
        posts,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for BLOG_SET_TAGS', () => {
    const tags = [{ id: 1 }, { id: 2 }];
    const stateBefore = {
      tags: [],
      isFiltering: false,
    };
    const stateAfter = {
      tags,
      isFiltering: true,
    };
    expect(
      blogReducer(stateBefore, {
        type: types.BLOG_SET_TAGS,
        tags,
      })
    ).toEqual(stateAfter);
  });
});
