
var clients;
var joins;
var numClient = -1;
var numClientOrigin =-1;
var numClientDestiny =-1;


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
var s='<TABLE  width="400" border="0" cellspacing="1" cellpadding="1">';
s=s+'<TR><TD>ID</TD> <TD>CLIENTE</TD> <TD>LATITUDE</TD> <TD>LONGITUDE</TD> <TD>QUANTIDADE</TD></TR>';
for(f=0; f<clients.length;f++) s = s + "<TR><TD>"+clients[f].id+tab()+"</TD> <TD>"+clients[f].name+tab()+"</TD> <TD>"+clients[f].x+tab()+"</TD> <TD>"+clients[f].y+tab()+"</TD> <TD>"+clients[f].qtd+"</TD></TR>";
s=s+'</TABLE><br><br>';

  document.getElementById("client").innerHTML = s;

s='<TABLE  width="400" border="0" cellspacing="1" cellpadding="1">';
s=s+'<TR><TD>ID</TD> <TD>ORIGEM</TD> <TD>DESTINO</TD>  <TD>PORCENTAGEM</TD></TR>';
for(f=0; f<joins.length;f++) s = s + "<TR><TD>"+joins[f].id+tab()+"</TD> <TD>"+clients[joins[f].origin].name+tab()+"</TD> <TD>"+clients[joins[f].destiny].name+tab()+"</TD> <TD>"+joins[f].ratio+"</TD></TR>";
s=s+'</TABLE><br><br>';
document.getElementById("join").innerHTML = s;

}
function tab() {

return "&nbsp;&nbsp;&nbsp;&nbsp;";
}

function processAction() {
mountMap(stepWay)
stepWay = stepWay + .0001;
}


