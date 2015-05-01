var index = require('./');
var test = require('tape');
var fs = require('fs');


test('index', function(t){
  var pts = JSON.parse(fs.readFileSync(__dirname+'/geojson/fc.geojson'));
  var compare = JSON.parse(fs.readFileSync(__dirname+'/geojson/compare.geojson'));
  function fn () {
    return index(pts, 'quadtree');
  }
  var indexed = index(pts, 'rtree');
  t.equal(JSON.stringify(indexed), JSON.stringify(compare));
  indexed.features.splice(indexed.features.length - 1, 1);
  t.equal(JSON.stringify(indexed), JSON.stringify(pts));
  t.throws(fn, Error);
  t.end();
});
