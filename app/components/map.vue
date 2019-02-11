<template>
<div class="map" id="map">
</div>
</template>

<script>
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

export default {
    name: 'map',
    mounted: function() {

        mapboxgl.accessToken = 'pk.eyJ1IjoidG9tb290ZXMiLCJhIjoiOXRKWGVCUSJ9.QaSlGLJBy4CE2nDNpe-OLg';
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [5.1182397, 52.0756886],
            zoom: 13
        });

        var geojson = {
            type: 'FeatureCollection',
            features: [{
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [5.1182397, 52.0756886]
                },
                properties: {
                    title: 'Ootes Web',
                    description: 'Vechtclub XL (G2.4) <br/> Europalaan 2B <br/> 3526 KS Utrecht'
                }
            }]
        };

        // add markers to map
        geojson.features.forEach(function(marker) {

            // create a HTML element for each feature
            var el = document.createElement('div');
            el.className = 'marker';

            // make a marker for each feature and add to the map
            new mapboxgl.Marker(el)
                .setLngLat(marker.geometry.coordinates)
                .setPopup(new mapboxgl.Popup({
                        offset: 25
                    }) // add popups
                    .setHTML('<h4>' + marker.properties.title + '</h4><p>' + marker.properties.description + '</p>'))
                .addTo(map);
        });

		map.scrollZoom.disable();



    }
}
</script>
