import React, { PropTypes } from 'react';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Animate from 'grommet-udacity/components/Animate';

const HeroSection = ({
  image,
  headline,
}) => (
  <Hero
    backgroundImage="https://github.com/RyanCCollins/cdn/blob/master/misc/rc-full.png?raw=true"
    justify="start"
    size="small"
  >
    <Animate
      visible={image}
      enter={{ animation: 'slide-up', duration: 2500 }}
      keep
    >
      <Box>
        <img
          className="spin-image"
          src="https://github.com/RyanCCollins/cdn/blob/master/ryancollinsio-v3/react.png?raw=true"
        />
      </Box>
    </Animate>
    <Animate
      visible={headline}
      enter={{ animation: 'slide-up', duration: 2500 }}
      keep
    >
      <Headline strong justify="end" style={{ flex: 1 }}>
        Ryan Collins
      </Headline>
      <Heading tag="h3" strong justify="end">
        Software Engineer
      </Heading>
    </Animate>
  </Hero>
);

HeroSection.propTypes = {
  image: PropTypes.bool.isRequired,
  headline: PropTypes.bool.isRequired,
};

export default HeroSection;
