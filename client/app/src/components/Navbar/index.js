import React from 'react';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { LogoImage } from 'components';

const Navbar = ({
  pathname,
}) => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title>
        <Anchor href="/">
          <LogoImage />
        </Anchor>
      </Title>
      <Menu
        className={styles.rightMenu}
        direction="row"
        align="center"
        responsive={false}
      >
        <Anchor
          className={pathname === '/' ? 'active' : ''}
          href="/"
        >
          Home
        </Anchor>
        <Anchor
          className={pathname === '/blog' ? 'active' : ''}
          href="/blog"
        >
          Blog
        </Anchor>
        <Anchor
          className={pathname === '/portfolio' ? 'active' : ''}
          href="/portfolio"
        >
          Portfolio
        </Anchor>
      </Menu>
    </Header>
  </div>
);

export default cssModules(Navbar, styles);
