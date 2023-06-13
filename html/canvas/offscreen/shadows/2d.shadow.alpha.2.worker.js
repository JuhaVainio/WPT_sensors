// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.alpha.2
// Description:Shadow color alpha components are used
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Shadow color alpha components are used");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.fillRect(0, 0, 100, 50);
  ctx.shadowColor = 'rgba(0, 0, 255, 0.5)';
  ctx.shadowOffsetY = 50;
  ctx.fillRect(0, -50, 100, 50);
  _assertPixelApprox(canvas, 50,25, 127,0,127,255, 2);
  t.done();
});
done();
