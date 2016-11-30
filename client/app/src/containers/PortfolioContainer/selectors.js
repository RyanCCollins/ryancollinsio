import { createSelector } from 'reselect';

export const getProjects = () => (state) => state.projects;
export const getCurrentPage = () => (state) => state.currentPage;
export const getPerPage = () => (state) => state.perPage;
export const getSearchTerm = () => (state) => state.searchTerm;
export const getIsFiltering = () => (state) => state.isFiltering;
export const getTags = () => (state) => state.tags;
export const getCategories = () => (state) => state.filter.categories.selected;

export const getPublishedProjects = createSelector(
  getProjects(),
  (projects) => projects.filter(proj => proj.status === 'published')
);

export const getVisibleProjects = createSelector(
  getPublishedProjects,
  getCurrentPage(),
  getPerPage(),
  getIsFiltering(),
  (projects, currentPage, perPage, isFiltering) => {
    if (projects && projects.length > 0) {
      if (!isFiltering) {
        const current = currentPage - 1;
        const from = current * perPage;
        const to = current * perPage + perPage;
        return projects.filter((_, i) =>
          i >= from && i < to
        );
      }
      return projects;
    }
  }
);

export const getFilteredProjects = createSelector(
  getVisibleProjects,
  getSearchTerm(),
  getTags(),
  getIsFiltering(),
  getCategories(),
  (visibleProjects, searchTerm, tags, isFiltering, categories) => {
    const filterableTerm = searchTerm && searchTerm !== '' ?
      searchTerm.toLowerCase() : null;
    if (isFiltering) {
      return visibleProjects.filter(project => {
        if (filterableTerm && visibleProjects && visibleProjects.length > 0) {
          return project.title.toLowerCase().includes(filterableTerm) ||
              project.description.toLowerCase().includes(filterableTerm) ||
                project.user.name.toLowerCase().includes(filterableTerm) ||
                  project.tags.map(tag => tag.title.toLowerCase()).includes(filterableTerm);
        }
        return true;
      }).filter(project => {
        if (tags && tags.length > 0) {
          const projectTags = project.tags.map(tag => tag.title);
          return projectTags.filter(tag => tags.indexOf(tag) > -1).length === tags.length;
        }
        return true;
      }).filter(project => {
        if (categories && categories.length > 0) {
          return categories.map(item => item.value).includes(project.category);
        }
        return true;
      });
    }
    return visibleProjects;
  }
);
