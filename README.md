# tilestrata-example
Serving Mapbox Vector Tiles with tilestrata

## Description

By following the documentation from [tilestrata](https://github.com/naturalatlas/tilestrata) and [tilestrata-vtile](https://github.com/naturalatlas/tilestrata-vtile) plugin
we would like to have a Mapbox vector tile server for the GeoJSON sample.

## Installation

The following steps apply to a macOS box.

Install `mapnik` 3:
```
brew install mapnik
```

Install npm dependencies:
```
yarn install
```

## Starting

```
yarn run start
```

Test the tile server with curl:
```
curl localhost:8080/donors/0/0/0/tile.pbf > tile.pbf
```

Use `parse-pbf.js` to see the contents of the `tile.pbf`:
```
parse-pbf.js
```
