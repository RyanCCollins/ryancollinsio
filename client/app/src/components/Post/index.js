import React, { PropTypes } from 'react';
import Article from 'grommet-udacity/components/Article';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Markdown from 'grommet-udacity/components/Markdown';
import Headline from 'grommet-udacity/components/Headline';
import Hero from 'grommet-udacity/components/Hero';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { PostMeta } from 'components';

const Post = ({
  post,
}) => (
  <Box
    style={{ marginTop: 0, paddingTop: 0 }}
  >
    <Hero
      backgroundImage={post.image}
    >
      <Box colorIndex="grey-1-a" pad="large" style={{ width: '100%' }}>
        <Headline strong className={styles.headline} align="center">
          {post.title}
        </Headline>
      </Box>
    </Hero>
    <Section
      className="container"
    >
      <Article
        align="center"
        justify="center"
        className="panel markdown-body"
      >
        <Markdown
          components={{
            h1: { props: { strong: true } },
            h2: { props: { strong: true } },
            p: { props: { size: 'large' } },
            img: { props: { size: 'small' } },
          }}
          content={post.body}
        />
      </Article>
    </Section>
    <PostMeta post={post} />
  </Box>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default cssModules(Post, styles);
