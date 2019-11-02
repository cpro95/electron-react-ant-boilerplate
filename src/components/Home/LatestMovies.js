// Libs
import React, { useState, useEffect } from 'react';
// Styles
import styles from './LatestMovies.scss';
import { List, Avatar } from 'antd';

const { ipcRenderer } = window.require('electron');

const LatestMovies = () => {
  // const [data, setData] = useState([{ c00: 'Example' }]);
  const [data, setData] = useState([]);

  useEffect(() => {
    ipcRenderer.send(
      'latest-query',
      'select idMovie, c00, c01, c03, c08, c16, c19, c20, premiered, strPath,rating, uniqueid_value from movie_view order by premiered desc limit 20'
    );
  }, []);


  ipcRenderer.on('sql-return-latest', (event, arg) => {
    setData(arg);
    ipcRenderer.removeAllListeners('sql-return-latest');
  });

  return (
    <div className={styles.latestmovies}>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 5
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.idMovie}>
            <List.Item.Meta
              avatar={<Avatar shape="square" size={100} src={item.c08} />}
              title={item.c00}
              description={item.c01}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default LatestMovies;
