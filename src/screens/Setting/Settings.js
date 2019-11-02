// Libs
import React from 'react';
// Styles
import styles from './Test.scss';
// Layouts
import Layout from './node_modules/@/layouts/App';
// Components
import Settings from './node_modules/@/components/Home/Settings';

/**
 * Settings
 *
 * @class Settings
 */
const Test = () => {
    return (
      <Layout>
        <div className={styles.home}>
          <Settings />
        </div>
      </Layout>
    );
}

export default Test;
