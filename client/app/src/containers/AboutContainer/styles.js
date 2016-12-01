import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';

export const StyledBox = styled(Box)`
  background-color: #f5f5f5;
`;

export const BoxWrapper = styled(Box)`
  max-width: 550px !important;
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

export const StyledArticle = styled(Article)`
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(167, 157, 144, 0.52);
  width: 100%;
  margin-bottom: 80px;
  position: relative;
  padding: 60px 0 !important;
  max-width: 900px;
  box-sizing : border-box;
`;
