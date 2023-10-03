//Current date display in header
var currentDay = dayjs().format('dddd, MMMM D'); 
$('#currentDay').text(currentDay);

mapboxgl.accessToken = 'pk.eyJ1Ijoic2NvdHRnY29kZSIsImEiOiJjbG45bTQ5aDUwN3B2MmxwYmZlbG9xbWFiIn0.8RN9Vo08Ls6wKlD3U6hP0Q';

// Function to initialize the Mapbox map
function initMap() {
    var map = new mapboxgl.Map({
        container: 'map', 
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-111.8867, 40.75977],
        zoom: 11
    });
}







// Call the initMap function when the page loads
window.addEventListener('load', initMap);

searchApi = 'AIzaSyAJLV4n89LbTC3wMircE35n1BWOAKH0xXI' 

