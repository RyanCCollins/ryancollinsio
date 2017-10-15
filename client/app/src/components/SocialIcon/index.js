import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import SocialGithubIcon from 'grommet-udacity/components/icons/base/SocialGithub';
import SocialMediumIcon from 'grommet-udacity/components/icons/base/SocialMedium';
import SocialLinkedinOptionIcon from 'grommet-udacity/components/icons/base/SocialLinkedin';
import SocialTwitterIcon from 'grommet-udacity/components/icons/base/SocialTwitter';
import styles from './index.module.scss';

const SocialIcon = ({
  type,
}) => (
  <span className={styles.socialIcon}>
    {(() => { // eslint-disable-line
      switch (type) {
        case 'twitter':
          return <SocialTwitterIcon size="small" />;
        case 'linkedin':
          return <SocialLinkedinOptionIcon size="small" />;
        case 'github':
          return <SocialGithubIcon size="small" />;
        case 'medium':
          return <SocialMediumIcon size="small" />;
        default:
          break;
      }
    })()}
  </span>
);

SocialIcon.propTypes = {
  type: PropTypes.string.isRequired,
};

export default cssModules(SocialIcon, styles);
