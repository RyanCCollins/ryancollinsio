import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Footer from 'grommet-udacity/components/Footer';
import Button from 'grommet-udacity/components/Button';
import { Divider, WithLoading, WithToast } from 'components';
import cn from 'classnames';
import styles from './index.module.scss';
import CommitHeading from './CommitHeading';
import CommitsList from './CommitsList';
import { Container, TimeLineItemInner } from './styles';

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
        id="open-source-section"
        full="horizontal"
        align="center"
        justify="center"
        className={cn(styles.section, 'section')}
      >
        <Headline align="center" className="heading">
          Open Source Contributions
        </Headline>
        <Divider />
        <Container>
          <div className="timeline">
            <div className="timeline-path" />
            <div className="timeline-item--offset" />
            {gitData && gitData.length > 0 && gitData.map((item, i) =>
              <div
                key={i}
                className={cn(
                  styles.timeLineItem,
                  'timeline-item',
                  i % 2 === 0 ? 'timeline-item--odd' : 'timeline-item--even',
                )}
              >
                <div className="timeline-item-node" />
                <TimeLineItemInner>
                  <CommitHeading item={item} />
                  {item.payload.commits &&
                    <CommitsList commits={item.payload.commits} repo={item.repo} />
                  }
                </TimeLineItemInner>
              </div>,
            )}
          </div>
        </Container>
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
  gitData: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ),
  isLoading: PropTypes.bool.isRequired,
  onClearError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default cssModules(OpenSourceContributions, styles);
