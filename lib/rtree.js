var gbv = require('geojson-bounding-volume');
var rbush = require('rbush');

/*pulled from https://github.com/calvinmetcalf/gbush/blob/master/index.js#L4*/
function format(coords){
  // transform from gbv which gives [[min1, min2, ...],[max1, max2, ...]]
  //to rbush which wants [min1, min2, max1, max2]
  return [coords[0][0],coords[0][1],coords[1][0],coords[1][1]];
}

exports.build = function (_) {
  var featureCollection = JSON.parse(JSON.stringify(_));
  var tree = rbush( featureCollection.features.length);
  var coordinates = [];
  featureCollection.features.forEach(function (feature, feature_index) {
    if (feature.geometry) {
      coord = format(gbv(feature.geometry));
      coord.feature_index = feature_index;
      coordinates.push(coord);
    }
  });
  tree.load(coordinates);
  featureCollection.features.push({
    type: "Feature",
    geometry: null,
    properties: {
      rtree: tree.toJSON()
    }
  });
  return featureCollection;
}
