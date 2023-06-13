// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.stroke.empty
// Description:Empty subpaths are not stroked
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Empty subpaths are not stroked");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#0f0';
  ctx.fillRect(0, 0, 100, 50);

  ctx.strokeStyle = '#f00';
  ctx.lineWidth = 100;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  ctx.beginPath();
  ctx.moveTo(40, 25);
  ctx.moveTo(60, 25);
  ctx.stroke();

  _assertPixel(canvas, 50,25, 0,255,0,255);
  t.done();
});
done();
