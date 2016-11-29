import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BlogActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { WithLoading, WithToast } from 'components';
import Section from 'grommet-udacity/components/Section';
import Box from 'grommet-udacity/components/Box';
import Columns from 'grommet-udacity/components/Columns';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { PostPreview, Divider, PaginatorFooter, SearchForm, SearchMeta } from 'components';
import { getVisiblePostsFiltered } from './selectors';
import Scroll from 'react-scroll';

class BlogContainer extends Component {
  constructor() {
    super();
    this.handleTags = this.handleTags.bind(this);
    this.handleApplyingFilter = this.handleApplyingFilter.bind(this);
  }
  componentWillReceiveProps({ allPosts }) {
    if (allPosts !== this.props.allPosts) {
      this.props.actions.setBlogPosts(allPosts);
    }
  }
  handleApplyingFilter() {
    this.props.actions.blogApplyFilters();
    const scroll = Scroll.animateScroll;
    scroll.scrollToTop();
  }
  handleTags(value) {
    const {
      tags,
    } = this.props;
    const newTags = value.map((tag) => tags[tag] || tag);
    this.props.actions.blogSetTags(newTags);
  }
  render() {
    const {
      isLoading,
      postError,
      actions,
      allPosts,
      posts,
      searchTerm,
      currentPage,
      perPage,
      postTags,
      tags,
      isFiltering,
      isShowingModal,
    } = this.props;
    const filterableTerm = searchTerm && searchTerm !== '' ?
      searchTerm.toLowerCase() : null;
    return (
      <Box className={styles.blog} colorIndex="light-2">
        <WithLoading isLoading={isLoading}>
          <WithToast
            error={postError}
            onClose={() => actions.clearBlogToast('error')}
          >
            <Box pad="large" align="center" justify="center">
              <Headline className="heading" align="center">
                Blog
              </Headline>
              {isFiltering &&
                <SearchMeta
                  tags={tags}
                  array={posts}
                  searchTerm={searchTerm}
                />
              }
              <Divider />
              {posts && posts.length > 0 ?
                <Section primary className={styles.innerBox}>
                  <Columns
                    className={styles.columns}
                    masonry
                    maxCount={2}
                    align="center"
                    justify="center"
                    size="large"
                  >
                    {posts.map((post, i) =>
                      <PostPreview
                        searchTerm={filterableTerm}
                        isFiltering={isFiltering}
                        key={i}
                        post={post}
                      />
                    )}
                  </Columns>
                </Section>
              :
                <Section align="center" justify="center" pad="large">
                  <Heading align="center">
                    No posts found
                  </Heading>
                </Section>
              }
              <Section direction="column" full="horizontal" justify="center" align="center">
                <Box pad="medium" align="center">
                  {postTags && postTags.length > 0 &&
                    <SearchForm
                      inputTags={tags}
                      onChangeTags={this.handleTags}
                      tags={postTags}
                      searchTerm={searchTerm}
                      onChange={({ target }) => actions.blogSetSearchTerm(target.value)}
                      onToggleModal={actions.blogToggleModal}
                      isShowingModal={isShowingModal}
                      onApplyFilters={this.handleApplyingFilter}
                      onClearFilters={actions.blogClearFilters}
                      isFiltering={isFiltering}
                    />
                  }
                </Box>
              </Section>
            </Box>
            {!isFiltering && allPosts && allPosts.length > perPage &&
              <PaginatorFooter
                onChange={(newPage) => actions.blogSetCurrentPage(newPage)}
                currentPage={currentPage}
                total={allPosts.length}
                pageSize={perPage}
              />
            }
          </WithToast>
        </WithLoading>
      </Box>
    );
  }
}

BlogContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  postTags: PropTypes.array,
  postError: PropTypes.object,
  posts: PropTypes.array,
  allPosts: PropTypes.array,
  actions: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  tags: PropTypes.array,
  isFiltering: PropTypes.bool.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  searchTerm: state.blog.searchTerm,
  currentPage: state.blog.currentPage,
  perPage: state.blog.perPage,
  tags: state.blog.tags,
  isFiltering: state.blog.isFiltering,
  isShowingModal: state.blog.modal.isShowing,
  posts: getVisiblePostsFiltered(state.blog),
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    BlogActionCreators,
    dispatch
  ),
});

const Container = cssModules(BlogContainer, styles);

const loadPostsQuery = gql`
  query loadPosts {
    posts(status: "published") {
      id
      title
      status
      body
      slug
      created_at
      image: feature_image
      tags {
        id
        title
      }
      author: user {
        name
        avatar
        bio
      }
      comments {
        body
        user {
          name
          bio
          avatar
        }
      }
    }
    postTags {
      title
    }
  }
`;

const ContainerWithData = graphql(loadPostsQuery, {
  props: ({ data: { posts, loading, error, postTags } }) => ({
    allPosts: posts,
    isLoading: loading,
    postError: error,
    postTags,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
