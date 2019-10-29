const path = require('path');

// console.log(path.dirname(__dirname));
const dbFileName = path.join(path.dirname(__dirname), "./extraResources/MyVideos107.db");
// const dbFileName = './MyVideos107.db';

module.exports = dbFileName;
