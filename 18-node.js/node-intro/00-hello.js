const colors = require('colors');

console.log('Hello world'.rainbow);
console.log('Hey world'.trap);
console.log('Hi world'.repeat(6).zalgo);


//  Console:

//  1. node 00-hello.js
// >Hello world

//  2. npm init -y      ("-y" = skip all the questions anwsering as a YES)
//  will create a package.json for us
//   "name": "intro",
//   "version": "1.0.0",
//   "description": "",
//   "main": "00-hello.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "author": "",
//   "license": "ISC"
// }

// 3. npm install colors
//  will create a dependence on package.json
// "dependencies": {
//   "colors": "^1.3.3"
// }

// When something goes wrong, just delete the node_modules dolder and run again the npm install:
// 4. rm -rf node_modules
// 5. npm install
