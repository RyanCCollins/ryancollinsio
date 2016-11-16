import * as types from './constants';

export const initialState = {
  searchData: null,
  requiresFetch: true,
  activeIndex: 0,
};

const searchReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SET_SEARCH_DATA:
        return {
          ...state,
          searchData: action.searchData,
          requiresFetch: false,
        };
      case types.SET_ACTIVE_INDEX:
        return {
          ...state,
          activeIndex: action.index,
        };
      default:
        return state;
    }
  };

export default searchReducer;
