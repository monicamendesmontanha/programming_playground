// Promises are the evolution of callbacks: a way to handle data from async processes.
// The next evolution is async/await


const fs = require('fs');

// readFile is asynchronous

fs.readFile('flinststones.txt', 'utf-8', (err, content) => {
  // error first pattern
  if (err) {
    throw err;
  }

  console.log( content );
});


