const express = require('express');

// npm install ejs
const ejs = require('ejs')

// call express
const server = express();
server.set('view-engine', 'ejs');   // See documentation.

const PORT = 1337

// whats going on the server
server.get('/', (req, res) => {
  console.log('GET /');
  res.render('home.ejs');
});

server.get('/about', (req, res) => {
  console.log('GET /about');
  res.send('About me')

});

server.listen(PORT, () => console.log(`Now serving on htttp://localhost:${PORT}/`));

