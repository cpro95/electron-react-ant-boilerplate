// Libs
import React, { useState, useEffect } from 'react';
// Styles
import styles from './Settings.scss';
import { Button, Descriptions } from 'antd';

// const { ipcRenderer } = window.require('electron');
const { dialog } = window.require('electron').remote;

const Store = window.require('electron-store');
const store = new Store();

// console.log(store.get('dbFileName'));

const Settings = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    let dbFileName = store.get('dbFileName');
    // eslint-disable-next-line no-undefined
    if (dbFileName === undefined) {
      setData('./extraResouces/MyVideos107.db');
    } else {
      setData(dbFileName);
    }
    // console.log('dbfilename is : ' + dbFileName);
  }, []);

  const handleDbFile = () => {
    dialog.showOpenDialog(
      {
        properties: ['openFile'],
        defaultPath: './',
        filters: [{ name: 'SQLite3', extensions: ['db'] }]
      },
      dbname => {
        // eslint-disable-next-line no-undefined
        if (dbname === undefined) {
          console.log('open db file : no selection');
        } else {
          console.log(dbname);
          store.set('dbFileName', dbname);
          setData(dbname);
        }
      }
    );
  };
  return (
    <div className={styles.settings}>
      <Descriptions title="Settings" bordered>
        <Descriptions.Item label="Current DB" span={6}>
          {data}
        </Descriptions.Item>
        <Descriptions.Item label="Search Query" span={4}>
          select idMovie, c00, c01, c03, c08, c16, c19, c20, premiered,
          strPath,rating, uniqueid_value from movie_view where c00 like %QUERY%
          order by idMovie desc
        </Descriptions.Item>
        <Descriptions.Item label="Latest Query" span={4}>
          select idMovie, c00, premiered, rating from movie_view order by
          premiered desc
        </Descriptions.Item>
        <Descriptions.Item label="Ratings Query" span={4}>
          select idMovie, c00, c01, c08, c20, rating from movie_view order by
          rating desc limit 30
        </Descriptions.Item>
      </Descriptions>
      <br />
      <Button type="primary" onClick={() => handleDbFile()}>
        Open DB File
      </Button>
    </div>
  );
};

export default Settings;
