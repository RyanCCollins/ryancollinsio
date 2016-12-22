import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  margin-bottom: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1.69492%;
  padding: 1.2rem;
  width: 15rem;
  max-width: 25%;
  background: #fafbfc;
  height: 15rem;
  border: 1px solid #dbe2e8;
  box-shadow: 12px 15px 20px 0px rgba(46,61,73,0.15);
  border-radius: 6px;
  transition: box-shadow 0.3s ease, border 0.3s ease;
  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46,61,73,0.2);
  }
  @media screen and (max-width: 1000px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 1.69492%;
  }
`;

export default {
  Card,
};
