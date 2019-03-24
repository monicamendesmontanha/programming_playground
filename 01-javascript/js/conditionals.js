//Exercises: if/else statements
console.log("%c---Exercises: conditionals---", "color: blue; background-color: yellow;");

/*
What number's bigger?
Write a function named greaterNum that: takes 2 arguments, both numbers.
returns whichever number is the greater (higher) number.
Call that function 2 times with different number pairs,
and log the output to make sure it works
(e.g. "The greater number of 5 and 10 is 10.").
*/
console.log("What number's bigger?");

const greaterNum = function(number1, number2) {
    result = number1 > number2 ? number1 : number2; //condition ? expr1 : expr2
    return console.log(`The greater number of ${number1} and ${number2} is ${result}.`);
};

greaterNum(3,6);
greaterNum(15,6);

/*
The World Translator
Write a function named helloWorld that:
takes 1 argument, a language code (e.g. "es", "de", "en").
returns "Hello, World" for the given language, for at least 3 languages.
It should default to returning English.
Call that function for each of the supported languages and log the result
to make sure it works.
*/
console.log("The World Translator");

const helloWorld = function(code){

    if (code === "es"){
        return "Hola Mundo";
    } else if (code === "de") {
        return "Hallo Welt";
    } else {
        return "Hello World";
    }
};

console.log(helloWorld("es"));
console.log(helloWorld("de"));
console.log(helloWorld("en"));
console.log(helloWorld("pt"));

/*
The Grade Assigner
Write a function named assignGrade that:

takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.
*/

console.log("The Grade Assigner");

const assignGrade = function(score){
    if (score >= 90) {
        return "A";
    }else if (score >= 80) {
        return "B";
    }else if (score >= 70) {
        return "C";
    }else if (score >= 60) {
        return "D";
    }else {
        return "F";
    }
};

console.log( assignGrade(100) );
console.log( assignGrade(81) );
console.log( assignGrade(76) );
console.log( assignGrade(65) );
console.log( assignGrade(5) );

/*
The Pluralizer
Write a function named pluralize that:
takes 2 arguments, a noun and a number.
returns the number and pluralized form, like "5 cats" or "1 dog".
Call that function for a few different scores and log the result to make sure it works.
*/
console.log("The Pluralizer");

const pluralize = function(number, noum){
    const message = `${number} ${noum}`;

    if (number === 1) {
        return message
    } else {
        return message + 's';
    }
};


console.log( pluralize(5, 'cat') );
console.log( pluralize(1, 'dog') );
console.log( pluralize(0, 'turtle') );





