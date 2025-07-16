// Get DOM elements
const mapContainer = document.getElementById('map-container');

// Fetch location
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Create map
            const mapOptions = {
                center: { lat: latitude, lng: longitude },
                zoom: 15
            };
            const map = new google.maps.Map(mapContainer, mapOptions);

            // Create marker
            const marker = new google.maps.Marker({
                position: { lat: latitude, lng: longitude },
                map: map,
                title: 'Current Location'
            });
        },
        (error) => {
            console.error(`Error fetching location: ${error.message}`);
        }
    );
} else {
    console.error('Geolocation is not supported in this browser.');
}
