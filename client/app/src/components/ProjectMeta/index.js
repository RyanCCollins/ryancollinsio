import React, { PropTypes } from 'react';
import Section from 'grommet-udacity/components/Section';
import Heading from 'grommet-udacity/components/Heading';
import Article from 'grommet-udacity/components/Article';
import Box from 'grommet-udacity/components/Box';
import Tag from 'grommet-udacity/components/Tag';
import Tags from 'grommet-udacity/components/Tags';
import Menu from 'grommet-udacity/components/Menu';
import SocialShare from 'grommet-udacity/components/SocialShare';
import { Divider } from 'components';

const ProjectMeta = ({
  project,
}) => (
  <div>
    <Section>
      <Box className="container">
        <Article className="panel">
          <Heading align="center">
            Tags
          </Heading>
          <Divider />
          <Tags align="center" justify="center">
            {project.tags && project.tags.map((tag, i) =>
              <Tag key={i} label={tag.title} />
            )}
          </Tags>
        </Article>
      </Box>
    </Section>
    <Section>
      <Box className="container">
        <Article className="panel">
          <Heading align="center">
            Share this Project
          </Heading>
          <Divider />
          <Box align="center">
            <Menu
              inline
              direction="row"
              responsive={false}
            >
              <SocialShare
                a11yTitle="Go to Twitter to Share this project"
                type="twitter"
                link={`http://www.ryancollins.io/projects/${project.slug}`}
                text={project.title}
              />
              <SocialShare
                a11yTitle="Go to Facebook to Share this project"
                type="facebook"
                link={`http://www.ryancollins.io/projects/${project.slug}`}
                text={project.title}
              />
              <SocialShare
                a11yTitle="Go to linkedin to Share this project"
                type="linkedin"
                link={`http://www.ryancollins.io/projects/${project.slug}`}
                text={project.title}
              />
              <SocialShare
                a11yTitle="Go to google to Share this project"
                type="google"
                link={`http://www.ryancollins.io/projects/${project.slug}`}
                text={project.title}
              />
            </Menu>
          </Box>
        </Article>
      </Box>
    </Section>
  </div>
);

ProjectMeta.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    tags: PropTypes.array,
  }),
};

export default ProjectMeta;
