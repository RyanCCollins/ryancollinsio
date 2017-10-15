import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

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
