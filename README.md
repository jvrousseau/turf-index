# turf-index

[![build status](https://secure.travis-ci.org/jvrousseau/turf-index.png)](http://travis-ci.org/jvrousseau/turf-index)

turf module to create geographic indexing


### `turf.index(points, index-type)`

Creates an index structure for a set of Point|points and attaches them to the FeatureCollection|featurecollection


### Parameters

| parameter    | type                         | description                                                                                           |
| ------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------- |
| `points`     | FeatureCollection\.\<Point\> | to index                                                                                              |
| `index-type` | String                       | name of index. As of today, only support is "rtree" (using [RBush](https://github.com/mourner/rbush)) |


### Example

```js
var fc = {
  "type": "FeatureCollection",
  "features": [
      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [
                  -75.833,
                  39.284
              ]
          },
          "properties": {
              "name": "Location B",
              "category": "House",
              "elevation": 25
          }
      },
      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [
                  -75.9221,
                  39.27
              ]
          },
          "properties": {
              "name": "Location B",
              "category": "House",
              "elevation": 11
          }
      },
      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [
                  -75.534,
                  39.123
              ]
          },
          "properties": {
              "name": "Location C",
              "category": "Office",
              "elevation": 49
          }
      },
      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [
                  -75.21,
                  39.12
              ]
          },
          "properties": {
              "name": "Location A",
              "category": "Store",
              "elevation": 50
          }
      },
      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [
                  -75.33,
                  39.44
              ]
          },
          "properties": {
              "name": "Location C",
              "category": "Office",
              "elevation": 76
          }
      },
      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [
                  -75.56,
                  39.24
              ]
          },
          "properties": {
              "name": "Location C",
              "category": "Office",
              "elevation": 18
          }
      },
      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [
                  -75.56,
                  39.36
              ]
          },
          "properties": {
              "name": "Location C",
              "category": "Office",
              "elevation": 52
          }
      }
   ]
}


var indexed = turf.index(fc, 'rtree');


//=indexed
```


**Returns** `FeatureCollection.<Point>`, a copy of the FeatureCollection with a null geometry feature appended with the inxed data structure

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install turf-index
```

## Tests

```sh
$ npm test
```


