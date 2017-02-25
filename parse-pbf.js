const VectorTile = require('vector-tile').VectorTile;
const Protobuf = require('pbf');
const fs = require('fs');
const zlib = require('zlib');

const zippedData = fs.readFileSync('tile.pbf');
zlib.gunzip(zippedData, (_, data) => {
  const tile = new VectorTile(new Protobuf(data));
  console.log(JSON.stringify(tile));
});
