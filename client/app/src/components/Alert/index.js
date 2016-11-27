import React, { PropTypes } from 'react';
import Button from 'grommet-udacity/components/Button';
import { StyledWrapper, Closer, StyledNotification } from './styles';

const Alert = ({
  message,
  status,
  onClose,
}) => (
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

Alert.propTypes = {
  onClose: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['ok', 'critical']),
  message: PropTypes.string.isRequired,
};

export default Alert;
