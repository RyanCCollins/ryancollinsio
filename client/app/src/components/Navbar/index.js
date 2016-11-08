import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { SessionMenu, NavTitle } from 'components';

const Navbar = ({
  pathname,
  navLinks,
  user,
}) => (
  <div className={styles.navbar}>
    <Header justify="between">
      <NavTitle />
      <Menu
        className={styles.rightMenu}
        direction="row"
        align="center"
        responsive={false}
      >
        {navLinks.map((item, i) =>
          <Anchor
            key={i}
            className={`/${pathname.split('/')[1]}` === item.url ? 'navLink active' : 'navLink'}
            href={item.url}
          >
            {item.name}
          </Anchor>
        )}
      </Menu>
      <SessionMenu pathname={pathname} user={user} />
    </Header>
  </div>
);

Navbar.propTypes = {
  navLinks: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default cssModules(Navbar, styles);
