import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Search from 'grommet-udacity/components/Search';
import { SessionMenu, NavTitle } from 'components';

const Navbar = ({
  pathname,
  navLinks,
  user,
  onSearch,
}) => (
  <nav>
    <Header justify="between">
      <NavTitle />
      <Menu
        style={{ flex: 1, justifyContent: 'flex-end', marginRight: 20 }}
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
        <Search
          onDOMChange={onSearch}
          dropAlign={{ left: 'left' }}
          placeHolder="Start typing..."
        />
      </Menu>
      <SessionMenu pathname={pathname} user={user} />
    </Header>
  </nav>
);

Navbar.propTypes = {
  navLinks: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default Navbar;
