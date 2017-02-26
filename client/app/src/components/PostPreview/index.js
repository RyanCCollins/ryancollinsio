import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet-udacity/components/Box';
import Card from 'grommet-udacity/components/Card';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet-udacity/components/Heading';
import Markdown from 'grommet-udacity/components/Markdown';
import { ResponsiveImage, TagList } from 'components';
import { highlightContent } from './utils';

const PostPreview = ({
  post,
  searchTerm,
  isFiltering,
}) => {
  const formattedDescription = highlightContent(searchTerm, post.body);
  return (
    <Box pad="large">
      <Card
        className={styles.card}
        colorIndex="light-1"
        size="large"
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
          <Anchor path={`/blog/posts/${post.slug}`}>
            <ResponsiveImage src={post.image} matchHeight />
          </Anchor>
        }
        description={
          <div className={styles.description}>
            <Markdown
              content={
                `${searchTerm && isFiltering ?
                  formattedDescription.slice(0, 500) : post.body.slice(0, 500)}`
              }
            />
          </div>
        }
        link={
          <Anchor
            primary
            label="Read More"
            path={`/blog/posts/${post.slug}`}
          />
        }
      />
    </Box>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object.isRequired,
  searchTerm: PropTypes.string,
  isFiltering: PropTypes.bool.isRequired,
};

export default cssModules(PostPreview, styles);
