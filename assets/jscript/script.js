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


    // Show work site on the map when the button is clicked
    const showOnMapBtn = document.getElementById('showOnMapBtn');
    showOnMapBtn.addEventListener('click', () => {
        const workSiteInput = document.getElementById('workSite');
        const workSiteLocation = workSiteInput.value;

        // Use Mapbox Geocoding API to get the coordinates of the work site location
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${workSiteLocation}.json?access_token=${mapboxgl.accessToken}`)
            .then(response => response.json())
            .then(data => {
                const coordinates = data.features[0].center;
                map.setCenter(coordinates);
            })
            .catch(error => {
                console.error('Error fetching location coordinates:', error);
            });
    });


    var geoUrl ='https://api.mapbox.com/geocoding/v5/{endpoint}/{search_text}.json'







// Call the initMap function when the page loads
window.addEventListener('load', initMap);

searchApi = 'AIzaSyAJLV4n89LbTC3wMircE35n1BWOAKH0xXI' 



