console.log('loading...')

// get a XHR instance
const xhr = new XMLHttpRequest();


// callback that fires every time the "readyState" changes.
xhr.onreadystatechange = function () {
  // Ignores all the readyStates except 4. Get out of this function ASAP.
  if (xhr.readyState !== 4) {
    return;
  }
    console.log( 'here is the response:', xhr.responseText );
};


// open the conection
xhr.open('GET', 'http://numbersapi.com/random/trivia');


// make the actual request
xhr.send();   // Asyncronous


// display the result
setTimeout(function () {
  console.log( 'The response is', xhr.responseText );
}, 500);