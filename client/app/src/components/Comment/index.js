import React, { PropTypes } from 'react';
import LikeIcon from 'grommet-udacity/components/icons/base/Like';
import DislikeIcon from 'grommet-udacity/components/icons/base/Dislike';
import Menu from 'grommet-udacity/components/Menu';
import Button from 'grommet-udacity/components/Button';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';
import Label from 'grommet-udacity/components/Label';
import Value from 'grommet-udacity/components/Value';
import moment from 'moment';

const Comment = ({
  comment,
  onUpvote,
}) => (
  <Box direction="column" style={{ width: '100%' }}>
    <Box direction="row">
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
    <Menu direction="row" inline responsive={false}>
      <Box align="center" justify="end" style={{ width: '100%' }} direction="row">
        <Value size="small" value={comment.total_votes} />
        <Button plain icon={<LikeIcon />} onClick={() => onUpvote(comment.id)} />
      </Box>
    </Menu>
  </Box>
);

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  onLike: PropTypes.func.isRequired,
};

export default Comment;
