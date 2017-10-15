import styled from 'styled-components';
import Button from 'grommet-udacity/components/Button';
import ChatIcon from 'grommet-udacity/components/icons/base/Chat';

export const FabIcon = styled(ChatIcon)`
  stroke: white !important;
`;

export const FabContainer = styled.div`
  z-index: 1000;
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 1.5em;
`;

export const FabButton = styled(Button)`
  background-color: #ff590a !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% !important;
  height: 70px !important;
  width: 70px !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  title {
    color: black !important;
  }
  @media screen and (max-width: 600px) {
    width: 50px !important;
    height: 50px !important;
  }
`;
