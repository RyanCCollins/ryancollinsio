import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  posts: {
    items: [],
    perPage: 6,
    currentPage: 1,
  },
  projects: {
    items: [],
    perPage: 6,
    currentPage: 1,
  },
  users: {
    items: [],
    perPage: 6,
    currentPage: 1,
  },
  activeTab: 0,
};

const postReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case types.SET_POSTS_PAGE:
      return update(state, {
        currentPage: {
          $set: action.page,
        },
      });
    case types.SET_POSTS:
      return update(state, {
        items: {
          $set: action.posts,
        },
      });
    default:
      return state;
  }
};

const projectReducer = (state = initialState.projects, action) => {
  switch (action.type) {
    case types.SET_PROJECTS_PAGE:
      return update(state, {
        currentPage: {
          $set: action.page,
        },
      });
    case types.SET_PROJECTS:
      return update(state, {
        items: {
          $set: action.projects,
        },
      });
    default:
      return state;
  }
};

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case types.SET_USERS_PAGE:
      return update(state, {
        currentPage: {
          $set: action.page,
        },
      });
    case types.SET_USERS:
      return update(state, {
        items: {
          $set: action.users,
        },
      });
    default:
      return state;
  }
};

const adminDashboardReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.SET_ACTIVE_TAB:
        return update(state, {
          activeTab: {
            $set: action.index,
          },
        });
      case types.SET_POSTS_PAGE:
        return update(state, {
          posts: {
            $set: postReducer(state.posts, action),
          },
        });
      case types.SET_USERS_PAGE:
        return update(state, {
          users: {
            $set: userReducer(state.users, action),
          },
        });
      case types.SET_PROJECTS_PAGE:
        return update(state, {
          projects: {
            $set: projectReducer(state.projects, action),
          },
        });
      case types.SET_POSTS:
        return update(state, {
          posts: {
            $set: postReducer(state.posts, action),
          },
        });
      case types.SET_PROJECTS:
        return update(state, {
          projects: {
            $set: projectReducer(state.projects, action),
          },
        });
      case types.SET_USERS:
        return update(state, {
          users: {
            $set: userReducer(state.users, action),
          },
        });
      default:
        return state;
    }
  };

export default adminDashboardReducer;
