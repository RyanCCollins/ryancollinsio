/* @flow */
import React from 'react';
// $FlowFixMe grommet-udacity is not found
import Box from 'grommet-udacity/components/Box';
import Label from 'grommet-udacity/components/Label';
import Button from 'grommet-udacity/components/Button';
import FilterIcon from 'grommet-udacity/components/icons/base/Filter';

export default function FilterControl(props: {
  filteredTotal?: number,
  onClick: Function,
  unfilteredTotal: number
}) {
  const { filteredTotal, onClick, unfilteredTotal } = props;
  const top = (unfilteredTotal > 0) ? unfilteredTotal : '.';
  const bottom = (unfilteredTotal !== filteredTotal) ? filteredTotal : '.';

  return (
    <Button onClick={onClick} className="no-border" plain>
      <Box align="center">
        <Label size="small">{top}</Label>
        <FilterIcon />
        <Label size="small">{bottom}</Label>
      </Box>
    </Button>
  );
}
