import React, { PropTypes } from 'react';
import Anchor from 'grommet-udacity/components/Anchor';
import Search from 'grommet-udacity/components/Search';
import { SessionMenu, LogoImage } from 'components';
import { StyledBox, LogoWrapper, StyledMenu, NavHeader, RightMenu } from './styles';

const Navbar = ({
  pathname,
  navLinks,
  user,
  onSearch,
  searchTerm,
  docked,
}) => (
  <nav>
    <NavHeader docked={docked} justify="between">
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
          >
            {item.name}
          </Anchor>,
        )}
        <StyledBox>
          <Search
            onDOMChange={onSearch}
            value={searchTerm}
            dropAlign={{ left: 'left' }}
            placeHolder="Start typing..."
          />
        </StyledBox>
        <LogoWrapper isVisible={!docked}>
          <LogoImage />
        </LogoWrapper>
        <RightMenu isVisible={!docked}>
          <SessionMenu pathname={pathname} user={user} />
        </RightMenu>
      </StyledMenu>
    </NavHeader>
  </nav>
);

Navbar.propTypes = {
  docked: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string.isRequired,
  }),
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  pathname: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

export default Navbar;
