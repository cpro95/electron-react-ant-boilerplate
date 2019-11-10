// Libs
import React from 'react';
// Styles
import styles from './Home.scss';
// Layouts
import Layout from '@/layouts/App';
// Components
import SearchMovies from '@/components/Home/SearchMovies';

/**
 * Home
 *
 * @class Home
 */
const Home = () => {
  return (
    <Layout>
      <div className={styles.home}>
        <SearchMovies />
      </div>
    </Layout>
  );
};

export default Home;
