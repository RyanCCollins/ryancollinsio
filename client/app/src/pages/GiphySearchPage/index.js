import React from 'react';
import cssModules from 'react-css-modules';
import { GiphySearchContainer } from 'containers'; // eslint-disable-line
import styles from './index.module.scss';

const GiphySearchPage = () => (
  <div className={styles.container}>
    <GiphySearchContainer />
  </div>
);

export default cssModules(GiphySearchPage, styles);
