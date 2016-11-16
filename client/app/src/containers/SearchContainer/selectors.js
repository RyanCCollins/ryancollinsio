import { createSelector } from 'reselect';

const getSearchData = () => (state) => state.searchData;
const getSearchTerm = () => (_, appState) => appState.searchTerm;

export const getFilteredSearchData = createSelector(
  getSearchData(),
  getSearchTerm(),
  (searchData, searchTerm) => {
    const filterableTerm = searchTerm && searchTerm !== '' ?
      searchTerm.toLowerCase() : null;
    if (searchData && searchData.posts && searchData.tutorials && searchData.projects) {
      if (filterableTerm !== null) {
        const posts = searchData.posts.filter(item =>
          item.title.toLowerCase().includes(filterableTerm) ||
            item.body.toLowerCase().includes(filterableTerm)
        );
        const projects = searchData.projects.filter(item =>
          item.title.toLowerCase().includes(filterableTerm) ||
            item.description.toLocaleLowerCase().includes(filterableTerm)
        );
        const tutorials = searchData.tutorials.filter(item =>
          item.title.toLowerCase().includes(filterableTerm) ||
            item.description.toLocaleLowerCase().includes(filterableTerm)
        );
        return {
          posts,
          projects,
          tutorials,
        };
      }
      return searchData;
    }
    return {};
  }
);
