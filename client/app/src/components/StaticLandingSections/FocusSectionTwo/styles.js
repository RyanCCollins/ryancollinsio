import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';

export default styled(Box)`
  border-right: 3px solid #425563;
  border-left: 3px solid #425563;
  @media screen and (max-width: 768px) {
    border-top: 3px solid #425563;
    border-bottom: 3px solid #425563;
    border-right: none;
    border-left: none;
  }
`;
