console.log("%c---HTML & CSS: capabilities---", "color: blue; background-color: yellow;");

//start with an empty string
// extended  ASCCI
let content = '';

// loop throungh the available characteres
for (let i = 0; i < 2 ** 14; i++){
  content += String.fromCharCode(i)
}

// NO NO NO NAUGHTY
document.body.innerHTML = content;

