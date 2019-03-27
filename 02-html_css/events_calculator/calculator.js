console.log("%c---Events: Calculator---", "color: blue; font-size: large; background-color: yellow;");

// Calculator
// Start with this webpage, which has inputs and buttons for things to calculate:

// Create a new Javascript file and link to it with a script tag at the bottom.
// For each operation, create an event listener for the button, and when it's clicked, find the
// value of the appropriate input and show the result of the calculation in the solution div.
// Bonus: respond to key presses so that the user doesn't have to click the button.

// select the button
const squareButton = document.getElementById('square-button');

// define the event handler AKA event listeners AKA callbacks
const squareNumber = function(){
  // find the value
  const input = Number(document.getElementById('square-input').value);
  const result = input * input;
  document.getElementById('solution').innerHTML = result;


  // square the value
  // display the result
};

squareButton.addEventListener('click', squareNumber);

//attach the event handler to the button