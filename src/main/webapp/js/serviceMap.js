
var map;
function DrawCircle(LL, rad, map) {
    draw_circle = new google.maps.Circle({
        center: LL,
        radius: rad,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map: map
    });
}
function createGraphMap(map) {
var myLatLng;
var marker;
var infowindow;
    for(var f=0; f<clients.length;f++)
            {
             myLatLng = {lat: parseFloat(clients[f].x), lng: parseFloat(clients[f].y)};
             marker = new google.maps.Marker({
                map: map,
                position: myLatLng
              });

              DrawCircle(myLatLng, clients[f].qtd, map);
              marker.setMap(map);
              infowindow = new google.maps.InfoWindow({
              content:clients[f].name
              });

              infowindow.open(map,marker);

            }
}

function initMap(client, join) {
  clients = client;
  joins = join;
  var myLatLng = {lat: -30.058434, lng: -51.175861};
   map = new google.maps.Map(document.getElementById('quadros'), {
    center: myLatLng,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 16
  });
createGraphMap(map);
updateHTML();
}


