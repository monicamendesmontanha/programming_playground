//Exercises: Scope
console.log("%c---Exercises: Scope---", "color: blue; background-color: yellow;");


//-----Global Scope-----//

const message = "Hello World";

const showMessage = function(){
  console.log(message) //This functions has acess to the GLOBAL variable.
};

showMessage();

//-----Local or function scope-----//

const showLocalMessage = function(){
  const localMessage = 'Goodbye Cruel World';
  console.log(localMessage) //This functions has acess to the LOCAL variable.
};

showLocalMessage();
//console.log(localmessage); // (console: localmessage is not defined)) localmessage has gone out of scope.



//-----var inside a block-----//
if (23 === 23.0){
  var hotdogs = 'with barbeque sauce'; //global scope
  console.log(hotdogs);
}

console.log(hotdogs); //hotdogs var is still visible outside of the block.


//-----let inside a block-----//
if (23 === 23.0){
  let goldfish = true; // block scope
  console.log(goldfish);
}
//console.log(goldfish); // goldfish has gone out of scope


// Here j has block scope and won't hang around after the loop is done.
for(var j=0; j < 15; j++){
  console.log('here is your j', j);
}

//-----const inside a block-----//
if (23 === 23){
  const password = 'swordfish'; // const has block scope too (the same as a let)
  console.log(password);
}
