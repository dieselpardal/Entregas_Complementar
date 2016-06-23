
var localPUCRS = {
                   lat: -30.058434,
                   lng: -51.175861
                };
var nullLatLng = {
                   lat:0,
                   lng:0
                 };

var environment = {
                    zoomObj: 16,
                    map: null,
                    jet: null,
                    monster: null,
                    explosive: null,
                    totalBall : 100,
                    ball: 0,
                    army : [],
                    armaX : [],
                    armaY : [],
                    armAtive : [],
                    double: 2,
                    quadruple: 4,
                    eightfold: 8,
                    rightMonster:0.01,
                    createMap:function () {
                        return  new google.maps.Map(document.getElementById('quadros'), {
                                                                       center: localPUCRS,
                                                                       scrollwheel: false,
                                                                       mapTypeId: google.maps.MapTypeId.HYBRID,
                                                                       zoom: this.zoomObj,
                                                                     });
                    },
                    createJet : function (map){
                        this.jet = new google.maps.Marker({
                                position: localPUCRS,
                                map: map,
                                title: 'Jet',
                                icon: {
                                        url: "picture/fighter01.png",
                                        scaledSize: new google.maps.Size(this.eightfold * this.zoomObj, this.quadruple * this.zoomObj)
                                      }
                               });
                    },
                    createArmy : function (map) {
                        for (i=0; i<this.totalBall; i++){
                        this.army[i]  = new google.maps.Marker({
                                        position: nullLatLng,
                                        map: map,
                                        icon: {
                                                url: "picture/army.png",
                                                scaledSize: new google.maps.Size(this.quadruple * this.zoomObj, this.double * this.zoomObj)
                                               }
                                       });

                        this.armaX[i] = null;
                        this.armaY[i] = null;
                        this.armAtive[i] =null;
                      }
                    },
                    createMonster : function (map){
                        this.monster = new google.maps.Marker({
                                    position: {
                                            lat: localPUCRS.lat,
                                            lng: localPUCRS.lng+this.rightMonsterl,
                                    },
                                    map: map,
                                    title: 'Monster',
                                    icon: {
                                            url: "picture/monster.png",
                                            scaledSize: new google.maps.Size(this.quadruple * this.zoomObj, this.quadruple * this.zoomObj)
                                    }
                                   });
                    },
                    createExplosive : function (map) {
                        this.explosive = new google.maps.Marker({
                                    position: nullLatLng,
                                    map: map,
                                    icon: {
                                            url: "picture/explosive.png",
                                            scaledSize: new google.maps.Size(this.quadruple * this.zoomObj, this.quadruple * this.zoomObj)
                                    }
                                   });
                    }
                  }
