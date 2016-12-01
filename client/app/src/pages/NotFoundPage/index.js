import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Heading from 'grommet-udacity/components/Heading';
import Button from 'grommet-udacity/components/Button';
import Footer from 'grommet-udacity/components/Footer';
import LinkPreviousIcon from 'grommet-udacity/components/icons/base/LinkPrevious';

const NotFound = ({ history }) => (
  <Box className={styles.container} pad="large">
    <Section primary align="center" justify="center" pad="large">
      <div className={styles.oops}>
        🙉 🙊 🙈
      </div>
      <Headline>
        Oops!
      </Headline>
      <Heading tag="h3" align="center">
        I'm sorry, but the page you are looking for does not exist.
      </Heading>
      <Heading tag="h5" align="center">
        But at least you got to see the monkeys!
      </Heading>
    </Section>
    <Footer align="center" justify="center" pad="large">
      <Button
        primary
        secondary
        label="Go Back to Safety"
        onClick={history.goBack}
        icon={<LinkPreviousIcon />}
      />
    </Footer>
  </Box>
);

export default cssModules(NotFound, styles);
