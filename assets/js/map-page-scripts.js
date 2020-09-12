var restaurants = "assets/data/restaurants.json";
var hotels = "assets/data/hotels.json";
var thingsToDo = "assets/data/thingsToDo.json";

// This is in Bielefeld
const initialPosition = {
    'lat': 52.022,
    'lng': 8.532
}
const zoomLevel = 13.5;
var infowindow;
var openMarker;

var restaurantMarkers = [];
var hotelMarkers = [];
var thingsToDoMarkers = [];


$(document).ready(function () {
    initMap(); // init map
    loadMarkers(thingsToDo, "assets/images/icons/thingsToDoIcon.png", thingsToDoDisplayFunction);
    loadMarkers(restaurants, "assets/images/icons/restaurantIcon.png", restaurantDisplayFunction);
    loadMarkers(hotels, "assets/images/icons/hotelIcon.png", hotelDisplayFunction);
});

function initMap() {
    map = new google.maps.Map(document.getElementById("large-map"), {
        center: {
            lat: initialPosition.lat,
            lng: initialPosition.lng,
        },
        zoom: zoomLevel,
        mapTypeId: "hybrid",

    });
}

function addMarkerListener(infoContent, marker) {
    marker.info = new google.maps.InfoWindow({
        content: infoContent,
        maxWidth: 200
    });

    google.maps.event.addListener(marker, "click", function () {
        if (openMarker != null) {
            openMarker.info.close();
        }
        marker.info.open(map, marker);
        openMarker = marker;
    });

}

console.log(restaurantMarkers);

function restaurantDisplayFunction(data) {
    // Set info window content
    infoContent = "<h4>" + data.restaurantName + "</h4>";
    infoContent += "<p>" + data.foodType + "</p>";
    infoContent += "<p>" + data.rating + "</p>";
    infoContent += "<p>" + "'" + data.reviews1 + "'" + "</g>";
    infoContent += "<p>" + "'" + data.reviews2 + "'" + "</p>";
    return infoContent;
}

function hotelDisplayFunction(data) {
    // Set info window content
    infoContent = "<h4>" + data.hotelName + "</h4>";
    infoContent += "<p>" + data.customerRating + "</p>";
    infoContent += "<p>" + data.feature1 + "</g>";
    infoContent += "<p>" + data.feature2 + "</p>";
    return infoContent;
}

function thingsToDoDisplayFunction(data) {
    // Set info window content
    infoContent = "<h4>" + data.activityName + "</h4>";
    infoContent += "<p>" + data.activityRating + "</p>";
    infoContent += "<p>" + data.activityInfo + "</g>";
    return infoContent;
}

function loadMarkers(jsonData, iconPath, infoDisplayFunction) {
    $.getJSON(jsonData, function (data) {
        // Loop through the data
        $.each(data, function (key, data) {
            let myLatlng = new google.maps.LatLng(data.lat, data.lng); // set position
            let marker = new google.maps.Marker({
                position: myLatlng,
                icon: iconPath,
                animation: google.maps.Animation.DROP,
                map: map,
            });

            let content = infoDisplayFunction(data);
            addMarkerListener(content, marker);
        });
    });
}

function toggleMarker(){
	if (document.getElementById("toggleMarkers").checked)
		show = map;
	else
	    show = null;
	for (var i = 0; i < markers.length; i++) {
		markers[i].setMap(show);
	}
}



