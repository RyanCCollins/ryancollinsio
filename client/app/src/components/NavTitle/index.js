import React, { PropTypes } from 'react';
import Anchor from 'grommet-udacity/components/Anchor';
import { LogoImage } from 'components';
import { StyledTitle, NotYetRendered } from './styles';

const NavTitle = ({ isClient }) => (
  <StyledTitle>
    {isClient ?
      <Anchor href="/" tabIndex={-1}>
        <LogoImage />
      </Anchor>
    :
      <NotYetRendered />
    }
  </StyledTitle>
);

NavTitle.propTypes = {
  isClient: PropTypes.bool.isRequired,
};

NavTitle.defaultProps = {
  isClient: true,
};

export default NavTitle;
