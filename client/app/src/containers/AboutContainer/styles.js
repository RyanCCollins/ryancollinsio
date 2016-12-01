import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';

export const StyledWrapper = styled(Box)`
  background-color: #f5f5f5;
`;

export const AvatarImage = styled.img`
  width: 200px;
  height: 200px;
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 50%;
`;
