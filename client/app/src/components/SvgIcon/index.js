import React, { PropTypes } from 'react';

const SvgIcon = ({
  children,
  viewBox,
  ...restProps
}) => (
  <svg
    {...restProps}
    viewBox={viewBox}
  >
    {children}
  </svg>
);

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  viewBox: PropTypes.string.isRequired,
};

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24',
};

export default SvgIcon;
