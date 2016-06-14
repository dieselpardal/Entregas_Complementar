
var stepWay;
var waveFighter = 0;
var waveMonster = 0;
var armaX = [];
var armaY = [];
var armAtive = [];
var totalBall = 100;
var ball =0;
var armJet = 0;
var times = 0;
var score =0;
var hiscore=0;
var explosiveAtive = 0;
life=0;

function mountHightMap() {
var idTime = document.getElementById("time");
var idScore = document.getElementById("score");
var idHiScore = document.getElementById("hiscore");
var idLife= document.getElementById("life");

  var myLatLng = {lat: -30.058434, lng: -51.175861};
  map = new google.maps.Map(document.getElementById('quadros'), {
    center: myLatLng,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    zoom: 16
  });
  ball = 0;
    var jet = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'nave',
            icon: {
                url: "picture/fighter01.png",
                scaledSize: new google.maps.Size(128, 64)
            }
           });
    var army = [];
    for (i=0; i<totalBall; i++){
    army[i] = new google.maps.Marker({
                position: {lat:0, lng:0},
                map: map,
                icon: {
                    url: "picture/army.png",
                    scaledSize: new google.maps.Size(64, 32)
                }
               });
                 armaX[i] = 0;
                 armaY[i] = 0;
                 armAtive[i] =0;
               }
    var monster = new google.maps.Marker({
                position: {lat: myLatLng.lat, lng:  myLatLng.lng+0.01},
                map: map,
                icon: {
                    url: "picture/monster.png",
                    scaledSize: new google.maps.Size(64, 64)
                }
               });
    var explosive = new google.maps.Marker({
                position: {lat:0, lng:0}, //{lat: myLatLng.lat, lng:  myLatLng.lng+0.01},
                map: map,
                icon: {
                    url: "picture/explosive.png",
                    scaledSize: new google.maps.Size(64, 64)
                }
               });

  window.setInterval(function() {
  explosiveAtive =2;
    var  myLatMovel = {lat: myLatLng.lat, lng: (myLatLng.lng  + stepWay)};
    map.setCenter(myLatMovel);

    var  myJet = {lat: myLatLng.lat+ waveFighter, lng: (-51.183861 + stepWay)};
            jet.setPosition(myJet);
    armJet = myJet.lat;
    var  myMonster = {lat: myLatLng.lat+ waveMonster, lng: (-51.183861 + stepWay + 0.015)};
            monster.setPosition(myMonster);

for ( i =0; i<totalBall; i++) {
    if ( armAtive[i] == 1 ) {
            var  myArmy = {lat: armaY[i], lng: myJet.lng + armaX[i]};
            army[i].setPosition(myArmy);
            if (( myMonster.lng > myArmy.lng - 0.001 && myMonster.lng < myArmy.lng + 0.001) &&
                ( myMonster.lat > myArmy.lat - 0.001 && myMonster.lat < myArmy.lat + 0.001) ) {
                       if( explosiveAtive ==2) {
                       explosive.setPosition({lat: myLatLng.lat+ waveMonster, lng: (-51.183861 + stepWay + 0.015)});
                        monster.setPosition({lat:0, lng:0});
                        score++;
                       explosiveAtive =0;
                       times=10;
                       }

                }

            armaX[i]=armaX[i] + .00006;
            if(armaX[i]> .02) {
                                 armaX[i] = .05;
                                 armAtive[i] == 0;
                                }
    }

}
if(explosiveAtive ==2) explosive.setPosition({lat:0, lng:0});

            waveFighter = 1 * Math.sin(stepWay*400)/400;
            waveMonster = 1 * Math.cos(stepWay*400)/400;
            stepWay = stepWay + .00003;
if(times<1) {
    life--;
    times=15;
    if(life<0) {
        if ( hiscore<score) hiscore = score;
        score = 0;
        life=2;
        }
    }

idTime.innerHTML = times;
idScore.innerHTML = score;
idHiScore.innerHTML = hiscore;
idLife.innerHTML = life;
         }, 15);
}
function fireArm() {
if ( ball > totalBall)
   {
      ball =0;
   } else
     {
       ball ++;
     }
    armaX[ball] = 0;
    armAtive[ball] = 1;
    armaY[ball] = armJet;
}

function startAction() {
stepWay =0;
times = 10;
wave = 0;
life=2;
score=0;
mountHightMap();
window.setInterval(function() {
times--;
}, 1000);

}