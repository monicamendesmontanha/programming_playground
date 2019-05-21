// How painful it is to get keyboard input

// console
// npm install readline
const readline = require("readline");

// console
// npm install chalk figlet
const chalk = require("chalk"); // Alternative to npm install colors
const figlet = require("figlet");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a string: ", response => {
  console.log(
    chalk.blue(
      figlet.textSync(response, {
        font: "slant",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
  rl.close();
});