import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CreatePostActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import { WithToast, Divider, CreatePostForm, WithLoading } from 'components';

export const formFields = [
  'titleInput',
  'bodyInput',
  'tagsInput',
];

class CreatePostContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      actions,
      createPostError,
      message,
      fields,
      tags,
      tagsLoading,
      invalid,
    } = this.props;
    return (
      <WithLoading
        isLoading={tagsLoading}
      >
        <WithToast
          message={message}
          error={createPostError}
          onClose={(type) => actions.clearCreateProjectToast(type)}
        >
          <Box className={styles.createPost} colorIndex="light-2">
            <Headline align="center">
              Create Post
            </Headline>
            <Divider />
            <CreatePostForm
              onSubmit={e => e}
              invalid={invalid}
              fields={fields}
              pastTags={tags}
            />
          </Box>
        </WithToast>
      </WithLoading>
    );
  }
}

CreatePostContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  createPostError: PropTypes.object,
  message: PropTypes.string,
  fields: PropTypes.object.isRequired,
  tags: PropTypes.array,
  tagsError: PropTypes.object,
  tagsLoading: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    CreatePostActionCreators,
    dispatch
  ),
});

const Container = cssModules(CreatePostContainer, styles);

const FormContainer = reduxForm({
  form: 'CreatePost',
  fields: formFields,
})(Container);

const loadPostTagsQuery = gql`
  query loadPostTags {
    postTags {
      id
      title
    }
  }
`;

const ContainerWithData = graphql(loadPostTagsQuery, {
  props: ({ data: { postTags, error, loading } }) => ({
    tags: postTags,
    tagsError: error,
    tagsLoading: loading,
  }),
})(FormContainer);

const createPostMutation = gql`
  mutation createPost($authToken: String!, $post: PostInputType) {
    CreatePost(input: { auth_token: $authToken, post: $post }) {
      post {
        id
      }
    }
  }
`;

const ContainerWithMutation = graphql(createPostMutation)(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
