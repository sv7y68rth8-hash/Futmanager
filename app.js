
(function(){
"use strict";
const A=document.getElementById("app"),T=document.getElementById("title");
const pool=[{"id": 1, "n": "Portero A", "club": "Club Norte", "p": "POR", "v": 5}, {"id": 2, "n": "Portero B", "club": "Club Azul", "p": "POR", "v": 7}, {"id": 3, "n": "Portero C", "club": "Club Rojo", "p": "POR", "v": 10}, {"id": 4, "n": "Portero D", "club": "Club Oeste", "p": "POR", "v": 14}, {"id": 5, "n": "Defensa A", "club": "Club Norte", "p": "DEF", "v": 5}, {"id": 6, "n": "Defensa B", "club": "Club Azul", "p": "DEF", "v": 7}, {"id": 7, "n": "Defensa C", "club": "Club Rojo", "p": "DEF", "v": 9}, {"id": 8, "n": "Defensa D", "club": "Club Verde", "p": "DEF", "v": 12}, {"id": 9, "n": "Defensa E", "club": "Club Sur", "p": "DEF", "v": 15}, {"id": 10, "n": "Defensa F", "club": "Club Este", "p": "DEF", "v": 18}, {"id": 11, "n": "Defensa G", "club": "Club Oeste", "p": "DEF", "v": 22}, {"id": 12, "n": "Defensa H", "club": "Club Central", "p": "DEF", "v": 26}, {"id": 13, "n": "Medio A", "club": "Club Norte", "p": "MED", "v": 6}, {"id": 14, "n": "Medio B", "club": "Club Azul", "p": "MED", "v": 8}, {"id": 15, "n": "Medio C", "club": "Club Rojo", "p": "MED", "v": 11}, {"id": 16, "n": "Medio D", "club": "Club Verde", "p": "MED", "v": 14}, {"id": 17, "n": "Medio E", "club": "Club Sur", "p": "MED", "v": 18}, {"id": 18, "n": "Medio F", "club": "Club Este", "p": "MED", "v": 22}, {"id": 19, "n": "Medio G", "club": "Club Oeste", "p": "MED", "v": 27}, {"id": 20, "n": "Medio H", "club": "Club Central", "p": "MED", "v": 32}, {"id": 21, "n": "Delantero A", "club": "Club Norte", "p": "DEL", "v": 7}, {"id": 22, "n": "Delantero B", "club": "Club Azul", "p": "DEL", "v": 10}, {"id": 23, "n": "Delantero C", "club": "Club Rojo", "p": "DEL", "v": 14}, {"id": 24, "n": "Delantero D", "club": "Club Verde", "p": "DEL", "v": 19}, {"id": 25, "n": "Delantero E", "club": "Club Sur", "p": "DEL", "v": 25}, {"id": 26, "n": "Delantero F", "club": "Club Oeste", "p": "DEL", "v": 32}, {"id": 27, "n": "Delantero G", "club": "Club Central", "p": "DEL", "v": 40}];
const stockSeed=[{"id": 1, "name": "CruzCoin", "sector": "Tecnología", "price": 18.4, "vol": 0.3, "div": 0, "history": [17.52, 17.47, 18.52, 18.52, 18.91, 17.38, 17.32, 17.1, 18.31, 18.71, 18.91, 18.28, 17.53, 17.73, 19.41, 17.33, 14.5, 16.48, 18.35, 19.34, 20.04, 19.79, 19.61, 18.4]}, {"id": 2, "name": "Juntas y Revuelta SL", "sector": "Industria", "price": 42.0, "vol": 0.18, "div": 0.4, "history": [27.09, 27.34, 29.0, 27.66, 28.85, 28.71, 30.26, 30.44, 30.82, 31.83, 31.74, 32.27, 32.61, 34.79, 35.76, 34.28, 35.27, 36.14, 36.74, 39.08, 41.12, 39.61, 42.06, 42.0]}, {"id": 3, "name": "JoaoTech SA", "sector": "Tecnología", "price": 31.5, "vol": 0.28, "div": 0, "history": [17.3, 18.6, 19.79, 21.71, 22.09, 23.84, 25.26, 24.86, 27.29, 27.04, 25.25, 24.88, 23.98, 23.54, 25.09, 25.29, 28.27, 28.21, 29.66, 30.16, 27.36, 28.0, 29.2, 31.5]}, {"id": 4, "name": "Mapple", "sector": "Tecnología", "price": 74.0, "vol": 0.14, "div": 0.6, "history": [60.16, 57.06, 57.85, 55.18, 57.57, 59.81, 59.5, 60.94, 62.83, 62.56, 65.14, 65.83, 63.81, 63.75, 64.82, 65.27, 66.15, 66.27, 66.81, 68.52, 68.54, 68.8, 70.67, 74.0]}, {"id": 5, "name": "DryanoPharma", "sector": "Salud", "price": 28.0, "vol": 0.22, "div": 0.4, "history": [28.09, 29.89, 32.29, 34.41, 35.21, 37.04, 37.73, 34.36, 32.59, 31.71, 29.27, 28.88, 29.37, 31.47, 30.42, 29.71, 29.76, 30.0, 28.88, 28.55, 27.7, 26.96, 28.72, 28.0]}, {"id": 6, "name": "NeoMartirials", "sector": "Materiales", "price": 39.0, "vol": 0.16, "div": 0.5, "history": [28.61, 29.97, 31.06, 32.81, 32.39, 32.14, 31.55, 31.05, 32.6, 33.33, 32.79, 32.31, 33.93, 33.12, 32.97, 33.9, 35.68, 37.6, 37.44, 36.36, 35.52, 36.42, 37.11, 39.0]}, {"id": 7, "name": "MonsTer SL", "sector": "Consumo", "price": 21.0, "vol": 0.25, "div": 0, "history": [14.75, 14.81, 15.27, 14.61, 15.8, 15.94, 15.94, 16.36, 14.76, 15.86, 16.74, 17.0, 17.53, 17.29, 16.83, 16.71, 16.98, 18.19, 18.35, 17.32, 17.39, 18.09, 20.45, 21.0]}, {"id": 8, "name": "Jules Energy", "sector": "Energía", "price": 34.5, "vol": 0.2, "div": 0.7, "history": [23.19, 22.88, 21.67, 22.46, 22.23, 22.65, 22.68, 22.67, 24.29, 24.46, 25.29, 25.73, 27.74, 27.59, 27.01, 26.51, 27.51, 26.01, 27.83, 28.91, 29.05, 31.28, 33.74, 34.5]}, {"id": 9, "name": "MaxDonals", "sector": "Consumo", "price": 58.0, "vol": 0.12, "div": 0.8, "history": [42.35, 42.97, 43.48, 46.17, 48.0, 47.81, 46.73, 46.2, 49.18, 49.54, 50.82, 50.23, 50.28, 52.65, 55.2, 54.69, 56.73, 55.47, 54.58, 56.31, 55.36, 55.39, 56.22, 58.0]}, {"id": 10, "name": "DogSanxz SL", "sector": "Servicios", "price": 17.0, "vol": 0.24, "div": 0, "history": [13.36, 12.07, 11.71, 11.53, 11.62, 12.12, 12.95, 13.79, 15.32, 15.55, 15.36, 16.27, 15.35, 15.34, 16.8, 16.96, 16.56, 16.79, 16.39, 16.61, 16.73, 16.88, 16.85, 17.0]}, {"id": 11, "name": "Puigdefont Pharma", "sector": "Salud", "price": 26.5, "vol": 0.21, "div": 0.35, "history": [16.8, 17.64, 17.04, 16.71, 17.83, 18.2, 18.45, 19.93, 21.57, 21.74, 22.51, 23.67, 24.13, 25.31, 25.57, 27.99, 28.05, 26.69, 24.58, 25.63, 27.43, 27.12, 26.31, 26.5]}, {"id": 12, "name": "Construcciones La Carral", "sector": "Construcción", "price": 18.4, "vol": 0.17, "div": 0.5, "history": [10.43, 10.71, 10.74, 10.83, 10.7, 10.93, 11.05, 11.04, 11.38, 11.56, 12.3, 12.78, 13.88, 14.03, 14.41, 14.42, 14.8, 15.47, 15.77, 16.39, 16.49, 17.31, 17.14, 18.4]}, {"id": 13, "name": "FM Capital 13", "sector": "Industria", "price": 37.099999999999994, "vol": 0.195, "div": 0, "history": [28.29, 29.04, 28.89, 31.2, 31.72, 34.1, 33.51, 34.95, 35.11, 34.96, 36.48, 35.24, 35.52, 36.72, 34.43, 34.82, 35.66, 35.7, 34.13, 36.98, 36.98, 39.7, 38.27, 37.1]}, {"id": 14, "name": "FM Capital 14", "sector": "Tecnología", "price": 38.8, "vol": 0.22, "div": 0, "history": [20.23, 20.17, 20.41, 20.39, 21.79, 23.63, 24.63, 26.16, 26.25, 26.5, 27.37, 28.65, 30.37, 30.99, 32.4, 32.4, 34.69, 37.71, 37.19, 38.35, 42.08, 41.27, 40.35, 38.8]}, {"id": 15, "name": "FM Capital 15", "sector": "Finanzas", "price": 40.5, "vol": 0.12, "div": 0, "history": [30.42, 30.97, 31.21, 31.18, 32.39, 32.54, 33.56, 34.65, 34.09, 33.99, 33.96, 35.02, 35.69, 36.97, 36.52, 38.34, 37.73, 37.78, 38.99, 37.66, 38.21, 39.5, 38.98, 40.5]}, {"id": 16, "name": "FM Capital 16", "sector": "Industria", "price": 42.2, "vol": 0.145, "div": 0.2, "history": [33.49, 33.78, 33.52, 32.99, 32.39, 33.84, 34.05, 35.8, 38.67, 38.03, 38.76, 38.61, 39.11, 39.35, 40.03, 41.1, 41.92, 41.0, 43.19, 43.38, 42.03, 41.78, 42.36, 42.2]}, {"id": 17, "name": "FM Capital 17", "sector": "Tecnología", "price": 43.9, "vol": 0.16999999999999998, "div": 0, "history": [30.64, 30.52, 30.91, 31.06, 31.86, 32.44, 31.7, 30.46, 29.28, 30.75, 29.9, 30.51, 30.79, 30.29, 31.62, 33.54, 34.44, 35.04, 37.5, 38.59, 40.78, 40.81, 43.04, 43.9]}, {"id": 18, "name": "FM Capital 18", "sector": "Finanzas", "price": 45.599999999999994, "vol": 0.195, "div": 0, "history": [31.18, 32.1, 33.17, 35.51, 36.4, 38.93, 37.64, 39.49, 39.93, 39.86, 40.73, 40.9, 41.78, 41.78, 43.57, 42.3, 40.72, 39.73, 41.68, 41.78, 42.67, 42.79, 42.96, 45.6]}, {"id": 19, "name": "FM Capital 19", "sector": "Industria", "price": 47.3, "vol": 0.22, "div": 0, "history": [33.94, 32.07, 33.35, 34.79, 33.14, 33.05, 36.55, 34.6, 33.93, 36.86, 36.45, 37.53, 39.33, 40.19, 40.73, 40.7, 40.07, 41.39, 42.24, 43.19, 44.95, 47.78, 47.37, 47.3]}, {"id": 20, "name": "FM Capital 20", "sector": "Tecnología", "price": 49.0, "vol": 0.12, "div": 0.2, "history": [36.39, 36.83, 35.5, 35.44, 36.16, 36.85, 36.53, 38.01, 38.93, 39.06, 40.69, 43.08, 43.63, 43.12, 43.12, 43.28, 44.71, 45.31, 46.14, 47.05, 46.38, 46.78, 47.7, 49.0]}, {"id": 21, "name": "FM Capital 21", "sector": "Finanzas", "price": 50.699999999999996, "vol": 0.145, "div": 0, "history": [35.08, 37.68, 40.37, 41.85, 42.16, 44.18, 44.94, 46.78, 46.66, 47.61, 49.35, 50.28, 50.16, 50.84, 49.98, 51.01, 52.28, 52.85, 53.65, 54.94, 55.08, 53.48, 51.27, 50.7]}, {"id": 22, "name": "FM Capital 22", "sector": "Industria", "price": 52.4, "vol": 0.16999999999999998, "div": 0, "history": [44.41, 47.3, 48.32, 48.33, 51.08, 49.95, 49.6, 50.43, 48.57, 49.66, 52.14, 51.71, 49.69, 47.72, 48.13, 50.25, 50.11, 51.12, 52.88, 51.93, 51.34, 53.68, 54.67, 52.4]}, {"id": 23, "name": "FM Capital 23", "sector": "Tecnología", "price": 54.1, "vol": 0.195, "div": 0, "history": [43.47, 44.06, 42.75, 41.29, 43.85, 47.31, 49.83, 50.79, 53.04, 50.89, 51.5, 54.07, 53.41, 54.84, 57.27, 56.1, 54.85, 56.47, 54.76, 53.09, 55.18, 53.85, 53.88, 54.1]}, {"id": 24, "name": "FM Capital 24", "sector": "Finanzas", "price": 55.8, "vol": 0.22, "div": 0.2, "history": [57.89, 56.14, 58.68, 58.88, 57.27, 56.97, 57.8, 59.68, 60.83, 58.45, 55.4, 53.9, 54.81, 53.74, 52.89, 48.55, 49.93, 50.29, 51.53, 53.32, 55.7, 57.07, 56.16, 55.8]}, {"id": 25, "name": "FM Capital 25", "sector": "Industria", "price": 57.5, "vol": 0.12, "div": 0, "history": [50.96, 51.63, 53.84, 54.93, 55.09, 53.75, 52.38, 51.44, 52.01, 54.17, 53.08, 54.15, 55.28, 55.9, 54.1, 54.21, 56.44, 58.22, 59.04, 59.53, 59.05, 58.0, 58.39, 57.5]}, {"id": 26, "name": "FM Capital 26", "sector": "Tecnología", "price": 59.199999999999996, "vol": 0.145, "div": 0, "history": [43.73, 45.29, 44.52, 45.46, 45.29, 45.93, 46.6, 45.4, 45.52, 44.97, 47.75, 49.73, 50.57, 53.99, 56.24, 54.8, 51.94, 51.35, 53.94, 53.44, 53.42, 54.54, 57.46, 59.2]}, {"id": 27, "name": "FM Capital 27", "sector": "Finanzas", "price": 60.9, "vol": 0.16999999999999998, "div": 0, "history": [51.25, 51.41, 51.81, 51.04, 51.93, 51.78, 49.36, 51.47, 51.04, 55.47, 57.1, 55.81, 54.92, 54.2, 51.83, 53.45, 56.71, 57.85, 58.84, 59.52, 57.8, 58.85, 58.27, 60.9]}, {"id": 28, "name": "FM Capital 28", "sector": "Industria", "price": 62.6, "vol": 0.195, "div": 0.2, "history": [57.67, 58.22, 61.72, 61.55, 64.96, 61.33, 60.65, 56.84, 57.69, 61.82, 64.36, 61.35, 63.63, 66.1, 66.98, 68.49, 68.58, 71.68, 68.86, 64.74, 62.27, 65.7, 65.63, 62.6]}, {"id": 29, "name": "FM Capital 29", "sector": "Tecnología", "price": 64.3, "vol": 0.22, "div": 0, "history": [42.66, 41.58, 43.73, 44.11, 44.65, 47.66, 46.95, 46.4, 44.08, 44.82, 50.97, 50.29, 49.72, 49.24, 52.33, 51.95, 49.91, 51.88, 53.8, 56.24, 57.18, 58.91, 62.88, 64.3]}, {"id": 30, "name": "FM Capital 30", "sector": "Finanzas", "price": 66.0, "vol": 0.12, "div": 0, "history": [60.56, 59.24, 59.71, 58.61, 59.13, 58.68, 60.96, 58.91, 58.07, 57.09, 58.64, 60.87, 64.17, 61.48, 60.89, 61.79, 62.75, 61.44, 60.0, 61.1, 63.64, 65.51, 66.9, 66.0]}];
function defaults(){
 return {
  step:"league",league:"",team:"",manager:"",
  settings:{
    wealth:400,target:200,size:14,marketCount:8,instantSalePct:90,clausePct:20,protectDays:7,
    sponsors:true,stocks:true,ipo:true,stockNewsMorning:"06:00",stockUpdateMorning:"08:00",stockNewsEvening:"17:00",stockUpdateEvening:"18:00",
    rewardPerPoint:100000,rewardRankPool:20000000,rewardRankMode:"5 últimos",rewardIdealXI:1000000,rewardMVP:3000000,maxSponsorPct:100,maxDividendPct:100,
    bidsSecret:true,blocks:true,blockCount:2,startRound:"Actual",scoring:"Configurable"
  },
  clubValue:0,cash:0,players:[],market:[],bids:{},listed:[],transactions:[],
  portfolio:{},stocks:stockSeed.map(x=>JSON.parse(JSON.stringify(x))),selectedStock:1,
  sponsorIncome:0,leagueIncome:0,dividendsPaid:0,ipoActive:false,ipoPct:0,formation:"4-3-3",lineup:{},pointsTotal:0,pointsRound:0
 }
}
let s;try{s=JSON.parse(localStorage.getItem("fm052"))||defaults()}catch(e){s=defaults()}
function save(){localStorage.setItem("fm052",JSON.stringify(s))}
function money(x){return Number(x).toLocaleString("es-ES",{minimumFractionDigits:0,maximumFractionDigits:2})+" M€"}
function euro(x){return Number(x).toLocaleString("es-ES",{maximumFractionDigits:0})+" €"}
function initials(n){return n.split(" ").map(x=>x[0]).join("").slice(0,2)}
function avatar(p){return '<div class="avatar">'+initials(p.n)+'</div>'}
function value(arr){return arr.reduce((a,p)=>a+p.v,0)}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function pickSquad(count,target){
 let best=[],bestValue=-1;
 for(let t=0;t<12000;t++){
   let out=[];
   out.push(...shuffle(pool.filter(x=>x.p==="POR")).slice(0,2));
   out.push(...shuffle(pool.filter(x=>x.p==="DEF")).slice(0,4));
   out.push(...shuffle(pool.filter(x=>x.p==="MED")).slice(0,4));
   out.push(...shuffle(pool.filter(x=>x.p==="DEL")).slice(0,2));
   let used=new Set(out.map(x=>x.id));
   out.push(...shuffle(pool.filter(x=>x.p!=="POR"&&!used.has(x.id))).slice(0,Math.max(0,count-12)));
   let v=value(out);
   if(v<=target && v>bestValue){best=out;bestValue=v;if(v===target)break}
 }
 if(!best.length){
   // Cheapest valid composition; caller can warn if target is mathematically impossible.
   let out=[];
   out.push(...pool.filter(x=>x.p==="POR").sort((a,b)=>a.v-b.v).slice(0,2));
   out.push(...pool.filter(x=>x.p==="DEF").sort((a,b)=>a.v-b.v).slice(0,4));
   out.push(...pool.filter(x=>x.p==="MED").sort((a,b)=>a.v-b.v).slice(0,4));
   out.push(...pool.filter(x=>x.p==="DEL").sort((a,b)=>a.v-b.v).slice(0,2));
   let used=new Set(out.map(x=>x.id));
   out.push(...pool.filter(x=>x.p!=="POR"&&!used.has(x.id)).sort((a,b)=>a.v-b.v).slice(0,Math.max(0,count-12)));
   return out;
 }
 return best;
}
function makeMarket(){
 let owned=new Set(s.players.map(x=>x.id));
 let available=shuffle(pool.filter(x=>!owned.has(x.id)));
 s.market=available.slice(0,s.settings.marketCount).map(p=>({...p,ask:p.v,close:"23:59"}));
}
function nav(active){
 let items=[["home","🏠 Inicio"],["team","👥 Equipo"],["lineup","🟩 Alineación"],["market","🔁 Mercado"],["table","🏆 Clasificación"],["stocks","📈 Bolsa"],["economy","💰 Economía"],["settings","⚙️ Configuración"],["news","📰 Tablón"]];
 return '<div class="nav">'+items.map(([k,l])=>'<button data-go="'+k+'" class="'+(active===k?'active':'')+'">'+l+'</button>').join("")+'</div>'
}
function bindNav(){document.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>pages[b.dataset.go]()))}
function leagueCreate(){
 T.textContent="Crear liga";
 A.innerHTML='<div class="wrap"><section class="card hero"><h2>Crea tu liga</h2><p>Configuración completa antes de crear el club.</p></section><section class="card"><div class="field"><label>Nombre de la liga</label><input id="league" placeholder="Mi Liga Futmanager"></div><div class="grid2"><div class="field"><label>Patrimonio inicial total</label><input id="wealth" type="number" value="400"></div><div class="field"><label>Valor objetivo plantilla</label><input id="target" type="number" value="200"></div></div><div class="grid3"><div class="field"><label>Jugadores iniciales</label><select id="size"><option>14</option><option>15</option><option>16</option></select></div><div class="field"><label>Jugadores en mercado/día</label><input id="marketCount" type="number" min="1" max="20" value="8"></div><div class="field"><label>Inicio puntuación</label><select id="startRound"><option>Actual</option><option>Próxima</option></select></div></div><div class="switchrow"><span><b>Patrocinadores</b><div class="muted">Activados por defecto</div></span><input id="sponsors" type="checkbox" checked></div><div class="switchrow"><span><b>Bolsa interna</b><div class="muted">Compra/venta de acciones</div></span><input id="stocks" type="checkbox" checked></div><div class="switchrow"><span><b>Salida a bolsa del club</b></span><input id="ipo" type="checkbox" checked></div><button class="primary wide" id="next">Crear liga y continuar</button></section></div>';
 document.getElementById("next").onclick=()=>{
  s.league=document.getElementById("league").value.trim()||"Mi Liga Futmanager";
  s.settings.wealth=Number(document.getElementById("wealth").value)||400;
  s.settings.target=Number(document.getElementById("target").value)||200;
  s.settings.size=Number(document.getElementById("size").value)||14;
  s.settings.marketCount=Number(document.getElementById("marketCount").value)||8;
  s.settings.startRound=document.getElementById("startRound").value;
  s.settings.sponsors=document.getElementById("sponsors").checked;
  s.settings.stocks=document.getElementById("stocks").checked;
  s.settings.ipo=document.getElementById("ipo").checked;
  s.step="team";save();teamCreate();
 }
}
function teamCreate(){
 T.textContent="Crear club";
 A.innerHTML='<div class="wrap"><section class="card"><span class="badge">'+s.league+'</span><h2>Crea tu club</h2><div class="field"><label>Nombre del club</label><input id="team"></div><div class="field"><label>Mánager</label><input id="manager"></div><button class="primary wide" id="create">Crear club y recibir plantilla</button></section></div>';
 document.getElementById("create").onclick=()=>{
  s.team=document.getElementById("team").value.trim();if(!s.team)return alert("Pon un nombre al club.");
  s.manager=document.getElementById("manager").value.trim();
  s.players=pickSquad(s.settings.size,s.settings.target);
  if(value(s.players)>s.settings.target){alert("Con esta configuración no existe una plantilla válida por debajo del máximo indicado. Sube el máximo de plantilla.");return;}
  s.cash=Number((s.settings.wealth-value(s.players)).toFixed(2)); // patrimonio exacto
  s.clubValue=s.settings.wealth;
  makeMarket();s.step="game";save();home();
 }
}
function home(){
 T.textContent=s.team;
 let total=totalWealth();
 A.innerHTML='<div class="wrap">'+nav("home")+'<section class="card"><div class="sectionTitle"><div><span class="badge">Liga activa</span><h2>'+s.team+'</h2><div class="muted">'+s.league+'</div></div></div><div class="metrics"><div class="metric"><small>Saldo</small><b>'+money(s.cash)+'</b></div><div class="metric"><small>Plantilla</small><b>'+money(value(s.players))+'</b></div><div class="metric"><small>Cartera bolsa</small><b>'+money(portfolioValue())+'</b></div><div class="metric"><small>Patrimonio</small><b>'+money(total)+'</b></div></div></section><section class="card"><h3>Accesos rápidos</h3><div class="toolbar"><button class="primary" data-go="lineup">Hacer alineación</button><button class="secondary" data-go="market">Ir al mercado</button><button class="secondary" data-go="stocks">Invertir en bolsa</button><button class="secondary" data-go="settings">Configurar liga</button></div></section><section class="card"><h3>Reglas económicas</h3><div class="summaryline"><span>Premio por punto</span><b>'+euro(s.settings.rewardPerPoint)+'</b></div><div class="summaryline"><span>Premio 1.º jornada</span><b>'+euro(s.settings.rewardRankPool)+'</b></div><div class="summaryline"><span>Máximo sponsor variable</span><b>'+euro(maxLeagueReward())+'</b></div><div class="summaryline"><span>Máximo dividendo/jornada</span><b>'+euro(maxLeagueReward())+'</b></div></section></div>';bindNav()
}
function team(){
 T.textContent="Equipo";
 A.innerHTML='<div class="wrap">'+nav("team")+'<section class="card"><div class="sectionTitle"><h3>Plantilla</h3><b>'+money(value(s.players))+'</b></div>'+s.players.map(p=>'<div class="player">'+avatar(p)+'<div><b>'+p.n+'</b><div class="club">'+p.club+'</div><div class="pos">'+p.p+'</div></div><div><div class="price">'+money(p.v)+'</div><button class="ghost sell-system" data-id="'+p.id+'">Vender '+s.settings.instantSalePct+'%</button></div></div>').join("")+'</section></div>';
 document.querySelectorAll(".sell-system").forEach(b=>b.onclick=()=>sellSystem(Number(b.dataset.id)));bindNav()
}
function sellSystem(id){
 let p=s.players.find(x=>x.id===id);if(!p)return;
 let amt=p.v*s.settings.instantSalePct/100;
 if(!confirm("Vender "+p.n+" al sistema por "+money(amt)+"?"))return;
 s.cash+=amt;s.players=s.players.filter(x=>x.id!==id);s.transactions.unshift("Venta al sistema · "+p.n+" · "+money(amt));makeMarket();save();team();
}
function market(){
 T.textContent="Mercado";
 let rows=s.market.map(p=>'<div class="marketRow"><div>'+avatar(p)+'<div><b>'+p.n+'</b><div class="club">'+p.club+' · '+p.p+'</div><div class="muted">Valor '+money(p.v)+' · Cierre '+p.close+'</div></div></div><input id="bid-'+p.id+'" type="number" step="0.1" min="'+p.v+'" value="'+p.v+'"><button class="primary bid" data-id="'+p.id+'">Pujar</button></div>').join("");
 A.innerHTML='<div class="wrap">'+nav("market")+'<section class="card"><div class="sectionTitle"><div><h3>Mercado diario</h3><div class="muted">'+s.settings.marketCount+' jugadores · pujas '+(s.settings.bidsSecret?'secretas':'visibles')+' · mínimo: valor de mercado</div></div><button class="secondary" id="refreshMarket">Renovar mercado</button></div>'+rows+'</section><section class="card"><h3>Tus pujas</h3>'+Object.entries(s.bids).map(([id,v])=>{let p=pool.find(x=>x.id==id);return '<div class="summaryline"><span>'+p.n+'</span><b>'+money(v)+'</b></div>'}).join("")||'<div class="muted">Sin pujas.</div>'+'</section></div>';
 document.querySelectorAll(".bid").forEach(b=>b.onclick=()=>placeBid(Number(b.dataset.id)));document.getElementById("refreshMarket").onclick=()=>{makeMarket();save();market()};bindNav()
}
function placeBid(id){
 let inp=document.getElementById("bid-"+id),amt=Number(inp.value);let p=s.market.find(x=>x.id===id);
 if(!p||!amt||amt<=0)return alert("Introduce una puja válida.");if(amt<p.v)return alert("La puja mínima por un jugador del sistema es su valor de mercado: "+money(p.v));if(amt>s.cash)return alert("No tienes saldo suficiente.");
 s.bids[id]=amt;save();alert("Puja registrada. Es secreta hasta el cierre.");market();
}
function portfolioValue(){
 return Object.entries(s.portfolio).reduce((a,[id,pos])=>{let st=s.stocks.find(x=>x.id==id);return a+(st?st.price*pos.qty:0)},0)
}
function totalWealth(){return s.cash+value(s.players)+portfolioValue()}
function stockChange(st){let h=st.history;return h.length>1?(st.price-h[h.length-2])/h[h.length-2]*100:0}
function stocks(){
 if(!s.settings.stocks){T.textContent="Bolsa";A.innerHTML='<div class="wrap">'+nav("stocks")+'<section class="card alert">La bolsa está desactivada en la configuración de la liga.</section></div>';bindNav();return}
 T.textContent="Bolsa";
 let list=s.stocks.map(st=>{let ch=stockChange(st);return '<div class="stockrow" data-stock="'+st.id+'"><div><b>'+st.name+'</b><div class="club">'+st.sector+'</div></div><b>'+st.price.toFixed(2)+' €</b><span class="'+(ch>=0?'gain':'loss')+'">'+(ch>=0?'+':'')+ch.toFixed(2)+'%</span><span class="hideM">Div. '+st.div.toFixed(2)+'%</span></div>'}).join("");
 A.innerHTML='<div class="wrap">'+nav("stocks")+'<section class="card"><div class="metrics"><div class="metric"><small>Saldo</small><b>'+money(s.cash)+'</b></div><div class="metric"><small>Cartera</small><b>'+money(portfolioValue())+'</b></div><div class="metric"><small>Noticias</small><b>06:00 / 17:00</b></div><div class="metric"><small>Precios</small><b>08:00 / 18:00</b></div></div></section><section class="card"><div class="sectionTitle"><h3>Mercado de acciones</h3><span class="badge">'+s.stocks.length+' empresas</span></div>'+list+'</section><section id="stockDetail"></section></div>';
 document.querySelectorAll("[data-stock]").forEach(r=>r.onclick=()=>{s.selectedStock=Number(r.dataset.stock);save();renderStockDetail()});bindNav();renderStockDetail()
}
function renderStockDetail(){
 let box=document.getElementById("stockDetail");if(!box)return;let st=s.stocks.find(x=>x.id===s.selectedStock)||s.stocks[0];let pos=s.portfolio[st.id]||{qty:0,avg:0};
 let vals=st.history, min=Math.min(...vals),max=Math.max(...vals),w=700,h=180,pad=18;
 let pts=vals.map((v,i)=>{let x=pad+i*(w-2*pad)/(vals.length-1),y=h-pad-(v-min)/(max-min||1)*(h-2*pad);return [x,y]})
 let poly=pts.map(p=>p.join(",")).join(" ");
 let svg='<div class="chart"><svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none"><line class="chartGrid" x1="0" y1="'+(h/2)+'" x2="'+w+'" y2="'+(h/2)+'"></line><polyline class="chartLine" points="'+poly+'"></polyline></svg></div>';
 box.innerHTML='<section class="card"><div class="sectionTitle"><div><h3>'+st.name+'</h3><div class="muted">'+st.sector+' · histórico hipotético 24 meses</div></div><b>'+st.price.toFixed(2)+' €</b></div>'+svg+'<div class="metrics"><div class="metric"><small>Mín. histórico</small><b>'+min.toFixed(2)+' €</b></div><div class="metric"><small>Máx. histórico</small><b>'+max.toFixed(2)+' €</b></div><div class="metric"><small>Dividendos</small><b>'+st.div.toFixed(2)+'%</b></div><div class="metric"><small>Tu posición</small><b>'+pos.qty+' acc.</b></div></div><div class="buybox"><div class="field"><label>Nº acciones</label><input id="stockQty" type="number" min="1" value="1"></div><button class="primary" id="buyStock">Comprar</button><button class="secondary" id="sellStock">Vender</button></div></section>';
 document.getElementById("buyStock").onclick=()=>tradeStock(st.id,1);document.getElementById("sellStock").onclick=()=>tradeStock(st.id,-1)
}
function tradeStock(id,dir){
 let st=s.stocks.find(x=>x.id===id),qty=Math.floor(Number(document.getElementById("stockQty").value));if(!qty||qty<1)return alert("Cantidad inválida.");
 let cost=qty*st.price/10; // price expressed in game scale
 let pos=s.portfolio[id]||{qty:0,avg:0};
 if(dir>0){if(cost>s.cash)return alert("No tienes saldo suficiente.");let total=pos.qty*pos.avg+qty*st.price;pos.qty+=qty;pos.avg=total/pos.qty;s.cash-=cost;s.portfolio[id]=pos;s.transactions.unshift("Compra bolsa · "+st.name+" · "+qty+" acc.");}
 else{if(pos.qty<qty)return alert("No tienes tantas acciones.");pos.qty-=qty;s.cash+=cost;if(pos.qty===0)delete s.portfolio[id];else s.portfolio[id]=pos;s.transactions.unshift("Venta bolsa · "+st.name+" · "+qty+" acc.");}
 save();stocks();
}

