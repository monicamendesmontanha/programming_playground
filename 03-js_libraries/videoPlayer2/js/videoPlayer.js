console.log("%c ----JQuery Video Player 02----", "color: blue; background: yellow");

/*
jQuery: Exercise 2
Making a Video Player in jQuery
In this exercise, you will use jQuery instead of the DOM API to create the same list of links you made in Exercise 1.

Start with your own solution from Exercise 1.

First, download the jQuery library from jquery.com and save it into the same directory as your exercise files. Then, add a <script> tag to the page which loads in the jQuery library you just downloaded. The script tag will look something like this:
  <script type="text/javascript" src="PUT THE FILENAME HERE"></script>
Next, replace the existing code with jQuery - any DOM manipulation can be done with jQuery instead. If you're not sure how to do something with jQuery, google for "X with jQuery" and you will likely find the jQuery docs or StackOverflow questions.

Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

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