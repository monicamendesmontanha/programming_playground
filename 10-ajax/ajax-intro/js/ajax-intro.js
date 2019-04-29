console.log('loading...')

// get a XHR instance
const xhr = new XMLHttpRequest();

// open the conection
xhr.open('GET', 'http://numbersapi.com/random/trivia');

// make the actual request
xhr.send();   // Asyncronous

// display the result
setTimeout(function () {
  console.log( 'The response is', xhr.responseText );
}, 500);