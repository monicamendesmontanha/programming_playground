console.log("%c---About me---", "color: blue; font-size: large; background-color: yellow;");

/*Create a new Javascript file and link to it with a script tag at the bottom.
(In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
(In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
Create a new img element and set its src attribute to a picture of you. Append that element to the page.*/

// > console: document.body.style.fontFamily
document.body.style.fontFamily = "Arial, sans-serif";

const nickname = document.getElementById('nickname');
nickname.innerHTML = "Moniquinha";

document.getElementById('favorites').innerHTML = "Beach, Farm";
document.getElementById('hometown').innerHTML = "Salvador";

const facts = document.getElementsByTagName('li');
for (let i = 0; i < facts.length ; i++) {
  facts[i].className = "listitem";
};

// document.body.innerHTML += `<img src="http://fillmurray.com/500/700">`;

const bill = document.createElement('img'); //detached DOM Node
bill.src = "http://fillmurray.com/500/700";
document.body.appendChild(bill);