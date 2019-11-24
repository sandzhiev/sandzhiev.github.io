/*--------Slideshow-----------*/

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

/*-----------------Google map APIs-----------------*/

// Initialize and add the map
function initMap() {
  // The location of park
  var address = {lat: 40.61256, lng: -73.98122};
  
  // The map, centered at park
  var mapAddress = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: address});
  
  // The marker, positioned at park
  var markerAddress = new google.maps.Marker({position: address, map: mapAddress});
}
google.maps.event.addDomListener(window, 'load', initMap);