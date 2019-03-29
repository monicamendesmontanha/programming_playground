console.log("%c ----JQuery Plugins Video Player 04----", "color: blue; background: yellow");
/*
Exercise: jQuery Plugins
In this exercise, you'll use a jquery plugin to make your watcher more colorful.

Start with your code from literally any exercise.
Include the funText jQuery plugin on your page: http://briznad.github.io/funText/
Use funText on your header, with a large shadow. Check the docs to see how to use it.
Now use funText on each of your links, with smaller shadows.
Wasn't that fun??
Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

*/

const $links = $('li a');

const thumbnailify = function ($a) {
  const url = $a.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl( url );
  const $thumbnail = $('<img>').attr('src', thumbnailURL);
  $a.append($thumbnail);

  $thumbnail.on('click', function (event) {
    event.preventDefault(); // Stay on the same page -- don't follow the link

    const embedURL = youtube.generateEmbedUrl( url );
    const embedCode = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    $('#player').hide().html(embedCode).fadeIn(3000);
  });
}

for (let i = 0; i < $links.length; i++) {
  const $link = $( $links[i] ); // Turn the vanilla DOM node back into a jQuery object
  thumbnailify( $link );
}