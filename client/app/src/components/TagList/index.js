import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Anchor from 'grommet-udacity/components/Anchor';
import Box from 'grommet-udacity/components/Box';
import styles from './index.module.scss';

const TagList = ({
  tags,
  seperator,
}) => (
  <Box direction="row" responsive={false} wrap>
    {tags.map((tag, i) => {
      const s = i < tags.length - 1 ? `${seperator} ` : '';
      return (
        <span key={i}>
          <Anchor
            label={`${tag.title}`}
            className={i !== 0 ? styles.tagLinkWithMargin : styles.tagLink}
            href={`/blog/archive?tag=${encodeURIComponent(tag.title)}`}
          />
          {s}
        </span>
      );
    })}
  </Box>
);

TagList.propTypes = {
  tags: PropTypes.array.isRequired,
  seperator: PropTypes.string.isRequired,
};

TagList.defaultProps = {
  seperator: ',',
};

export default cssModules(TagList, styles);
