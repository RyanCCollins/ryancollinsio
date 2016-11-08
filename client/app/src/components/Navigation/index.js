import React, { PropTypes } from 'react';
import { MobileNav, Navbar, NavTitle } from 'components';
import Header from 'grommet-udacity/components/Header';
import Title from 'grommet-udacity/components/Title';
import MenuIcon from 'grommet-udacity/components/icons/base/Menu';

const Navigation = ({
  isMobile,
  children,
  user,
  navIsActive,
  navLinks,
  onToggleNav,
  pathname,
}) => (
  <div>
    {!isMobile &&
      <Navbar
        pathname={pathname}
        user={user}
        navLinks={navLinks}
      />
    }
    {!isMobile && children}
    {isMobile &&
      <MobileNav
        pathname={pathname}
        user={user}
        navActive={navIsActive}
        onToggleNav={onToggleNav}
        navLinks={navLinks}
        pathname={pathname}
      >
        <Header
          direction="row"
          justify="between"
          large
          pad={{ horizontal: 'medium', between: 'small' }}
        >
          {!navIsActive && <NavTitle />}
          <Title onClick={onToggleNav} a11yTitle="Open Menu Right">
            <MenuIcon
              colorIndex="brand"
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
  isMobile: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  user: PropTypes.object.isRequired,
  handleSearch: PropTypes.func.isRequired,
  navIsActive: PropTypes.bool.isRequired,
  navLinks: PropTypes.array.isRequired,
  onToggleNav: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Navigation;
