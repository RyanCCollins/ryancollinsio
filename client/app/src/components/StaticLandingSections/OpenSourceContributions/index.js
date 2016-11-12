import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Footer from 'grommet-udacity/components/Footer';
import Box from 'grommet-udacity/components/Box';
import Button from 'grommet-udacity/components/Button';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import List from 'grommet-udacity/components/List';
import ListItem from 'grommet-udacity/components/ListItem';
import { Divider } from 'components';
import cn from 'classnames';

const CommitsList = ({ commits }) => (
  <List align="start">
    {commits.map((item, i) =>
      <ListItem key={i}>
        <Anchor href={item.url}>
          {`${item.sha.slice(0, 5)} - ${item.message.slice(0, 60)}`}
        </Anchor>
      </ListItem>
    )}
  </List>
);

const CommitHeading = ({ item }) => (
  <div>
    {(() => {
      switch (item.type) {
        case 'PushEvent':
          return (
            <Heading align="start" tag="h4" strong>
              {`Pushed ${item.payload.size} commit(s) to `}
              <a href={item.repo.url}>{item.repo.name}</a>
            </Heading>
          );
        case 'PullRequestEvent':
          return (
            <Heading align="start" tag="h4" strong>
              Opened a <a href={item.payload.pull_request.url}>pull
              request</a> for <a href={item.repo.url}>{item.repo.name}</a>
            </Heading>
          );
        default: return '';
      }
    })()}
  </div>
);

const OpenSourceContributions = ({
  gitData,
}) => (
  <Section
    className="section"
    colorIndex="light-2"
    full="horizontal"
    align="center"
    justify="center"
  >
    <Headline align="center" className="heading">
      Open Source Contributions
    </Headline>
    <Divider />
    <Box className={styles.container}>
      <div className="timeline">
        <div className="timeline-path" />
        <div className="timeline-item--offset" />
        {gitData && gitData.length > 0 && gitData.map((item, i) =>
          <div
            key={i}
            className={cn(
              'timeline-item',
              i % 2 === 0 ? 'timeline-item--odd' : 'timeline-item--even'
            )}
          >
            <div className="timeline-item-node" />
            <div className="timeline-item-inner">
              <CommitHeading item={item} />
              {item.payload.commits &&
                <CommitsList commits={item.payload.commits} />
              }
            </div>
          </div>
        )}
      </div>
    </Box>
    <Footer align="center" justify="center" pad="large">
      <Button
        primary
        href="https://github.com/ryanccollins"
        label="View Open Source"
      />
    </Footer>
  </Section>
);

OpenSourceContributions.propTypes = {
  gitData: PropTypes.array,
};

export default cssModules(OpenSourceContributions, styles);
