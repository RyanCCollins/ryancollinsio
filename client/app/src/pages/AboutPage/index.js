import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AboutContainer } from 'containers';

const AboutPage = ({ history }) => (
  <div className={styles.container}>
    <AboutContainer history={history} />
  </div>
);

export default cssModules(AboutPage, styles);
