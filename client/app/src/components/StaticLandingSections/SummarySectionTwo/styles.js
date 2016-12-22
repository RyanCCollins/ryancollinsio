import styled from 'styled-components';

const Logos = styled.section`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-around;
  width: 80%;
`;

export const Card = styled.div`
  width: 33.3%;
  height: 19.5rem;
  border: 1px solid #dbe2e8;
  box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);
  border-radius: 6px;
  background: #fff;
  transition: box-shadow 0.3s ease, border 0.3s ease;
  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
    border: none;
  }
`;

export default Logos;
