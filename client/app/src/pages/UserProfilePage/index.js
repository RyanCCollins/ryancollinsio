import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { UserProfileContainer } from 'containers';

const UserProfilePage = (props) => (
  <div className={styles.container}>
    <UserProfileContainer />
  </div>
);

export default cssModules(UserProfilePage, styles);
