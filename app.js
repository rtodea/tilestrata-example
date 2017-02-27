require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/VectorTileLayer",
  "dojo/domReady!"
], function(Map, MapView, VectorTileLayer) {

  // Create a Map
  const map = new Map({basemap: 'streets'});

  // Make map view and bind it to the map
  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 4,
    center: [21.239196777343622, 45.73755068886681]
  });

  view.then(() => {
    console.log('map view loaded');
  });

  // Events
  // Check https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html#events-summary
  //
  // ZOOM = double-click + (ui `+` and `-` clicks)
  // DRAG = drag

  const { remove } = view.on('drag', (event) => {
    // console.log('drag event', event);
    // console.log('extent', view.extent);
    // console.log('zoom', view.zoom);
  });
  // remove()

  /********************************************************************
   * Add a tile layer to the map
   *
   * The url property must either point to the style as
   * demonstrated below or to the URL of a Vector Tile service
   * such as:
   * https://basemaps.arcgis.com/b2/arcgis/rest/services/World_Basemap/VectorTileServer
   *********************************************************************/
  const tileLyr = new VectorTileLayer({
    url: "/map"
  });
  map.add(tileLyr);
});