import * as types from './constants';

export const setPosts = (posts) => ({
  type: types.SET_POSTS,
  posts,
});

export const setProjects = (projects) => ({
  type: types.SET_PROJECTS,
  projects,
});

export const setUsers = (users) => ({
  type: types.SET_USERS,
  users,
});

export const setPostsPage = (page) => ({
  type: types.SET_POSTS_PAGE,
  page,
});

export const setProjectsPage = (page) => ({
  type: types.SET_PROJECTS_PAGE,
  page,
});

export const setUsersPage = (page) => ({
  type: types.SET_USERS_PAGE,
  page,
});

export const setActiveTab = (index) => ({
  type: types.SET_ACTIVE_TAB,
  index,
});
