import { createSelector } from 'reselect';

const getPosts = () => (state) => state.posts;
const getCurrentPage = () => (state) => state.currentPage;
const getPerPage = () => (state) => state.perPage;
const getSearchTerm = () => (state) => state.searchTerm;
const getTags = () => (state) => state.tags;

export const getVisiblePosts = createSelector(
  getPosts(),
  getCurrentPage(),
  getPerPage(),
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

export const getVisiblePostsFiltered = createSelector(
  getVisiblePosts,
  getTags(),
  getSearchTerm(),
  (visiblePosts, tags, searchTerm) => {
    const filterableTerm = searchTerm && searchTerm !== '' ?
      searchTerm.toLowerCase() : null;
    if (filterableTerm) {
      return visiblePosts.filter(post =>
        post.title.toLowerCase().includes(filterableTerm) ||
          post.body.toLowerCase().includes(filterableTerm) ||
            post.author.name.toLowerCase().includes(filterableTerm)
      );
    }
    if (tags && tags.length > 0) {
      return visiblePosts.filter(post => {
        const postTags = post.tags.map(tag => tag.title);
        const includeTag = tags.map(tag => postTags.includes(tag));
        return includeTag.indexOf(true) >= 0;
      });
    }
    return visiblePosts;
  }
);
