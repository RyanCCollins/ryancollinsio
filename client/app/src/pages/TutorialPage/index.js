import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { TutorialContainer } from 'containers';

const TutorialPage = ({
  params,
}) => (
  <div className={styles.container}>
    <TutorialContainer params={params} />
  </div>
);

export default cssModules(TutorialPage, styles);
