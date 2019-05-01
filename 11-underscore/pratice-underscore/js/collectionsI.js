// Collections!

var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// Exercises
// 1) Iterate through numbers and log each number to the console
_.each(numbers, function (num) {
  console.log(num);
});

// 2) Iterate through numbers and multiply each one of them by 5
_.map(numbers, function(num) {
  console.log( num * 5 )
})

// 3) Iterate through numbers and reduce it by adding them together
const add = function(a, b) {
 return a + b
};

const total = _(numbers).reduce(add);
console.log(`total: ${total}`)

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

var people = [
  { id: 1, username: "A", active: true,  age: 20 },
  { id: 2, username: "B", active: false, age: 35 },
  { id: 3, username: "C", active: false, age: 50 },
  { id: 4, username: "D", active: true,  age: 65 },
  { id: 5, username: "E", active: true,  age: 80 },
  { id: 6, username: "E", active: true,  age: 95 },
];

// 4) Get an array of all of the people in people that have the username "E"
const eUsers = _(people).where( {username: 'E'} );
console.log(eUsers)

// 5) Find the first object in people that has the id of 3

// 6) Find the first person who has an age of less than 50
// 7) Get an array of all of the people with an age of over 60
// 8) Remove all of the people with an age less than 40
const adults = _.reject(people, function (person) {
  return person.age < 40;
});
console.log(`Adults: ${adults}` );