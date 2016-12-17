import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cssModules from 'react-css-modules';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Box from 'grommet-udacity/components/Box';
import Headline from 'grommet-udacity/components/Headline';
import Section from 'grommet-udacity/components/Section';
import Tabs from 'grommet-udacity/components/Tabs';
import Tab from 'grommet-udacity/components/Tab';
import { Divider, DashboardTable, UserDashboardTable, WithLoading } from 'components';
import { getPagedPosts, getPagedUsers, getPagedProjects } from './selectors';
import * as AdminDashboardActionCreators from './actions';
import styles from './index.module.scss';
import { projectFragmentAdminDash, postFragmentAdminDash, userFragmentAdminDash } from './fragments';

class AdminDashboardContainer extends Component {
  componentWillReceiveProps({ users, projects, posts }) {
    if (users && users !== this.props.users) {
      this.props.actions.setUsers(users);
    }
    if (projects && projects !== this.props.projects) {
      this.props.actions.setProjects(projects);
    }
    if (posts && posts !== this.props.posts) {
      this.props.actions.setPosts(posts);
    }
  }
  render() {
    const {
      posts,
      pagedPosts,
      projects,
      pagedProjects,
      users,
      pagedUsers,
      isMobile,
      postsConfig,
      usersConfig,
      projectsConfig,
      actions,
      isLoading,
      activeTab,
    } = this.props;
    return (
      <WithLoading isLoading={isLoading} fullscreen>
        <Box className={styles.adminDashboard} colorIndex="light-2">
          <Section full="horizontal">
            <Headline className="heading" align="center">
              Dashboard
            </Headline>
            <Divider />
          </Section>
          <Section className={styles.dashboardWrapper}>
            <Box className={styles.dashboardTable}>
              <Tabs
                responsive={false}
                onActive={index => actions.setActiveTab(index)}
                activeIndex={activeTab}
              >
                {posts && posts.length > 0 &&
                  <Tab title="Posts">
                    <Box className={styles.innerBox}>
                      <DashboardTable
                        items={pagedPosts}
                        isMobile={isMobile}
                        perPage={postsConfig.perPage}
                        currentPage={postsConfig.currentPage}
                        onChangePage={actions.setPostsPage}
                        allItems={posts}
                        onDelete={actions.deletePost}
                        onEdit={actions.editPost}
                        onShow={actions.showPost}
                      />
                    </Box>
                  </Tab>
                }
                {projects &&
                  <Tab title="Projects" onRequestForActive={() => actions.setActiveTab(1)}>
                    <Box className={styles.innerBox}>
                      <DashboardTable
                        items={pagedProjects}
                        onChangePage={actions.setProjectsPage}
                        isMobile={isMobile}
                        perPage={projectsConfig.perPage}
                        currentPage={projectsConfig.currentPage}
                        allItems={projects}
                        onDelete={actions.deleteProject}
                        onEdit={actions.editProject}
                        onShow={actions.showProject}
                      />
                    </Box>
                  </Tab>
                }
                {users &&
                  <Tab title="Users" onRequestForActive={() => actions.setActiveTab(2)}>
                    <Box className={styles.innerBox}>
                      <UserDashboardTable
                        users={pagedUsers}
                        isMobile={isMobile}
                        perPage={usersConfig.perPage}
                        onChangePage={actions.setUsersPage}
                        currentPage={usersConfig.currentPage}
                        allUsers={users}
                        onDelete={e => e}
                        onEdit={e => e}
                        onShow={e => e}
                      />
                    </Box>
                  </Tab>
                }
              </Tabs>
            </Box>
          </Section>
        </Box>
      </WithLoading>
    );
  }
}

AdminDashboardContainer.propTypes = {
  actions: PropTypes.object.isRequired, // eslint-disable-line
  isLoading: PropTypes.bool.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.object,
  ),
  posts: PropTypes.arrayOf(
    PropTypes.object,
  ),
  users: PropTypes.arrayOf(
    PropTypes.object,
  ),
  pagedProjects: PropTypes.arrayOf(
    PropTypes.object,
  ),
  pagedPosts: PropTypes.arrayOf(
    PropTypes.object,
  ),
  pagedUsers: PropTypes.arrayOf(
    PropTypes.object,
  ),
  isMobile: PropTypes.bool.isRequired,
  postsConfig: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.object,
    ),
    perPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  }),
  usersConfig: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.object,
    ),
    perPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  }),
  projectsConfig: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.object,
    ),
    perPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
  }),
  activeTab: PropTypes.number.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = state => ({
  isMobile: state.app.isMobile,
  user: state.app.user,
  postsConfig: state.adminDashboard.posts,
  projectsConfig: state.adminDashboard.projects,
  usersConfig: state.adminDashboard.users,
  perPage: state.adminDashboard.perPage,
  currentPage: state.adminDashboard.currentPage,
  activeTab: state.adminDashboard.activeTab,
  pagedProjects: getPagedProjects(state.adminDashboard),
  pagedPosts: getPagedPosts(state.adminDashboard),
  pagedUsers: getPagedUsers(state.adminDashboard),
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    AdminDashboardActionCreators,
    dispatch,
  ),
});

const Container = cssModules(AdminDashboardContainer, styles);

const adminDashboardQuery = gql`
query adminDashboard($authToken: String!) {
  projects {
    ...projectFragmentAdminDash
  }
  posts {
    ...postFragmentAdminDash
  }
  users(auth_token: $authToken) {
    ...userFragmentAdminDash
  }
}
`;

const ContainerWithData = graphql(adminDashboardQuery, {
  options: ownProps => ({
    fragments: [postFragmentAdminDash, projectFragmentAdminDash, userFragmentAdminDash],
    variables: {
      authToken: ownProps.user.authToken,
    },
  }),
  props: ({ data: { loading, error, projects, posts, users } }) => ({
    projects,
    posts,
    users,
    isLoading: loading,
    error,
  }),
})(Container);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContainerWithData);
