import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ArchiveActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Columns from 'grommet-udacity/components/Columns';
import { Divider, WithToast, WithLoading, PostPreview } from 'components';
import postDataFragment from './graph/fragments';

class ArchiveContainer extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const tag = decodeURIComponent(this.props.location.query.tag);
    this.props.actions.setSelectedTag(tag);
  }
  render() {
    const {
      isLoading,
      loadingError,
      posts,
      actions,
      selectedTag,
    } = this.props;
    return (
      <Section className={styles.archive} colorIndex="light-2">
        <WithLoading isLoading={isLoading}>
          <WithToast
            error={loadingError}
            onClose={() => actions.clearBlogToast('error')}
          >
            <Box pad="large" align="center" justify="center">
              <Heading align="center">
                Blog Archive
              </Heading>
              <Heading align="center" tag="h3">
                {selectedTag ? `Tag: ${selectedTag}` : 'No selected tag'}
              </Heading>
              <Divider />
              <Columns
                masonry
                maxCount={2}
                align="center"
                justify="center"
              >
                {posts && posts.length > 0 && posts.map((post, i) =>
                  <PostPreview
                    key={i}
                    post={post}
                  />
                )}
              </Columns>
            </Box>
          </WithToast>
        </WithLoading>
      </Section>
    );
  }
}

ArchiveContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingError: PropTypes.object,
  posts: PropTypes.array,
  actions: PropTypes.object.isRequired,
  selectedTag: PropTypes.string,
  location: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  selectedTag: state.archive.selectedTag,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    ArchiveActionCreators,
    dispatch
  ),
});

const Container = cssModules(ArchiveContainer, styles);

const archiveQuery = gql`
  query posts($tag: String) {
    posts(tag: $tag) {
      ...postDataFragment
    }
  }
`;

const ContainerWithData = graphql(archiveQuery, {
  options: (ownProps) => ({
    variables: {
      tag: ownProps.selectedTag,
    },
    fragments: [postDataFragment],
  }),
  props: ({ data: { loading, error, posts } }) => ({
    posts,
    isLoading: loading,
    loadingError: error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
