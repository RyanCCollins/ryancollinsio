import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const GiphySearchPage = () => (
  <div className={styles.container} />
);

export default cssModules(GiphySearchPage, styles);
