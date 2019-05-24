const grouncho = {
  fullName: 'Groucho Julius Marx',
  greeting() {
    return `Good evening, my name is ${ this.fullName }`;
  }
};

console.log( groucho.greeting() );  // Works: because of the call site.

const unboundGreeting = groucho.greeting;
console.log( unboundGreeting() );   // This is window/global -- there is no call site.


// .bind() /////////////////////////////////////////
const boundGreeting = grouncho.greeting.bind( grouncho );
console.log( boundGreeting() ); // Works: because of the .bind().

// .call() /////////////////////////////
console.log( unboundGreeting.call( grouncho ));
console.log( unboundGreeting.call( {fullName: 'Harpo Marx'} ) );

// .apply() //////////////////////////////////////
const numbers = [1, 4, 6, 8, 9, 1001];

