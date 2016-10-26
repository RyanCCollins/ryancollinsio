import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PostActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Article from 'grommet-udacity/components/Article';
import Button from 'grommet-udacity/components/Button';
import Box from 'grommet-udacity/components/Box';
import Footer from 'grommet-udacity/components/Footer';
import Columns from 'grommet-udacity/components/Columns';
import Markdown from 'grommet-udacity/components/Markdown';
import Label from 'grommet-udacity/components/Label';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import { WithLoading, Post, Divider } from 'components';
import RTE from 'react-rte';
import moment from 'moment';

class PostContainer extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: RTE.createEmptyValue(),
    };
  }
  handleSubmit() {
    const {
      mutate,
      refetch,
    } = this.props;
    const user = {
      id: 1,
      authToken: 'urCdQvKupT7G4N_hoY7c',
    };
    const data = {
      variables: {
        authToken: user.authToken,
        comment: {
          body: this.state.value.toString('markdown'),
        },
        id: this.props.post.id,
      },
    };
    mutate(data).then(() => {
      refetch();
    }).catch((err) => {
      console.log(`It failed ${err}`);
    });
  }
  render() {
    const {
      isLoading,
      post,
    } = this.props;
    return (
      <Section className={styles.postPage}>
        <WithLoading isLoading={isLoading}>
          {post &&
            <Post post={post} />
          }
        </WithLoading>
        <Section>
          <Heading align="center">
            Comments
          </Heading>
          <Divider />
          <Box className="container">
            <Article className="panel">
              <RTE value={this.state.value} onChange={(value) => this.setState({ value }) } />
              <Footer
                align="center"
                justify="center"
                pad="medium"
              >
                <Button label="Submit Comment" onClick={this.handleSubmit} />
              </Footer>
            </Article>
            <Article className="panel">
              <Columns size="large" justify="center">
                <List>
                  {post &&
                    post.comments
                      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                      .map((comment, i) =>
                    <ListItem>
                      <Box key={i} direction="row">
                        <Box align="center" justify="center" style={{ marginRight: 40 }}>
                          <img className="avatar avatar__small" src={comment.user.avatar} />
                          <Label uppercase>
                            {comment.user.name}
                          </Label>
                        </Box>
                        <Box align="center" justify="center">
                          <Heading tag="h4">
                            {`on ${moment(comment.created_at).format('MMM Do YY h:mm:ss a')}`}
                          </Heading>
                          <Markdown content={comment.body} />
                        </Box>
                      </Box>
                    </ListItem>
                  )}
                </List>
              </Columns>
            </Article>
          </Box>
        </Section>
      </Section>
    );
  }
}

PostContainer.propTypes = {
  post: PropTypes.object,
  isLoading: PropTypes.bool.isRequired,
  postError: PropTypes.object,
  mutate: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  // myProp: state.myProp,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    PostActionCreators,
    dispatch
  ),
});

const Container = cssModules(PostContainer, styles);

const loadPostQuery = gql`
  query loadPost($slug: String) {
    post(slug: $slug) {
      id
      title
      body
      slug
      created_at
      image: feature_image
      comments {
        body
        created_at
        user {
          name
          bio
          avatar
        }
      }
    }
  }
`;

const ContainerWithData = graphql(loadPostQuery, {
  options: (ownProps) => ({
    skip: !ownProps.params.slug,
    variables: {
      slug: ownProps.params.slug,
    },
  }),
  props: ({ data: { post, loading, error, refetch } }) => ({
    post,
    isLoading: loading,
    postError: error,
    refetch,
  }),
})(Container);

const createCommentMutation = gql`
  mutation createPostComment($authToken: String!,
    $comment: CommentInput, $id: ID!) {
      CreatePostComment(input: {
        auth_token: $authToken,
        comment: $comment,
        post_id: $id
      }) {
        post_comment {
          body
        }
      }
    }
`;

const ContainerWithMutation = graphql(createCommentMutation)(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMutation);
