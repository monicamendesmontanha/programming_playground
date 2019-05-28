// Promises are the evolution of callbacks: a way to handle data from async processes.
// The next evolution is async/await


const fs = require('fs');

// // readFile is asynchronous

// fs.readFile('flinststones.txt', 'utf-8', (err, content) => {
//   // error first pattern
//   if (err) {
//     throw err;
//   }

//   console.log( content );
// });


// A promise wrapper around readFile

const readFile = (filename) => {
  return new Promise( (resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(content);
    });
  });
};

// readFile('flinststones.txt').then((content) => {
//   console.log('This .then() callback eas actually invoked under the name resolve()');
//   console.log('content');
// }).catch((error) => {
//   console.log('There was error', error);
// });

const fileReadingPromise = readFile('flinstones.txt');
fileReadingPromise.then( (content) => {
  console.log(content);
});

console.log('other stuff');

fileReadingPromise.catch( (err) => {
  console.log('There was error', err);
});

