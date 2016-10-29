import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { Archive } from 'containers';

const ArchivePage = ({
  location,
}) => (
  <div className={styles.container}>
    <Archive location={location} />
  </div>
);

ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default cssModules(ArchivePage, styles);
