(function(){
"use strict";
var content=document.getElementById("content"), title=document.getElementById("pageTitle"), status=document.getElementById("jsStatus");
status.textContent="JS OK"; status.style.background="#116b38";
var base=[
{id:1,n:"Martín",p:"POR",v:15},{id:2,n:"Carlos Ruiz",p:"DEF",v:12},{id:3,n:"David López",p:"DEF",v:14},{id:4,n:"Pablo Santos",p:"DEF",v:8},{id:5,n:"Javi Hernández",p:"DEF",v:9},
{id:6,n:"Sergio López",p:"MED",v:17},{id:7,n:"Javi Serrano",p:"MED",v:16},{id:8,n:"Óscar Gil",p:"MED",v:14},{id:9,n:"Rubén Peña",p:"MED",v:13},{id:10,n:"Álex Díaz",p:"DEL",v:28},{id:11,n:"Iván Morales",p:"DEL",v:24},
{id:12,n:"Mario Cano",p:"POR",v:6},{id:13,n:"Eric Luna",p:"DEF",v:7},{id:14,n:"Mikel Roca",p:"MED",v:9},{id:15,n:"Mateo Rey",p:"DEL",v:8}];
var offers=[{id:101,n:"Lucas Romero",p:"DEL",v:36},{id:102,n:"Ander Vega",p:"MED",v:27},{id:103,n:"Marc Ruiz",p:"DEF",v:17},{id:104,n:"Gael Santos",p:"POR",v:11}];
function fresh(){return {cash:200,players:base.slice(),bids:{},feed:["📣 Bienvenido a Futmanager.","📈 La bolsa interna ya está abierta.","🤝 Pronto llegarán ofertas de patrocinio."]};}
var state;
try{state=JSON.parse(localStorage.getItem("futmanager021"))||fresh();}catch(e){state=fresh();}
function save(){localStorage.setItem("futmanager021",JSON.stringify(state));}
function money(n){return Number(n).toLocaleString("es-ES")+" M€";}
function squad(){return state.players.reduce(function(a,p){return a+p.v;},0);}
function setActive(page){document.querySelectorAll("#bottomNav button").forEach(function(b){b.classList.toggle("active",b.getAttribute("data-page")===page);});}
function home(){title.textContent="Inicio";content.innerHTML='<section class="card"><small class="pos">TEMPORADA 1</small><h2>Mi Liga Futmanager</h2><div class="metrics"><div class="metric"><small>Saldo</small><b>'+money(state.cash)+'</b></div><div class="metric"><small>Plantilla</small><b>'+money(squad())+'</b></div><div class="metric"><small>Patrimonio</small><b>'+money(state.cash+squad())+'</b></div><div class="metric"><small>Puntos</small><b>0</b></div></div></section><section class="card feed"><h3>Tablón</h3>'+state.feed.slice().reverse().map(function(x){return "<p>"+x+"</p>";}).join("")+"</section>";}
function team(){title.textContent="Equipo";content.innerHTML='<section class="card"><h2>'+state.players.length+' jugadores</h2>'+state.players.map(function(p){return '<div class="player"><div><b>'+p.n+'</b><div class="pos">'+p.p+'</div></div><b>'+money(p.v)+'</b></div>';}).join("")+'</section>';}
function lineup(){title.textContent="Alineación";var a=state.players.slice(0,11), order=["DEL","MED","DEF","POR"];content.innerHTML='<div class="notice">Formación 4-4-2 · primera alineación funcional.</div><div class="pitch">'+order.map(function(pos){return '<div class="line">'+a.filter(function(p){return p.p===pos;}).map(function(p){return '<div class="slot"><div class="disc">'+p.n.split(" ").map(function(x){return x.charAt(0);}).join("").slice(0,2)+'</div>'+p.n+'</div>';}).join("")+'</div>';}).join("")+'</div>';}
function market(){title.textContent="Mercado";content.innerHTML='<section class="card"><h2>Saldo '+money(state.cash)+'</h2><div class="muted">Pujas secretas · renovación diaria</div></section><section class="card">'+offers.map(function(p){return '<div class="marketRow"><div><b>'+p.n+'</b><div class="pos">'+p.p+' · '+money(p.v)+'</div></div><span>'+(state.bids[p.id]?"Pujado":"Disponible")+'</span></div><div class="bidbox"><input id="bid-'+p.id+'" type="number" min="'+p.v+'" value="'+(state.bids[p.id]||p.v)+'"><button class="primary" type="button" data-bid="'+p.id+'">Pujar</button></div>';}).join("")+'</section>';content.querySelectorAll("[data-bid]").forEach(function(btn){btn.addEventListener("click",function(){var id=Number(btn.getAttribute("data-bid")),p=offers.find(function(x){return x.id===id;}),v=Number(document.getElementById("bid-"+id).value);if(v<p.v){alert("La puja es demasiado baja.");return;}if(v>state.cash){alert("Saldo insuficiente.");return;}state.bids[id]=v;state.feed.push("💰 Puja de "+money(v)+" por "+p.n+".");save();market();});});}
function league(){title.textContent="Liga";var teams=["Atlético Mataró","CF Vallès","Racing Marina","Mi Liga Futmanager","Sporting Besòs","UD Maresme"];content.innerHTML='<section class="card"><h2>Clasificación</h2>'+teams.map(function(t,i){return '<div class="standing"><span><b>'+(i+1)+'.</b> '+t+'</span><b>0 pts</b></div>';}).join("")+'</section>';}
var pages={home:home,team:team,lineup:lineup,market:market,league:league};
function go(page){if(!pages[page])page="home";pages[page]();setActive(page);window.scrollTo(0,0);}
document.getElementById("bottomNav").addEventListener("click",function(e){var btn=e.target.closest("button[data-page]");if(btn){go(btn.getAttribute("data-page"));}});
save();go("home");
})();