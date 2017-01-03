import React, { PropTypes } from 'react';
import { MobileNav, Navbar, NavTitle } from 'components';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import MenuIcon from 'grommet-udacity/components/icons/base/Menu';
import Search from 'grommet-udacity/components/Search';
import { StyledBox, Content } from './styles';

const Navigation = ({
  isMobile,
  children,
  user,
  navIsActive,
  navLinks,
  onToggleNav,
  pathname,
  onSearch,
  searchTerm,
  docked,
}) => (
  <div>
    {!isMobile &&
      <Navbar
        pathname={pathname}
        user={user}
        docked={docked}
        navLinks={navLinks}
        onSearch={onSearch}
      />
    }
    {!isMobile &&
      <Content isHome={pathname === '/'} docked={docked}>
        {children}
      </Content>
    }
    {isMobile &&
      <MobileNav
        pathname={pathname}
        user={user}
        navActive={navIsActive}
        onToggleNav={onToggleNav}
        navLinks={navLinks}
      >
        <Header
          direction="row"
          justify="between"
          large
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          {!navIsActive && <NavTitle />}
          <StyledBox>
            <Search
              value={searchTerm}
              onDOMChange={onSearch}
              dropAlign={{ left: 'left' }}
              responsive={false}
              placeHolder="Start typing..."
            />
          </StyledBox>
          <Title onClick={onToggleNav} a11yTitle="Open Menu Right">
            <MenuIcon
              colorIndex="#666"
              size="medium"
              type="control"
            />
          </Title>
        </Header>
        {children}
      </MobileNav>
    }
  </div>
);

Navigation.propTypes = {
  docked: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
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
  onSearch: PropTypes.func.isRequired,
  navIsActive: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  searchTerm: PropTypes.string,
};

export default Navigation;
