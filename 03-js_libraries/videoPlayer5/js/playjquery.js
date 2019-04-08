$(document).ready(function() {
  $('#name').on('keypress', function() {
   // console.log('keypress detected')
    const name = $('#name').val();
   // console.log(name)
   $('header h1').html(`Welcome ${name}`);
  })
});