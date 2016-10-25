import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Divider = () => (
  <span className={styles.divider}></span>
);

export default cssModules(Divider, styles);
