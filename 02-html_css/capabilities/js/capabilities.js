console.log("%c---HTML & CSS: capabilities---", "color: blue; background-color: yellow;");

//start with an empty string

let content = '';

// loop throungh the available characteres
for (let i = 0; i < 227; i++){
  content += String.fromCharCode(i)
}

// NO NO NO NAUGHTY
document.body.innerHTML = content;

