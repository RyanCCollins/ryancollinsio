import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';

export const StyledBox = styled(Box)`
  flex-direction: row-reverse !important;
  flex-grow: 1 !important;
  margin-right: 12px !important;
`;

/* eslint-disable */
export const Content = styled.main`
  transform: ${props => (props.docked || props.isHome) ? '' : 'translate(0px, 79px)'};
`;
