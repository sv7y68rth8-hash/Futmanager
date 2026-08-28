(function(){
"use strict";
var content=document.getElementById("content"), title=document.getElementById("pageTitle");

var pool=[
{id:1,n:"Martín Vidal",p:"POR",v:15},{id:2,n:"Mario Cano",p:"POR",v:8},{id:3,n:"Hugo Ferrer",p:"POR",v:11},{id:4,n:"Álex Prats",p:"POR",v:7},
{id:10,n:"Carlos Ruiz",p:"DEF",v:12},{id:11,n:"David López",p:"DEF",v:14},{id:12,n:"Pablo Santos",p:"DEF",v:8},{id:13,n:"Javi Hernández",p:"DEF",v:9},{id:14,n:"Eric Luna",p:"DEF",v:7},{id:15,n:"Marc Ruiz",p:"DEF",v:17},{id:16,n:"Joel Martín",p:"DEF",v:10},{id:17,n:"Adri Peña",p:"DEF",v:13},
{id:20,n:"Sergio López",p:"MED",v:17},{id:21,n:"Javi Serrano",p:"MED",v:16},{id:22,n:"Óscar Gil",p:"MED",v:14},{id:23,n:"Rubén Peña",p:"MED",v:13},{id:24,n:"Mikel Roca",p:"MED",v:9},{id:25,n:"Ander Vega",p:"MED",v:27},{id:26,n:"Nil Costa",p:"MED",v:12},{id:27,n:"Pol Reina",p:"MED",v:18},
{id:30,n:"Álex Díaz",p:"DEL",v:28},{id:31,n:"Iván Morales",p:"DEL",v:24},{id:32,n:"Mateo Rey",p:"DEL",v:8},{id:33,n:"Lucas Romero",p:"DEL",v:36},{id:34,n:"Gael Torres",p:"DEL",v:19},{id:35,n:"Marcelo Vela",p:"DEL",v:15}
];

var offers=[{id:101,n:"Lucas Romero",p:"DEL",v:36},{id:102,n:"Ander Vega",p:"MED",v:27},{id:103,n:"Marc Ruiz",p:"DEF",v:17},{id:104,n:"Hugo Ferrer",p:"POR",v:11}];
var companies=[{n:"Construcciones La Carral",p:21.4,c:2.8},{n:"JoaoTech SA",p:64.2,c:-1.4},{n:"Mapple",p:103.7,c:1.1},{n:"Jules Energy",p:38.5,c:4.2},{n:"MaxDonals",p:51.6,c:-0.7},{n:"DogSanxz SL",p:17.2,c:0.6},{n:"NeoMartirials",p:31.9,c:-2.2}];

function sample(arr,n){var a=arr.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t;}return a.slice(0,n);}
function generateSquad(total){
  total=Math.max(12,Number(total)||14);
  var out=[];
  out=out.concat(sample(pool.filter(function(x){return x.p==="POR";}),2));
  out=out.concat(sample(pool.filter(function(x){return x.p==="DEF";}),4));
  out=out.concat(sample(pool.filter(function(x){return x.p==="MED";}),4));
  out=out.concat(sample(pool.filter(function(x){return x.p==="DEL";}),2));
  var remaining=total-out.length;
  if(remaining>0){
    var used={};out.forEach(function(x){used[x.id]=1;});
    var nonGK=pool.filter(function(x){return x.p!=="POR"&&!used[x.id];});
    out=out.concat(sample(nonGK,remaining));
  }
  return out;
}
function fresh(){return {
  cash:200,
  squadSize:14,
  players:generateSquad(14),
  lineup:[],
  bids:{},
  feed:["📣 Bienvenido a Futmanager.","📈 La bolsa interna ya está abierta.","🤝 Pronto llegarán ofertas de patrocinio."],
  stockNews:[
    {time:"06:00",txt:"JoaoTech anuncia un acuerdo comercial con un gran fabricante europeo."},
    {time:"17:00",txt:"Jules Energy confirma una revisión al alza de su previsión anual."}
  ]
};}
var state;try{state=JSON.parse(localStorage.getItem("futmanager030"))||fresh();}catch(e){state=fresh();}
if(!state.players || !state.players.length) state.players=generateSquad(state.squadSize||14);
function save(){localStorage.setItem("futmanager030",JSON.stringify(state));}
function money(n){return Number(n).toLocaleString("es-ES")+" M€";}
function squad(){return state.players.reduce(function(a,p){return a+p.v;},0);}
function active(page){document.querySelectorAll("[data-page]").forEach(function(b){b.classList.toggle("active",b.getAttribute("data-page")===page);});}
function bindGo(){content.querySelectorAll("[data-go]").forEach(function(b){b.onclick=function(){go(this.getAttribute("data-go"));};});}
function home(){
 title.textContent="Inicio";
 content.innerHTML='<section class="card"><small class="pos">TEMPORADA 1</small><h2>Mi Liga Futmanager</h2><div class="metrics"><div class="metric"><small>Saldo</small><b>'+money(state.cash)+'</b></div><div class="metric"><small>Plantilla</small><b>'+money(squad())+'</b></div><div class="metric"><small>Patrimonio</small><b>'+money(state.cash+squad())+'</b></div><div class="metric"><small>Puntos</small><b>0</b></div></div></section>'+
 '<section class="card"><h3>Accesos</h3><div class="actions"><button class="action" data-go="team">👥 Equipo<span>Gestionar plantilla</span></button><button class="action" data-go="lineup">⚽ Alineación<span>Preparar el once</span></button><button class="action" data-go="market">🔁 Mercado<span>Pujar por jugadores</span></button><button class="action" data-go="league">🏆 Liga<span>Clasificación</span></button><button class="action" data-go="sponsors">🤝 Sponsors<span>Ofertas y objetivos</span></button><button class="action" data-go="stocks">📈 Bolsa<span>Noticias y cotizaciones</span></button></div></section>'+
 '<section class="card feed"><h3>Tablón</h3>'+state.feed.slice().reverse().map(function(x){return "<p>"+x+"</p>";}).join("")+"</section>";
 bindGo();
}
function team(){
 title.textContent="Equipo";
 var counts={POR:0,DEF:0,MED:0,DEL:0};state.players.forEach(function(p){counts[p.p]=(counts[p.p]||0)+1;});
 content.innerHTML='<section class="card"><h2>'+state.players.length+' jugadores</h2><div class="teamcount"><span>POR '+counts.POR+'</span><span>DEF '+counts.DEF+'</span><span>MED '+counts.MED+'</span><span>DEL '+counts.DEL+'</span></div><div class="toolbar"><button class="primary" id="regen">Generar nueva plantilla</button></div>'+state.players.map(function(p){return '<div class="player"><div><b>'+p.n+'</b><div class="pos">'+p.p+'</div></div><b>'+money(p.v)+'</b></div>';}).join("")+'</section>';
 document.getElementById("regen").onclick=function(){state.players=generateSquad(state.squadSize||14);state.lineup=[];save();team();};
}
function lineup(){
 title.textContent="Alineación";
 var starters=state.lineup.length?state.lineup:state.players.slice(0,11).map(function(x){return x.id;});
 var chosen=starters.map(function(id){return state.players.find(function(p){return p.id===id;});}).filter(Boolean);
 var order=["DEL","MED","DEF","POR"];
 content.innerHTML='<div class="notice">Selecciona exactamente 11 titulares. Después pulsa Guardar alineación.</div><section class="card"><div class="toolbar"><button class="primary" id="saveLineup">Guardar alineación</button><button class="secondary" id="clearLineup">Limpiar</button></div>'+
 state.players.map(function(p){var checked=starters.indexOf(p.id)>=0?'checked':'';return '<label class="player"><span><input class="pick" type="checkbox" value="'+p.id+'" '+checked+'> <b>'+p.n+'</b><div class="pos">'+p.p+'</div></span><b>'+money(p.v)+'</b></label>';}).join("")+'</section>'+
 '<div class="pitch">'+order.map(function(pos){return '<div class="line">'+chosen.filter(function(p){return p.p===pos;}).map(function(p){return '<div class="slot"><div class="disc">'+p.n.split(" ").map(function(x){return x.charAt(0);}).join("").slice(0,2)+'</div>'+p.n+'</div>';}).join("")+'</div>';}).join("")+'</div>';
 document.querySelectorAll(".pick").forEach(function(c){c.onchange=function(){var sel=[].slice.call(document.querySelectorAll(".pick:checked"));if(sel.length>11){this.checked=false;alert("Solo puedes elegir 11 titulares.");}lineup();};});
 document.getElementById("saveLineup").onclick=function(){var ids=[].slice.call(document.querySelectorAll(".pick:checked")).map(function(x){return Number(x.value);});if(ids.length!==11)return alert("Debes seleccionar exactamente 11 jugadores.");state.lineup=ids;save();alert("Alineación guardada.");};
 document.getElementById("clearLineup").onclick=function(){state.lineup=[];save();lineup();};
}
function market(){
 title.textContent="Mercado";
 content.innerHTML='<section class="card"><h2>Saldo '+money(state.cash)+'</h2><div class="muted">Pujas secretas · mercado de prueba · adjudicación manual simulada</div></section><section class="card">'+offers.map(function(p){return '<div class="marketRow"><div><b>'+p.n+'</b><div class="pos">'+p.p+' · '+money(p.v)+'</div></div><span class="pill">'+(state.bids[p.id]?"Pujado":"Disponible")+'</span></div><div class="bidbox"><input id="bid-'+p.id+'" type="number" min="'+p.v+'" value="'+(state.bids[p.id]||p.v)+'"><button class="primary" data-bid="'+p.id+'">Pujar</button></div>';}).join("")+'</section>';
 content.querySelectorAll("[data-bid]").forEach(function(btn){btn.onclick=function(){var id=Number(this.getAttribute("data-bid")),p=offers.find(function(x){return x.id===id;}),v=Number(document.getElementById("bid-"+id).value);if(v<p.v)return alert("La puja es demasiado baja.");if(v>state.cash)return alert("Saldo insuficiente.");state.bids[id]=v;state.feed.push("💰 Puja de "+money(v)+" por "+p.n+".");save();market();};});
}
function league(){
 title.textContent="Liga";
 var teams=["Atlético Mataró","CF Vallès","Racing Marina","Mi Liga Futmanager","Sporting Besòs","UD Maresme"];
 content.innerHTML='<section class="card"><h2>Clasificación</h2>'+teams.map(function(t,i){return '<div class="standing"><span><b>'+(i+1)+'.</b> '+t+'</span><b>0 pts</b></div>';}).join("")+'</section>';
}
function sponsors(){
 title.textContent="Sponsors";
 content.innerHTML='<section class="card"><h2>Patrocinios</h2><p class="muted">Hasta 3 módulos simultáneos.</p><div class="player"><div><b>Marca técnica</b><div class="muted">Oferta disponible 3 días</div></div><button class="primary">Ver oferta</button></div><div class="player"><div><b>Patrocinador camiseta</b><div class="muted">Pendiente de propuesta</div></div><span class="pill">Próximamente</span></div><div class="player"><div><b>Patrocinador estadio</b><div class="muted">Pendiente de propuesta</div></div><span class="pill">Próximamente</span></div></section>';
}
function stocks(){
 title.textContent="Bolsa";
 content.innerHTML='<section class="card"><h2>Bolsa interna</h2><div class="clock"><span>📰 Noticias 06:00</span><span>📊 Precios 08:00</span><span>📰 Noticias 17:00</span><span>📊 Precios 18:00</span></div><p class="muted">El precio permanece fijo entre actualizaciones.</p></section>'+
 '<section class="card"><h3 class="sectiontitle">Noticias de hoy</h3>'+state.stockNews.map(function(n){return '<div class="news"><b>'+n.time+'</b><br>'+n.txt+'</div>';}).join("")+'</section>'+
 '<section class="card"><h3>Cotizaciones</h3>'+companies.map(function(c){return '<div class="stock"><div><b>'+c.n+'</b><div class="muted">Precio '+c.p.toFixed(2)+' M€</div></div><span class="'+(c.c>=0?"positive":"negative")+'">'+(c.c>=0?"+":"")+c.c.toFixed(1)+'%</span></div>';}).join("")+'</section>';
}
function admin(){
 title.textContent="Configuración de liga";
 content.innerHTML='<section class="card"><h2>Plantilla inicial</h2><div class="adminrow"><div><b>Número total de jugadores</b><div class="muted">Base: 2 POR + 4 DEF + 4 MED + 2 DEL; extras sin porteros.</div></div><input id="squadSize" type="number" min="12" max="20" value="'+(state.squadSize||14)+'"></div><div class="toolbar"><button class="primary" id="saveAdmin">Guardar</button><button class="danger" id="resetAll">Reiniciar liga de prueba</button></div></section>';
 document.getElementById("saveAdmin").onclick=function(){state.squadSize=Math.max(12,Math.min(20,Number(document.getElementById("squadSize").value)||14));save();alert("Configuración guardada.");};
 document.getElementById("resetAll").onclick=function(){if(confirm("¿Reiniciar todos los datos de prueba?")){state=fresh();save();home();}};
}
var pages={home:home,team:team,lineup:lineup,market:market,league:league,sponsors:sponsors,stocks:stocks,admin:admin};
function go(page){(pages[page]||home)();active(page);window.scrollTo(0,0);}
document.querySelectorAll("[data-page]").forEach(function(b){b.onclick=function(){go(this.getAttribute("data-page"));};});
save();go("home");
if("serviceWorker" in navigator){navigator.serviceWorker.getRegistrations().then(function(rs){rs.forEach(function(r){r.unregister();});});}
})();