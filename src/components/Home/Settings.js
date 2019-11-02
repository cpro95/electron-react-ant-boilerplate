// Libs
import React, { useState } from 'react';
// Styles
import styles from './Settings.scss';
import { Button, Row, Col, Typography } from 'antd';

// const { ipcRenderer } = window.require('electron');
const { dialog } = window.require('electron').remote;

const { Title } = Typography;

const Store = window.require('electron-store');
const store = new Store();

// console.log(store.get('dbFileName'));

const Settings = () => {
  const [data, setData] = useState(store.get('dbFileName'));

  const handleDbFile = () => {
    var dbname = dialog.showOpenDialog({
      properties: ['openFile'],
      defaultPath: './',
      filters: [{ name: 'SQLite3', extensions: ['db'] }]
    });
    console.log(dbname);
    store.set('dbFileName', dbname);
    setData(dbname);
  };
  return (
    <div className={styles.testcomponent}>
      <Title>Settings</Title>
      <Row type="flex" justify="center">
        <Col span={6}>
          <Button type="primary" onClick={() => handleDbFile()}>
            Open DB File
          </Button>
        </Col>
        <Col span={18}>
          <Title level={4}>{data}</Title>
        </Col>
      </Row>
    </div>
  );
};

export default Settings;
