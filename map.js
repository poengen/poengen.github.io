mapboxgl.accessToken = 'pk.eyJ1IjoicG9lbmdlbiIsImEiOiJjazBiZHQyY3EwcXl5M2lwaXhlMXc4a29zIn0.QSXSFFJRHwXTsyYLYFIZ5w';
var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/mapbox/outdoors-v11', // stylesheet location
  center: [ 7.4, 62.42 ], // starting position [lng, lat]
  zoom: 11.5, // starting zoom
});

map.on('load', function() {
  map.addLayer({
    id: 'points',
    type: 'symbol',
    source: {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [ 7.4, 62.435 ],
            },
            properties: {
              title: 'Bøstølen',
              icon: 'monument',
            },
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [ 7.44, 62.439 ],
            },
            properties: {
              title: 'Bærællj',
              icon: 'harbor',
            },
          },
        ],
      },
    },
    layout: {
      'icon-image': '{icon}-15',
      'text-field': '{title}',
      'text-font': [ 'Open Sans Semibold', 'Arial Unicode MS Bold' ],
      'text-offset': [ 0, 0.6 ],
      'text-anchor': 'top',
    },
  });
});
