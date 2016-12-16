import styled from 'styled-components';

export const PinNC = styled.div`
  background-color: #0283df;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 40%;
  left: 23%;
  @media screen and (max-width: 600px) {
    top: 34%;
    left: 22%;
  }
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 50%;
  &:after {
    height: 40px;
    width: 40px;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -20px;
    margin-left: -20px;
    animation: pulsate 1s ease-out infinite;
    animation-delay: 1.1s;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #0283df;
  }
`;

export const PinCT = styled.div`
  background-color: #0283df;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 32%;
  left: 27%;
  @media screen and (max-width: 600px) {
    top: 34%;
    left: 22%;
  }
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 50%;
  &:after {
    height: 40px;
    width: 40px;
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -20px;
    margin-left: -20px;
    animation: pulsate 1s ease-out infinite;
    animation-delay: 1.1s;
    filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
    opacity: 0;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #0283df;
  }
`;
