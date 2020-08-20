$(document).ready(function() {
        initialize(); // init map
      });

function initMap() {
  map = new google.maps.Map(document.getElementById("large-map"), {
    center: {
      lat: 52.022,
      lng: 8.532,
    },
    zoom: 13.5,
    mapTypeId: "hybrid",
  });
}

// Get the Json file data

const restaurants = "assets/data/restaurants.json";
const hotels = "assets/data/hotels.json";
const thingsToDo = "assets/data/thingsToDo.json"
let infowindow

$.getJSON(restaurants, function (data) { 
  // Loop through the data
  $.each(data, function (key, data) {
    let myLatlng = new google.maps.LatLng(data.lat, data.lng); // set position

    // Add marker to map
    let restaurantIcon = "assets/images/icons/restaurantIcon.png";
    
    let marker = new google.maps.Marker({
      position: myLatlng,
      icon: restaurantIcon,
      map: map,
    });

    // Set info window content
    let infoContent = "<h4>" + data.restaurantName + "</h4>";
    infoContent += "<p>" + data.foodType + "</p>";
    infoContent += "<p>" + data.rating + "</p>";
    infoContent += "<p>" + "'" + data.reviews1 + "'" + "</g>";
    infoContent += "<p>" + "'" + data.reviews2 + "'" + "</p>";
    

    // Add info window
    if (infowindow != null) {
        infowindow.close() // close any other infowindows first
    }
    
    marker.info = new google.maps.InfoWindow({
      content: infoContent,
    });

    // Add listener for info window
    google.maps.event.addListener(marker, "click", function () {
      marker.info.open(map, marker);
    });

    // Add marker location to loc variale
    let loc = new google.maps.LatLng(
      marker.position.lat(),
      marker.position.lng()
    );

    // extend bounds with loc
    // bounds.extend(loc);


   
  });
});

$.getJSON(hotels, function (data) {
  // Loop through the data
  $.each(data, function (key, data) {
    let myLatlng = new google.maps.LatLng(data.lat, data.lng); // set position

    // Add marker to map
    let hotelIcon = "assets/images/icons/hotelIcon.png";
    
    let marker = new google.maps.Marker({
      position: myLatlng,
      icon: hotelIcon,
      map: map,
    });

    // Set info window content
    let infoContent = "<h4>" + data.hotelName + "</h4>";
      infoContent += "<p>" + data.customerRating + "</p>";
      infoContent += "<p>" + data.feature1 + "</g>";
      infoContent += "<p>" + data.feature2 + "</p>";
    

    // Add info window
    if (infowindow != null) {
        infowindow.close() // close any other infowindows first
    }
    
    marker.info = new google.maps.InfoWindow({
      content: infoContent,
    });

    // Add listener for info window
    google.maps.event.addListener(marker, "click", function () {
      marker.info.open(map, marker);
    });

    // Add marker location to loc var
    let loc = new google.maps.LatLng(
      marker.position.lat(),
      marker.position.lng()
    );

    // extend bounds with loc
    // bounds.extend(loc);


   
  });
});

$.getJSON(thingsToDo, function (data) {
  // Loop through the data
  $.each(data, function (key, data) {
    let myLatlng = new google.maps.LatLng(data.lat, data.lng); // set position

    // Add marker to map
    let thingsToDoIcon = "assets/images/icons/thingsToDoIcon.png";
    
    let marker = new google.maps.Marker({
      position: myLatlng,
      icon: thingsToDoIcon,
      map: map,
    });

    // Set info window content
    let infoContent = "<h4>" + data.activityName + "</h4>";
      infoContent += "<p>" + data.activityRating + "</p>";
      infoContent += "<p>" + data.activityInfo + "</g>";
      

    // Add info window
    if (infowindow != null) {
        infowindow.close() // close any other infowindows first
    }
    
    marker.info = new google.maps.InfoWindow({
      content: infoContent,
    });

    // Add listener for info window
    google.maps.event.addListener(marker, "click", function () {
      marker.info.open(map, marker);
    });

    // Add marker location to loc var
    let loc = new google.maps.LatLng(
      marker.position.lat(),
      marker.position.lng()
    );

    // extend bounds with loc
    // bounds.extend(loc);


   
  });
});