import styled from 'styled-components';
import Section from 'grommet-udacity/components/Section';
import Footer from 'grommet-udacity/components/Footer';

export const StyledFooter = styled(Footer)`
  border-top: 1px solid rgba(183,182,182,0.8);
  padding-top: 60px;
  title {
    color: black !important;
  }
`;

export const StyledSection = styled(Section)`
  flex: 1;
`;
