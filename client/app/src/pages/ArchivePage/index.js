import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { ArchiveContainer } from 'containers';

const ArchivePage = ({
  location,
}) => (
  <div className={styles.container}>
    <ArchiveContainer location={location} />
  </div>
);

ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default cssModules(ArchivePage, styles);
