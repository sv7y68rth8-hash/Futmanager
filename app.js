(function(){
"use strict";
var A=document.getElementById("app"),T=document.getElementById("title");
var pool=[{"id": 1, "n": "Marc-André ter Stegen", "club": "FC Barcelona", "p": "POR", "v": 20}, {"id": 2, "n": "Iñaki Peña", "club": "FC Barcelona", "p": "POR", "v": 10}, {"id": 3, "n": "Thibaut Courtois", "club": "Real Madrid", "p": "POR", "v": 28}, {"id": 4, "n": "Jan Oblak", "club": "Atlético de Madrid", "p": "POR", "v": 25}, {"id": 5, "n": "Unai Simón", "club": "Athletic Club", "p": "POR", "v": 28}, {"id": 10, "n": "Pau Cubarsí", "club": "FC Barcelona", "p": "DEF", "v": 80}, {"id": 11, "n": "Jules Koundé", "club": "FC Barcelona", "p": "DEF", "v": 60}, {"id": 12, "n": "Dani Carvajal", "club": "Real Madrid", "p": "DEF", "v": 18}, {"id": 13, "n": "Dean Huijsen", "club": "Real Madrid", "p": "DEF", "v": 60}, {"id": 14, "n": "Robin Le Normand", "club": "Atlético de Madrid", "p": "DEF", "v": 35}, {"id": 15, "n": "José María Giménez", "club": "Atlético de Madrid", "p": "DEF", "v": 22}, {"id": 16, "n": "Dani Vivian", "club": "Athletic Club", "p": "DEF", "v": 40}, {"id": 17, "n": "Aitor Paredes", "club": "Athletic Club", "p": "DEF", "v": 20}, {"id": 18, "n": "Juan Foyth", "club": "Villarreal CF", "p": "DEF", "v": 20}, {"id": 19, "n": "Diego Llorente", "club": "Real Betis", "p": "DEF", "v": 12}, {"id": 20, "n": "Pedri", "club": "FC Barcelona", "p": "MED", "v": 140}, {"id": 21, "n": "Frenkie de Jong", "club": "FC Barcelona", "p": "MED", "v": 45}, {"id": 22, "n": "Jude Bellingham", "club": "Real Madrid", "p": "MED", "v": 150}, {"id": 23, "n": "Federico Valverde", "club": "Real Madrid", "p": "MED", "v": 120}, {"id": 24, "n": "Pablo Barrios", "club": "Atlético de Madrid", "p": "MED", "v": 50}, {"id": 25, "n": "Koke", "club": "Atlético de Madrid", "p": "MED", "v": 10}, {"id": 26, "n": "Oihan Sancet", "club": "Athletic Club", "p": "MED", "v": 60}, {"id": 27, "n": "Álex Baena", "club": "Atlético de Madrid", "p": "MED", "v": 55}, {"id": 28, "n": "Isco", "club": "Real Betis", "p": "MED", "v": 15}, {"id": 29, "n": "Javi Guerra", "club": "Valencia CF", "p": "MED", "v": 35}, {"id": 30, "n": "Lamine Yamal", "club": "FC Barcelona", "p": "DEL", "v": 200}, {"id": 31, "n": "Raphinha", "club": "FC Barcelona", "p": "DEL", "v": 90}, {"id": 32, "n": "Kylian Mbappé", "club": "Real Madrid", "p": "DEL", "v": 180}, {"id": 33, "n": "Vinícius Jr.", "club": "Real Madrid", "p": "DEL", "v": 150}, {"id": 34, "n": "Nico Williams", "club": "Athletic Club", "p": "DEL", "v": 70}, {"id": 35, "n": "Antoine Griezmann", "club": "Atlético de Madrid", "p": "DEL", "v": 25}, {"id": 36, "n": "Ayoze Pérez", "club": "Villarreal CF", "p": "DEL", "v": 18}, {"id": 37, "n": "Iñaki Williams", "club": "Athletic Club", "p": "DEL", "v": 20}, {"id": 38, "n": "Cucho Hernández", "club": "Real Betis", "p": "DEL", "v": 18}];
var forms={
"4-4-2":["POR","DEF","DEF","DEF","DEF","MED","MED","MED","MED","DEL","DEL"],
"4-3-3":["POR","DEF","DEF","DEF","DEF","MED","MED","MED","DEL","DEL","DEL"],
"4-2-3-1":["POR","DEF","DEF","DEF","DEF","MED","MED","MED","MED","MED","DEL"],
"4-1-4-1":["POR","DEF","DEF","DEF","DEF","MED","MED","MED","MED","MED","DEL"],
"4-5-1":["POR","DEF","DEF","DEF","DEF","MED","MED","MED","MED","MED","DEL"],
"3-5-2":["POR","DEF","DEF","DEF","MED","MED","MED","MED","MED","DEL","DEL"],
"3-4-3":["POR","DEF","DEF","DEF","MED","MED","MED","MED","DEL","DEL","DEL"],
"3-4-2-1":["POR","DEF","DEF","DEF","MED","MED","MED","MED","MED","MED","DEL"],
"5-3-2":["POR","DEF","DEF","DEF","DEF","DEF","MED","MED","MED","DEL","DEL"],
"5-4-1":["POR","DEF","DEF","DEF","DEF","DEF","MED","MED","MED","MED","DEL"]
};
function fresh(){return{step:"league",league:"",team:"",manager:"",wealth:400,target:200,size:14,cash:0,players:[],formation:"4-4-2",slots:Array(11).fill(null)}}
var s;try{s=JSON.parse(localStorage.getItem("fm041"))||fresh()}catch(e){s=fresh()}
function save(){localStorage.setItem("fm041",JSON.stringify(s))}
function money(x){return Number(x).toLocaleString("es-ES")+" M€"}
function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function value(arr){return arr.reduce((a,p)=>a+p.v,0)}
function pickBudgeted(count,target){
 var best=null,bestDiff=1e9;
 for(var tries=0;tries<2500;tries++){
   var out=[];
   out=out.concat(shuffle(pool.filter(x=>x.p==="POR")).slice(0,2));
   out=out.concat(shuffle(pool.filter(x=>x.p==="DEF"&&!out.includes(x))).slice(0,4));
   out=out.concat(shuffle(pool.filter(x=>x.p==="MED"&&!out.includes(x))).slice(0,4));
   out=out.concat(shuffle(pool.filter(x=>x.p==="DEL"&&!out.includes(x))).slice(0,2));
   var used=new Set(out.map(x=>x.id));
   var rest=shuffle(pool.filter(x=>x.p!=="POR"&&!used.has(x.id))).slice(0,Math.max(0,count-12));
   out=out.concat(rest);
   var d=Math.abs(value(out)-target);
   if(d<bestDiff){best=out;bestDiff=d}
 }
 return best||[];
}
function initials(n){return n.split(" ").map(x=>x[0]).join("").slice(0,2)}
function avatar(p){return '<div class="avatar">'+initials(p.n)+'</div>'}
function leagueCreate(){
 T.textContent="Crear liga";
 A.innerHTML='<div class="wrap"><section class="card hero"><h2>Crea tu liga</h2><p>Primero configuramos la competición. Después crearás tu club.</p></section><section class="card"><div class="field"><label>Nombre de la liga</label><input id="league" placeholder="Mi Liga Futmanager"></div><div class="grid"><div class="field"><label>Patrimonio inicial total</label><input id="wealth" type="number" value="400"></div><div class="field"><label>Valor objetivo de plantilla</label><input id="target" type="number" value="200"></div></div><div class="field"><label>Jugadores iniciales</label><select id="size"><option>14</option><option>15</option><option>16</option></select></div><button class="primary wide" id="next">Crear liga y continuar</button></section></div>';
 document.getElementById("next").onclick=function(){s.league=document.getElementById("league").value.trim()||"Mi Liga Futmanager";s.wealth=Number(document.getElementById("wealth").value)||400;s.target=Number(document.getElementById("target").value)||200;s.size=Number(document.getElementById("size").value)||14;s.step="team";save();teamCreate()}
}
function teamCreate(){
 T.textContent="Crear club";
 A.innerHTML='<div class="wrap"><section class="card"><span class="badge">'+s.league+'</span><h2>Ahora crea tu club</h2><div class="field"><label>Nombre del club</label><input id="team" placeholder="Nombre de tu equipo"></div><div class="field"><label>Nombre del mánager</label><input id="manager" placeholder="Tu nombre"></div><button class="primary wide" id="create">Crear club y recibir plantilla</button></section></div>';
 document.getElementById("create").onclick=function(){s.team=document.getElementById("team").value.trim();if(!s.team)return alert("Pon un nombre al club.");s.manager=document.getElementById("manager").value.trim();s.players=pickBudgeted(s.size,s.target);s.cash=Math.max(0,s.wealth-value(s.players));s.slots=Array(11).fill(null);s.step="game";save();home()}
}
function nav(){return '<div class="nav"><button data-go="home">🏠 Inicio</button><button data-go="team">👥 Equipo</button><button data-go="lineup">⚽ Alineación</button><button data-go="market">🔁 Mercado</button><button data-go="stocks">📈 Bolsa</button></div>'}
function bindNav(){document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>pages[b.dataset.go]())}
function home(){
 T.textContent=s.team;
 A.innerHTML='<div class="wrap">'+nav()+'<section class="card"><span class="badge">Jornada actual</span><h2>'+s.team+'</h2><p class="muted">'+s.league+'</p><div class="metrics"><div class="metric"><small>Plantilla</small><b>'+money(value(s.players))+'</b></div><div class="metric"><small>Objetivo</small><b>'+money(s.target)+'</b></div><div class="metric"><small>Saldo</small><b>'+money(s.cash)+'</b></div><div class="metric"><small>Patrimonio</small><b>'+money(s.cash+value(s.players))+'</b></div></div></section><section class="card"><p class="muted">La plantilla se genera de forma aleatoria respetando 2 POR + 4 DEF + 4 MED + 2 DEL, con extras no porteros, intentando aproximarse al valor objetivo configurado.</p></section></div>';bindNav()
}
function team(){
 T.textContent="Equipo";
 A.innerHTML='<div class="wrap">'+nav()+'<section class="card"><h2>Plantilla</h2><div class="summary"><span>'+s.players.length+' jugadores</span><span>Valor '+money(value(s.players))+'</span><span>Objetivo '+money(s.target)+'</span></div>'+s.players.map(p=>'<div class="player">'+avatar(p)+'<div><b>'+p.n+'</b><div class="club">'+p.club+'</div><div class="pos">'+p.p+'</div></div><b>'+money(p.v)+'</b></div>').join("")+'</section></div>';bindNav()
}
function lineup(){
 T.textContent="Alineación";
 var spec=forms[s.formation],groups={DEL:[],MED:[],DEF:[],POR:[]};spec.forEach((p,i)=>groups[p].push(i));
 A.innerHTML='<div class="wrap">'+nav()+'<div class="notice">La alineación empieza vacía. Arrastra jugadores desde la lista de la derecha a una posición compatible.</div><div class="layout"><aside class="card formations"><h3>Formaciones</h3>'+Object.keys(forms).map(f=>'<button data-form="'+f+'" class="'+(f===s.formation?'active':'')+'">'+f+'</button>').join("")+'</aside><section><div class="pitch">'+["DEL","MED","DEF","POR"].map(pos=>'<div class="row">'+groups[pos].map(i=>slot(i,pos)).join("")+'</div>').join("")+'</div><div class="toolbar"><button class="primary" id="saveXI">Guardar alineación</button><button class="secondary" id="clearXI">Vaciar</button></div></section><aside class="card listbox"><h3>Jugadores</h3>'+["POR","DEF","MED","DEL"].map(pos=>'<div class="positionGroup"><h4>'+pos+'</h4>'+s.players.filter(p=>p.p===pos&&!s.slots.includes(p.id)).map(smallPlayer).join("")+'</div>').join("")+'</aside></div></div>';
 document.querySelectorAll("[data-form]").forEach(b=>b.onclick=function(){s.formation=this.dataset.form;s.slots=Array(11).fill(null);save();lineup()});
 enableDnD();
 document.getElementById("clearXI").onclick=function(){s.slots=Array(11).fill(null);save();lineup()};
 document.getElementById("saveXI").onclick=function(){if(s.slots.filter(Boolean).length!==11)return alert("Debes colocar 11 titulares.");save();alert("Alineación guardada.")};
 bindNav()
}
function slot(i,pos){var id=s.slots[i],p=s.players.find(x=>x.id===id);return '<div class="slot" data-slot="'+i+'" data-pos="'+pos+'"><small>'+pos+'</small>'+(p?'<div class="chip" draggable="true" data-player="'+p.id+'">'+p.n+'<div class="club">'+p.club+'</div></div>':"")+'</div>'}
function smallPlayer(p){return '<div class="smallplayer" draggable="true" data-player="'+p.id+'">'+avatar(p)+'<div><b>'+p.n+'</b><div class="club">'+p.club+'</div></div></div>'}
function enableDnD(){
 document.querySelectorAll("[data-player]").forEach(c=>c.ondragstart=e=>e.dataTransfer.setData("text/plain",c.dataset.player));
 document.querySelectorAll(".slot").forEach(z=>{z.ondragover=e=>{e.preventDefault();z.classList.add("over")};z.ondragleave=()=>z.classList.remove("over");z.ondrop=e=>{e.preventDefault();var id=Number(e.dataTransfer.getData("text/plain")),p=s.players.find(x=>x.id===id),need=z.dataset.pos;if(!p)return;if(p.p!==need) return alert(p.n+" es "+p.p+" y esta posición es "+need+".");var idx=Number(z.dataset.slot),old=s.slots.indexOf(id);if(old>=0)s.slots[old]=null;s.slots[idx]=id;save();lineup()}});
}
function market(){T.textContent="Mercado";A.innerHTML='<div class="wrap">'+nav()+'<section class="card"><h2>Mercado</h2><p class="muted">Pendiente de conectar la base completa de LaLiga. Esta pantalla reutilizará exactamente la misma ficha de jugador, club, posición, valor e imagen.</p></section></div>';bindNav()}
function stocks(){T.textContent="Bolsa";A.innerHTML='<div class="wrap">'+nav()+'<section class="card"><h2>Bolsa interna</h2><p><b>06:00</b> noticias → <b>08:00</b> precios · <b>17:00</b> noticias → <b>18:00</b> precios</p></section></div>';bindNav()}
var pages={home:home,team:team,lineup:lineup,market:market,stocks:stocks};
if(s.step==="league")leagueCreate();else if(s.step==="team")teamCreate();else home();
})();