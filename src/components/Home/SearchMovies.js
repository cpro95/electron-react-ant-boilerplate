// Libs
import React, { useState } from 'react';
// Styles
import styles from './SearchMovies.scss';
import { Input, List, Avatar } from 'antd';

const { ipcRenderer } = window.require('electron');
const { Search } = Input;

const SearchMovies = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const sqlSearch = query => {
    ipcRenderer.send('sql-query', query);
  };

  ipcRenderer.on('sql-return', (event, arg) => {
    if (Object.keys(arg[0])[0] !== 'error') {
      // console.log(arg);
      setData(arg);
      ipcRenderer.removeAllListeners('sql-return');
    } else {
      setData([{ c00: 'No Data Found!' }]);
    }
  });

  return (
    <div className={styles.searchmovies}>
      <Search
        placeholder="Search Movies...."
        value={search}
        onChange={e => handleSearch(e)}
        onSearch={value => sqlSearch(value)}
        enterButton
      />
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item key={item.idMovie}>
            <List.Item.Meta
              avatar={<Avatar shape="square" size={100} src={item.c08} />}
              title={item.c00}
              description={item.strPath}
            />
            {item.c01}
          </List.Item>
        )}
      />
    </div>
  );
};

export default SearchMovies;