const formations={
 "4-3-3":[["DEL","DEL","DEL"],["MED","MED","MED"],["DEF","DEF","DEF","DEF"],["POR"]],
 "4-4-2":[["DEL","DEL"],["MED","MED","MED","MED"],["DEF","DEF","DEF","DEF"],["POR"]],
 "4-2-3-1":[["DEL"],["MED","MED","MED"],["MED","MED"],["DEF","DEF","DEF","DEF"],["POR"]],
 "4-1-4-1":[["DEL"],["MED","MED","MED","MED"],["MED"],["DEF","DEF","DEF","DEF"],["POR"]],
 "3-5-2":[["DEL","DEL"],["MED","MED","MED","MED","MED"],["DEF","DEF","DEF"],["POR"]],
 "3-4-3":[["DEL","DEL","DEL"],["MED","MED","MED","MED"],["DEF","DEF","DEF"],["POR"]],
 "5-3-2":[["DEL","DEL"],["MED","MED","MED"],["DEF","DEF","DEF","DEF","DEF"],["POR"]],
 "5-4-1":[["DEL"],["MED","MED","MED","MED"],["DEF","DEF","DEF","DEF","DEF"],["POR"]]
};
let selectedSlot=null;
function lineup(){
 T.textContent="Alineación";
 let f=formations[s.formation]||formations["4-3-3"];
 let idx=0;
 let pitch=f.map(row=>'<div class="pitchRow">'+row.map(pos=>{let key="s"+(idx++),pid=s.lineup[key],pl=s.players.find(x=>x.id===pid);return '<button class="slot '+(pl?'filled':'')+'" data-slot="'+key+'" data-pos="'+pos+'"><b>'+pos+'</b><br>'+(pl?pl.n:'Vacío')+'</button>'}).join("")+'</div>').join("");
 let flist=Object.keys(formations).map(x=>'<button data-form="'+x+'" class="'+(x===s.formation?'active':'')+'">'+x+'</button>').join("");
 let plist=["POR","DEF","MED","DEL"].map(pos=>'<div><h4>'+pos+'</h4>'+s.players.filter(p=>p.p===pos).map(p=>'<div class="playerPick" data-player="'+p.id+'"><b>'+p.n+'</b><div class="club">'+p.club+' · '+money(p.v)+'</div></div>').join("")+'</div>').join("");
 let count=Object.keys(s.lineup).filter(k=>s.lineup[k]).length;
 A.innerHTML='<div class="wrap">'+nav("lineup")+'<section class="card"><div class="sectionTitle"><div><h3>Alineación</h3><div class="muted">Empieza vacía. Selecciona una casilla y después un jugador compatible.</div></div><span class="badge">'+count+'/11 titulares</span></div><div class="lineupLayout"><aside class="formations">'+flist+'</aside><div class="pitch">'+pitch+'</div><aside class="card"><h3>Jugadores</h3>'+plist+'</aside></div><div class="toolbar" style="margin-top:10px"><button class="secondary" id="clearLineup">Vaciar</button><button class="primary" id="saveLineup">Guardar alineación</button></div></section></div>';
 document.querySelectorAll("[data-form]").forEach(b=>b.onclick=()=>{s.formation=b.dataset.form;s.lineup={};save();lineup()});
 document.querySelectorAll("[data-slot]").forEach(b=>b.onclick=()=>{selectedSlot={key:b.dataset.slot,pos:b.dataset.pos};document.querySelectorAll(".slot").forEach(x=>x.classList.remove("selected"));b.classList.add("selected")});
 document.querySelectorAll("[data-player]").forEach(b=>b.onclick=()=>assignPlayer(Number(b.dataset.player)));
 document.getElementById("clearLineup").onclick=()=>{s.lineup={};save();lineup()};
 document.getElementById("saveLineup").onclick=()=>{let n=Object.keys(s.lineup).filter(k=>s.lineup[k]).length;if(n!==11)return alert("Debes tener exactamente 11 titulares.");save();alert("Alineación guardada.")};
 bindNav();
}
function assignPlayer(id){
 if(!selectedSlot)return alert("Primero selecciona una posición del campo.");
 let p=s.players.find(x=>x.id===id);if(!p)return;
 if(p.p!==selectedSlot.pos)return alert("Ese jugador es "+p.p+" y esta casilla requiere "+selectedSlot.pos+".");
 Object.keys(s.lineup).forEach(k=>{if(s.lineup[k]===id)delete s.lineup[k]});
 s.lineup[selectedSlot.key]=id;save();selectedSlot=null;lineup();
}
function table(){
 T.textContent="Clasificación";
 // No inventamos rivales: el prototipo local solo conoce los clubes creados realmente en este dispositivo.
 let prize=s.settings.rewardRankPool;
 A.innerHTML='<div class="wrap">'+nav("table")+'<section class="card"><div class="sectionTitle"><div><h3>Clasificación · '+s.league+'</h3><div class="muted">Jornada '+s.settings.startRound+' · solo equipos reales de la liga</div></div></div><div class="classRow"><b>1</b><div><b>'+s.team+'</b><div class="club">'+(s.manager||"Mánager")+'</div></div><b>'+s.pointsTotal+' pts</b><span class="hideM">'+s.pointsRound+' esta jornada</span><span class="hideM">—</span></div><div class="alert" style="margin-top:12px">En esta PWA local todavía solo existe tu club. Cuando conectemos el backend multiusuario, aquí aparecerán automáticamente los demás equipos reales de la liga, sin equipos ficticios.</div></section><section class="card"><h3>Primas de clasificación</h3><div class="summaryline"><span>Bolsa de ranking por jornada</span><b>'+euro(prize)+'</b></div><div class="summaryline"><span>Modo de reparto</span><b>'+s.settings.rewardRankMode+'</b></div></section></div>';
 bindNav();
}
function economy(){
 T.textContent="Economía";
 A.innerHTML='<div class="wrap">'+nav("economy")+'<section class="card"><h3>Patrimonio del club</h3><div class="summaryline"><span>Efectivo</span><b>'+money(s.cash)+'</b></div><div class="summaryline"><span>Valor plantilla</span><b>'+money(value(s.players))+'</b></div><div class="summaryline"><span>Valor cartera bolsa</span><b>'+money(portfolioValue())+'</b></div><div class="summaryline"><span>Ingresos liga</span><b>'+money(s.leagueIncome)+'</b></div><div class="summaryline"><span>Ingresos sponsors</span><b>'+money(s.sponsorIncome)+'</b></div><div class="summaryline"><span>Dividendos pagados</span><b>'+money(s.dividendsPaid)+'</b></div><div class="summaryline"><span><b>Patrimonio actual</b></span><b>'+money(totalWealth())+'</b></div></section><section class="card"><h3>Movimientos</h3>'+(s.transactions.slice(0,20).map(x=>'<div class="news">'+x+'</div>').join("")||'<div class="muted">Todavía no hay operaciones.</div>')+'</section></div>';bindNav()
}
function maxLeagueReward(){
 // Tope por jornada usado para sponsor/dividendo: mayor premio automático individual configurable.
 let shares=s.settings.rewardRankMode==="3 primeros"||s.settings.rewardRankMode==="3 últimos"?0.50:0.40;
 return Math.max(s.settings.rewardPerPoint*100,s.settings.rewardRankPool*shares,s.settings.rewardIdealXI*11,s.settings.rewardMVP);
}
function settings(){
 T.textContent="Configuración";
 A.innerHTML='<div class="wrap">'+nav("settings")+'<div class="settingsLayout"><aside class="card settingsMenu">'+[
 ["basic","General"],["rewards","Recompensas"],["marketCfg","Mercado"],["sponsorsCfg","Sponsors"],["stocksCfg","Bolsa / IPO"]
 ].map(([k,l])=>'<button data-settab="'+k+'" class="'+(k==="basic"?'active':'')+'">'+l+'</button>').join("")+'</aside><section id="settingsPanel"></section></div></div>';
 document.querySelectorAll("[data-settab]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-settab]").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderSettings(b.dataset.settab)});bindNav();renderSettings("basic")
}
function renderSettings(tab){
 let p=document.getElementById("settingsPanel");
 if(tab==="basic")p.innerHTML='<section class="card"><h3>Configuración general</h3><div class="grid2"><div class="field"><label>Patrimonio inicial</label><input id="cfgWealth" type="number" value="'+s.settings.wealth+'"></div><div class="field"><label>Valor objetivo plantilla</label><input id="cfgTarget" type="number" value="'+s.settings.target+'"></div></div><div class="field"><label>Sistema de puntuación</label><select id="cfgScoring"><option '+(s.settings.scoring==="Configurable"?'selected':'')+'>Configurable</option><option>Estadísticas</option><option>Mixto</option></select></div><button class="primary" id="saveBasic">Guardar</button></section>';
 if(tab==="rewards")p.innerHTML='<section class="card"><div class="sectionTitle"><div><h3>Recompensas</h3><div class="muted">Unidades en euros (€). Valores orientativos del mismo orden que un fantasy tipo Futmondo. Todos son editables.</div></div><button class="secondary" id="presetRewards">Restaurar orientativo</button></div><div class="field"><label>Prima por punto (€ / punto)</label><input id="rewardPoint" type="number" step="10000" value="'+s.settings.rewardPerPoint+'"></div><div class="grid2"><div class="field"><label>Reparto por ranking</label><select id="rankMode"><option '+(s.settings.rewardRankMode==="5 últimos"?"selected":"")+'>5 últimos</option><option '+(s.settings.rewardRankMode==="5 primeros"?"selected":"")+'>5 primeros</option><option '+(s.settings.rewardRankMode==="3 últimos"?"selected":"")+'>3 últimos</option><option '+(s.settings.rewardRankMode==="3 primeros"?"selected":"")+'>3 primeros</option></select></div><div class="field"><label>Bolsa total de ranking (€ / jornada)</label><input id="rankPool" type="number" step="100000" value="'+s.settings.rewardRankPool+'"></div><div class="field"><label>Por jugador en XI ideal (€)</label><input id="idealXI" type="number" step="100000" value="'+s.settings.rewardIdealXI+'"></div><div class="field"><label>Por tener el MVP (€)</label><input id="mvpReward" type="number" step="100000" value="'+s.settings.rewardMVP+'"></div></div><div class="ok"><b>Preset orientativo tipo Futmondo:</b> 100.000 €/punto · 20.000.000 € de ranking entre 5 equipos · 1.000.000 €/jugador en XI ideal · 3.000.000 € por MVP.</div><div id="rankPreview" class="card" style="margin-top:10px"></div><div class="alert">El límite de sponsor y dividendo se calcula desde estas primas para que nunca creen una recompensa individual superior a la economía de la liga.</div><button class="primary" id="saveRewards" style="margin-top:10px">Guardar recompensas</button></section>';
 if(tab==="marketCfg")p.innerHTML='<section class="card"><h3>Mercado</h3><div class="grid2"><div class="field"><label>Jugadores diarios</label><input id="cfgMarketCount" type="number" value="'+s.settings.marketCount+'"></div><div class="field"><label>Venta inmediata (%)</label><input id="cfgSalePct" type="number" value="'+s.settings.instantSalePct+'"></div><div class="field"><label>Cláusula sobre valor (%)</label><input id="cfgClause" type="number" value="'+s.settings.clausePct+'"></div><div class="field"><label>Protección tras fichaje (días)</label><input id="cfgProtect" type="number" value="'+s.settings.protectDays+'"></div></div><div class="switchrow"><span>Pujas secretas</span><input id="cfgSecret" type="checkbox" '+(s.settings.bidsSecret?'checked':'')+'></div><div class="switchrow"><span>Bloqueos de jugadores</span><input id="cfgBlocks" type="checkbox" '+(s.settings.blocks?'checked':'')+'></div><button class="primary" id="saveMarketCfg">Guardar</button></section>';
 if(tab==="sponsorsCfg")p.innerHTML='<section class="card"><h3>Sponsors</h3><div class="switchrow"><span>Patrocinadores activos</span><input id="cfgSponsors" type="checkbox" '+(s.settings.sponsors?'checked':'')+'></div><div class="rangeRow"><input id="cfgSponsorPct" type="range" min="0" max="100" value="'+s.settings.maxSponsorPct+'"><input id="cfgSponsorPctNum" type="number" min="0" max="100" value="'+s.settings.maxSponsorPct+'"></div><p class="muted">Máximo variable sponsor = % del límite económico de liga. Nunca puede superarlo.</p><div class="ok">Máximo actual: <b>'+euro(maxLeagueReward()*s.settings.maxSponsorPct/100)+'</b></div><button class="primary" id="saveSponsorsCfg">Guardar</button></section>';
 if(tab==="stocksCfg")p.innerHTML='<section class="card"><h3>Bolsa e IPO</h3><div class="switchrow"><span>Bolsa interna activa</span><input id="cfgStocks" type="checkbox" '+(s.settings.stocks?'checked':'')+'></div><div class="switchrow"><span>Permitir salida a bolsa del club</span><input id="cfgIPO" type="checkbox" '+(s.settings.ipo?'checked':'')+'></div><div class="grid2"><div class="field"><label>Noticias mañana</label><input id="n1" value="'+s.settings.stockNewsMorning+'"></div><div class="field"><label>Actualización mañana</label><input id="u1" value="'+s.settings.stockUpdateMorning+'"></div><div class="field"><label>Noticias tarde</label><input id="n2" value="'+s.settings.stockNewsEvening+'"></div><div class="field"><label>Actualización tarde</label><input id="u2" value="'+s.settings.stockUpdateEvening+'"></div></div><div class="rangeRow"><input id="cfgDivPct" type="range" min="0" max="100" value="'+s.settings.maxDividendPct+'"><input id="cfgDivPctNum" type="number" min="0" max="100" value="'+s.settings.maxDividendPct+'"></div><p class="muted">El dividendo total del club por jornada se limita al % del máximo económico de liga.</p><div class="ok">Máximo dividendo/jornada: <b>'+euro(maxLeagueReward()*s.settings.maxDividendPct/100)+'</b></div><button class="primary" id="saveStocksCfg">Guardar</button></section>';
 bindSettings(tab)
}
function rewardRow(pos,v){return '<div class="rewardRow"><span>'+pos+'.º puesto</span><input class="rewardVal" type="number" step="0.1" value="'+v+'"><button class="ghost removeReward">Quitar</button></div>'}
function bindSettings(tab){
 if(tab==="basic")document.getElementById("saveBasic").onclick=()=>{s.settings.wealth=Number(document.getElementById("cfgWealth").value)||s.settings.wealth;s.settings.target=Number(document.getElementById("cfgTarget").value)||s.settings.target;s.settings.scoring=document.getElementById("cfgScoring").value;save();alert("Guardado.")}
 if(tab==="rewards"){
   function previewRank(){
     let mode=document.getElementById("rankMode").value,poolv=Number(document.getElementById("rankPool").value)||0;
     let shares=(mode.startsWith("3"))?[50,30,20]:[40,30,15,10,5];
     document.getElementById("rankPreview").innerHTML="<b>Reparto "+mode+"</b>"+shares.map((x,i)=>'<div class="summaryline"><span>'+(i+1)+'º del reparto · '+x+'%</span><b>'+euro(poolv*x/100)+'</b></div>').join("");
   }
   document.getElementById("presetRewards").onclick=()=>{s.settings.rewardPerPoint=100000;s.settings.rewardRankPool=20000000;s.settings.rewardRankMode="5 últimos";s.settings.rewardIdealXI=1000000;s.settings.rewardMVP=3000000;save();renderSettings("rewards")};
   document.getElementById("rankMode").onchange=previewRank;document.getElementById("rankPool").oninput=previewRank;previewRank();
   document.getElementById("saveRewards").onclick=()=>{s.settings.rewardPerPoint=Math.max(0,Number(document.getElementById("rewardPoint").value)||0);s.settings.rewardRankPool=Math.max(0,Number(document.getElementById("rankPool").value)||0);s.settings.rewardRankMode=document.getElementById("rankMode").value;s.settings.rewardIdealXI=Math.max(0,Number(document.getElementById("idealXI").value)||0);s.settings.rewardMVP=Math.max(0,Number(document.getElementById("mvpReward").value)||0);save();renderSettings("rewards")};
 }
 if(tab==="marketCfg")document.getElementById("saveMarketCfg").onclick=()=>{s.settings.marketCount=Math.max(1,Number(document.getElementById("cfgMarketCount").value)||8);s.settings.instantSalePct=Number(document.getElementById("cfgSalePct").value)||90;s.settings.clausePct=Number(document.getElementById("cfgClause").value)||20;s.settings.protectDays=Number(document.getElementById("cfgProtect").value)||7;s.settings.bidsSecret=document.getElementById("cfgSecret").checked;s.settings.blocks=document.getElementById("cfgBlocks").checked;makeMarket();save();alert("Guardado.")}
 if(tab==="sponsorsCfg"){let r=document.getElementById("cfgSponsorPct"),n=document.getElementById("cfgSponsorPctNum");r.oninput=()=>n.value=r.value;n.oninput=()=>r.value=n.value;document.getElementById("saveSponsorsCfg").onclick=()=>{s.settings.sponsors=document.getElementById("cfgSponsors").checked;s.settings.maxSponsorPct=Math.min(100,Math.max(0,Number(n.value)||0));save();renderSettings("sponsorsCfg")}}
 if(tab==="stocksCfg"){let r=document.getElementById("cfgDivPct"),n=document.getElementById("cfgDivPctNum");r.oninput=()=>n.value=r.value;n.oninput=()=>r.value=n.value;document.getElementById("saveStocksCfg").onclick=()=>{s.settings.stocks=document.getElementById("cfgStocks").checked;s.settings.ipo=document.getElementById("cfgIPO").checked;s.settings.stockNewsMorning=document.getElementById("n1").value;s.settings.stockUpdateMorning=document.getElementById("u1").value;s.settings.stockNewsEvening=document.getElementById("n2").value;s.settings.stockUpdateEvening=document.getElementById("u2").value;s.settings.maxDividendPct=Math.min(100,Math.max(0,Number(n.value)||0));save();renderSettings("stocksCfg")}}
}
function news(){
 T.textContent="Tablón";
 A.innerHTML='<div class="wrap">'+nav("news")+'<section class="card"><h3>Noticias de liga</h3><div class="news">06:00 · JoaoTech anuncia un nuevo acuerdo tecnológico. El mercado interpreta la noticia con optimismo.</div><div class="news">17:00 · Construcciones La Carral obtiene un contrato importante en una gran ciudad.</div><div class="news">Mercado · Se han publicado nuevos jugadores para la sesión diaria.</div></section></div>';bindNav()
}
const pages={home,team,lineup,market,table,stocks,economy,settings,news};
if(s.step==="league")leagueCreate();else if(s.step==="team")teamCreate();else home();
})();
