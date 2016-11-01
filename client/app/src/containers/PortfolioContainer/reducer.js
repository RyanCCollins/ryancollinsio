import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  projects: [],
  currentPage: 1,
  perPage: 9,
  searchTerm: null,
};

const portfolioReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.PORTFOLIO_SET_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: action.term,
          },
        });
      case types.PORTFOLIO_CLEAR_SEARCH_TERM:
        return update(state, {
          searchTerm: {
            $set: null,
          },
        });
      case types.PORTFOLIO_SET_CURRENT_PAGE:
        return update(state, {
          currentPage: {
            $set: action.page,
          },
        });
      case types.PORTFOLIO_SET_PROJECTS:
        return update(state, {
          projects: {
            $set: action.projects,
          },
        });
      default:
        return state;
    }
  };

export default portfolioReducer;
