// TODO seed for a tilestrata plugin

module.exports = function(options) {
  return {
    name: 'tilestrata-geojson',
    init: function(server, callback) {
      callback(err);
    },
    reqhook: function(server, tile, req, res, callback) {
      console.log(tile);
      callback();
    },
    destroy: function(server, callback) {
      callback(err);
    }
  };
};