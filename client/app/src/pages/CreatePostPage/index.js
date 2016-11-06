import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { CreatePostContainer } from 'containers';

const CreatePostPage = ({ location }) => (
  <div className={styles.container}>
    <CreatePostContainer location={location} />
  </div>
);

CreatePostPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default cssModules(CreatePostPage, styles);
