import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { TutorialsContainer } from 'containers';

const TutorialsPage = () => (
  <div className={styles.container}>
    <TutorialsContainer />
  </div>
);

export default cssModules(TutorialsPage, styles);
