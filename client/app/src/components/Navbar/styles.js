import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';
import Menu from 'grommet-udacity/components/Menu';
import Header from 'grommet-udacity/components/Header';

export const StyledMenu = styled(Menu)`
  flex-direction: row !important;
  flex-grow: 1 !important;
  align-items: center;
`;

export const StyledBox = styled(Box)`
  flex: 1 !important;
`;

/* eslint-disable */
export const NavHeader = styled(Header)`
  minHeight: 79px !important;
  background: ${props => props.docked ? 'transparent' : 'white'};
  position: fixed;
  top: 0;
  z-index: 1600;
  box-shadow: ${props => props.docked ? 'none' : '-3px 1px 5px 0 hsla(0, 0%, 86%,.5)'};
`;


export const RightMenu = styled.div`
  div {
    display: ${props => props.isVisible ? 'flex' : 'none'};
  }
`;
