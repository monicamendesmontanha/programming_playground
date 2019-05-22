const axios = require('axios');
const $ = require('cheerio');

const sourceURL = 'https://www.madcoversite.com/dmd-alphabetical.html';

//  1. Fetch the URL
axios( sourceURL ).then((response) => {
  // console.log(response.data);
  const html = response.data;

  const $rows = $('table table tr:nth-child(n+2)', html);   // console: node scraper.js | head
  // console.log( $rows.length );

  //  2. Interate through the results
  $rows.each(function () {
    $cells = $('td', this);   // An array of 4 <td> cells.
    console.log( $cells.eq(0).text() );
  });

});


//  3. Push each sound into an array
//  4. Save the array to a file


