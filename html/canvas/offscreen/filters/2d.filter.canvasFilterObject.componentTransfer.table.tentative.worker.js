// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.filter.canvasFilterObject.componentTransfer.table.tentative
// Description:Test pixels on CanvasFilter() componentTransfer with table type
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Test pixels on CanvasFilter() componentTransfer with table type");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  // From https://www.w3.org/TR/SVG11/filters.html#feComponentTransferElement
  function getTransformedValue(C, V) {
      // Get the right interval
      const n = V.length - 1;
      const k = C == 1 ? n - 1 : Math.floor(C * n);
      return V[k] + (C - k/n) * n * (V[k + 1] - V[k]);
  }

  function getColor(inputColor, tableValues) {
      const result = [0, 0, 0];
      for (const i in inputColor) {
          const C = inputColor[i]/255;
          const Cprime = getTransformedValue(C, tableValues[i]);
          result[i] = Math.max(0, Math.min(1, Cprime)) * 255;
      }
      return result;
  }

  tableValuesR = [0, 0, 1, 1];
  tableValuesG = [2, 0, 0.5, 3];
  tableValuesB = [1, -1, 5, 0];
  ctx.filter = new CanvasFilter({filter: 'componentTransfer',
      funcR: {type: 'table', tableValues: tableValuesR},
      funcG: {type: 'table', tableValues: tableValuesG},
      funcB: {type: 'table', tableValues: tableValuesB},
  });

  const inputColors = [
      [255, 255, 255],
      [0, 0, 0],
      [127, 0, 34],
      [252, 186, 3],
      [50, 68, 87],
  ];

  for (const color of inputColors) {
      let outputColor = getColor(color, [tableValuesR, tableValuesG, tableValuesB]);
      ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      ctx.fillRect(0, 0, 10, 10);
      _assertPixelApprox(canvas, 5, 5, outputColor[0],outputColor[1],outputColor[2],255, 2);
  }
  t.done();
});
done();
