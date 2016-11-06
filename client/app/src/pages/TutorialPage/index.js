import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { TutorialContainer } from 'containers';

const TutorialPage = (props) => (
  <div className={styles.container}>
    <TutorialContainer />
  </div>
);

export default cssModules(TutorialPage, styles);
