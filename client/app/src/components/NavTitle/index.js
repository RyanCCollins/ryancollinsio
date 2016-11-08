import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Anchor from 'grommet-udacity/components/Anchor';
import Title from 'grommet-udacity/components/Title';
import { LogoImage } from 'components';

const NavTitle = () => (
  <Title className={styles.navTitle}>
    <Anchor href="/">
      <LogoImage />
    </Anchor>
  </Title>
);

export default cssModules(NavTitle, styles);
