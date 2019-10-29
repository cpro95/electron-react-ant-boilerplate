const path = require('path');
const isDev = require('electron-is-dev');

var dbFileName;
if (isDev && process.argv.indexOf('--noDevServer') === -1) {
  dbFileName = path.join(path.dirname(__dirname), 'extraResources', 'MyVideos107.db');
} else {
  dbFileName = path.join(
    process.resourcesPath,
    'extraResources',
    'MyVideos107.db'
  );
}

// console.log(dbFileName);
// const dbFileName = './MyVideos107.db';

module.exports = dbFileName;
