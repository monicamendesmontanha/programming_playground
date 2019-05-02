$(document).ready(function () {

  const updateBrother = function() {
    $.get('/api/brother').done(function (result) {
      $('#brother').text(result);
    });
  };

  setInterval(updateBrother, 3000);
  updateBrother();
});