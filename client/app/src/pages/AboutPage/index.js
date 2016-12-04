import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AboutContainer } from 'containers';
import Elm from 'react-elm-components';
import { Main } from 'elm';

const AboutPage = ({ history }) => (
  <div className={styles.container}>
    <AboutContainer history={history} />
    <Elm src={Main} />
  </div>
);

export default cssModules(AboutPage, styles);
