import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Hero from 'grommet-udacity/components/Hero';
import Box from 'grommet-udacity/components/Box';
import Markdown from 'grommet-udacity/components/Markdown';
import Quote from 'grommet-udacity/components/Quote';
import Headline from 'grommet-udacity/components/Headline';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import Article from 'grommet-udacity/components/Article';
import Menu from 'grommet-udacity/components/Menu';
import Columns from 'grommet-udacity/components/Columns';
import Image from 'grommet-udacity/components/Image';
import SocialGithubIcon from 'grommet-udacity/components/icons/base/SocialGithub';
import ViewIcon from 'grommet-udacity/components/icons/base/View';
import { Divider, ProjectMeta } from 'components';
import Lightbox from 'react-images';
import styles from './index.module.scss';

const Project = ({
  project,
  lightboxIsOpen,
  onPrev,
  onNext,
  onOpen,
  onClose,
  onSetImage,
  currentImage,
}) => (
  <Box className={styles.alignToTop}>
    <Hero
      backgroundImage={project.featureImage}
    >
      <Box colorIndex="grey-1-a" pad="large" style={{ width: '100%' }}>
        <Headline>
          {project.title}
        </Headline>
        <Heading tag="h3">
          {project.caption}
        </Heading>
      </Box>
    </Hero>
    <Section
      primary
      className="container"
    >
      <Article className="panel">
        <Heading align="center" className="heading">
          About the Project
        </Heading>
        <Divider />
        <Box pad="medium" align="center" className="main-text markdown-body">
          <Markdown content={project.description} />
        </Box>
        <Footer align="center" justify="center">
          <Menu inline direction="row" responsive={false} className={styles.buttonWrapper}>
            <Button
              label="View Live"
              icon={<ViewIcon />}
              className={styles.button}
              primary
              href={project.projectUrl}
            />
            <Button
              label="View Repo"
              primary
              icon={<SocialGithubIcon />}
              href={project.repoUrl}
            />
          </Menu>
        </Footer>
      </Article>
    </Section>
    <Section
      className="container"
    >
      <Article className="panel">
        <Heading align="center" className="heading">
          Milestones
        </Heading>
        <Divider />
        <Box align="center" pad="medium" className="main-text markdown-body">
          <Markdown content={project.milestones} />
        </Box>
      </Article>
    </Section>
    {project.technicalReview && project.reviewerName &&
      <Section
        className="container"
      >
        <Article className="panel">
          <Heading align="center" className="heading">
            Expert Technical Review
          </Heading>
          <Divider />
          <Box pad="medium" align="center" className="main-text markdown-body">
            <Quote credit={`- ${project.reviewerName}`}>
              <Markdown content={project.technicalReview} />
            </Quote>
          </Box>
        </Article>
      </Section>
    }
    <Section
      className="container"
    >
      <Article className="panel">
        <Heading align="center" className="heading">
          Technical Information
        </Heading>
        <Divider />
        <Box align="center" pad="medium" className="main-text">
          <Markdown content={project.technicalInformation} />
        </Box>
      </Article>
    </Section>
    <Section
      className="container"
    >
      <Article className="panel">
        <Heading align="center" className="heading">
          Design Patterns
        </Heading>
        <Divider />
        <Box align="center" pad="medium" className="main-text">
          <Markdown content={project.designPatterns} />
        </Box>
      </Article>
    </Section>
    <ProjectMeta project={project} />
    {project.images && project.images.length > 0 &&
      <Section full="hortizontal">
        <Heading align="center" className="heading">
          Project Gallery
        </Heading>
        <Divider />
        <Box
          full="horizontal"
          pad={{ vertical: 'large' }}
        >
          <Columns
            masonry
            className={styles.columns}
            justify="center"
            maxCount={6}
          >
            {project.images.map((image, i) =>
              <Box key={i} onClick={() => onOpen(i)}>
                <Image src={image.src} alt={`${project.title} image #${i}`} />
              </Box>,
            )}
          </Columns>
          <Lightbox
            images={project.images.map(p => ({ src: p.src }))}
            currentImage={currentImage}
            isOpen={lightboxIsOpen}
            onClickNext={onNext}
            onClickPrev={onPrev}
            onClose={onClose}
            showThumbnails
            onClickThumbnail={i => onSetImage(i)}
          />
        </Box>
      </Section>
    }
  </Box>
);

Project.propTypes = {
  lightboxIsOpen: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired,
  onPrev: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSetImage: PropTypes.func.isRequired,
  currentImage: PropTypes.number.isRequired,
};

export default cssModules(Project, styles);
