import styled from 'styled-components';
import Section from 'grommet-udacity/components/Section';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet/components/Button';

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

export const ButtonWithSeperator = styled(Button)`
  &:after {
    content: '|';
    padding: 0 .5em;
    font-size: 1.5rem;
    font-weight: 300;
    color: #666;
  }
`;
