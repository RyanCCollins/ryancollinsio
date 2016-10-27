import React from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import LogoImage from './logo.png';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Navbar = () => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <img className={styles.logo} src={LogoImage} alt="logo"/>
      </Title>
      <Menu
        style={{ marginRight: 20 }}
        direction="row"
        align="center"
        responsive={false}
      >
        <Anchor href="/blog" className="active">
          Blog
        </Anchor>
        <Anchor href="/portfolio">
          Portfolio
        </Anchor>
        <Anchor href="/other">
          Other
        </Anchor>
      </Menu>
    </Header>
  </div>
);

export default cssModules(Navbar, styles);
