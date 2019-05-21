const http = require('http'); //Node standar libraries

// This callback runs everytime an HTTP request hits the server;
// req has information about the request
// res is the response object: do stuff to res to send the response

http.createServer((req, res) => {
  console.log(`Serving request: ${ req.method } ${ req.url }`);

  res.writeHeader(200, {'Content-Type': 'text/plain'});

  if ( req.url === '/hello') {
    res.end('hello world');
  } else if (req.url === '/hey') {
    res.end('hey world');
  } else {
    res.end('hi world');
  }

}).listen(1337);

console.log('Server is running at http://localhost:1337/');

// npm install -g nodemon