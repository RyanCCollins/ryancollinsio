import { createSelector } from 'reselect';

const getPosts = () => (state) => state.posts;
const getCurrentPage = () => (state) => state.currentPage;
const getPerPage = () => (state) => state.perPage;
const getSearchTerm = () => (state) => state.searchTerm;
const getTags = () => (state) => state.tags;
const getIsFiltering = () => (state) => state.isFiltering;

export const getPublishedPosts = createSelector(
  getPosts(),
  (posts) => posts.filter(post => post.status === 'published')
);

export const getVisiblePosts = createSelector(
  getPublishedPosts,
  getCurrentPage(),
  getPerPage(),
  getIsFiltering(),
  (posts, currentPage, perPage, isFiltering) => {
    if (posts && posts.length > 0) {
      if (!isFiltering) {
        const current = currentPage - 1;
        const from = current * perPage;
        const to = current * perPage + perPage;
        return posts.filter((_, i) =>
          i >= from && i < to
        );
      }
      return posts;
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
