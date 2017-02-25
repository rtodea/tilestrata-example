const tilestrata = require('tilestrata');
const geojson = require('./tilestrata-geojson');

const strata = tilestrata();

// TODO: fixme
// strata.layer('donors')
//       .route('tile.json')
//       .use(geojson);

strata.listen(8080, () => {
  console.log('Listening on 8080...');
});
