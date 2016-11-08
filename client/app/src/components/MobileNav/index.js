import React, { PropTypes, Component } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { NavTitle, SessionMenu } from 'components';
import Split from 'grommet-udacity/components/Split';
import Sidebar from 'grommet-udacity/components/Sidebar';
import Menu from 'grommet-udacity/components/Menu';
import Footer from 'grommet-udacity/components/Footer';
import Header from 'grommet-udacity/components/Header';
import Button from 'grommet-udacity/components/Button';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import { Link } from 'react-router';

class MobileNav extends Component {
  constructor() {
    super();
    this.renderMenu = this.renderMenu.bind(this);
  }
  renderMenu() {
    const {
      onToggleNav,
      navLinks,
      user,
      pathname,
    } = this.props;
    return (
      <Sidebar
        full
        size="large"
        colorIndex="neutral-1"
        fixed
        seperator="right"
      >
        <Header
          justify="between"
          pad={{ horizontal: 'medium' }}
          large
        >
          <NavTitle />
          <Menu responsive={false} className={styles.navCloser}>
            <Button
              plain
              icon={<CloseIcon />}
              onClick={onToggleNav}
            />
          </Menu>
        </Header>
        <Menu primary>
          {navLinks.map((link, i) =>
            <Link
              key={i}
              to={link.url}
              className={
                pathname.split('/')[1].toLowerCase() === link.name.toLowerCase() ?
                  'active' : 'inactive'
              }
              onClick={() => onToggleNav()}
            >
              {link.name}
            </Link>
          )}
        </Menu>
        <Footer
          justify="start"
          pad="medium"
          className={styles.navFooter}
        >
          {user ?
            <SessionMenu
              user={user}
            />
          :
            <Menu primary>
              <Link
                to="/login"
                activeClassName="active"
                onClick={() => onToggleNav()}
              >
                Login
              </Link>
              <Link
                to="/signup"
                activeClassName="active"
                onClick={() => onToggleNav()}
              >
                Signup
              </Link>
            </Menu>
          }
        </Footer>
      </Sidebar>
    );
  }
  render() {
    const {
      navActive,
      children,
    } = this.props;
    return (
      <Split
        flex={navActive ? '' : 'right'}
        priority={navActive ? 'left' : 'right'}
      >
        {navActive && this.renderMenu()}
        <div>
          {!navActive && children}
        </div>
      </Split>
    );
  }
}

MobileNav.propTypes = {
  children: PropTypes.node.isRequired,
  navActive: PropTypes.bool.isRequired,
  onToggleNav: PropTypes.func.isRequired,
  navLinks: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default cssModules(MobileNav, styles);
