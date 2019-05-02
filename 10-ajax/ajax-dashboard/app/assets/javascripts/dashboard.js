$(document).ready(function () {

  const updateBrother = function() {
    // $.get('/api/brother').done(function (result) {
    //   $('#brother').text(result);
    // });
    $('#brother').load('/api/brother');
  };

  setInterval(updateBrother, 3000);
  updateBrother();


  const updateTime = function() {
    // $.get('/api/time').done(function (result) {
    //   $('#time').text(result);
    // });
    $('#time').load('/api/time');
  };

  setInterval(updateTime, 1000);
  updateTime();


  const updateUptime = function() {
    // $.get('/api/uptime').done(function (result) {
    //   $('#uptime').text(result);
    // });
    $('#uptime').load('/api/uptime');
  };

  setInterval(updateUptime, 5000);
  updateUptime();


  const updateFortune = function() {
    // $.get('api/fortune').done(function (result) {
    //   $('#fortune').text(result);
    // });
    $('#fortune').load('/api/fortune');
  };

  setInterval(updateFortune, 15000);
  updateFortune();


});

