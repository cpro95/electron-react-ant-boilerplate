// Libs
import React, { useState } from 'react';
// Styles
import styles from './Settings.scss';
import { Button, Descriptions } from 'antd';

// const { ipcRenderer } = window.require('electron');
const { dialog } = window.require('electron').remote;

const Store = window.require('electron-store');
const store = new Store();

// console.log(store.get('dbFileName'));

const Settings = () => {
  const [data, setData] = useState(store.get('dbFileName'));

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
    <div className={styles.testcomponent}>
      <Descriptions title="Settings" bordered>
        <Descriptions.Item label="Current DB">{data}</Descriptions.Item>
      </Descriptions>
      <br />
      <Button type="primary" onClick={() => handleDbFile()}>
        Open DB File
      </Button>
    </div>
  );
};

export default Settings;
