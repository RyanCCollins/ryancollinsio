import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Divider = ({
  inverted,
}) => (
  <span
    className={`${inverted ? styles.inverted : ''} ${styles.divider}`}
  />
);

Divider.propTypes = {
  inverted: PropTypes.bool.isRequired,
};

Divider.defaultProps = {
  inverted: false,
};

export default cssModules(Divider, styles);
