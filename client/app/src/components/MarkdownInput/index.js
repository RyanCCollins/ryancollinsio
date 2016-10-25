import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const MarkdownInput = ({
  field,
}) => (
  <textarea rows={6} columns={40} {...field} />
);

MarkdownInput.propTypes = {
  field: PropTypes.object.isRequired,
};

export default cssModules(MarkdownInput, styles);
