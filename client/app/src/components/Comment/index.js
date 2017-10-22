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
      <Box separator="right" direction="column" align="center" justify="center" className="avatar-box">
        <img
          alt="user avatar"
          className="avatar avatar__small"
          src={comment.user.avatar || noAvatar}
        />
        <Label margin="small" style={{ fontSize: 14 }} align="center" uppercase>
          {comment.user.name}
        </Label>
      </Box>
      <Box>
        <Markdown content={comment.body} />
      </Box>
    </Box>
    <Box
      separator="top"
      pad={{ vertical: 'small' }}
      align="center"
      justify="between"
      style={{ width: '100%', marginTop: 12 }}
      direction="row"
    >
      <Heading margin="none" tag="h5">
        {`Posted on ${moment(comment.created_at).format('MMM Do YYYY')}`}
      </Heading>
      <Menu align="center" direction="row" inline responsive={false}>
        <Value size="small" value={comment.total_votes} />
        <Button
          plain
          icon={<LikeIcon />}
          onClick={() => onUpvote(comment.id)}
        />
      </Menu>
    </Box>
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
