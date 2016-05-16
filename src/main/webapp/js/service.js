
var svg;
var width = 500;
var height = 500;
var connect =0;
var posOriginX =0;
var posOriginY =0;
var posDestinyX =0;
var posDestinyY =0;
var clients;
var joins;
var withOutCircle =1;
var ativeDrag =0;
var numClient = -1;
var numClientOrigin =-1;
var numClientDestiny =-1;

var draghandle = d3.behavior.drag().origin(Object).on("drag", dragMove).on("dragstart", dragStart).on("dragend", dragEnd);
function circle(idCLient,x,y,color,name,ray) {
  svg.append('circle')
      .attr('class', 'origin')
      .attr('cx',x)
      .attr('cy',y)
      .attr('r', ray)
      .attr('fill',color)
      .style('opacity', 0.3)

      .on("mouseover", function (d) {
                                      numClient = idCLient;
                                      indicate(idCLient);
                                    })
      .on("mouseout", function(d) {
                                      if(ativeDrag ===0)  withOutCircle =1;
                                    })
      .call(draghandle)
}

function pictures(x,y,width,height, name) {
  svg.append('svg:image')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height)
    .attr("transform","translate(0,0)")
    .attr("xlink:href","picture/mapa_brasil.png");
}

function clearScreen() {
  svg.append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height)
    .style('fill','white');
}

function print(text,x,y,width,fontFamily,fontSize,color) {
  svg.append('text')
    .attr('x', x)
    .attr('y', y)
    .attr('width', width)
    .style("font-size", fontSize)
    .style('fill',color)
    .style('font-family',fontFamily)
    .style("text-anchor", "beginning")
    .text(text);
}

function mean(origin,destiny) {
 return (origin + destiny) /2;
}

function indicate(idCLientOrigin) {
  clearScreen();
  createGraph();
  withOutCircle =0;
  //console.log("withOutCircle="+withOutCircle);
  var idCLientOriginPos =0;
  var idCLientDestinyPos =0;
  g=0;
  while (g<clients.length && clients[g].id != idCLientOrigin) g++;
  idCLientOriginPos = g;
  for(var f=0; f<joins.length; f++) {
    if (idCLientOrigin === joins[f].origin) {
        idCLientDestiny = joins[f].destiny;
        h=0;
        while(h<clients.length && clients[h].id != idCLientDestiny) h++;
        idCLientDestinyPos = h;
        line(g,clients[idCLientOriginPos].x,clients[idCLientOriginPos].y,
               clients[idCLientDestinyPos].x,clients[idCLientDestinyPos].y,
                'orange' );
        print(joins[f].ratio+"%",
           mean(clients[idCLientOriginPos].x, clients[idCLientDestinyPos].x),
           mean(clients[idCLientOriginPos].y, clients[idCLientDestinyPos].y),
           10,
           'arial',
           12,
           'blue');
    }
   }
}
function line(f,x1,y1,x2,y2,color) {
  svg.append('line')
      .attr('class', 'arrow')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .style('stroke-width',"3px")
      .attr('stroke',color)
      .on("click", function(d){
            withOutCircle =0;
            if (confirm("Confirm remove join?") == true) {
                joins.splice(f,1);
                createGraph();
                updateHTML();
                 console.log("REMOVE JOIN!");
                }
            })
      .on("mouseout", function(d){
           if(ativeDrag ===0) withOutCircle =1;
            });
}

function createGraph() {
  clearScreen();
  pictures(0,90,width,height+10, "a");
    for(var f=0; f<clients.length;f++)
            {
                circle(clients[f].id,clients[f].x,clients[f].y,'black',clients[f].name,clients[f].qtd/10);
                print(clients[f].name+":"+clients[f].qtd ,clients[f].x,clients[f].y-clients[f].qtd/10, 10,'arial',12,'black');
            }
}

function init(client, join) {
  clients = client;
  joins = join;
  svg = d3.select(document.getElementById('quadros')).append('svg')
     .attr('width', width)
     .attr('height', height)
     .on("click", function(d){
     //console.log("withOutCircle="+withOutCircle);
            if( withOutCircle === 1) {
            var coordinates = d3.mouse(this);
            posOriginX = coordinates[0];
            posOriginY = coordinates[1];
            var name = prompt("What is name?", "");
            if (name!= null)  {
                var qtd = prompt("What's amount?", "");
                if (qtd!= null) {
                    newJsonClient(posOriginX,posOriginY,posDestinyX,posDestinyY,name,qtd)
                    updateHTML();
                    console.log("CLIENT DONE!");
                    }
            }
            createGraph();
            }
     } );
  createGraph();
  updateHTML();
}
function dragMove(d){
  createGraph();
  var coordinates = d3.mouse(this);
  posDestinyX = coordinates[0];
  posDestinyY = coordinates[1];
  if ( connect ===1 ) {
    line(null,posOriginX+1,posOriginY+1,posDestinyX+1,posDestinyY+1, 'green' );
    }
}

function dragStart(d) {
  connect =1;
  withOutCircle =0;
  ativeDrag = 1;
  var coordinates = d3.mouse(this);
  posOriginX = coordinates[0];
  posOriginY = coordinates[1];
  numClientOrigin = numClient;
}

function dragEnd(d) {
  connect =0;
  ativeDrag = 0;
  var coordinates = d3.mouse(this);
  posDestinyX = coordinates[0];
  posDestinyY = coordinates[1];
  numClientDestiny = numClient;
  if(posOriginX === posDestinyX && posOriginY === posDestinyY){
    if (confirm("Confirm remove client?"+numClient) == true) {
      clients.splice(numClient,1);
      for(f=0; f<joins.length;f++)console.log("AJOIN:"+joins[f].origin+"-"+joins[f].destiny);
      f=0;
      while ( f < joins.length )
      {
      if(joins[f].origin=== numClient || joins[f].destiny=== numClient ) {
        joins.splice(f,1);
        f =0;
        } else {
                 f++;
                }
      }
     updateHTML();
      console.log("REMOVE CLIENT!"+numClient);
  }

  }
  if (numClientOrigin != numClientDestiny) {
  withOutCircle =0;
    var ratio = prompt("What is the percentage?", "");
    if (ratio!= null) {
        newJsonJoin(numClientOrigin, numClientDestiny, ratio);
        updateHTML();
        console.log("JOIN DONE!");
        }
  }
  numClient =-1;
  createGraph();
}

function newJsonClient(posOriginX,posOriginY,posDestinyX,posDestinyY,name,qtd) {
  max =0;
  for(f=0; f<clients.length;f++) if ( clients[f].id >max) max=clients[f].id;
  clients.push({ id:max+1, name:name, x:posOriginX, y:posOriginY, qtd:qtd});
}

function newJsonJoin(origin, destiny, ratio) {
  max =0;
  for(f=0; f<clients.length;f++) if ( clients[f].id >max) max=clients[f].id;
  joins.push({id:max+1, origin:numClientOrigin, destiny:numClientDestiny, ratio:ratio});
}

function updateHTML() {
var s="";
for(f=0; f<clients.length;f++) s = s + "Id:"+clients[f].id+" Nome:"+clients[f].name+" x:"+clients[f].x+" y:"+clients[f].y+" qtd:"+clients[f].qtd+"<br>";
  document.getElementById("client").innerHTML = s;

  s="";
for(f=0; f<joins.length;f++) s = s + "Id:"+joins[f].id+" Origem:"+joins[f].origin+" Destino:"+joins[f].destiny+" Porcentagem:"+joins[f].ratio+" <br>";
document.getElementById("join").innerHTML = s;

}