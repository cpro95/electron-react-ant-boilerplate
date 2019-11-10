// Libs
import React from 'react';
// Styles
import styles from './Latest.scss';
// Layouts
import Layout from '@/layouts/App';
// Components
import LatestMovies from '@/components/Home/LatestMovies';

/**
 * Latest
 *
 * @class Latest
 */
const Latest = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <LatestMovies />
      </div>
    </Layout>
  );
};

export default Latest;
