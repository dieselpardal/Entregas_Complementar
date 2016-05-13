
var svg;
var width = 500;
var height = 500;

function circle(f,x,y,color,client,join,name,ray) {
  svg.append('circle')
      .attr('class', 'origin')
      .attr('cx',x)
      .attr('cy',y)
      .attr('r', ray)
      .attr('fill',color)
      .style('opacity', 0.3)
      .on("mouseover", function (d) {
                                      indicate(client,join,f);
                                    });
}
function pictures(x,y,width,height, name) {
  svg.append('svg:image')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', width)
    .attr('height', height)
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

function indicate(client,join,f) {
 clearScreen();
 pictures(0,90,width,height+10, "a");
 createGraph(client,join);

    for(var g=0; g<join.length; g++) {
            if (f == join[g].origin) {
             line(client[join[g].origin].x,client[join[g].origin].y,
                  client[join[g].destiny].x,client[join[g].destiny].y,
                  'red' );
             print(join[g].ratio+"%",
                   mean(client[join[g].origin].x, client[join[g].destiny].x),
                   mean(client[join[g].origin].y, client[join[g].destiny].y),
                   10,
                   'arial',
                   12,
                   'blue');
            }
        }
}
function line(x1,y1,x2,y2,color) {
  svg.append('line')
      .attr('class', 'arrow')
      .attr('x1', x1)
      .attr('y1', y1)
      .attr('x2', x2)
      .attr('y2', y2)
      .style('stroke-width',"3px")
      .attr('stroke',color);
}

function createGraph(client,join) {
pictures(0,90,width,height+10, "a");
    for(var f=0; f<client.length;f++)
            {
                    circle(f,client[f].x,client[f].y,'black',client,join,client[f].name,client[f].qtd/10);
                    print(client[f].name,client[f].x,client[f].y, 10,'arial',12,'black');
                    print(client[f].qtd,client[f].x,client[f].y+20, 10,'arial',12,'black');
            }
}

function init() {
        svg = d3.select(document.getElementById('quadros')).append('svg')
             .attr('width', width)
             .attr('height', height) ;
}
