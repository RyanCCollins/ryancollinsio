import React, { PropTypes } from 'react';
import { FabContainer, FabButton, FabIcon } from './styles';

const FeedbackFab = ({
  handleClick,
}) => (
  <FabContainer>
    <FabButton
      icon={
        <FabIcon
          a11yTitle="Add Review Floating"
          a11yTitleId="add-review-floating-button-icon"
        />
      }
      onClick={handleClick}
      a11yTitle="Add Review Floating"
      a11yTitleId="add-review-floating-button"
    />
  </FabContainer>
);

FeedbackFab.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackFab;
