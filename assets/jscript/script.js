//Current date display in header
var currentDay = dayjs().format('dddd, MMMM D, YYYY h:mm A'); 
$('#currentDay').text(currentDay);

//Mapbox API key
//var mapApi = "pk.eyJ1Ijoic2NvdHRnY29kZSIsImEiOiJjbG45bTQ5aDUwN3B2MmxwYmZlbG9xbWFiIn0.8RN9Vo08Ls6wKlD3U6hP0Q"

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NvdHRnY29kZSIsImEiOiJjbG45bTQ5aDUwN3B2MmxwYmZlbG9xbWFiIn0.8RN9Vo08Ls6wKlD3U6hP0Q';

// Function to initialize the Mapbox map
function initMap() {
    var map = new mapboxgl.Map({
        container: 'map', // HTML container ID
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-122.4194, 37.7749], // Example: San Francisco
        zoom: 8 
    });
}

// Call the initMap function when the page loads
window.addEventListener('load', initMap);