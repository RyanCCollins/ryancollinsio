import * as types from './constants';

// setSearchData :: None -> {Action}
export const setSearchData = (searchData) => ({
  type: types.SET_SEARCH_DATA,
  searchData,
});

export const setActiveIndex = (index) => ({
  type: types.SET_ACTIVE_INDEX,
  index,
});
