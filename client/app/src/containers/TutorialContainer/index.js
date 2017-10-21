import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Paragraph from 'grommet-udacity/components/Paragraph';
import Markdown from 'grommet-udacity/components/Markdown';
import { compose } from 'recompose';
import { Divider, WithLoading, CommentFeed, WithToast } from 'components';
import withData from './gql';
import * as TutorialActionCreators from './actions';
import styles from './index.module.scss';

let RichTextEditor;
if (typeof window !== 'undefined') {
  RichTextEditor = require('react-rte').default; // eslint-disable-line
}

class TutorialContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.checkAuthToken = this.checkAuthToken.bind(this);
    this.handleResettingComment = this.handleResettingComment.bind(this);
  }
  componentDidMount() {
    this.handleResettingComment();
  }
  handleResettingComment() {
    if (RichTextEditor) {
      this.props.actions.tutorialEditComment(RichTextEditor.createEmptyValue());
    }
  }
  handleUpvote(id) {
    const {
      upvoteComment,
      refetch,
      user,
    } = this.props;
    if (!user || !user.authToken) {
      this.checkAuthToken();
    } else {
      const data = {
        variables: {
          authToken: user.authToken,
          id: parseInt(id, 10),
        },
      };
      upvoteComment(data).then(() => {
        refetch();
      }).catch((err) => {
        this.props.actions.tutorialError(err);
      });
    }
  }
  handleSubmit() {
    const {
      mutate,
      refetch,
      user,
      commentInput,
    } = this.props;
    if (!user || !user.authToken) {
      this.checkAuthToken();
    } else {
      const data = {
        variables: {
          authToken: user.authToken,
          comment: {
            body: commentInput.toString('markdown'),
          },
          id: parseInt(this.props.tutorial.id, 10),
        },
      };
      mutate(data).then(() => {
        refetch();
        this.props.actions.tutorialMessage('Comment successfully submitted!');
        this.handleResettingComment();
      }).catch((err) => {
        this.props.actions.tutorialError(err);
      });
    }
  }
  checkAuthToken() {
    const {
      user,
    } = this.props;
    if (!user || !user.authToken) {
      this.context.router.push('/login');
    }
  }
  render() {
    const {
      isLoading,
      tutorial,
      commentInput,
      actions,
      commentError,
      message,
      user,
    } = this.props;
    return (
      <WithLoading fullscreen isLoading={isLoading}>
        <WithToast
          error={commentError}
          message={message}
          onClose={actions.tutorialClearToast}
        >
          <Section
            primary
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
            <Box align="center" pad="medium" className="main-text markdown-body">
              <Markdown content={tutorial && tutorial.body} />
            </Box>
          </Section>
          <CommentFeed
            value={commentInput}
            onChange={value => actions.tutorialEditComment(value)}
            onSubmit={this.handleSubmit}
            comments={tutorial && tutorial.comments}
            onUpvote={this.handleUpvote}
            user={user}
          />
        </WithToast>
      </WithLoading>
    );
  }
}

TutorialContainer.propTypes = {
  tutorial: PropTypes.object,
  isLoading: PropTypes.bool,
  upvoteComment: PropTypes.func,
  mutate: PropTypes.func,
  refetch: PropTypes.func,
  user: PropTypes.object.isRequired,
  commentInput: PropTypes.object,
  actions: PropTypes.object.isRequired,
  commentError: PropTypes.object,
  message: PropTypes.string,
};

TutorialContainer.contextTypes = {
  router: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = state => ({
  user: state.app.user,
  commentInput: state.tutorial.commentInput,
  commentError: state.tutorial.error,
  message: state.tutorial.message,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    TutorialActionCreators,
    dispatch,
  ),
});

const Container = cssModules(TutorialContainer, styles);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withData,
)(Container);
