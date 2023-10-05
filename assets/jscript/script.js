//Current date display in header
var currentDay = dayjs().format('dddd, MMMM D'); 
$('#currentDay').text(currentDay);

var map;
mapboxgl.accessToken = 'pk.eyJ1Ijoic2NvdHRnY29kZSIsImEiOiJjbG45bTQ5aDUwN3B2MmxwYmZlbG9xbWFiIn0.8RN9Vo08Ls6wKlD3U6hP0Q';

// Function to initialize the Mapbox map
function initMap() {
    var map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-111.8867, 40.75977],
        zoom: 11
    });
// Add an event listener for the map's load event.
map.on('load', function() {
    var marker = new mapboxgl.Marker();
    // Get the location input element
    var workSiteSearch = document.getElementById('workSite');

// Listen for input changes
workSiteSearch.addEventListener('input', function () {
  // Get the entered location
  var enteredLocation = workSiteSearch.value;

  // Use Mapbox Geocoding API to get the coordinates for the entered location
  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(enteredLocation)}.json?access_token=${mapboxgl.accessToken}`)
    .then(response => response.json())
    .then(data => {
      // Check if the expected properties are available in the response
        if (data.features && data.features.length > 0 && data.features[0].geometry) 
        // Get the coordinates from the API response
      var coordinates = data.features[0].geometry.coordinates;

      // Set the map center and update the marker
      map.setCenter(coordinates);
      marker.setLngLat(coordinates).addTo(map);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    });
});
}

var geoUrl ='https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json'

// Call the initMap function when the page loads
window.addEventListener('load', initMap);

searchApi = 'AIzaSyAJLV4n89LbTC3wMircE35n1BWOAKH0xXI' 



