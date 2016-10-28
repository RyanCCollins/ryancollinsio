import React, { PropTypes } from 'react';
import Article from 'grommet-udacity/components/Article';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Markdown from 'grommet-udacity/components/Markdown';
import Headline from 'grommet-udacity/components/Headline';
import Hero from 'grommet-udacity/components/Hero';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Post = ({
  post,
}) => (
  <Box
    style={{ marginTop: 0, paddingTop: 0 }}
  >
    <Hero
      backgroundImage={post.image}
    >
      <Headline strong className={styles.headline} align="center">
        {post.title}
      </Headline>
    </Hero>
    <Section
      className={styles.articleWrapper}
      pad="large"
    >
      <Article align="center" className={`${styles.post} markdown-body`}>
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
  </Box>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default cssModules(Post, styles);
