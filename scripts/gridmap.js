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
    })

    var $value = $(document.createElement('span'));
    $value.html(interval);
    $key.appendTo($item);
    $value.appendTo($item);
    $item.appendTo(legend);
  }
});

map.on('mousemove', function(e) {
  var states = map.queryRenderedFeatures(e.point, {
    layers: ['us-shootings']
  });

  if (states.length > 0) {
    $('#pd').html('<h3><strong>' + states[0].properties.NAME + '</strong></h3><p><strong><em>' + states[0].properties.total_harm + '</strong> deaths + injuries from shootings in 2018</em></p>');
  }
});