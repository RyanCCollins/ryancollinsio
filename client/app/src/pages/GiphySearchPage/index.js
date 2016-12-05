import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { GiphySearchContainer } from 'containers';

const GiphySearchPage = () => (
  <div className={styles.container}>
    <GiphySearchContainer />
  </div>
);

export default cssModules(GiphySearchPage, styles);
