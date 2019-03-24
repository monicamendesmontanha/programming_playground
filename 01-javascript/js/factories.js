//Exercises: Factories
console.log("%c---Exercises: Factories---", "color: blue; background-color: yellow;");


// A factory copies values into simple objects and ensures the objects have
// the correct and uniform shape.
// They also save on typing.


const catFactory = function(n, a, f){

  return {

    name: n,
    age: a,
    furColor: f,
    species: 'feline', // constants to work too
    meow: function(){
      console.log('Meow, my name is ' + this.name);
      //console:
      //cuteCats[1].name = 'grouch'
      // >> "grouch"
      //cuteCats[1].meow()
      // >> Meow, my name is grouch
    }

  };

  //create a cat object;
  // const kitty = {};
  // kitty.name = n;
  // kitty.age = a;
  // kitty.furColor = f;
  //return the cat object
  //return kitty;
};


const cuteCats = [

catFactory("Angel", 18, "grey"),
catFactory("Evil", 14, "red"),
catFactory("Meh", 11, "white")
//  { name: "Angel", age: 18, furColor: "grey" },
//  { name: "Evil", age: 14, furColor: "red" },
//  { name: "Meh", age: 12, "Fur Color": "white" }

];


for(let i=0; i< cuteCats.length; i++){
  console.log( cuteCats[i].furColor )
};

//     /\ This way is better!
//     ||
//     ||
//---------------------------------------//



//--------------------------------//
//-----Prototypal Inheritance-----//
// Interesting/ Historic/ BU NOIT SUPER IMPORTANTE TODAY

// Capital C in Cat is a convention meaning that tis is a Cat constructor
const Cat = function(n, a, f){
  //The "this" object is created automagically for you.
  this.name = n,
  this.age = a,
  this.furColor = f,
  this.meow = function(){
    console.log('Meow, my name is ' + this.name);
  }
  //No need for a return statement! Isn`t that fantastic!

};


const cooper = new Cat('Cooper', 3, 'striped grey');
const audrey = new Cat('Audrey', 3, 'striped grey');



//Prototype Inheritance allows us to extend the "prototype" after we define it.

Cat.prototype.species = 'feline';
// now all cats are feline.
console.log(audrey.species);

Cat.prototype.eat = function(food){
  console.log('Yum, I love to eat' + food);
};

audrey.eat('brown mushy stuff');
cooper.eat('brown mushy stuff');














