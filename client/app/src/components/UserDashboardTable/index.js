import React, { PropTypes } from 'react';
import Box from 'grommet-udacity/components/Box';
import Table from 'grommet-udacity/components/Table';
import TableRow from 'grommet-udacity/components/TableRow';
import Heading from 'grommet-udacity/components/Heading';
import Tile from 'grommet-udacity/components/Tile';
import List from 'grommet-udacity/components/List';
import Label from 'grommet-udacity/components/Label';
import Value from 'grommet-udacity/components/Value';
import ListItem from 'grommet-udacity/components/ListItem';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import { DashboardTableButtonMenu, PaginatorFooter } from 'components';

const UserDashboardTable = ({
  users,
  perPage,
  currentPage,
  allUsers,
  onChangePage,
  onDelete,
  onEdit,
  onShow,
  isMobile,
}) => (
  <Box
    pad="large"
    className={styles.listWrapper}
    color="light-2"
  >
    <Box className={styles.flexGrow}>
      {isMobile ?
        <List>
          <Box justify="center" align="start" pad="small">
            <tbody>
              {users && users.length > 0 && users.map((user, i) =>
                <ListItem>
                  <Tile
                    key={i}
                    align="start"
                    direction="row" pad={{ horizontal: 'small', vertical: 'small' }}
                  >
                    <Box
                      align="center"
                      justify="center"
                      direction="row"
                    >
                      <Box
                        direction="column"
                        justify="center"
                        className={styles.innerWrapper}
                        pad={{ horizontal: 'small', vertical: 'medium' }}
                      >
                        <Value value={i} />
                        <Box
                          className={styles.boxWrapper}
                        >
                          <Heading align="center" tag="h3">
                            {user.name}
                          </Heading>
                        </Box>
                        <Box
                          className={styles.boxWrapper}
                        >
                          <Label>
                            Email:
                          </Label>
                          <Heading align="center" tag="h4">
                            {user.email}
                          </Heading>
                        </Box>
                        <Box
                          className={styles.boxWrapper}
                        >
                          <Label style={{ flex: 1 }}>
                            Role:
                          </Label>
                          <Heading align="center" tag="h4">
                            {`${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`}
                          </Heading>
                        </Box>
                        <DashboardTableButtonMenu
                          item={user}
                          onDelete={onDelete}
                          onEdit={onEdit}
                          onShow={onShow}
                        />
                      </Box>
                    </Box>
                  </Tile>
                </ListItem>
              )}
            </tbody>
          </Box>
        </List>
      :
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 && users.map((user, i) =>
              <TableRow key={i}>
                <td>
                  <Heading tag="h4">
                    {user.name}
                  </Heading>
                </td>
                <td>
                  <Heading tag="h5">
                    {user.email}
                  </Heading>
                </td>
                <td>
                  <Heading tag="h5">
                    {`${user.role.charAt(0).toUpperCase()}${user.role.slice(1)}`}
                  </Heading>
                </td>
                <td>
                  <DashboardTableButtonMenu
                    onDelete={onDelete}
                    onEdit={onEdit}
                    onShow={onShow}
                  />
                </td>
              </TableRow>
            )}
          </tbody>
        </Table>
      }
    </Box>
    <PaginatorFooter
      currentPage={currentPage}
      pageSize={perPage}
      total={allUsers.length}
      onChange={onChangePage}
    />
  </Box>
);

UserDashboardTable.propTypes = {
  users: PropTypes.array.isRequired,
  perPage: PropTypes.bool.isRequired,
  currentPage: PropTypes.number.isRequired,
  allUsers: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default cssModules(UserDashboardTable, styles);
