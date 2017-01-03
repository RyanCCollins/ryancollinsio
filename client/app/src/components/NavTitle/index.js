import React, { PropTypes } from 'react';
import Anchor from 'grommet-udacity/components/Anchor';
import { LogoImage } from 'components';
import Animations from 'react-addons-css-transition-group';
import { StyledTitle, NotYetRendered } from './styles';

const NavTitle = ({ isClient }) => (
  <StyledTitle>
    <Animations
      transitionName="fade"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {isClient ?
        <Anchor href="/" tabIndex={-1}>
          <LogoImage />
        </Anchor>
      :
        <NotYetRendered />
      }
    </Animations>
  </StyledTitle>
);

NavTitle.propTypes = {
  isClient: PropTypes.bool.isRequired,
};

NavTitle.defaultProps = {
  isClient: true,
};

export default NavTitle;
