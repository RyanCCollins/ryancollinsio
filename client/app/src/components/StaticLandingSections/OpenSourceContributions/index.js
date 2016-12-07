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
import { Divider, WithLoading, WithToast } from 'components';
import cn from 'classnames';

const CommitsList = ({ commits, repo }) => (
  <List align="start">
    {commits.map((commit, i) =>
      <ListItem key={i}>
        <Anchor href={`https://github.com/${repo.name}/commits/${commit.sha}`}>
          {`${commit.sha.slice(0, 5)} - ${commit.message.slice(0, 60)}`}
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
              <a href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a>
            </Heading>
          );
        case 'PullRequestEvent':
          return (
            <Heading align="start" tag="h4" strong>
              Opened a <a href={item.payload.pull_request.url}>pull
              request</a> for <a href={`https://github.com/${item.repo.name}`}>{item.repo.name}</a>
            </Heading>
          );
        default: return '';
      }
    })()}
  </div>
);

const OpenSourceContributions = ({
  gitData,
  isLoading,
  error,
  onClearError,
}) => (
  <WithLoading isLoading={isLoading}>
    <WithToast
      error={error}
      onClose={onClearError}
    >
      <Section
        full="horizontal"
        align="center"
        justify="center"
        className={cn(styles.section, 'section')}
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
                  styles.timeLineItem,
                  'timeline-item',
                  i % 2 === 0 ? 'timeline-item--odd' : 'timeline-item--even'
                )}
              >
                <div className="timeline-item-node" />
                <div className="timeline-item-inner">
                  <CommitHeading item={item} />
                  {item.payload.commits &&
                    <CommitsList commits={item.payload.commits} repo={item.repo} />
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
    </WithToast>
  </WithLoading>
);

OpenSourceContributions.propTypes = {
  gitData: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  onClearError: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default cssModules(OpenSourceContributions, styles);
