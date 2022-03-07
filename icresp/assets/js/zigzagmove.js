// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

(function() {

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var field = document.getElementById("simple3D");
  var ball = document.getElementById("ball");

  var maxX = field.clientWidth - ball.offsetWidth;
  var maxY = field.clientHeight - ball.offsetHeight;

  var duration = 240; // seconds
  var gridSize = 90; // pixels

  var start = null;
  var stretchFactor;

  function step(timestamp)
  {
    var progress, x, y;
    if(start === null) {
      start = timestamp;
      stretchFactor = 1 + (Math.random() * 3);
    }

    progress = (timestamp - start) / duration / 1000; // percent

    x = stretchFactor * Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
    y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)

    ball.style.left = maxX/2 + (gridSize * x) + "px";
    ball.style.bottom = maxY/2 + (gridSize * y) + "px";

    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

})();




// double image animation

  // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var field = document.getElementById("simple3D");
  var ball = document.getElementById("simple3D");
  var ball2 = document.getElementById("ball2");

  var maxX = field.clientWidth - ball.offsetWidth;
  var maxY = field.clientHeight - ball.offsetHeight;

  var duration = 5; // seconds
  var gridSize = 50; // pixels

  var start = null;

  function step(timestamp)
  {
    var progress, x, y, y2;
    if(start === null) start = timestamp;

    progress = (timestamp - start) / duration / 1000; // percent

    x = progress * maxX/gridSize; // x = ƒ(t)
    y = 2 * Math.sin(x); // y = ƒ(x)
    y2 = 2 * Math.cos(x);

    ball.style.left = ball2.style.left = Math.min(maxX, gridSize * x) + "px";
    ball.style.bottom = maxY/2 + (gridSize * y) + "px";
    ball2.style.bottom = maxY/2 + (gridSize * y2) + "px";

    if(progress >= 1) start = null; // reset to start position
    requestAnimationFrame(step);
  }

  requestAnimationFrame(step);

