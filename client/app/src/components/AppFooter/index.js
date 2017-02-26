import React from 'react';
import Heading from 'grommet-udacity/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import MailIcon from 'grommet-udacity/components/icons/base/Mail';
import CodeIcon from 'grommet-udacity/components/icons/base/Code';
import Box from 'grommet-udacity/components/Box';
import Section from 'grommet-udacity/components/Section';
import { SocialIcon, LogoImage } from 'components';
import cn from 'classnames';
import socialIcons from './data';
import { StyledFooter, StyledSection, ButtonWithSeperator } from './styles';

const AppFooter = () => (
  <StyledFooter
    primary
    pad="large"
    colorIndex="neutral-1"
    direction="column"
  >
    <StyledSection
      align="center"
      pad="medium"
    >
      <Box pad="medium">
        <LogoImage />
      </Box>
      <Heading tag="h3">
        Made with 🎉 by{' '}
        <a href="https://github.com/ryanccollins">
          Ryan Collins
        </a>
      </Heading>
      <Heading tag="h4">
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
    </StyledSection>
    <Section
      direction="row"
      responsive={false}
      align="center"
      justify="center"
      pad="small"
    >
      <ButtonWithSeperator
        icon={<CodeIcon />}
        plain
        path="/about"
        label="About Me"
      />
      <Button
        icon={<MailIcon />}
        plain
        path="/contact"
        label="Contact Me"
      />
    </Section>
    <Section pad="medium" align="center">
      <nav
        aria-hidden
        className={cn(
          'grommetux-box',
          'grommetux-box--direction-row',
          'grommetux-box--pad-none',
          'grommetux-menu',
          'grommetux-menu--row',
          'grommetux-menu--inline',
        )}
      >
        {socialIcons.map((item, i) =>
          <Anchor key={i} href={item.url}>
            <SocialIcon type={item.type} />
          </Anchor>,
        )}
      </nav>
    </Section>
  </StyledFooter>
);

export default AppFooter;
