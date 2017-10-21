import React, { PropTypes } from 'react';
import LikeIcon from 'grommet-udacity/components/icons/base/Like';
import Menu from 'grommet-udacity/components/Menu';
import Button from 'grommet-udacity/components/Button';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';
import Label from 'grommet-udacity/components/Label';
import Value from 'grommet-udacity/components/Value';
import moment from 'moment';

const noAvatar = 'http://bit.ly/2dqCGdd';

const Comment = ({
  comment,
  onUpvote,
}) => (
  <Box direction="column" style={{ width: '100%' }}>
    <Box direction="row">
      <Box direction="row" align="center" justify="center" className="avatar-box">
        <img
          style={{ marginRight: 8 }}
          alt="user avatar"
          className="avatar avatar__small"
          src={comment.user.avatar || noAvatar}
        />
        <Label uppercase>
          {comment.user.name}
        </Label>
      </Box>
      <Box>
        <Markdown content={comment.body} />
      </Box>
    </Box>
    <Menu direction="row" inline responsive={false}>
      <Box align="center" justify="between" style={{ width: '100%' }} direction="row">
        <Heading tag="h4">
          {`on ${moment(comment.created_at).format('MMM Do YY h:mm:ss a')}`}
        </Heading>
        <Box>
          <Value size="small" value={comment.total_votes} />
          <Button
            plain
            icon={<LikeIcon />}
            onClick={() => onUpvote(comment.id)}
          />
        </Box>
      </Box>
    </Menu>
  </Box>
);

Comment.propTypes = {
  comment: PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    user: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
    total_votes: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }),
  onUpvote: PropTypes.func.isRequired,
};

export default Comment;
