// Current date display in header
var currentDay = dayjs().format('dddd, MMMM D'); 
$('#currentDay').text(currentDay);

// Declare map as a global variable.
var map;
mapboxgl.accessToken = 'pk.eyJ1Ijoic2NvdHRnY29kZSIsImEiOiJjbG45bTQ5aDUwN3B2MmxwYmZlbG9xbWFiIn0.8RN9Vo08Ls6wKlD3U6hP0Q';

// Function to initialize the Mapbox map
function initMap() {
    var map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 11
    });
 // Obtain users coordinates if geolocation is allowed.   
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          var userCoordinates = [position.coords.longitude, position.coords.latitude];
          map.setCenter(userCoordinates);
          var marker = new mapboxgl.Marker().setLngLat(userCoordinates).addTo(map);
        }, error => {
          console.error('Error getting user location:', error);
        });
      } else {
        console.error('Geolocation is not supported by your browser.');
      }
// Add an event listener for the map's load event.
map.on('load', function() {
    var marker = new mapboxgl.Marker();
    // Get the location input element
    var workSiteSearch = document.getElementById('workSite');

// Listen for input changes
workSiteSearch.addEventListener('input', function () {
// Get the entered location
  var enteredLocation = workSiteSearch.value;

  if (!enteredLocation.trim()) {
// If the search bar is empty, set the map back to the original position
    map.setCenter([-111.8867, 40.75977]);
    marker.remove(); // Remove the marker if it exists
    return;
  }

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

//add event listener for the button in the html id showOnMapBtn to pull the address from the input field called workSite and store its value in local storage
document.getElementById('showOnMapBtn').addEventListener('click', function() {
    var workSite = document.getElementById('workSite').value;
    localStorage.setItem('workSite', workSite);
}
);


// Call the initMap function when the page loads
window.addEventListener('load', initMap);

searchApi = 'AIzaSyAJLV4n89LbTC3wMircE35n1BWOAKH0xXI' 

document.getElementById('showCurrentLocation').addEventListener('click', function() {
// Check if geolocation is supported
    if (navigator.geolocation) {
// Get the current location
        navigator.geolocation.getCurrentPosition(function(position) {
// Extract latitude and longitude
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

// Call the reverse geocoding API to get the address
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                .then(response => response.json())
                .then(data => {
// Display the address in the HTML
                    var address = data.display_name;
                    document.getElementById('locationOutput').textContent = `You are here--> ${address}`;
                })
        });
    }
});

