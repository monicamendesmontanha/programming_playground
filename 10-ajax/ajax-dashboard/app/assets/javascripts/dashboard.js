$(document).ready(function () {

  const updateBrother = function() {
    $.get('/api/brother').done(function (result) {
      $('#brother').text(result);
    });
  };

  setInterval(updateBrother, 3000);
  updateBrother();


  const updateTime = function() {
    $.get('/api/time').done(function (result) {
      $('#time').text(result);
    });
  };

  setInterval(updateTime, 1000);
  updateTime();


  const updateUptime = function() {
    $.get('/api/uptime').done(function (result) {
      $('#uptime').text(result);
    });
  };

  setInterval(updateUptime, 5000);
  updateUptime();
});

