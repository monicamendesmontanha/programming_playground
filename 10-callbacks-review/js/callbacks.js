// Callbacks Review ////////////////////////////////////////////////
// A callback is a function passed into another function which calls
//that first function for you, at the some later point in time.


//////////////////////////////////////////
// Timers: order will  A, C, B //////////
//////////////////////////////////////////
console.log('A: before SetTimeout');

setTimeout(function () {
  console.log('B: times has passed....');
}, 4000);

console.log('C: after SetTimeout');



//////////////////////////////////////////
// jQuery: Document ready: I, III, II ///
//////////////////////////////////////////
console.log('I: before document ready');
$(document).ready(function () {
  console.log('II: the document is now ready');
});
console.log('III: after document ready');


//////////////////////////////////////////
// Event handlers  ///////////////////////
//////////////////////////////////////////
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo');
});
console.log('Chico');


