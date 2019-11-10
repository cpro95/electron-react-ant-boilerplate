// Libs
import React from 'react';
// Styles
import styles from './Settings.scss';
// Layouts
import Layout from '@/layouts/App';
// Components
import Settings from '@/components/Home/Settings';

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
