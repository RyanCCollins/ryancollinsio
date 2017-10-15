import React, { PropTypes } from 'react';
import Heading from 'grommet-udacity/components/Heading';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const fontSizeMap = {
  small: 'h5',
  medium: 'h3',
  large: 'h1',
};

const QueryNotFound = ({ itemName, fontSize, onReset }) => (
  <div className={styles.noneFound}>
    <div className={styles.thinkingFace}>
      🤔
    </div>
    <div className={styles.noneFoundText}>
      <Heading align="center" strong tag={fontSizeMap[`${fontSize}`]}>
        {`Sorry, but we couldn't find any ${itemName} that matched your query.`}
      </Heading>
      {onReset &&
        <Heading tag="h5" align="center">
          {'Suggestion: '}
          <a href="#" onClick={onReset}>reset filters</a>
          {' to see all projects.'}
        </Heading>
      }
    </div>
  </div>
);

QueryNotFound.propTypes = {
  itemName: PropTypes.string.isRequired,
  fontSize: PropTypes.oneOf(['small', 'medium', 'large']),
  onReset: PropTypes.func,
};

QueryNotFound.defaultProps = {
  fontSize: 'medium',
  hasResetLink: false,
  itemName: 'items',
};

export default cssModules(QueryNotFound, styles);
