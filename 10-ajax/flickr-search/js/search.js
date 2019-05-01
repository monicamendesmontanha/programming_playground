// Global variables
const state = {
  currentPage: 1,            //Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
  lastPageReached: false,    // Don't request more images when you reach the last "page" of Flickr results
  requestInProgress: false   //Prevent your code from making too many requests: only one at a time, please
};

// Prevent from making too many requests: only one at a time, please

const showImages = function (results) {

  // Nested AKA helper function that returns a thumbnail URL for a given photo object.
  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_q.jpg' // Change 'q' to something else for different sizes
    ].join('');
  };

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL}); // equivalent to .attr('src', thumbnailURL)
    $img.appendTo('#images'); // $('#images').append($img);
  });
};



const searchFlickr = function (terms) {

  if (state.lastPageReached || state.requestInProgress) return; // Don't request more images when you reach the last "page" of Flickr results // Prevent your code from making too many requests: only one at a time, please

  console.log(`Searching Flickr for ${ terms }`);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  state.requestInProgress = true;

  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: terms,
    format: 'json',
    page: state.currentPage++ //Support infinite scroll to show all results from Flickr (eventually, after a lot of scrolling).
  }).done( showImages ).done(function (data) {
    console.log( data );
    if (data.photos.page > data.photos.pages) {
      state.lastPageReached = true;  // Don't request more images when you reach the last "page" of Flickr results
    }
    state.requestInProgress = false; // Prevent your code from making too many requests: only one at a time, please
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Stay on this page.

    const query = $('#query').val();
    $('#images').empty();
    state.lastPageReached = false;
    state.currentPage = 1;
    searchFlickr(query);
  });

  // Extremely twitchy
  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - ($(window).height() + $(window).scrollTop());

    if (scrollBottom <= 500) {
      const query = $('#query').val();
      searchFlickr(query);
    }
  });
});