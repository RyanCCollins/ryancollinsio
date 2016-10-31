import * as types from './constants';

// portfolioSetProjects :: Array -> {Action}
export const portfolioSetProjects = (projects) => ({
  type: types.PORTFOLIO_SET_PROJECTS,
  projects,
});

// portfolioSetProjects :: Int -> {Action}
export const portfolioSetCurrentPage = (page) => ({
  type: types.PORTFOLIO_SET_CURRENT_PAGE,
  page,
});

// portfolioSetSearchTerm :: String -> {Action}
export const portfolioSetSearchTerm = (term) => ({
  type: types.PORTFOLIO_SET_SEARCH_TERM,
  term,
});

// portfolioClearSearchTerm :: None -> {Action}
export const portfolioClearSearchTerm = () => ({
  type: types.PORTFOLIO_CLEAR_SEARCH_TERM,
});
