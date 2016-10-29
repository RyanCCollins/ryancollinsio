import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Anchor from 'grommet-udacity/components/Anchor';
import Box from 'grommet-udacity/components/Box';

const TagList = ({
  tags,
  seperator,
}) => (
  <Box direction="row" responsive={false} wrap>
    {tags.map((tag, i) => {
      const s = i < tags.length - 1 ? `${seperator} ` : '';
      return (
        <span>
          <Anchor
            label={`${tag.title}`}
            key={i}
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
  links: PropTypes.array.isRequired,
  seperator: PropTypes.string.isRequired,
};

TagList.defaultProps = {
  seperator: ',',
};

export default cssModules(TagList, styles);
