import React, { PropTypes } from 'react';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const QueryNotFound = ({ itemName }) => (
  <div className={styles.noneFound}>
    <img className={styles.noneFoundImage} src="https://github.com/RyanCCollins/cdn/blob/master/misc/thinking-face.png?raw=true" />
    <div className={styles.noneFoundText}>
      <p>
        Sorry, but we couldn't find any {itemName} that matched your query.
      </p>
    </div>
  </div>
);

QueryNotFound.propTypes = {
  itemName: PropTypes.string.isRequired,
};

export default cssModules(QueryNotFound, styles);
