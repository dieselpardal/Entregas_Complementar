
var process = {
                explosiveAtive : 0,
                idTime : 0,
                idScore : 0,
                idHiScore : 0,
                idLife: 0,
                times :  0,
                score : 0,
                hiscore : 0,
                life : 0,
                constStepWay : .00003,
                constLife : 2,
                constTimeNormal : 10,
                constTimeBonus : 15,
                stepWay : null,
                waveFighter : 0,
                waveMonster : 0,
                armJet : 0,
                myLatLng: null,
                localJetLng : -51.183861,
                localMonsteLngStep : 0.015,
                sizeExplosive : 0.001,
                sizeAndRotaty : 400,
                findOutAtive : 1,
                lateAtive : 2,
                timeInterval : 15,
                timeOneSecond : 1000,
                approximeMonster : .02,
                outExplosive : .05,
                lastTime: 1,
                configScores : function () {
                    this.idTime = document.getElementById("time");
                    this.idScore = document.getElementById("score");
                    this.idHiScore = document.getElementById("hiscore");
                    this.idLife= document.getElementById("life");
                },
                setScores : function () {
                    this.idTime.innerHTML = this.times;
                    this.idScore.innerHTML = this.score;
                    this.idHiScore.innerHTML = this.hiscore;
                    this.idLife.innerHTML = this.life;
                },
                setZoomMap : function (map) {
                    map.addListener('zoom_changed', function() {
                                    environment.zoomObj = map.getZoom();
                                    var quad=environment.quadruple * environment.zoomObj;
                                    var octo=environment.eightfold * environment.zoomObj;
                                    console.log("ZOOM:"+environment.zoomObj);
                                    environment.jet.icon.scaledSize = new google.maps.Size(octo, quad);
                                    environment.monster.icon.scaledSize = new google.maps.Size(quad, quad);
                                 });
                },
                colisionArmyAndMonster : function (myArmy, myMonster, sizeExplosive) {
                    return ( myMonster.lng > myArmy.lng - sizeExplosive && myMonster.lng < myArmy.lng + sizeExplosive) &&
                           ( myMonster.lat > myArmy.lat - sizeExplosive && myMonster.lat < myArmy.lat + sizeExplosive);
                },
                processArmyAgainstMonster : function (myJet, myMonster) {


                for ( i =0; i<environment.totalBall; i++) {
                    if ( environment.armAtive[i] == this.findOutAtive ) {
                            var  myArmy = {
                                            lat: environment.armaY[i],
                                            lng: myJet.lng + environment.armaX[i]
                                          };
                            environment.army[i].setPosition(myArmy);
                            if (this.colisionArmyAndMonster(myArmy, myMonster, this.sizeExplosive) ) {
                                       if( this.explosiveAtive == this.lateAtive) {
                                        environment.explosive.setPosition({
                                                                lat: localPUCRS.lat+ this.waveMonster,
                                                                lng: (this.localJetLng + this.stepWay + this.localMonsteLngStep)
                                                              }
                                                             );
                                        environment.monster.setPosition(environment.nullLatLng);
                                        this.score++;
                                        this.explosiveAtive =null;
                                        this.times=this.constTimeNormal;
                                       }
                                }
                            environment.armaX[i]=environment.armaX[i] + this.constStepWay;
                            if(environment.armaX[i]> this.approximeMonster) {
                                                 environment.armaX[i] = this.outExplosive;
                                                 environment.armAtive[i] == null;
                                                }
                    }
                }
                },
                shouldGameOver : function () {
                    if(this.times<this.lastTime) {
                        this.life--;
                        this.times=this.constTimeBonus;
                        if(this.life<null) {
                            if ( this.hiscore<this.score) this.hiscore = this.score;
                            this.score = null;
                            this.life=this.constLife;
                            }
                        }
                },

                init : function() {
                    this.times = this.constTimeNormal;
                    this.wave = null;
                    this.life=this.constLife;
                    this.score=null;

                },
                setWaveFighter() {
                    this.waveFighter = Math.sin(this.stepWay * this.sizeAndRotaty) / this.sizeAndRotaty;
                },
                setWaveMonster() {
                    this.waveMonster = Math.cos(this.stepWay * this.sizeAndRotaty) / this.sizeAndRotaty;
                },
                setAddStepWay() {
                     this.stepWay += this.constStepWay;
                }
         }


function processMain() {
    process.init();
    process.configScores();
    var map =  environment.createMap();
    environment.createJet(map);
    environment.createMonster(map);
    environment.createExplosive(map);
    environment.createArmy(map);
    process.setZoomMap(map);
    window.setInterval(function() {
              process.explosiveAtive =process.lateAtive;
              var  myLatMovel = {
                                    lat: localPUCRS.lat,
                                    lng: (localPUCRS.lng  + process.stepWay)
                                };
              map.setCenter(myLatMovel);

              var  myJet = {
                                lat: localPUCRS.lat+ process.waveFighter,
                                lng: (process.localJetLng + process.stepWay)
                           };
              environment.jet.setPosition(myJet);
              process.armJet = myJet.lat;

              var  myMonster = {
                                    lat: localPUCRS.lat+ process.waveMonster,
                                    lng: (process.localJetLng + process.localMonsteLngStep + process.stepWay)
                               };
              environment.monster.setPosition(myMonster);
              process.processArmyAgainstMonster(myJet,myMonster);
              if(process.explosiveAtive == process.lateAtive)  {
                   environment.explosive.setPosition(nullLatLng);
              }
              process.shouldGameOver();
              process.setScores();
              process.setWaveFighter();
              process.setWaveMonster();
              process.setAddStepWay();
    }, this.timeInterval);

    window.setInterval(function() { 
              process.times--;
    }, process.timeOneSecond);
}