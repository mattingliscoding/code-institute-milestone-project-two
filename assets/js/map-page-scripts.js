function initMap() {
  map = new google.maps.Map(document.getElementById("large-map"), {
    center: {
      lat: 52.022,
      lng: 8.532,
    },
    zoom: 13,
    mapTypeId: 'hybrid'
    
  });
}
