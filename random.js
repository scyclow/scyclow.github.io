$(function() {
  var TIME = 0.075;
  var SIZE = 200;
  var PROB = 0.5;

  function randSec(max) {
    var second = 1000;
    return Math.random()*second * max;
  }

  function randPx(max) {
    var number = Math.random()*max;
    return number + 'px';
  }

  function randColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function randExec(cmd) {
    if (Math.random() < PROB) {
      cmd();
    }
  }

  function draw() {
    var test = $('div.test');

    randExec(function() {
      test.css('background-color', randColor());
    });
    randExec(function() {
      test.css('border-radius', randPx(SIZE));
    });
    randExec(function() {
      test.css('height', randPx(SIZE));
    });
    randExec(function() {
      test.css('width', randPx(SIZE*2));
    });

    var windowH = $(window).height()/10;
    var windowW = $(window).width();
    // randExec(test.css('margin-left', randPx(windowW)));
    // randExec(test.css('margin-top', randPx(windowH)));

    $('body').css('background-color', randColor())
  }

  setInterval(draw, randSec(TIME));

});