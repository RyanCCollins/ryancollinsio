import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import { CreatePostContainer } from 'containers'; // eslint-disable-line
import styles from './index.module.scss';

const CreatePostPage = ({ location }) => (
  <div className={styles.container}>
    <CreatePostContainer location={location} />
  </div>
);

CreatePostPage.propTypes = {
  location: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default cssModules(CreatePostPage, styles);
