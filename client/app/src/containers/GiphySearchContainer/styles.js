import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';
import Article from 'grommet-udacity/components/Article';

export const StyledWrapper = styled(Box)`
  min-height: calc(100vh - 75px);
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
