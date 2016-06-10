
var stepWay;
var waveFighter = 0;
var waveMonster = 0;
var armaX = [];
var armaY = [];
var armaV = 0;
function mountHightMap() {
  var myLatLng = {lat: -30.058434, lng: -51.175861};
  map = new google.maps.Map(document.getElementById('quadros'), {
    center: myLatLng,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    zoom: 16
  });
  armaV = 0;
  for (i=0; i<10; i++){
  armaX[i] = 1;
  armaY[i] = 0;

  }
    var jet = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'nave',
            icon: {
                url: "picture/fighter01.png",
                scaledSize: new google.maps.Size(128, 64)
            }
           });
    var army = new google.maps.Marker({
                position: myLatLng,
                map: map,
                icon: {
                    url: "picture/army.png",
                    scaledSize: new google.maps.Size(64, 32)
                }
               });
    var monster = new google.maps.Marker({
                position: {lat: myLatLng.lat, lng:  myLatLng.lng+0.01},
                map: map,
                icon: {
                    url: "picture/monster.png",
                    scaledSize: new google.maps.Size(64, 64)
                }
               });
    var explosive = new google.maps.Marker({
                position: {lat: myLatLng.lat, lng:  myLatLng.lng+0.01},
                map: map,
                icon: {
                    url: "picture/explosive.png",
                    scaledSize: new google.maps.Size(64, 64)
                }
               });

  window.setInterval(function() {
    var  myLatMovel = {lat: myLatLng.lat, lng: (myLatLng.lng  + stepWay)};
    map.setCenter(myLatMovel);

    var  myJet = {lat: myLatLng.lat+ waveFighter, lng: (-51.183861 + stepWay)};
            jet.setPosition(myJet);

    var  myMonster = {lat: myLatLng.lat+ waveMonster, lng: (-51.183861 + stepWay + 0.015)};
            monster.setPosition(myMonster);


    var  myArmy = {lat: armaY[armaV], lng: myJet.lng + armaX[armaV]};
            army.setPosition(myArmy);
      //        6           5                  6          7
    if (( myMonster.lng > myArmy.lng-0.001 && myMonster.lng < myArmy.lng+0.001) &&
        ( myMonster.lat > myArmy.lat-0.001 && myMonster.lat < myArmy.lat+0.001) ) {
    var  myExplosive = {lat: myLatLng.lat+ waveMonster, lng: (-51.183861 + stepWay + 0.015)};
                explosive.setPosition(myExplosive);
                monster.setPosition({lat:0, lng:0});
    } else {
    explosive.setPosition({lat:0, lng:0});
    }


            if(armaX[armaV]> .02) {
                armaX[armaV] = 0;
                armaY[armaV] = myJet.lat;
            }
            armaX[armaV]=armaX[armaV] + .00006;


            waveFighter = 1 * Math.sin(stepWay*400)/400;
            waveMonster = 1 * Math.cos(stepWay*400)/400;
            stepWay = stepWay + .00003;

         }, 15);
}

function startAction() {
stepWay =0;
wave = 0;
mountHightMap();
window.setInterval(function() {

if(armaV>10) armaV=-1;
//armaV++;

}, 1000);

}