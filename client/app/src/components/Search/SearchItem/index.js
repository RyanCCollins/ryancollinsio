import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const SearchItem = (props) => (
  <div className={styles.searchItem}>
  </div>
);

SearchItem.propTypes = {

};

export default cssModules(SearchItem, styles);
