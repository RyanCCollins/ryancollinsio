import React, { PropTypes } from 'react';
import Anchor from 'grommet-udacity/components/Anchor';
import Title from 'grommet-udacity/components/Title';
import { LogoImage } from 'components';
import { StyledTitle, NotYetRendered } from './styles';

const NavTitle = ({ isClient }) => (
  <StyledTitle>
    {isClient ?
      <Anchor href="/">
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
  isClient: false,
};

export default NavTitle;
