import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Card from 'grommet-udacity/components/Card';
import Anchor from 'grommet-udacity/components/Anchor';
import { ResponsiveImage } from 'components';
import { highlightContent } from './utils';

const PostPreview = ({
  post,
  searchTerm,
}) => {
  const formattedDescription = highlightContent(searchTerm, post.body);
  return (
    <Box pad="large">
      <Card
        heading={post.title}
        label={post.author.name}
        thumbnail={
          <ResponsiveImage src={post.image} matchHeight />
        }
        description={`${formattedDescription.slice(0, 300)}...`}
        link={
          <Anchor
            primary
            label="Read More"
            href={`/blog/posts/${post.slug}`}
          />
        }
      />
    </Box>
  );
};

PostPreview.propTypes = {

};

export default cssModules(PostPreview, styles);
