import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Headline from 'grommet-udacity/components/Headline';
import Hero from 'grommet-udacity/components/Hero';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';
import Quote from 'grommet-udacity/components/Quote';
import { Divider } from 'components';

const Project = ({
  project,
}) => (
  <Section className={styles.alignToTop}>
    <Hero
      backgroundImage={project.featureImage}
    >
      <Headline align="center">
        {project.title}
      </Headline>
      <Heading tag="h3" align="center">
        {project.caption}
      </Heading>
    </Hero>
    <Section pad="large">
      <Heading align="center">
        About the Project
      </Heading>
      <Divider />
      <Box align="center" justify="center" pad="large">
        <Box className="card">
          <Markdown content={project.description} />
        </Box>
      </Box>
    </Section>
    <Section>
      <Heading align="center">
        Milstones
      </Heading>
      <Divider />
      <Box align="center" justify="center" pad="large">
        <Box className="card">
          <Markdown content={project.milestones} />
        </Box>
      </Box>
    </Section>
    <Section>
      <Heading align="center">
        Expert Technical Review
      </Heading>
      <Divider />
      <Box align="center" justify="center" pad="large">
        <Box className="card">
          <Box pad="medium">
            <Quote credit={`- ${project.reviewerName}`}>
              <Markdown content={project.technicalReview} />
            </Quote>
          </Box>
        </Box>
      </Box>
    </Section>
    <Section>
      <Heading align="center">
        Technical Information
      </Heading>
      <Divider />
      <Box align="center" justify="center" pad="large">
        <Box className="card">
          <Box pad="medium">
            <Markdown content={project.technicalInformation} />
          </Box>
        </Box>
      </Box>
    </Section>
    <Section>
      <Heading align="center">
        Design Patterns
      </Heading>
      <Divider />
      <Box align="center" justify="center" pad="large">
        <Box className="card">
          <Box pad="medium">
            <Markdown content={project.designPatterns} />
          </Box>
        </Box>
      </Box>
    </Section>
    <Section>
      <Heading align="center">
        Project Gallery
      </Heading>
      <Divider />
      <Box align="center" justify="center" pad="large">
        <Box className="card">
          <Box pad="medium">
            <Heading align="center" tag="h2">
              Coming Soon
            </Heading>
          </Box>
        </Box>
      </Box>
    </Section>
  </Section>
);

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default cssModules(Project, styles);
