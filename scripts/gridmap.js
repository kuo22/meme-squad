const token = 'pk.eyJ1IjoieXVsb25ndGFuIiwiYSI6ImNqZTBhdzNyYzBlc20zM3F0aXp1MG43ZnYifQ.AWlxP25BBgwxpt3ar7ojag';

mapboxgl.accessToken = token;

var map = new mapboxgl.Map({
  container: 'map', // container id
  style: 'mapbox://styles/yulongtan/cjemgrhyz2c4r2qqg16aaesh4' // replace this with your style URL
});

map.on('load', function() {
  var intervals = ['0', '1-6', '7-13', '14-25', '25-57'];
  var colors = ['#FFF', 'hsl(0, 82%, 76%)', 'hsl(359, 76%, 52%)', 'hsl(359, 77%, 45%)', 'hsl(359, 81%, 28%)'];

  for (i = 0; i < intervals.length; i++) {
    var interval = intervals[i];
    var color = colors[i];
    var $item = $(document.createElement('div'));
    var $key = $(document.createElement('span'));
    $key.addClass('legend-key');
    $key.css({
      backgroundColor: color
    });

    var $value = $(document.createElement('span'));
    $value.html(interval);
    $key.appendTo($item);
    $value.appendTo($item);
    $item.appendTo(legend);
  }

  map.addSource('tweets', {
    type: 'geojson',
    data: 'data/tweets.geojson'
  });

  map.addLayer({
  id: 'tweets-heat',
  type: 'heatmap',
  source: 'tweets',
  maxzoom: 15,
  paint: {
    // increase weight as diameter breast height increases
    'heatmap-weight': {
      property: 'dbh',
      type: 'exponential',
      stops: [
        [1, 0],
        [62, 1]
      ]
    },
    // increase intensity as zoom level increases
    'heatmap-intensity': {
      stops: [
        [11, 1],
        [15, 3]
      ]
    },
    // assign color values be applied to points depending on their density
    'heatmap-color': [
      'interpolate',
      ['linear'],
      ['heatmap-density'],
      0, 'rgba(236,222,239,0)',
      0.2, 'rgb(208,209,230)',
      0.4, 'rgb(166,189,219)',
      0.6, 'rgb(103,169,207)',
      0.8, 'rgb(28,144,153)'
    ],
    // increase radius as zoom increases
    'heatmap-radius': {
      stops: [
        [11, 15],
        [15, 20]
      ]
    },
    // decrease opacity to transition into the circle layer
    'heatmap-opacity': {
      default: 1,
      stops: [
        [10, 1],
        [11, 0]
      ]
    },
  }
});

  map.addLayer({
    id: 'tweets-point',
    type: 'circle',
    source: 'tweets',
    minzoom: 14,
    paint: {
      // increase the radius of the circle as the zoom level and dbh value increases
      'circle-radius': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [{ zoom: 15, value: 1 }, 5],
          [{ zoom: 15, value: 62 }, 10],
          [{ zoom: 22, value: 1 }, 20],
          [{ zoom: 22, value: 62 }, 50],
        ]
      },
      'circle-color': {
        property: 'dbh',
        type: 'exponential',
        stops: [
          [0, 'rgba(236,222,239,0)'],
          [10, 'rgb(236,222,239)'],
          [20, 'rgb(208,209,230)'],
          [30, 'rgb(166,189,219)'],
          [40, 'rgb(103,169,207)'],
          [50, 'rgb(28,144,153)'],
          [60, 'rgb(1,108,89)']
        ]
      },
      'circle-stroke-color': 'white',
      'circle-stroke-width': 1,
      'circle-opacity': {
        stops: [
          [10, 0],
          [11, 1]
        ]
      }
    }
  });

  map.on('mousemove', 'tweets-point', function(e) {
  new mapboxgl.Popup()
    .setLngLat(e.features[0].geometry.coordinates)
    .setHTML('<b>Name:</b> ' + e.features[0].properties.Name + 
             e.features[0].properties.Handle + '<br>' +
             '<b>Bio:</b> ' + e.features[0].properties.Bio + '<br>' +
             '<b>Location:</b> ' + e.features[0].properties.Place)
    .addTo(map);
});



});

map.on('mousemove', function(e) {
  var states = map.queryRenderedFeatures(e.point, {
    layers: ['us-shootings']
  });

  if (states.length > 0) {
    $('#pd').html('<h3><strong>' + states[0].properties.NAME + '</strong></h3><p><strong><em>' + states[0].properties.total_harm + '</strong> deaths + injuries from shootings in 2018</em></p>');
  }
});