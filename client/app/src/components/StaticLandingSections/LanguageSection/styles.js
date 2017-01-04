import styled from 'styled-components';
import Box from 'grommet-udacity/components/Box';

export const Columns = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row !important;
`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1.69492%;
  width: 22.5rem !important;
  background: whitesmoke;
  height: 20rem;
  border: 1px solid #dbe2e8;
  box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);
  border-radius: 6px;
  transition: box-shadow 0.3s ease, border 0.3s ease;
  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
  }
  @media screen and (max-width: 768px) {
    margin-left: 1.69492%;
  }
`;
