import React, { PropTypes } from 'react';
import Header from 'grommet-udacity/components/Header';
import Anchor from 'grommet-udacity/components/Anchor';
import Search from 'grommet-udacity/components/Search';
import { SessionMenu, NavTitle } from 'components';
import { StyledBox, StyledMenu } from './styles';

const Navbar = ({
  pathname,
  navLinks,
  user,
  onSearch,
  searchTerm,
}) => (
  <nav>
    <Header justify="between">
      <NavTitle isClient={typeof window !== 'undefined'} />
      <StyledMenu
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
        <StyledBox>
          <Search
            onDOMChange={onSearch}
            value={searchTerm}
            dropAlign={{ left: 'left' }}
            placeHolder="Start typing..."
          />
        </StyledBox>
      </StyledMenu>
      <SessionMenu pathname={pathname} user={user} />
    </Header>
  </nav>
);

Navbar.propTypes = {
  navLinks: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

export default Navbar;
