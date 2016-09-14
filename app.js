$(document).ready(function() {
  var color = 'white';
  var colors = 'white green red blue yellow';

  function changeColor () {
    $(this).addClass(color);
  }
  $('.box').on('mousedown', function(){
    $('.box').on('mouseenter', changeColor);
  });
  $('.box').on('mouseup', function(){
    $('.box').off('mouseenter', changeColor);
  });
  

  $('.box').on('dblclick', function() {
    $(this).removeClass(colors);
  });

  $('#reset').on('click', function() {
    $('.box').removeClass(colors)
  });


  $('.box').on('click', function() {
    $(this).addClass(color);
  });

 $('.box').on('dblclick', function(){
  $(this).removeClass(color);
});

$('#reset').on('click', function() {
    $('.box').removeClass(color);
  });

  $('#red').on('click', function() {
    color = 'red';
  });

  $('#blue').on('click', function() {
    color = 'blue';
  });

  $('#green').on('click', function() {
    color = 'green';
  });

  $('#yellow').on('click', function() {
    color = 'yellow';
  });

  $('#white').on('click', function() {
    color = 'white';
  });


});
