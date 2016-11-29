import { createSelector } from 'reselect';

export const getProjects = () => (state) => state.projects;
export const getCurrentPage = () => (state) => state.currentPage;
export const getPerPage = () => (state) => state.perPage;
export const getSearchTerm = () => (state) => state.searchTerm;
export const getIsFiltering = () => (state) => state.isFiltering;
export const getTags = () => (state) => state.tags;

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
  (visibleProjects, searchTerm, tags, isFiltering) => {
    const filterableTerm = searchTerm && searchTerm !== '' ?
      searchTerm.toLowerCase() : null;
    if (isFiltering) {
      if (visibleProjects && visibleProjects.length > 0) {
        if (filterableTerm) {
          return visibleProjects.filter(project =>
            project.title.toLowerCase().includes(filterableTerm) ||
                project.description.toLowerCase().includes(filterableTerm) ||
                  project.user.name.toLowerCase().includes(filterableTerm)
          );
        }
        if (tags && tags.length > 0) {
          return visibleProjects.filter(project => {
            const projectTags = project.tags.map(tag => tag.title);
            const includeTag = tags.map(tag => projectTags.includes(tag));
            return includeTag.indexOf(true) >= 0;
          });
        }
        return visibleProjects;
      }
    }
    return visibleProjects;
  }
);
