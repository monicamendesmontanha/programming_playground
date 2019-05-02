$(document).ready(function () {
  $.get('/api/brother').done(function (result) {
    console.log(result);
  })
})