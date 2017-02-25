const express = require('express');
const fs = require('fs');
const geojsonToXml = require('geojson-mapnikify');
const tilestrata = require('tilestrata');
const vtile = require('tilestrata-vtile');

const XML_PATH = 'donors.xml';

// TODO: fixme
// strata.layer('donors')
//       .route('tile.json')
//       .use(geojson);


function dumpDbIntoGeoJson() {
  const geoJsonBuffer = fs.readFileSync('./samples/donors.geojson', 'utf-8');
  return JSON.parse(geoJsonBuffer);
}


function setup(server) {
  const config = {
    xml: XML_PATH,
    tileSize: 256,
    metatile: 1,
    bufferSize: 128
  };

  server.layer('donors')
    .route('tile.pbf')
    .use(vtile(config));
}


function run() {
  const strata = tilestrata();

  const donorsGeoJson = dumpDbIntoGeoJson();
  geojsonToXml(donorsGeoJson, true, (err, xml) => {
    console.log(xml);
    fs.writeFileSync(XML_PATH, xml);
    setup(strata);

    const app = express();

    app.get('/index.html', (_, res) => {
      res.sendFile('index.html', {
        root: process.cwd()
      });
    });

    app.use('/static', express.static('assets'));

    app.get('/map', (_, res) => {
      res.sendFile('mapbox-style.json', {
        root: process.cwd()
      });
    });

    app.use(tilestrata.middleware({
      server: strata,
      prefix: '/map'
    }));

    app.listen(8080, () => {
        console.log('Tiles URL Template: map/donors/{zoom}/{x}/{y}/tile.pbf');
        console.log('Listening on 8080...');
    })
  });
}


if (require.main === module) {
  run();
}
