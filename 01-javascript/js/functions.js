// Exercises: Functions
console.log("%c---Exercises: functions---", "color: blue; background-color: yellow;");

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

//option 01
// function tellFortune (job_title, geographic_location, partner_name, number_of_children) {
//     const fortune = `You will be a ${ job_title } in ${ geographic_location }, and married to ${ partner_name } with ${ number_of_children } kids.`;
//     console.log(fortune);
// };

// tellFortune("Driver", "Ray", "Germany", 3);
// tellFortune("Developer", "Mary", "Brazil", 4);
// tellFortune("Professor", "Carlos", "Spain", 2);

//option 02 (The best)!!!
function tellFortune (job_title, geographic_location, partner_name, number_of_children) {
    return `You will be a ${ job_title } in ${ geographic_location }, and married to ${ partner_name } with ${ number_of_children } kids.`;
};

console.log( tellFortune("Teacher", "John", "EUA", 1) );
console.log( tellFortune("Developer", "Mary", "Brazil", 0) );
console.log( tellFortune("Trainer", "Rafa", "Africa", 1) );



// The Puppy Age Calculator
// You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
// Call the function three times with different sets of values.

// Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.


function calculateDogAge(puppysAge, dogYearsPerHUmanYear =7) {
    const dogYears = puppysAge * 7;
    result = `Your doggie is ${ dogYears } years old in dog years!`
    return result;
};

console.log(calculateDogAge(10));
console.log(calculateDogAge(4));
console.log(calculateDogAge(8));



// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

const calculateSupply = function (currentAge, amountPerDay) {
    const maxAge = 80;

    const amountPerYear = amountPerDay * 365.25; // This approximately includes leaps years
    const yearsRemaining = maxAge - currentAge;

    const amountRequired = amountPerYear * yearsRemaining;
    console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ maxAge }`);

    return amountRequired;
};

calculateSupply(63,4);
calculateSupply(87,3);
calculateSupply(96,6);



// The Geometrizer
// Create 2 functions that calculate properties of a circle.
// Create a function called calcCircumfrence:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".


const calcCircumfrence = function( radius ) {
    const circumference = 2 * radius * Math.PI; // Console: Math.PI = 3.141592653589793
    console.log(` The circumference is ${ circumference } `);
    return circumference;
};

calcCircumfrence(11);
calcCircumfrence(22);

const calcArea = function() {
    const area = Math.PI * radius * radius; // (radius ** 2) PI *ri^2
    console.log(`The area is ${ area }`);
    return area;
};

calcArea(33);
calcArea(44);




// The Temperature Converter
// It's hot out! Let's make a converter.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."


const celsiusToFahrenheit = function(celsius) {
    const fahrenheitTemperature = (celsius * 1.8) + 32;
    console.log(`${ celsius }°F is ${ fahrenheitTemperature }°C.`)

};

celsiusToFahrenheit(22);


const fahrenheitToCelsius = function(fahrenheit) {
    const convertedCelsiusTemperature = (fahrenheit - 32) / 1.8;
    console.log(` ${fahrenheit}°F is ${ convertedCelsiusTemperature}°C `);
};

fahrenheitToCelsius(71.6);