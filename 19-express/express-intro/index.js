const express = require('express');

// call express
const server = express();

const PORT = 1337

// whats going on the server
server.get('/', (req, res) => {
  console.log('There was request');
  res.send('How ya doing');
});

server.listen(PORT, () => console.log(`Now serving on htttp://localhost:${PORT}/`));