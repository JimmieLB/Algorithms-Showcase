var canvas;
var $header;

$(document).ready(function() {
  $header = $('.header');
})

function setup() {
  var w = window.innerWidth;
  var h = window.innerHeight - $header.height();
  canvas = createCanvas(w,h);
}

function draw() {

}

