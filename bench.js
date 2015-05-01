var turf_index = require('./');
var Benchmark = require('benchmark');
var fs = require('fs');

var fc = JSON.parse(fs.readFileSync(__dirname+'/geojson/fc.geojson'));
var suite = new Benchmark.Suite('turf-index');
suite
    .add('turf-index (rtree)',function () {
        turf_index(fc, 'rtree');
    })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
  })
  .run();
