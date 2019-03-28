console.log("%c ----JQuery Video Player----", "color: blue; background: yellow");

/*Making a Video Player with the DOM API
In this exercise, you'll be turning the below list of linked titles into a list of linked thumbnails, using JavaScript DOM manipulation and the functions from the youtube.JS library read documentation.

Step by Step:
Create an array of every link on the page using document.querySelectorAll(cssSelector)

Iterate through the array. In each iteration of the loop:

Find the current href using element.getAttribute(name), and store into a variable
Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
Create an IMG element using document.createElement(tagName)
Set the "src" of the IMG element using element.setAttribute(name, value)
Append the IMG to the link using element.appendChild(element)
Quick Tip: If you need a refresher on the DOM API, check out slides 1-12 from the DOM Review here.*/


