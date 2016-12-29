import styled from 'styled-components';
import Heading from 'grommet-udacity/components/Heading';

export const Container = styled.div`
  min-height: calc(100vh - 75px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WaveGoodbye = styled.h1`
  font-size: 8rem !important;
  animation: wave-animation .8s infinite;
  @media screen and (max-width: 600px) {
    font-size: 5rem !important;
  }
`;

export const Seeya = styled(Heading)`
  text-align: center;
`;
