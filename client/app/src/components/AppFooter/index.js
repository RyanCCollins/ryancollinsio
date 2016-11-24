import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Footer from 'grommet-udacity/components/Footer';
import Box from 'grommet-udacity/components/Box';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet-udacity/components/Anchor';
import Button from 'grommet-udacity/components/Button';
import MailIcon from 'grommet-udacity/components/icons/base/Mail';
import { SocialIcon } from 'components';
import socialIcons from './data';
import cn from 'classnames';

const AppFooter = () => (
  <Footer pad="large" colorIndex="light-2" className={styles.appFooter}>
    <Box
      direction="column"
      align="center"
      pad="none"
      responsive
      className={styles.flexOne}
    >
      <Heading tag="h3">
        By{' '}
        <a href="http://www.ryancollins.io">
          Ryan Collins
        </a>
      </Heading>
      <Heading tag="h5">
        This app is licensed under the{' '}
        <a
          href="https://github.com/RyanCCollins/ryancollinsio/blob/master/LICENSE"
        >
          MIT License.
        </a>
        {' '}Take a peak at the{' '}
        <br />
        <a href="https://github.com/RyanCCollins/ryancollinsio">
          source code.
        </a>
      </Heading>
      <Box align="center" justify="center" pad="medium">
        <Button
          icon={<MailIcon />}
          plain
          href="/contact"
          label="Contact Me"
        />
      </Box>
      <nav
        aria-hidden
        className={cn(
          'grommetux-box',
          'grommetux-box--direction-row',
          'grommetux-box--responsive',
          'grommetux-box--pad-none',
          'grommetux-menu',
          'grommetux-menu--row',
          'grommetux-menu--inline'
        )}
      >
        {socialIcons.map((item, i) =>
          <Anchor key={i} href={item.url}>
            <SocialIcon type={item.type} />
          </Anchor>
        )}
      </nav>
    </Box>
  </Footer>
);

export default cssModules(AppFooter, styles);
