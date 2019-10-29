// Libs
import React from 'react';
// Styles
import styles from './Ratings.scss';
// Layouts
import Layout from '@/layouts/App';
// Components
import RatingsMovies from '@/components/Home/RatingsMovies';

/**
 * Ratings
 *
 * @class Ratings
 */
const Ratings = () => {
    return (
      <Layout>
        <div className={styles.home}>
          <RatingsMovies />
        </div>
      </Layout>
    );
}

export default Ratings;
