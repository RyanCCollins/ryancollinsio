import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TutorialActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Article from 'grommet-udacity/components/Article';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import Columns from 'grommet-udacity/components/Columns';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Headline from 'grommet-udacity/components/Headline';
import Paragraph from 'grommet-udacity/components/Paragraph';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Divider, WithLoading, Comment } from 'components';
let RichTextEditor;
if (typeof window !== 'undefined') {
  RichTextEditor = require('react-rte').default;
}

class TutorialContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.checkAuthToken = this.checkAuthToken.bind(this);
    if (RichTextEditor) {
      this.state = {
        value: RichTextEditor.createEmptyValue(),
      };
    }
  }
  handleUpvote(id) {
    const {
      upvoteComment,
      refetch,
      user,
    } = this.props;
    this.checkAuthToken();
    const data = {
      variables: {
        authToken: user.authToken,
        id,
      },
    };
    upvoteComment(data).then(() => {
      refetch();
    });
  }
  handleSubmit() {
    const {
      mutate,
      refetch,
      user,
    } = this.props;
    this.checkAuthToken();
    const data = {
      variables: {
        authToken: user.authToken,
        comment: {
          body: this.state.value.toString('markdown'),
        },
        id: this.props.tutorial.id,
      },
    };
    mutate(data).then(() => {
      refetch();
    }).catch((err) => {
      console.log(`It failed ${err}`);
    });
  }
  checkAuthToken() {
    const {
      user,
    } = this.props;
    if (!user.authToken) {
      this.context.router.push('/login');
    }
  }
  render() {
    const {
      isLoading,
      tutorial,
    } = this.props;
    return (
      <WithLoading fullscreen isLoading={isLoading}>
        <Section
          className={styles.portfolio}
          colorIndex="light-2"
          align="center"
          justify="center"
          pad="large"
        >
          <Headline className="heading" align="center">
            {tutorial && tutorial.title}
          </Headline>
          <Divider />
        </Section>
        {tutorial &&
          <Box align="center" justify="center" colorIndex="light-2">
            <iframe
              width="960"
              height="480"
              src={`https://www.youtube.com/embed/${tutorial.link.split('/')[3]}`}
              frameBorder="0"
              allowFullScreen
            />
          </Box>
        }
        <Section align="center" colorIndex="light-2">
          <Paragraph>
            {tutorial && tutorial.description}
          </Paragraph>
          <Paragraph>
            {tutorial && tutorial.body}
          </Paragraph>
        </Section>
        <Section align="center" colorIndex="light-2">
          {RichTextEditor != null && // eslint-disable-line
            <Box className="container">
              <Article className="panel">
                <RichTextEditor
                  value={this.state.value}
                  onChange={(value) => this.setState({ value }) }
                />
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
                    {tutorial && tutorial.comments &&
                      tutorial.comments
                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                        .map((comment, i) =>
                      <ListItem key={i}>
                        <Comment
                          onUpvote={this.handleUpvote}
                          comment={comment}
                        />
                      </ListItem>
                    )}
                  </List>
                </Columns>
              </Article>
            </Box>
          }
        </Section>
      </WithLoading>
    );
  }
}

TutorialContainer.propTypes = {
  tutorial: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  upvoteComment: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  user: state.app.user,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    TutorialActionCreators,
    dispatch
  ),
});

const Container = cssModules(TutorialContainer, styles);

const tutorialQuery = gql`
  query tutorial($slug: String!) {
    tutorial(slug: $slug) {
      link
      title
      description
      status
      slug
      comments {
        body
        user {
          name
          avatar
          bio
        }
      }
      user {
        name
        avatar
        bio
      }
      body
      image
    }
  }
`;

const ContainerWithData = graphql(tutorialQuery, {
  options: (ownProps) => ({
    skip: !ownProps.params.slug,
    variables: {
      slug: ownProps.params.slug,
    },
  }),
  props: ({ data: { loading, tutorial } }) => ({
    tutorial,
    isLoading: loading,
  }),
})(Container);

const createCommentMutation = gql`
  mutation createTutorialComment($authToken: String!,
    $comment: CommentInput, $id: ID!) {
      CreateTutorialComment(input: {
        auth_token: $authToken,
        comment: $comment,
        tutorial_id: $id
      }) {
        tutorial_comment {
          id
        }
      }
    }
`;

const ContainerWithMutation = graphql(createCommentMutation)(ContainerWithData);

const upvoteCommentMutation = gql`
mutation upvoteComment($authToken: String!, $id: ID!) {
  VoteTutorialComment(input: { auth_token: $authToken, tutorial_comment_id: $id }) {
    total_votes
  }
}
`;

const ContainerWithMoreMutations = graphql(upvoteCommentMutation, {
  props: ({ mutate }) => ({
    upvoteComment: mutate,
  }),
})(ContainerWithMutation);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithMoreMutations);
