import styled from 'styled-components';
import Anchor from 'grommet-udacity/components/Anchor';

export const SectionLast = styled.section`
  padding-bottom: 200px !important;
  background-color: #f5f5f5;
`;

export const NavigationItem = styled(Anchor)`
  display: block;
  font-size: 14px;
  padding: 12px;
  color: #607D8B !important;
  background: #FFF;
  transition: all .1s ease;
  border-left: 4px solid transparent;
  overflow: auto;
  border-left-color: ${(props) => props.active ? '#26C6DA' : '' };
  border-bottom: 1px solid #ECEFF1;
  max-width: 200px;
  @media screen and (max-width: 768px) {
    flex-grow: 1;
    max-width: 100%;
  }
`;
