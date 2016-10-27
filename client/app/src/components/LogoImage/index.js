import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import CrownLogo from './crown.png';

const LogoImage = () => (
  <img
    src={CrownLogo}
    alt="Ryan Collins Logo"
    className={styles.logoImage}
    id="ryancollins-logo"
  />
);

export default cssModules(LogoImage, styles);
