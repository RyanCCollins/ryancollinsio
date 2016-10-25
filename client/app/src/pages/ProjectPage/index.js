import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ProjectContainer } from 'containers';

const ProjectPage = ({
  params,
}) => (
  <div className={styles.container}>
    <ProjectContainer params={params} />
  </div>
);

export default cssModules(ProjectPage, styles);
