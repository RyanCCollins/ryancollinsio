import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CreateProjectContainer } from 'containers';

const CreateProjectPage = () => (
  <div className={styles.container}>
    <CreateProjectContainer />
  </div>
);

export default cssModules(CreateProjectPage, styles);
