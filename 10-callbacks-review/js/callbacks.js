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


//////////////////////////////////////////
//////////////////////////////////////////
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const each = function (someArray, callback) {
  for (let i = 0; i < someArray.length; i++) {
    callback( someArray[i] );
  }
};

each(colours, function (c) {
  console.log(c);
});

// colours.each do |c|
//  puts c
// end

each(['Groucho', 'Harpo', 'Chico'], function (name) {
  console.log( name + ' Marx' );
});


// .forEach added in ES5
colours.forEach(function (likky) {
  console.log(likky)
});