import React, { PropTypes } from 'react';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import WorldMap from 'grommet-udacity/components/WorldMap';
import Footer from 'grommet-udacity/components/Footer';
import Markdown from 'grommet-udacity/components/Markdown';
import Tip from 'grommet-udacity/components/Tip';
import { Divider } from 'components';
import { PinNC, PinCT } from './styles';

const MyLocation = ({
  isShowingTipNC,
  isShowingTipCT,
  onToggleTipCT,
  onToggleTipNC,
  content,
}) => (
  <Section
    className="section"
    colorIndex="light-1"
    full="horizontal"
    align="center"
    justify="center"
  >
    <Headline align="center" className="heading">
      Where I Live
    </Headline>
    <Divider />
    <Box
      align="center"
      justify="center"
      style={{ position: 'relative' }}
    >
      <PinCT
        onClick={onToggleTipCT}
        id="pin-ct"
      />
      <PinNC
        onClick={onToggleTipNC}
        id="pin-nc"
      />
      {isShowingTipCT &&
        <Tip
          onClose={onToggleTipCT}
          style={{ color: 'white' }}
          target="pin-ct"
        >
          Trumbull, CT
        </Tip>
      }
      {isShowingTipNC &&
        <Tip
          onClose={onToggleTipNC}
          target="pin-nc"
          style={{ color: 'white' }}
        >
          Corolla, NC
        </Tip>
      }
      <WorldMap
        series={[
          {
            continent: 'NorthAmerica',
            label: 'North America',
            value: 40,
            colorIndex: 'graph-1',
          },
          {
            continent: 'SouthAmerica',
            label: 'South America',
            value: 30,
            colorIndex: 'accent-2',
          },
          {
            continent: 'Europe',
            label: 'Europe',
            value: 20,
            colorIndex: 'accent-1',
          },
          {
            continent: 'Africa',
            label: 'Africa',
            value: 10,
            colorIndex: 'graph-2',
          },
          {
            continent: 'Asia',
            label: 'Asia',
            value: 15,
            colorIndex: 'graph-3',
          },
          {
            continent: 'Australia',
            label: 'Australia',
            value: 10,
            colorIndex: 'graph-4',
          },
        ]}
      />
    </Box>
    <Footer pad="large" align="center" justify="center">
      <Markdown
        content={content}
      />
    </Footer>
  </Section>
);

MyLocation.propTypes = {
  isShowingTipNC: PropTypes.bool.isRequired,
  isShowingTipCT: PropTypes.bool.isRequired,
  onToggleTipCT: PropTypes.func.isRequired,
  onToggleTipNC: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};


export default MyLocation;
