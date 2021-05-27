particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var intervalID = window.setInterval(myCallback, 250);

function myCallback() {
  document.body.style.cursor = "default";
}