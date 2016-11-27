import styled from 'styled-components';
import Section from 'grommet-udacity/components/Section';
import CloseIcon from 'grommet-udacity/components/icons/base/Close';
import Notification from 'grommet-udacity/components/Notification';

export const Closer = styled(CloseIcon)`
  position: absolute;
  right: 5px;
`;

export const StyledNotification = styled(Notification)`
  max-width: 960px;
`;

export const StyledWrapper = styled(Section)`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
`;
