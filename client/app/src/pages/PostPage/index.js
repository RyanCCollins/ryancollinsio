import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { PostContainer } from 'containers';

const PostPage = ({
  params,
}) => (
  <div className={styles.container}>
    <PostContainer params={params} />
  </div>
);

PostPage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default cssModules(PostPage, styles);
