// async function test() {
//   await new Promise((resolve, reject) => setTimeout(() => resolve(), 1000));
//   console.log('Hello, World!');
// }

// test();

async function test() {
  // This object is a "thenable". It's a promise by the letter of the law,
  // but not the spirit of the law.
  await { then: resolve => setTimeout(() => resolve(), 1000) };
  console.log('Hello, World!');
}

test();