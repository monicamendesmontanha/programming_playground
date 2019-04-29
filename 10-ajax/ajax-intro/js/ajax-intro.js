console.log('loading...')

// get a XHR instance
const xhr = new XMLHttpRequest();

// callback that fires every time the "readyState" changes.
xhr.onreadystatechange = function () {
  console.log('this runs a few times', xhr.readyState, xhr.responseText);
};


// open the conection
xhr.open('GET', 'http://numbersapi.com/random/trivia');

// make the actual request
xhr.send();   // Asyncronous

// display the result
setTimeout(function () {
  console.log( 'The response is', xhr.responseText );
}, 500);