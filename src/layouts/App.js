// Libs
import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
// Styles
import styles from './App.scss';
// Components
import Header from '@/components/@shared/Header';
import Footer from '@/components/@shared/Footer';

/**
 * App
 *
 * @class App
 */
const App = props => {
  const { children } = props;
  return (
    <Layout>
      <Header />
      <Layout className={styles.app}>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
      <Footer />
    </Layout>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
