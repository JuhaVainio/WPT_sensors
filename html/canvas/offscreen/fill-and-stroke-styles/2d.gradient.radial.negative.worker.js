// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.gradient.radial.negative
// Description:createRadialGradient() throws INDEX_SIZE_ERR if either radius is negative
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("createRadialGradient() throws INDEX_SIZE_ERR if either radius is negative");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.createRadialGradient(0, 0, -0.1, 0, 0, 1); });
  assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.createRadialGradient(0, 0, 1, 0, 0, -0.1); });
  assert_throws_dom("INDEX_SIZE_ERR", function() { ctx.createRadialGradient(0, 0, -0.1, 0, 0, -0.1); });
  t.done();
});
done();
