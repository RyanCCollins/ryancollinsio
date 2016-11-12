import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Card from 'grommet-udacity/components/Card';
import Anchor from 'grommet-udacity/components/Anchor';
import Heading from 'grommet-udacity/components/Heading';
import { ResponsiveImage, TagList } from 'components';
import { highlightContent } from './utils';

const PostPreview = ({
  post,
  searchTerm,
}) => {
  const formattedDescription = highlightContent(searchTerm, post.body);
  return (
    <Box pad="large">
      <Card
        heading={
          <Box>
            <TagList tags={post.tags} />
            <Heading align="start" tag="h2" strong>
              {post.title}
            </Heading>
          </Box>
        }
        label={post.author.name}
        thumbnail={
          <Anchor href={`/blog/posts/${post.slug}`}>
            <ResponsiveImage src={post.image} matchHeight />
          </Anchor>
        }
        description={
          `${searchTerm ? formattedDescription.slice(0, 300) : post.body.slice(0, 300)}...`
        }
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
  post: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
};

export default cssModules(PostPreview, styles);
