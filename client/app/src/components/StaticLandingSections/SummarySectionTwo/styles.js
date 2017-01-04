import styled from 'styled-components';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import Box from 'grommet-udacity/components/Box';

const Logos = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  margin-top: 60px !important;
  @media screen and (max-width: 1200px) {
    width: 95%;
  }
`;

export const Logo = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectName = styled(Heading)`
  padding: 20px;
  color: #666;
`;

export const CardLink = styled(Anchor)`
  padding: 1rem;
  text-decoration: none !important;
`;

export const CardTop = styled(Box)`
  height: 50%;
  padding: 1rem;
`;

export const CardBottom = styled(Box)`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin-right: 1.69492%;
  padding: 1.2rem;
  width: 22rem;
  background: azure;
  height: 25.5rem;
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

export default Logos;
