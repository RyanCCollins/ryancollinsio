import React, { PropTypes } from 'react';
import { ToastMessage } from 'components';

const WithToast = ({
  message,
  error,
  children,
  onClose,
}) => (
  <div>
    {error &&
      <ToastMessage
        message={error.message}
        status="critical"
        onClose={() => onClose('error')}
      />
    }
    {message &&
      <ToastMessage
        message={message}
        onClose={() => onClose('message')}
      />
    }
    {children}
  </div>
);

WithToast.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.object,
  message: PropTypes.string,
};

export default WithToast;
