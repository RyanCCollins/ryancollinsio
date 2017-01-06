import React, { PropTypes } from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Anchor from 'grommet-udacity/components/Anchor';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';

const noAvatar = 'http://bit.ly/2dqCGdd';

const NoUserMenu = ({ pathname }) => (
  <Menu
    direction="row"
    align="center"
    inline
    resposive={false}
    className={styles.rightMenu}
  >
    <Anchor
      className={pathname === '/login' ? 'navLink active' : 'navLink'}
      href="/login"
    >
      Log In
    </Anchor>
    <Anchor
      className={pathname === '/signup' ? 'navLink active' : 'navLink'}
      href="/signup"
    >
      Sign Up
    </Anchor>
  </Menu>
);

NoUserMenu.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const SessionIcon = ({
  user,
}) => (
  <Box
    responsive={false}
    direction="row"
    justify="center"
  >
    <img
      alt="avatar"
      src={user.avatar || noAvatar}
      className={styles.userAvatar}
    />
    <Heading tag="h4" className={styles.profileName}>
      {user.name}
    </Heading>
  </Box>
);

SessionIcon.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string.isRequired,
  }),
};

const SessionMenu = ({
  onLogout,
  user,
  pathname,
}) => (
  <span>
    {(() => { // eslint-disable-line
      if (user) {
        switch (user.role) {
          case 'user':
            return (
              <Menu
                icon={<SessionIcon user={user} />}
                inline={false}
                colorIndex="neutral-2"
                dropAlign={{ top: 'top', right: 'right' }}
                a11yTitle="Session Menu"
                className={styles.rightMenu}
              >
                <Anchor
                  href="/user/profile"
                  className="navLink"
                >
                  My Profile
                </Anchor>
                <Anchor
                  className="navLink"
                  href="/logout"
                  onClick={onLogout}
                >
                  Logout
                </Anchor>
                <div className={styles.menuSpacer} />
              </Menu>
            );
          case 'admin':
            return (
              <Menu
                icon={<SessionIcon user={user} />}
                dropAlign={{ bottom: 'bottom' }}
                a11yTitle="Session"
                inline={false}
                colorIndex="neutral-2"
                className={styles.rightMenu}
              >
                <Anchor
                  className="navLink"
                  href="/user/profile"
                >
                  My Profile
                </Anchor>
                <Anchor
                  className="navLink"
                  href="/admin/dashboard"
                >
                  Dashboard
                </Anchor>
                <Anchor
                  className="navLink"
                  href="/logout"
                  onClick={onLogout}
                >
                  Logout
                </Anchor>
                <div className={styles.menuSpacer} />
              </Menu>
            );
          default:
            return (
              <NoUserMenu pathname={pathname} />
            );
        }
      } else {
        return (
          <NoUserMenu pathname={pathname} />
        );
      }
    })()}
  </span>
);

SessionMenu.propTypes = {
  onLogout: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    role: PropTypes.string.isRequired,
  }),
  pathname: PropTypes.string.isRequired,
};

export default cssModules(SessionMenu, styles);
