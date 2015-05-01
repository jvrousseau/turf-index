var rtree = require('./lib/rtree');


/**
 * Creates an index structure for a set of {@link Point|points} and attaches them to the {@link FeatureCollection|featurecollection}
 *
 * @module turf/index
 * @category misc
 * @param {FeatureCollection<Point>} points to index
 * @param {String} index-type name of index. As of today, only support is "rtree" (using [RBush](https://github.com/mourner/rbush))
 * @return {FeatureCollection<Point>} a copy of the FeatureCollection with a null geometry feature appended with the inxed data structure
 * @example
 * var fc = {
 *   "type": "FeatureCollection",
 *   "features": [
 *       {
 *           "type": "Feature",
 *           "geometry": {
 *               "type": "Point",
 *               "coordinates": [
 *                   -75.833,
 *                   39.284
 *               ]
 *           },
 *           "properties": {
 *               "name": "Location B",
 *               "category": "House",
 *               "elevation": 25
 *           }
 *       },
 *       {
 *           "type": "Feature",
 *           "geometry": {
 *               "type": "Point",
 *               "coordinates": [
 *                   -75.9221,
 *                   39.27
 *               ]
 *           },
 *           "properties": {
 *               "name": "Location B",
 *               "category": "House",
 *               "elevation": 11
 *           }
 *       },
 *       {
 *           "type": "Feature",
 *           "geometry": {
 *               "type": "Point",
 *               "coordinates": [
 *                   -75.534,
 *                   39.123
 *               ]
 *           },
 *           "properties": {
 *               "name": "Location C",
 *               "category": "Office",
 *               "elevation": 49
 *           }
 *       },
 *       {
 *           "type": "Feature",
 *           "geometry": {
 *               "type": "Point",
 *               "coordinates": [
 *                   -75.21,
 *                   39.12
 *               ]
 *           },
 *           "properties": {
 *               "name": "Location A",
 *               "category": "Store",
 *               "elevation": 50
 *           }
 *       },
 *       {
 *           "type": "Feature",
 *           "geometry": {
 *               "type": "Point",
 *               "coordinates": [
 *                   -75.33,
 *                   39.44
 *               ]
 *           },
 *           "properties": {
 *               "name": "Location C",
 *               "category": "Office",
 *               "elevation": 76
 *           }
 *       },
 *       {
 *           "type": "Feature",
 *           "geometry": {
 *               "type": "Point",
 *               "coordinates": [
 *                   -75.56,
 *                   39.24
 *               ]
 *           },
 *           "properties": {
 *               "name": "Location C",
 *               "category": "Office",
 *               "elevation": 18
 *           }
 *       },
 *       {
 *           "type": "Feature",
 *           "geometry": {
 *               "type": "Point",
 *               "coordinates": [
 *                   -75.56,
 *                   39.36
 *               ]
 *           },
 *           "properties": {
 *               "name": "Location C",
 *               "category": "Office",
 *               "elevation": 52
 *           }
 *       }
 *    ]
 * }
 *
 *
 * var indexed = turf.index(fc, 'rtree');
 *
 *
 * //=indexed
 */
module.exports = function (featureCollection, type) {
    switch (type) {
    case "rtree":
        return rtree.build(featureCollection);
    default:
        throw new Error("Only r-tree indexing is available at this time");
    }
};
