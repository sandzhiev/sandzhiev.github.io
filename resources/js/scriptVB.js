

/*Click on "Why to play" => page*/

var hidden = $('.why-to-play');
var header = $('.main-page');
var events = $('.events');
var locations = $('.locations');
$('#why-play').click(function() {
    hidden.fadeIn(1000);
    header.hide();
    events.hide();
    locations.hide();
});

/*Click btn-home and go to home page*/
$('.btn-home').click(function() {
    header.show(800);
    events.show(800);
    locations.show(800);
    hidden.hide();
})


 $('#why-play').click(function() {
        $('html, body').animate({scrollTop: $('.why-to-play').offset().top}, 1000);
    });

/*-----------Navigation scroll-----------------*/
        $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

/*------Click on arrow-icon and back to main page------*/
$('.fa-angle-double-up').click(function() {
    $('html, body').animate({scrollTop: $('.main-page').offset().top}, 1000);
})

/*-----------------Google map APIs-----------------*/

// Initialize and add the map
function initMap() {
  // The location of park
  var park = {lat: 40.597, lng: -74.001};
  var aviator = {lat: 40.590, lng: -73.899};
  // The map, centered at park
  var mapPark = new google.maps.Map(
      document.getElementById('map-park'), {zoom: 15, center: park});
  var mapAviator = new google.maps.Map(
      document.getElementById('map-aviator'), {zoom: 15, center: aviator});
  // The marker, positioned at park
  var markerPark = new google.maps.Marker({position: park, map: mapPark});
  var markerAviator = new google.maps.Marker({position: aviator, map: mapAviator});
}
google.maps.event.addDomListener(window, 'load', initMap);



