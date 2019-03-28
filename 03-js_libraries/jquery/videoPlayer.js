console.log("%c ----JQuery Video Player----", "color: blue; background: yellow");

/*
Making a Video Player with the DOM API
In this exercise, you'll be turning the below list of linked titles into a list of linked thumbnails,
using JavaScript DOM manipulation and the functions from the youtube.JS library read documentation.

Step by Step:
1.Create an array of every link on the page using document.querySelectorAll(cssSelector)

2. Iterate through the array. In each iteration of the loop:

- Find the current href using element.getAttribute(name), and store into a variable
- Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
- Create an IMG element using document.createElement(tagName)
- Set the "src" of the IMG element using element.setAttribute(name, value)
- Append the IMG to the link using element.appendChild(element)

• Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from the DOM Review here.
*/

const links = document.querySelectorAll( "li a" ); //Create an array of every link on the page using document.querySelectorAll(cssSelector)
console.log( links );

for(let i = 0 ; i < links.length ; i++ ) { // Iterate through the array. In each iteration of the loop:
  //console.log(links[i])
  const url = links[i].getAttribute('href');
  //console.log(url);
  const thumbnailURL = youtube.generateThumbnailUrl( url );

  const thumbnail = document.createElement('img');
  thumbnail.setAttribute('src', thumbnailURL);

  links[i].appendChild(thumbnail)

  console.log(thumbnail);
};