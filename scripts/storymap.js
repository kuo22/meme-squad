
window.onresize = function() {
  resize();
};

var $lis = $('.nav-tabs').children();
$lis.on('click', updateActive);

function updateActive() {
  var $currentItem = $(this);
  $currentItem.siblings().removeClass('active');
  $currentItem.addClass('active');

  var id = $currentItem.attr('id');
  var style = '';
  var messageContent = '';
  if (id == 'tab1') {
    style = 'basic';
    messageContent = 'Everyone dies from cancer.';
  } else if (id == 'tab2') {
    style = 'dark';
    messageContent = 'Everyone dies from bullets.';
  } else {
    style = 'satellite';
    messageContent = 'Everyone dies from rocket powered pistols.';
  }
  map.setStyle(`mapbox://styles/mapbox/${style}-v9`);
  $('#story-text').html(messageContent);
}

function resize() {
  var height = window.innerHeight;
  console.log(height);
  $('#map-content').css({
    height: height + 'px',
  });
}


mapboxgl.accessToken = 'pk.eyJ1IjoieXVsb25ndGFuIiwiYSI6ImNqZTBhdzNyYzBlc20zM3F0aXp1MG43ZnYifQ.AWlxP25BBgwxpt3ar7ojag';
// Creates the map with the saved style from Mapbox
var map = new mapboxgl.Map({
  container: 'map-content',
  style: 'mapbox://styles/mapbox/basic-v9',
  center: [-122.420679, 37.772537],
  zoom: 13,
});


