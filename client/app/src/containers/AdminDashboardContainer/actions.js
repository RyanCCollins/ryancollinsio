import { push } from 'react-router-redux';

import * as types from './constants';

export const setPosts = posts => ({
  type: types.SET_POSTS,
  posts,
});

export const setProjects = projects => ({
  type: types.SET_PROJECTS,
  projects,
});

export const setUsers = users => ({
  type: types.SET_USERS,
  users,
});

export const setPostsPage = page => ({
  type: types.SET_POSTS_PAGE,
  page,
});

export const setProjectsPage = page => ({
  type: types.SET_PROJECTS_PAGE,
  page,
});

export const setUsersPage = page => ({
  type: types.SET_USERS_PAGE,
  page,
});

export const setActiveTab = index => ({
  type: types.SET_ACTIVE_TAB,
  index,
});

export const editProject = project => (dispatch) => {
  dispatch(
    push(`/admin/create-project?projectId=${project.id}&action=edit`),
  );
};

export const showProject = project => (dispatch) => {
  dispatch(
    push(`/portfolio/projects/${project.slug}`),
  );
};

export const deleteProject = () => () => {

};

export const editPost = post => (dispatch) => {
  dispatch(
    push(`/admin/create-post?postId=${post.id}&action=edit`),
  );
};

export const showPost = post => (dispatch) => {
  dispatch(
    push(`/blog/posts/${post.slug}`),
  );
};

export const deletePost = () => () => {};
