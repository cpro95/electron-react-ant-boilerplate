// Libs
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom';

// Styles
import styles from './Header.scss';
// Config
import { IMAGES } from '@/config';

/**
 * Header
 *
 * @class Header
 */
const Header = props => {
  return (
    <Layout.Header className={styles.header}>
      <img src={IMAGES.LOGO} className={styles.logo} alt="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        className={styles.menu}
        // eslint-disable-next-line react/prop-types
        selectedKeys={[props.location.pathname]}
      >
        <Menu.Item key="/">
          <Link to="/">Search</Link>
        </Menu.Item>
        <Menu.Item key="/latest">
          <Link to="/latest">Latest</Link>
        </Menu.Item>
        <Menu.Item key="/ratings">
          <Link to="/ratings">Ratings</Link>
        </Menu.Item>
        <Menu.Item key="/settings">
          <Link to="/settings">Settings</Link>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default withRouter(Header);
