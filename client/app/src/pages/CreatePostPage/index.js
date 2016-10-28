import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CreatePostContainer } from 'containers';

const CreatePostPage = () => (
  <div className={styles.container}>
    <CreatePostContainer />
  </div>
);

export default cssModules(CreatePostPage, styles);
