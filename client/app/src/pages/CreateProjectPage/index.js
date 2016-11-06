import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CreateProjectContainer } from 'containers';

const CreateProjectPage = ({ location }) => (
  <div className={styles.container}>
    <CreateProjectContainer location={location} />
  </div>
);

CreateProjectPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default cssModules(CreateProjectPage, styles);
