// setTimeout expects a callback -- it does not use Promises
// wrap setTimeout in a Promisse

const wait = (duration) => {
  return new Promise( (resolve) => {
    setTimeout(resolve, duration);
  });
}


// Make this work:
// Wait returns a Promisse from which we can then call .then()
wait(2000).then(() => {
  console.log('2 seconds has passed');
}).then(() => {
  console.log('also runs');
});

/////////////////////////
// options using async
////////////////////////

// async function wait() {

//   await { then: resolve => setTimeout(() => resolve(), 2000) };
//   console.log('2 seconds has passed');
// }

// wait();
