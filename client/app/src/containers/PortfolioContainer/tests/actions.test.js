import expect from 'expect';
import * as actions from '../actions';
import * as types from '../constants';

describe('Portfolio actions', () => {
  it('should have a type of PORTFOLIO_SET_PROJECTS', () => {
    const projects = [];
    const expected = {
      type: types.PORTFOLIO_SET_PROJECTS,
      projects,
    };
    expect(actions.portfolioSetProjects(projects)).toEqual(expected);
  });
  it('should have a type of PORTFOLIO_SET_CURRENT_PAGE', () => {
    const page = 2;
    const expected = {
      type: types.PORTFOLIO_SET_CURRENT_PAGE,
      page,
    };
    expect(
      actions.portfolioSetCurrentPage(page)
    ).toEqual(expected);
  });
  it('should have a type of PORTFOLIO_SET_SEARCH_TERM', () => {
    const searchTerm = 'Foobar';
    const expected = {
      type: types.PORTFOLIO_SET_SEARCH_TERM,
      searchTerm,
    };
    expect(
      actions.portfolioSetSearchTerm(searchTerm)
    ).toEqual(expected);
  });
  it('should have a type of PORTFOLIO_CLEAR_SEARCH_TERM', () => {
    const expected = {
      type: types.PORTFOLIO_CLEAR_SEARCH_TERM,
    };
    expect(
      actions.portfolioClearSearchTerm()  
    ).toEqual(expected);
  });
  it('should have a type of PORTFOLIO_SET_TAGS', () => {
    const tags = [{}, {}];
    const expected = {
      type: types.PORTFOLIO_SET_TAGS,
      tags,
    };
    expect(
      actions.portfolioSetTags(tags)  
    ).toEqual(expected);
  });
});
