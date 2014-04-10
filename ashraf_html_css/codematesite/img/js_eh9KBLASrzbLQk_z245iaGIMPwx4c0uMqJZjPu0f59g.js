var bounds = new google.maps.LatLngBounds();
var latlonglist= [];
var markers = [];
var map;
var loadedZoomLevel;
var screenwidth;
var flag, flagdraggable;

(function ($) {
   var styleArray = [
  {
    featureType: "water",
    stylers: [
    {
      color: "#bbbbbb"
    }
    ]
  },{
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
    {
      color: "#FFFFFF"
    }
    ]
  }
  ];



  Drupal.behaviors.simple_gmap = {
    attach: function(context) {
       screenwidth = $(window).width();
      if (screenwidth <= 640){

        flag = true;
        flagdraggable = false
      }
      else{

        flag = false;
        flagdraggable = true;
      }
      var latlng = new google.maps.LatLng(40.0000, 60.0000);
      // Map options.
      var mapOptions = {
        zoom: 2,
        panControl: false,
        zoomControl: true,
        scaleControl: false,
        qw2mapTypeControl: false,
        rotateControl : false,
        overviewMapControl : false,
        scrollwheel : false,
        draggable: flagdraggable,
        disableDoubleClickZoom: flag,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles  : styleArray,
        center: latlng
      };
      map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      var addressCount = $('.map_address').length;
      $('.map_address').each(function(index){
        var addressLocation = '';
        addressLocation = $(this).attr('location');
        codeAddress(addressLocation,map, index, addressCount);
      });

      //   Limit the zoom to a minimum of 3
      google.maps.event.addListener(map, 'zoom_changed', function()
      {
        if (map.getZoom() < 2){

            map.setZoom(2);


        }
      });
    }
  };
})(jQuery);

function loadGoogleMap(){

  for (var i=0; i <latlonglist.length; i++){
     bounds.extend(latlonglist[0]);
     map.fitBounds(bounds);
  }
  closeInfos();

}






/* for markup defined for Address */
function codeAddress(address, map, index, addressCount) {

  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( {
    'address': address
  }, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      bounds.extend(results[0].geometry.location);
      latlonglist.push(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        icon : "/sites/all/themes/ui/images/map_pin.png",
        position: results[0].geometry.location
      });

      marker['infowindow'] = new google.maps.InfoWindow({
        content: '<div id = "infowindowbox" style="overflow: hidden; width: 220px">'+ address +'</br><a style = "margin-left:160px" href="#" onclick="loadGoogleMap();return false;">'+ Drupal.t("Back") +'</a></div>'
      ,maxWidth: 300});
      markers.push(marker);


      google.maps.event.addListener(marker, 'click', function() {
          closeInfos();
          this ['infowindow'].open(map, this);
          map.setZoom(17);
          map.setCenter(marker.getPosition());
      });
       if (screenwidth > 640){
            google.maps.event.addListener(marker, 'mouseover', function() {
              marker.setIcon('/sites/all/themes/ui/images/map_pin_hover.png');
            });
            google.maps.event.addListener(marker, 'mouseout', function() {
              marker.setIcon('/sites/all/themes/ui/images/map_pin.png');
            });
        }

      if(index == (addressCount-1)){
        map.fitBounds(bounds);

      }
    } else {
      console.log("Geocode was not successful for the following reason: " + status);
    }

  });
}

function closeInfos() {
  for(var i=0; i<markers.length; i++)  {
    markers[i]['infowindow'].close();
  }
};
