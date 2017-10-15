import React, { PropTypes, Component } from 'react';
import cssModules from 'react-css-modules';
import Animate from 'grommet-udacity/components/Animate';
import MissingVisual from './missing-visual.png';
import styles from './index.module.scss';

class ResponsiveImage extends Component {
  constructor() {
    super();
    this.setImageLoadedState = this.setImageLoadedState.bind(this);
    this.state = {
      isLoaded: false,
    };
  }
  setImageLoadedState() {
    this.setState({
      isLoaded: true,
    });
  }
  render() {
    const {
      src,
      matchHeight,
      className,
    } = this.props;
    return (
      <Animate
        visible={this.state.isLoaded}
        enter={{ animation: 'fade', duration: 1000 }}
        keep
      >
        <div
          className={matchHeight ? styles.responsiveImageMatchHeight : styles.responsiveImage}
        >
          <img
            alt="responsive"
            className={className}
            onLoad={this.setImageLoadedState}
            src={src || MissingVisual}
          />
        </div>
      </Animate>
    );
  }
}

ResponsiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  matchHeight: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
};

ResponsiveImage.defaultProps = {
  matchHeight: true,
  className: 'img',
};

export default cssModules(ResponsiveImage, styles);
