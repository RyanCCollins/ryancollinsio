import { createSelector } from 'reselect';

export const getProjects = () => (state) => state.projects;
export const getCurrentPage = () => (state) => state.currentPage;
export const getPerPage = () => (state) => state.perPage;
export const getSearchTerm = () => (state) => state.searchTerm;
export const getTags = () => (state) => state.tags;

export const getVisibleProjects = createSelector(
  getProjects(),
  getCurrentPage(),
  getPerPage(),
  (projects, currentPage, perPage) => {
    if (projects && projects.length > 0) {
      const current = currentPage - 1;
      const from = current * perPage;
      const to = current * perPage + perPage;
      return projects.filter((_, i) =>
        i >= from && i < to
      );
    }
  }
);

export const getVisibleProjectsFiltered = createSelector(
  getVisibleProjects,
  getSearchTerm(),
  getTags(),
  (visibleProjects, searchTerm, tags) => {
    const filterableTerm = searchTerm && searchTerm !== '' ?
      searchTerm.toLowerCase() : null;
    if (filterableTerm) {
      return visibleProjects.filter(project =>
        project.title.toLowerCase().includes(filterableTerm) ||
          project.caption.toLowerCase().includes(filterableTerm) ||
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
);
