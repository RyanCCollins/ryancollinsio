import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Section from 'grommet-udacity/components/Section';
import Hero from 'grommet-udacity/components/Hero';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Box from 'grommet-udacity/components/Box';
import Animate from 'grommet-udacity/components/Animate';
import Paragraph from 'grommet-udacity/components/Paragraph';
import { Divider } from 'components';

class LandingContainer extends Component {
  componentDidMount() {
    this.props.actions.performLandingAnimation();
  }
  render() {
    const {
      image,
      headline,
      subheadline,
    } = this.props;
    return (
      <Section align="center" justify="center" className={styles.landing}>
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
        <Section className={styles.section}>
          <Headline align="center" className="heading">
            Who Am I?
          </Headline>
          <Divider />
          <Paragraph className="paragraph">
            Focused and results oriented engineer specializing in implementing cutting edge technologies in the web and mobile iOT domain. Offering a proven track record of leadership skills, strong problem solving skills and a fluency in the full software stack.
          </Paragraph>
        </Section>
        <Section className={styles.section} colorIndex="brand" full="horizontal" pad="large">
          <Headline className="heading" align="center">
            What I Do
          </Headline>
          <Divider />
          <Box align="center" justify="center">
            <Paragraph className="paragraph">
              Focused and results oriented engineer specializing in implementing cutting edge technologies in the web and mobile iOT domain. Offering a proven track record of leadership skills, strong problem solving skills and a fluency in the full software stack.
            </Paragraph>
          </Box>
        </Section>
        <Section className={styles.section} colorIndex="light-2" full="horizontal">
          <Headline className="heading" align="center">
            What I Do
          </Headline>
          <Divider />
          <Box align="center" justify="center">
            <Paragraph className="paragraph">
              Focused and results oriented engineer specializing in implementing cutting edge technologies in the web and mobile iOT domain. Offering a proven track record of leadership skills, strong problem solving skills and a fluency in the full software stack.
            </Paragraph>
          </Box>
        </Section>
      </Section>
    );
  }
}

LandingContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  image: PropTypes.bool.isRequired,
  headline: PropTypes.bool.isRequired,
  subheadline: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  image: state.landing.image,
  headline: state.landing.headline,
  subheadline: state.landing.subheadline,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(LandingContainer, styles);

const getProjectsQuery = gql`
  query loadProjects {
    projects {
      title
      slug
      caption
      featureImage
    }
  }
`;

const ContainerWithData = graphql(getProjectsQuery, {
  props: ({ data: { projects, loading, error } }) => ({
    projects,
    isLoading: loading,
    error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);
