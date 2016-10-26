import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { BlogContainer } from 'containers';

const BlogPage = () => (
  <div className={styles.container}>
    <BlogContainer />
  </div>
);

export default cssModules(BlogPage, styles);
