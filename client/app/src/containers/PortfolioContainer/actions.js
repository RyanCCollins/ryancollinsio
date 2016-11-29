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

// portfolioSetTags :: Array -> {Action}
export const portfolioSetTags = (tags) => ({
  type: types.PORTFOLIO_SET_TAGS,
  tags,
});

// portfolioApplyFilters :: None -> {Action}
export const portfolioApplyFilters = () => ({
  type: types.PORTFOLIO_APPLY_FILTERS,
});

// portfolioClearFilters :: None -> {Action}
export const portfolioClearFilters = () => ({
  type: types.PORTFOLIO_CLEAR_FILTERS,
});

// portfolioToggleModal :: None -> {Action}
export const portfolioToggleModal = () => ({
  type: types.PORTFOLIO_TOGGLE_MODAL,
});
