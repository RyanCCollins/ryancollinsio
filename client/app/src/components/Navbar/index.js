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
        direction="row"
        align="center"
        inline
        resposive={false}
      >
        {navLinks.map((item, i) =>
          <Anchor
            key={i}
            className={`/${pathname.split('/')[1]}` === item.url ? 'navLink active' : 'navLink'}
            href={item.url}
            tabIndex={i}
          >
            {item.name}
          </Anchor>
        )}
        <StyledBox>
          <Search
            tabIndex={navLinks.length + 1}
            onDOMChange={onSearch}
            value={searchTerm}
            dropAlign={{ left: 'left' }}
            placeHolder="Start typing..."
          />
        </StyledBox>
      </StyledMenu>
      <SessionMenu tabIndex={navLinks.length + 2} pathname={pathname} user={user} />
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
