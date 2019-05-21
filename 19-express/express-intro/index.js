const express = require('express');

// call express
const server = express();

// whats going on the server
server.get('/', (req, res) => {
  console.log('There was request');
  res.send('How ya doing');
});

server.listen(3000, () => console.log('Now serving on htttp://localhost:3000/'));