import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Article from 'grommet-udacity/components/Article';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import Columns from 'grommet-udacity/components/Columns';
import Heading from 'grommet-udacity/components/Heading';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import Label from 'grommet-udacity/components/Label';
import { Comment, Divider } from 'components';
import Status from 'grommet-udacity/components/icons/Status';
import { Link } from 'react-router';

let RichTextEditor;
if (typeof window !== 'undefined') {
  RichTextEditor = require('react-rte').default; // eslint-disable-line
}

const CommentFeed = ({
  value,
  onChange,
  onSubmit,
  comments,
  onUpvote,
  user,
}) => (
  <Section align="center" colorIndex="light-2" className="section__last">
    {RichTextEditor != null && // eslint-disable-line
      <Box className="container">
        <Article className="panel">
          <Heading align="center">
            Comments
          </Heading>
          <Divider />
          <RichTextEditor
            value={value}
            onChange={val => onChange(val)}
          />
          <Footer
            align="center"
            justify="center"
            pad="medium"
            direction="column"
          >
            <Button
              label="Submit Comment"
              onClick={user && user.authToken ? onSubmit : null}
            />
            {!(user && user.authToken) &&
              <Label>
                <Status
                  a11yTitle="Please Login to Comment"
                  value="critical"
                />
                <span style={{ marginLeft: 10 }}>
                  Must be <Link to="/login">logged in</Link> to comment.
                </span>
              </Label>
            }
          </Footer>
        </Article>
        {comments && comments.length > 0 &&
          <Article className="panel">
            <Columns size="large" justify="center">
              <List>
                {comments && comments
                  .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                  .map((comment, i) =>
                    <ListItem key={i}>
                      <Comment
                        onUpvote={onUpvote}
                        comment={comment}
                      />
                    </ListItem>,
                )}
              </List>
            </Columns>
          </Article>
        }
      </Box>
    }
  </Section>
);

CommentFeed.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  comments: PropTypes.array,
  onUpvote: PropTypes.func.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    authToken: PropTypes.string.isRequired,
  }),
};

export default CommentFeed;
