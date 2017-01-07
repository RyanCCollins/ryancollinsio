import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';

export const Container = styled(Box)`
  padding-top: 3em;
  padding-bottom: 3em;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

export const TimeLineItemInner = styled.div`
  color: #555;
  padding: 1em;
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 1.2rem;
  background: ghostwhite;
  border: 1px solid #dbe2e8;
  box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);
  border-radius: 6px;
  transition: box-shadow 0.3s ease, border 0.3s ease;
  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
  }
`;
