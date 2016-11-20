import expect from 'expect';
import * as types from '../constants';
import portfolioReducer, { initialState } from '../reducer';

describe('portfolioReducer', () => {
  it('returns the initial state', () => {
    expect(
      portfolioReducer(undefined, {})
    ).toEqual(initialState);
  });
  it('should respond to PORTFOLIO_SET_PROJECTS', () => {
    const projects = [
      {
        id: 1,
      },
    ];
    const stateBefore = {
      projects: [],
    };
    const stateAfter = {
      projects,
    };
    expect(
      portfolioReducer(stateBefore, {
        type: types.PORTFOLIO_SET_PROJECTS,
        projects,
      })
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PORTFOLIO_SET_CURRENT_PAGE', () => {
    const page = 2;
    const stateBefore = {
      currentPage: 1,
    };
    const stateAfter = {
      currentPage: page,
    };
    expect(
      portfolioReducer(stateBefore, {
        type: types.PORTFOLIO_SET_CURRENT_PAGE,
        page,
      })  
    ).toEqual(stateAfter);
  });
  it('should handle reducer for PORTFOLIO_SET_SEARCH_TERM', () => {
    const searchTerm = 'fazzbuzz';
    const stateBefore = {
      searchTerm: null,
      isFiltering: false,
    };
    const stateAfter = {
      searchTerm,
      isFiltering: true,
    };
    expect(
      portfolioReducer(stateBefore, {
        type: types.PORTFOLIO_SET_SEARCH_TERM,
        searchTerm,
      })  
    ).toEqual(stateAfter);   
  });
  it('should handle reducer for PORTFOLIO_CLEAR_SEARCH_TERM', () => {
    const stateBefore = {
      searchTerm: 'Foobar',
      isFiltering: true,
    };
    const stateAfter = {
      searchTerm: null,
      isFiltering: false,
    };
    expect(
      portfolioReducer(stateBefore, {
        type: types.PORTFOLIO_CLEAR_SEARCH_TERM,
      })  
    ).toEqual(stateAfter);  
  });
  it('should handle reducer for PORTFOLIO_SET_TAGS', () => {
    const tags = [{ id: 0 }, { id: 1 }];
    const stateBefore = {
      tags: [],
      isFiltering: false,
    };
    const stateAfter = {
      tags,
      isFiltering: true,
    };
    expect(
      portfolioReducer(stateBefore, {
        type: types.PORTFOLIO_SET_TAGS,
        tags,
      })  
    ).toEqual(stateAfter);  
  });
});