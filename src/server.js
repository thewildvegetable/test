const http = require('http');
const path = require('path');
const express = require('express');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg',
];

// Create a new express app
const app = express();

app.get('*', (req, res) => {
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    res.sendFile(path.resolve(`${__dirname}/app/dist/test/${req.url}`));
  } else {
    res.sendFile(path.resolve(`${__dirname}/app/dist/test/index.html`));
  }
});

const server = http.createServer(app);

// start listening for traffic
server.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}`);
});