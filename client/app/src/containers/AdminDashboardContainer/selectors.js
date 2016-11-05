import { createSelector } from 'reselect';

const getPosts = () => (state) => state.posts.items;
const getPostsCurrentPage = () => (state) => state.posts.currentPage;
const getPostsPerPage = () => (state) => state.posts.perPage;

const getProjects = () => (state) => state.projects.items;
const getProjectsCurrentPage = () => (state) => state.projects.currentPage;
const getProjectsPerPage = () => (state) => state.projects.perPage;

const getUsers = () => (state) => state.users.items;
const getUsersCurrentPage = () => (state) => state.users.currentPage;
const getUsersPerPage = () => (state) => state.users.perPage;

export const getPagedPosts = createSelector(
  getPosts(),
  getPostsCurrentPage(),
  getPostsPerPage(),
  (posts, currentPage, perPage) => {
    if (posts && posts.length > 0) {
      const current = currentPage - 1;
      const from = current * perPage;
      const to = current * perPage + perPage;
      return posts.filter((_, i) =>
        i >= from && i < to
      );
    }
  }
);

export const getPagedProjects = createSelector(
  getProjects(),
  getProjectsCurrentPage(),
  getProjectsPerPage(),
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

export const getPagedUsers = createSelector(
  getUsers(),
  getUsersCurrentPage(),
  getUsersPerPage(),
  (users, currentPage, perPage) => {
    if (users && users.length > 0) {
      const current = currentPage - 1;
      const from = current * perPage;
      const to = current * perPage + perPage;
      return users.filter((_, i) =>
        i >= from && i < to
      );
    }
  }
);
