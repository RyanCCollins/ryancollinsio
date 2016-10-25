import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { PortfolioContainer } from 'containers';

const PortfolioPage = () => (
  <div className={styles.container}>
    <PortfolioContainer />
  </div>
);

export default cssModules(PortfolioPage, styles);
