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
import { Comment, Divider } from 'components';
let RichTextEditor;
if (typeof window !== 'undefined') {
  RichTextEditor = require('react-rte').default;
}

const CommentFeed = ({
  value,
  onChange,
  onSubmit,
  comments,
  onUpvote,
}) => (
  <Section align="center" colorIndex="light-2">
    <Heading align="center">
      Comments
    </Heading>
    <Divider />
    {RichTextEditor != null && // eslint-disable-line
      <Box className="container">
        <Article className="panel">
          <RichTextEditor
            value={value}
            onChange={(val) => onChange(val)}
          />
          <Footer
            align="center"
            justify="center"
            pad="medium"
          >
            <Button label="Submit Comment" onClick={onSubmit} />
          </Footer>
        </Article>
        <Article className="panel">
          <Columns size="large" justify="center">
            <List>
              {comments &&
                comments
                  .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                  .map((comment, i) =>
                    <ListItem key={i}>
                      <Comment
                        onUpvote={onUpvote}
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
);

CommentFeed.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  comments: PropTypes.array,
  onUpvote: PropTypes.func.isRequired,
};

export default CommentFeed;
