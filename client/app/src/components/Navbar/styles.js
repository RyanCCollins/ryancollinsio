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
  svg {
    stroke: azure !important;
    fill: azure !important;
  }
`;

/* eslint-disable */
export const NavHeader = styled(Header)`
  minHeight: 79px !important;
  will-change: background, box-shadow, transform;
  background: ${props => props.docked ? 'transparent' : '#3E2F5B'};
  position: fixed;
  top: 0;
  z-index: 9;
  box-shadow: ${props => props.docked ? 'none' : '0 0 2px rgba(0,0,0,.5)'};
  transition: background 0.5s;
`;


export const RightMenu = styled.div`
  div {
    display: ${props => props.isVisible ? 'flex' : 'none'};
  }
`;
