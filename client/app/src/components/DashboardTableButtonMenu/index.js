import React, { PropTypes } from 'react';
import Menu from 'grommet-udacity/components/Menu';
import Button from 'grommet-udacity/components/Button';
import TrashIcon from 'grommet-udacity/components/icons/base/Trash';
import EditIcon from 'grommet-udacity/components/icons/base/Edit';
import ViewIcon from 'grommet-udacity/components/icons/base/View';

const DashboardTableButtonMenu = ({
  item,
  onDelete,
  onEdit,
  onView,
}) => (
  <Menu
    inline
    responsive={false}
    direction="row"
    justify="center"
    align="center"
    style={{ width: '100%' }}
  >
    <Button
      style={{ padding: 5 }}
      plain
      icon={<EditIcon />}
      onClick={onEdit}
    />
    <Button
      style={{ padding: 5 }}
      plain
      onClick={onDelete}
      icon={<TrashIcon />}
    />
    <Button
      style={{ padding: 5 }}
      plain
      onClick={onView}
      icon={<ViewIcon />}
    />
  </Menu>
);

DashboardTableButtonMenu.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
};

export default DashboardTableButtonMenu;
