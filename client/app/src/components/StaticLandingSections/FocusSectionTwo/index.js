import React, { PropTypes } from 'react';
import Meter from 'grommet-udacity/components/Meter';
import Section from 'grommet-udacity/components/Section';
import Headline from 'grommet-udacity/components/Headline';
import Box from 'grommet-udacity/components/Box';
import Value from 'grommet-udacity/components/Value';
import Heading from 'grommet-udacity/components/Heading';
import Legend from 'grommet-udacity/components/Legend';
import Chart, {
  Base,
  Layers,
  Area,
  HotSpots,
} from 'grommet-udacity/components/chart/Chart';
import { Divider } from 'components';
import BorderedBox from './styles';

const FocusSectionTwo = ({
  chartData,
  onActive,
  activeIndex,
  languageUsageData,
  activeLanguageHotSpot,
  onActiveLanguageHotSpot,
  flavorsOfJavaScript,
  activeIndexFlavors,
  onActiveFlavors,
}) => (
  <Section
    className="section"
    id="focus-section-two"
    full="horizontal"
    align="center"
    justify="center"
  >
    <Headline align="center" className="heading">
      Skills Visualized
    </Headline>
    <Divider />
    <Box direction="row" full="horizontal" align="center" pad="medium">
      <Box basis="1/3" align="center" pad="medium">
        <Box align="start" responsive>
          <Heading tag="h4" strong justify="left">
            Areas of Focus
          </Heading>
        </Box>
        <Meter
          activeIndex={activeIndex}
          size="xlarge"
          type="spiral"
          onActive={i => onActive(i)}
          total={chartData.map(item => item.value).reduce((a, b) => a + b, 0)}
          max={Math.max(...chartData.map(item => item.value)) + 4}
          series={chartData.map((item, i) =>
            ({
              ...item,
              colorIndex: ['brand', 'critical', 'warning', 'ok'][i],
            }),
          ).reverse()}
        />
        <Box direction="column" justify="start">
          {chartData.map((item, i) =>
            <Box direction="row" align="center" justify="between">
              <Legend
                activeIndex={activeIndex}
                onActive={index => onActive(index)}
                series={[{
                  colorIndex: ['brand', 'critical', 'warning', 'ok'][i],
                  label: item.label,
                }]}
              />
            </Box>,
          )}
        </Box>
      </Box>
      <BorderedBox
        basis="1/3"
        align="center"
        justify="center"
        pad="medium"
      >
        <Box align="start" responsive>
          <Heading tag="h4" strong justify="left">
            Language Usage
          </Heading>
        </Box>
        <Chart
          vertical
          hotSpots
        >
          <Base height="small" />
          <Layers>
            <HotSpots
              count={12}
              activeIndex={activeLanguageHotSpot}
              onActive={index => onActiveLanguageHotSpot(index)}
            />
            {languageUsageData.map((item, i) =>
              <Area
                key={i}
                colorIndex={['brand', 'critical', 'warning', 'ok'][i]}
                min={0}
                max={500}
                values={item.values}
              />,
            )}
          </Layers>
        </Chart>
        <Box align="start" responsive>
          <Heading tag="h5" strong justify="left">
            Commits per language over the last 12 months
          </Heading>
        </Box>
        <Box direction="column" justify="start">
          {languageUsageData.map((item, i) =>
            <Box direction="row" align="center" justify="between">
              <Legend
                series={[{
                  colorIndex: ['brand', 'critical', 'warning', 'ok'][i],
                  label: item.label,
                }]}
              />
              <Value
                align="center"
                value={[...languageUsageData[i].values][activeLanguageHotSpot]}
              />
            </Box>,
          )}
        </Box>
      </BorderedBox>
      <Box basis="1/3" align="center" pad="medium">
        <Box align="start" responsive>
          <Heading tag="h5" strong justify="left">
            Flavors of JavaScript
          </Heading>
        </Box>
        <Meter
          activeIndex={activeIndexFlavors}
          size="xlarge"
          type="spiral"
          onActive={i => onActiveFlavors(i)}
          total={flavorsOfJavaScript.map(item => item.value).reduce((a, b) => a + b, 0)}
          max={Math.max(...flavorsOfJavaScript.map(item => item.value)) + 6}
          series={flavorsOfJavaScript.map((item, i) =>
            ({
              ...item,
              colorIndex: ['brand', 'critical', 'warning', 'ok'][i],
            }),
          ).reverse()}
        />
        <Box direction="column" justify="start">
          {flavorsOfJavaScript.map((item, i) =>
            <Box direction="row" align="center" justify="between">
              <Legend
                activeIndex={activeIndexFlavors}
                onActive={index => onActiveFlavors(index)}
                series={[{
                  colorIndex: ['brand', 'critical', 'warning', 'ok'][i],
                  label: item.label,
                }]}
              />
            </Box>,
          )}
        </Box>
      </Box>
    </Box>
  </Section>
);

FocusSectionTwo.propTypes = {
  chartData: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  languageUsageData: PropTypes.shape({
    label: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(
      PropTypes.number.isRequired,
    ).isRequired,
  }).isRequired,
  onActive: PropTypes.func.isRequired,
  activeIndex: PropTypes.number,
  activeLanguageHotSpot: PropTypes.number,
  onActiveLanguageHotSpot: PropTypes.func.isRequired,
  flavorsOfJavaScript: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeIndexFlavors: PropTypes.number.isRequired,
  onActiveFlavors: PropTypes.func.isRequired,
};

export default FocusSectionTwo;
