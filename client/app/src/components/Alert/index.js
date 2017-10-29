// @flow
import React, { Element } from 'react';
import Button from 'grommet-udacity/components/Button';
import { StyledWrapper, Closer, StyledNotification } from './styles';

type Props = {
  onClose: () => void,
  status: 'ok' | 'critical',
  message: string,
}

const Alert = ({
  message,
  status,
  onClose,
}: Props): Element<*> => (
  <StyledWrapper>
    <StyledNotification
      closer={
        <Button
          plain
          onClick={onClose}
          a11yTitle="Close Alert"
        >
          <Closer a11yTitle="Close Alert" />
        </Button>
      }
      status={status}
      message={message}
    />
  </StyledWrapper>
);

export default Alert;
