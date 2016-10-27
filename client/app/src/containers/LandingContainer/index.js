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
import Meter from 'grommet-udacity/components/Meter';
import Value from 'grommet-udacity/components/Value';
import Label from 'grommet-udacity/components/Label';
import Columns from 'grommet-udacity/components/Columns';
import Carousel from 'grommet-udacity/components/Carousel';
// import 'antd/dist/antd.css';
// import { Carousel } from 'antd';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts';
import { Divider } from 'components';

const techStack = [
  {
    id: 0,
    url: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/techstack/es6.png?raw=true',
    title: 'ES6',
  },
  {
    id: 0,
    url: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/techstack/es6.png?raw=true',
    title: 'ES6',
  },
  {
    id: 0,
    url: 'https://github.com/RyanCCollins/cdn/blob/master/portfolio-image-gallery-images/techstack/es6.png?raw=true',
    title: 'ES6',
  }
]

const data = [
  { subject: 'Front End', A: 100, B: 100, fullMark: 100 },
  { subject: 'Back End', A: 89, B: 89, fullMark: 100 },
  { subject: 'Mobile', A: 70, B: 70, fullMark: 100 },
  { subject: 'Data Science', A: 65, B: 55, fullMark: 100 },
];

const Languages = [
  {
    id: 0,
    label: 'JavaScript',
    value: 99,
  },
  {
    id: 1,
    label: 'Ruby',
    value: 96,
  },
  {
    id: 2,
    label: 'Python',
    value: 92,
  },
  {
    id: 3,
    label: 'Swift',
    value: 92,
  },
  {
    id: 4,
    label: 'Elixir',
    value: 83,
  },
  {
    id: 5,
    label: 'Haskell',
    value: 78,
  },
];

class LandingContainer extends Component {
  componentDidMount() {
    this.props.actions.performLandingAnimation();
  }
  render() {
    const {
      image,
      headline,
      subheadline,
      references,
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
            Language Usage
          </Headline>
          <Divider />
          <Columns
            maxCount={4}
            align="center"
            justify="center"
          >
            {Languages.map((language, i) =>
              <Box className={styles.language} align="center" justify="center" key={i}>
                <Meter
                  type="arc"
                  colorIndex="brand"
                  value={language.value}
                  label={
                    <Label>{language.label}</Label>
                  }
                />
                <Value value={language.value} />
              </Box>
            )}
          </Columns>
        </Section>
        <Section
          className={styles.section}
          colorIndex="light-1"
          full="horizontal"
          align="center"
          justify="center"
        >
          <Headline align="center" className="heading">
            Areas of Focus
          </Headline>
          <Divider />
          <Box
            align="center"
            justify="center"
            className={styles.chart}
          >
            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
              <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis/>
            </RadarChart>
          </Box>
        </Section>
        <Section
          className={styles.section}
          colorIndex="light-2"
          full="horizontal"
          align="center"
          justify="center"
        >
          <Headline align="center" className="heading">
            References
          </Headline>
          <Divider />
          {references && references.length > 0 &&
            <Carousel>
              {references.map((reference, i) =>
                <div
                  className={`${styles.carouselItem} small-12`}
                  key={i}
                >
                  <img src={reference.avatar} className={styles.avatar} />
                  <Box className={styles.referenceText}>
                    <Heading className="heading">
                      {reference.name}
                    </Heading>
                    <Label uppercase className={styles.labelText}>
                      {reference.title}
                    </Label>
                    <Label uppercase className={styles.labelBottom}>
                      {reference.company}
                    </Label>
                    <hr className={styles.seperator} />
                    <Paragraph>
                      {reference.body}
                    </Paragraph>
                  </Box>
                </div>
              )}
            </Carousel>
          }
        </Section>
        <Section
          className={styles.section}
          colorIndex="light-1"
          full="horizontal"
          align="center"
          justify="center"
        >
          <Headline align="center" className="heading">
            Tech Stack
          </Headline>
          <Divider />
          <Box
            align="center"
            justify="center"
          >

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
  references: PropTypes.array,
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

const loadReferencesQuery = gql`
query loadReferences {
  references {
    name
    title
    body
    avatar
    company
  }
}
`;

const ContainerWithReferences = graphql(loadReferencesQuery, {
  props: ({ data: { references } }) => ({
    references,
  }),
})(ContainerWithData);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithReferences);
