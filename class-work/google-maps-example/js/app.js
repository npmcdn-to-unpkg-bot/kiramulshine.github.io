$(document).ready(function() {

var map;

function initMap() {

		// map = new google.maps.Map(domRef, mapOptions)

        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.774858, lng: -73.9483001},
          zoom: 15
        });


var marker = new google.maps.Marker({
	position: {lat: 40.774858, lng: -73.9483001},
	map: map,
	title: 'My Home'
	});
      }

initMap(); 

})


