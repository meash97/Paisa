'use strict';
/* ===================== ICONS (stroke SVG, 24x24) ===================== */
const ICONS={
home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
heart:'<path fill="currentColor" stroke="none" d="M12 20.5s-7.5-4.8-7.5-10.3A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.6c0 5.5-7.5 10.3-7.5 10.3z"/>',
bank:'<path d="M3 10l9-6 9 6z"/><path d="M5 10v8M9.7 10v8M14.3 10v8M19 10v8"/><path d="M3 20h18"/>',
card:'<rect x="2" y="5" width="20" height="14" rx="2.5"/><path d="M2 10h20"/><path d="M6 15h4"/>',
cash:'<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 12h.01M18 12h.01"/>',
wallet:'<path d="M4 7a2 2 0 0 1 2-2h12v4"/><path d="M4 7v11a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1H6a2 2 0 0 1-2-2z"/><circle cx="16.5" cy="14.5" r="1" fill="currentColor"/>',
piggy:'<path d="M5.5 11.5a6.5 5.5 0 0 1 13 0c0 1.4-.4 2.4-1 3.2L18 18h-2.6l-.5-1.6h-4.8L9.6 18H7l.5-3.3"/><circle cx="15" cy="10.5" r=".9" fill="currentColor"/><path d="M18.5 9.5H21v4h-2"/><path d="M3 10.5v3h2.5"/><path d="M9 7.5c1.5-1 3.5-1 5 0"/>',
shirt:'<path d="M8.5 3l3.5 2 3.5-2L21 6.5l-2.5 3.5L17 9v12H7V9L5.5 10 3 6.5z"/>',
briefcase:'<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/><path d="M3 13h18"/>',
bag:'<path d="M6 7h12l1 13H5z"/><path d="M9 7V6a3 3 0 0 1 6 0v1"/>',
scooter:'<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17h7l3-7h3"/><path d="M13 6h3.5l2.5 4"/><path d="M11 10l2 7"/>',
food:'<path d="M5 3v8a3 3 0 0 0 3 3v7"/><path d="M8 3v8"/><path d="M11 3v8"/><path d="M18.5 3c-2 0-3.5 3-3.5 6.5V13h3.5v8"/>',
phone:'<rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/>',
gift:'<rect x="3" y="8" width="18" height="4"/><path d="M5 12v8h14v-8"/><path d="M12 8v12"/><path d="M12 8c-2 0-4-1-4-3a2 2 0 0 1 4 0 2 2 0 0 1 4 0c0 2-2 3-4 3z"/>',
car:'<path d="M5 11l1.5-5h11L19 11"/><rect x="3" y="11" width="18" height="6" rx="1.5"/><circle cx="7" cy="18.5" r="1.5"/><circle cx="17" cy="18.5" r="1.5"/>',
cart:'<circle cx="9" cy="20" r="1.2" fill="currentColor"/><circle cx="18" cy="20" r="1.2" fill="currentColor"/><path d="M2 3h3l2.5 12h11L21 7H6"/>',
coffee:'<path d="M4 8h12v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M16 10h2a2 2 0 0 1 0 4h-2"/><path d="M4 21h14"/>',
bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
tag:'<path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
plane:'<path d="M2.5 14.5l8-2.5 4-8.5h2.5l-1.5 8.5 6 2V16l-6-1-1 5.5h-2.5l-2-5.5-7.5 1z"/>',
bus:'<rect x="4" y="3" width="16" height="15" rx="2.5"/><path d="M4 11h16"/><circle cx="8" cy="20" r="1.5"/><circle cx="16" cy="20" r="1.5"/><path d="M8 15h.01M16 15h.01"/>',
film:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
music:'<path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>',
book:'<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',
medical:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
pill:'<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="M12 7.8l4.2 4.2" />',
dumbbell:'<path d="M6 8v8M18 8v8M3 10v4M21 10v4M6 12h12"/>',
paw:'<circle cx="7" cy="9" r="1.6"/><circle cx="11" cy="6" r="1.6"/><circle cx="15.5" cy="6.5" r="1.6"/><circle cx="19" cy="10" r="1.6"/><path d="M13 11c3 0 5.5 3.5 5.5 6s-2 3-5.5 3-5.5-.5-5.5-3 2.5-6 5.5-6z"/>',
tree:'<path d="M12 2l6 8h-3l4 6H5l4-6H6z"/><path d="M12 16v6"/>',
fuel:'<path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16"/><path d="M3 21h13"/><path d="M6 7h7v4H6z"/><path d="M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-3-3"/>',
wrench:'<path d="M21 6.5a5 5 0 0 1-6.5 5.3L6.5 20a2.1 2.1 0 0 1-3-3l8.2-8A5 5 0 0 1 17 2.5l-2.5 2.5.5 2.5 2.5.5z"/>',
gem:'<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l3 18M15 3l-3 18"/>',
coins:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
percent:'<path d="M19 5L5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>',
repeat:'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
arrowUp:'<path d="M12 19V5M5 12l7-7 7 7"/>',
arrowDown:'<path d="M12 5v14M5 12l7 7 7-7"/>',
plus:'<path d="M12 5v14M5 12h14"/>',
check:'<path d="M5 12l5 5L20 7"/>',
checkAll:'<path d="M2 12l4 4L14 8"/><path d="M10 16l2 2L22 8"/>',
close:'<path d="M6 6l12 12M18 6L6 18"/>',
gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.8M12 18.7v2.8M2.5 12h2.8M18.7 12h2.8M5.3 5.3l2 2M16.7 16.7l2 2M5.3 18.7l2-2M16.7 7.3l2-2"/>',
filter:'<path d="M4 7h16M7 12h10M10 17h4"/>',
search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
calendar:'<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',
calRepeat:'<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/><path d="M9.5 15.5a2.5 2.5 0 0 1 4.8-1M14.5 16.5a2.5 2.5 0 0 1-4.8 1"/><path d="M14.5 13v2h-2M9.5 19v-2h2"/>',
clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
pencil:'<path d="M4 20l4.5-1L19.5 8l-3.5-3.5L5 15.5z"/><path d="M14 6.5l3.5 3.5"/>',
trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
chevL:'<path d="M15 5l-7 7 7 7"/>',
chevR:'<path d="M9 5l7 7-7 7"/>',
chevD:'<path d="M5 9l7 7 7-7"/>',
more:'<circle cx="12" cy="5" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="19" r="1.6" fill="currentColor"/>',
cloudOff:'<path d="M8 18h10a4 4 0 0 0 .6-8A6 6 0 0 0 8 7.5"/><path d="M5 10a4 4 0 0 0 2 8"/><path d="M3 3l18 18"/>',
cloud:'<path d="M7 18h11a4 4 0 0 0 .6-8A6 6 0 0 0 7 9a4.5 4.5 0 0 0 0 9z"/>',
grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
donut:'<circle cx="12" cy="12" r="8" stroke-dasharray="11 4" stroke-width="2.6"/>',
bars:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 16v-5M12 16V8M16 16v-3"/>',
clipboard:'<rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V3h6v1M8 10h8M8 14h6"/>',
transfer:'<path d="M16 3l4 4-4 4"/><path d="M20 7H9a4 4 0 0 0 0 8h7"/><path d="M8 21l-4-4 4-4"/>',
swap:'<path d="M7 16V4m0 0L3 8m4-4l4 4"/><path d="M17 8v12m0 0l4-4m-4 4l-4-4"/>',
backspace:'<path d="M9 5h11a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9l-6-7z"/><path d="M12 10l4 4M16 10l-4 4"/>',
copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
sum:'<path d="M18 5H6l6 7-6 7h12"/>',
sparkle:'<path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>',
gold:'<path d="M3 20l2-5h6l2 5z"/><path d="M11 20l2-5h6l2 5z"/><path d="M7 14l2-5h6l2 5z"/>',
candles:'<path d="M7 3v4M7 17v4M17 3v3M17 15v6"/><rect x="5" y="7" width="4" height="10"/><rect x="15" y="6" width="4" height="9"/>',
note:'<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 9h10M7 13h6"/>',
bagMoney:'<path d="M9 3h6l-2 3h-2z"/><path d="M11 6h2c4 2 6 5 6 9a7 7 0 0 1-14 0c0-4 2-7 6-9z"/>',
handMoney:'<rect x="2" y="5" width="14" height="9" rx="1.5"/><circle cx="9" cy="9.5" r="2"/><path d="M16 10h2.5a2.5 2.5 0 0 1 2.5 2.5V17l-3 4H9l-3-3"/>',
ticket:'<path d="M4 7h16v3a2 2 0 0 0 0 4v3H4v-3a2 2 0 0 0 0-4z"/><path d="M12 9v1M12 12v1M12 15v1"/>',
party:'<path d="M5 21l3-10 7 7z"/><path d="M12 4l1 2M17 3l-1 3M20 8l-3 1M19 13l-2-1"/>',
baby:'<circle cx="12" cy="8" r="4"/><path d="M6 21v-3a6 6 0 0 1 12 0v3"/>',
school:'<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 9v6"/>',
tv:'<rect x="3" y="5" width="18" height="13" rx="2"/><path d="M8 21h8"/>',
wifi:'<path d="M2 9a15 15 0 0 1 20 0"/><path d="M5.5 12.5a10 10 0 0 1 13 0"/><path d="M9 16a5 5 0 0 1 6 0"/><circle cx="12" cy="19" r="1" fill="currentColor"/>',
drop:'<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
umbrella:'<path d="M2 12a10 10 0 0 1 20 0z"/><path d="M12 12v7a2 2 0 0 0 4 0"/>',
building:'<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3"/>',
key:'<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l2 2M14 9l2 2"/>',
scissors:'<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 7.5L20 19M8.5 16.5L20 5"/>',
camera:'<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13.5" r="3.5"/>',
game:'<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="16" cy="11.5" r="1" fill="currentColor"/><circle cx="18.5" cy="13.5" r="1" fill="currentColor"/>',
cake:'<path d="M4 20h16v-7H4z"/><path d="M4 16c2 2 4-2 6 0s4-2 6 0 4 0 4 0"/><path d="M12 13V9M12 6v1"/><circle cx="12" cy="5" r="1" fill="currentColor"/>',
eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
eyeOff:'<path d="M3 3l18 18"/><path d="M10.6 10.6a3 3 0 0 0 4.2 4.2"/><path d="M9.9 5.2A10.4 10.4 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2"/><path d="M6.6 6.6C3.8 8.6 2 12 2 12s3.5 7 10 7c1.4 0 2.7-.3 3.8-.7"/>',
people:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14a5 5 0 0 1 6 5"/>',
};
const PICK_ICONS=['home','heart','bank','card','cash','wallet','piggy','bagMoney','handMoney','coins','gem','gold','candles','shirt','bag','cart','briefcase','note','food','coffee','cake','phone','wifi','tv','bolt','drop','fuel','car','scooter','bus','plane','gift','ticket','party','people','baby','school','book','medical','pill','dumbbell','paw','tree','building','key','wrench','scissors','camera','game','film','music','percent','tag','star','target','chart','sparkle','repeat','umbrella'];
const COLORS=['#7cc41e','#34c77b','#19c37d','#22b8e6','#3b82f6','#4d87f5','#5b5bd6','#8b4ff5','#c93fd1','#e8365d','#f05a1a','#ff7a1a','#f5bd1f','#8e8f94','#a0522d','#0ea5a4'];
function ic(n,cls){return `<svg class="ico ${cls||''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]||ICONS.tag}</svg>`;}
function tile(icon,color,cls,badge){return `<div class="tile ${cls||''}" style="background:${color}">${ic(icon)}${badge||''}</div>`;}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
const uid=()=>Math.random().toString(36).slice(2,9)+Date.now().toString(36).slice(-4);

/* ===================== DATES ===================== */
const pad=n=>String(n).padStart(2,'0');
const toISO=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const fromISO=s=>{const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d);};
const today=()=>toISO(new Date());
const nowTime=()=>{const d=new Date();return pad(d.getHours())+':'+pad(d.getMinutes());};
const addDays=(s,n)=>{const d=fromISO(s);d.setDate(d.getDate()+n);return toISO(d);};
const diffDays=(a,b)=>Math.round((fromISO(b)-fromISO(a))/86400000);
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const MON3=MONTHS.map(m=>m.slice(0,3));
const DAYS=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const DAY3=DAYS.map(d=>d.slice(0,3));
const dim=(y,m)=>new Date(y,m+1,0).getDate();
const clampDate=(y,m,d)=>{while(m<0){m+=12;y--;}while(m>11){m-=12;y++;}return `${y}-${pad(m+1)}-${pad(Math.min(d,dim(y,m)))}`;};
function monthOf(off){const d=new Date();d.setDate(1);d.setMonth(d.getMonth()+off);return {y:d.getFullYear(),m:d.getMonth()};}
function monthRange(off){const {y,m}=monthOf(off);return {start:`${y}-${pad(m+1)}-01`,end:`${y}-${pad(m+1)}-${pad(dim(y,m))}`,y,m,label:MONTHS[m]+' '+y};}
function weekStartOf(s){const d=fromISO(s);const wd=(d.getDay()+7-(S.settings.weekStart||1))%7;return addDays(s,-wd);}
function fmtDate(s){const d=fromISO(s);return `${d.getDate()} ${MON3[d.getMonth()]} ${d.getFullYear()}`;}
function fmtDateShort(s){const d=fromISO(s);return `${MON3[d.getMonth()]} ${pad(d.getDate())}`;}
function fmtTime(t){if(!t)return '';let [h,m]=t.split(':').map(Number);const ap=h>=12?'pm':'am';h=h%12||12;return `${h}:${pad(m)} ${ap}`;}
function periodRange(kind,off){const t=today();
 if(kind==='week'){const ws=weekStartOf(t);const start=addDays(ws,off*7),end=addDays(start,6);const a=fromISO(start),b=fromISO(end);const label=a.getMonth()===b.getMonth()?`${a.getDate()} – ${b.getDate()} ${MON3[b.getMonth()]} ${b.getFullYear()}`:`${a.getDate()} ${MON3[a.getMonth()]} – ${b.getDate()} ${MON3[b.getMonth()]} ${b.getFullYear()}`;return {start,end,label};}
 if(kind==='month'){const r=monthRange(off);return {start:r.start,end:r.end,label:r.label};}
 if(kind==='year'){const y=new Date().getFullYear()+off;return {start:`${y}-01-01`,end:`${y}-12-31`,label:String(y)};}
 let first=t;for(const x of S.transactions)if(x.date<first)first=x.date;if(diffDays(first,t)<30)first=addDays(t,-30);return {start:first,end:t,label:'All time'};
}

/* ===================== STATE ===================== */
const LS_KEY='paisa.v1';
let S=null;
const ui={tab:'home',homePeriod:'month',homeOff:0,anaOff:0,anaGran:'D',anaSeries:{income:true,expense:true,total:false},catOff:0,catType:'expense',txOff:0,txSearch:'',txFilter:{types:[],accounts:[],categories:[]},txCal:false,txDay:null,tx:null,draft:null};
function defaultSettings(){return {currency:'₹',weekStart:1,cashflowPeriod:'month',homeCatType:'expense',homeCards:{credit:true,accounts:true,categories:true,cashflow:true,budgets:true},homeOrder:['accounts','credit','categories','cashflow','budgets'],lastBackup:null,uiZoom:1,fontScale:1,theme:'dark',accent:'#4d87f5',numFmt:'intl',decimals:'auto',hideBalances:false,startTab:'home',defaultTxType:'expense',backupDays:7};}
const ACCENTS=['#4d87f5','#34c77b','#8b4ff5','#ec5f4f','#f5bd1f','#22b8e6','#e8365d','#ff7a1a'];
function applyTheme(){const st=S.settings;const r=document.documentElement;r.style.setProperty('--fs',st.fontScale||1);r.style.setProperty('--blue',st.accent||'#4d87f5');r.classList.toggle('black',st.theme==='black');const app=document.getElementById('app');if(app)app.style.zoom=st.uiZoom||1;const m=document.querySelector('meta[name=theme-color]');if(m)m.content=st.theme==='black'?'#000000':'#131417';}
function seed(){
 const A=(name,icon,color,opening,extra)=>Object.assign({id:uid(),name,icon,color,opening,type:'regular',fav:false,archived:false},extra||{});
 const accounts=[
  A('Cash','cash','#7cc41e',20304.11,{fav:true}),A('Canara Bank','bank','#ff7a1a',-37704.99),A('Kotak Bank','bank','#ff7a1a',47569.85),A('Wallet','piggy','#e8365d',500.10),
  A('Fanatic Fox','shirt','#7cc41e',-48867.83),A('Cash 2','bagMoney','#19c37d',0),A('Mobikwik','bagMoney','#8b4ff5',0),
  A('Canara CC','card','#f5bd1f',2499.97,{type:'credit',credit:{limit:125000,statementDay:16,dueDay:8}}),
  A('Axis CC','card','#f5bd1f',0,{type:'credit',credit:{limit:0,statementDay:12,dueDay:1}}),
  A('HDFC CC','card','#f5bd1f',-2000,{type:'credit',credit:{limit:0,statementDay:15,dueDay:4}}),
  A('Kotak CC','card','#f5bd1f',0,{type:'credit',credit:{limit:57000,statementDay:25,dueDay:12}}),
  A('SBI CC','transfer','#f5bd1f',11720,{type:'credit',credit:{limit:0,statementDay:1,dueDay:20}}),
  A('Mutual Fund','wallet','#3b82f6',94220),A('Extra Fund','gold','#c93fd1',20000),A('Cash 3','wallet','#f05a1a',16500),A('Groww','candles','#8e8f94',0),
  A('Office','note','#8e8f94',0),A('Misc. A/c (CC)','bank','#3b82f6',3541.59,{type:'credit',credit:{limit:0,statementDay:1,dueDay:20}}),A('AU Bank','bank','#22b8e6',21100)];
 const C=(name,type,icon,color,subs)=>({id:uid(),name,type,icon,color,subs:(subs||[]).map(([n,i])=>({id:uid(),name:n,icon:i}))});
 const categories=[
  C('Household','expense','home','#7cc41e',[['Grocery','cart'],['Recharge','phone'],['Electricity','bolt'],['Rent','building'],['Medical','medical'],['Gas','fuel']]),
  C('My','expense','heart','#5b5bd6',[['Eating out','food'],['Friends','party'],['Shopping','bag'],['Fuel','fuel'],['Travel','bus'],['Entertainment','film']]),
  C('Flat','expense','building','#19c37d',[['Maintenance','wrench'],['EMI','bank']]),
  C('Different','expense','percent','#ec5f4f',[['Fees','note'],['Interest','percent']]),
  C('Vida Scooter','expense','scooter','#f5bd1f',[['Charging','bolt'],['Service','wrench']]),
  C('Fanatic Fox','income','shirt','#f05a1a'),C('Salary','income','handMoney','#19c37d'),C('Saurabh Ji Work','income','note','#f5bd1f'),
  C('Extra Work','income','briefcase','#8b4ff5'),C('Tally Work','income','cash','#ff7a1a'),C('Cashback','income','ticket','#7cc41e')];
 const budgets=[
  {id:uid(),name:'Home expense',icon:'home',color:'#8b4ff5',amount:25000,categoryIds:[categories[0].id]},
  {id:uid(),name:'My expense',icon:'heart',color:'#3b82f6',amount:10000,categoryIds:[categories[1].id]}];
 return {version:1,settings:defaultSettings(),accounts,categories,transactions:[],budgets,recurring:[],meta:{created:today()}};
}
function load(){try{const raw=localStorage.getItem(LS_KEY);if(raw){S=JSON.parse(raw);S.settings=Object.assign(defaultSettings(),S.settings||{});S.settings.homeCards=Object.assign(defaultSettings().homeCards,S.settings.homeCards||{});const dO=defaultSettings().homeOrder;S.settings.homeOrder=(S.settings.homeOrder||[]).filter(k=>dO.includes(k)).concat(dO.filter(k=>!(S.settings.homeOrder||[]).includes(k)));S.recurring=S.recurring||[];S.budgets=S.budgets||[];S.meta=S.meta||{};return;}}catch(e){console.warn(e);}S=seed();S.meta.updated=0;persist();}
function persist(){try{localStorage.setItem(LS_KEY,JSON.stringify(S));}catch(e){toast('Could not save: '+e.message);}}
function save(){S.meta=S.meta||{};S.meta.updated=Date.now();persist();cloudPush();}
/* ---- optional cloud sync (only when hosted as a claude.ai artifact) ---- */
const cloud={ref:null,status:'local',busy:false,dirty:false,t:null};
function withTimeout(p,ms){return Promise.race([p,new Promise((_,rej)=>setTimeout(()=>rej(new Error('timeout')),ms))]);}
async function cloudInit(){if(!(window.claude&&typeof claude.use==='function'))return;try{const [db,user]=await withTimeout(Promise.all([claude.use('db'),claude.use('user')]),12000);if(!db||!user)return;const id=await user.id();cloud.ref=db.collection('data/users/'+id).doc('state');const snap=await withTimeout(cloud.ref.get(),10000);const d=snap&&typeof snap.data==='function'?snap.data():snap;const remote=d&&d.json?d:null;
 if(remote&&(remote.updated||0)>(S.meta.updated||0)){const R=JSON.parse(remote.json);R.settings=Object.assign(defaultSettings(),R.settings||{});S=R;persist();cloud.status='synced';render();sheets.length&&rerenderTop();toast('Loaded your data from cloud');}
 else{cloud.status='synced';if(!remote||(S.meta.updated||0)>(remote.updated||0))cloudPush(true);}render();}catch(e){console.warn('cloud',e);cloud.status='local';}}
function cloudPush(now){if(!cloud.ref)return;clearTimeout(cloud.t);cloud.t=setTimeout(async()=>{if(cloud.busy){cloud.dirty=true;return;}cloud.busy=true;try{await cloud.ref.set({json:JSON.stringify(S),updated:S.meta.updated||Date.now()});cloud.status='synced';}catch(e){console.warn('cloud push',e);cloud.status='error';}cloud.busy=false;if(cloud.dirty){cloud.dirty=false;cloudPush();}},now?0:1500);}

/* ===================== LOOKUPS ===================== */
const acc=id=>S.accounts.find(a=>a.id===id);
const cat=id=>S.categories.find(c=>c.id===id);
const sub=(c,id)=>c&&(c.subs||[]).find(s=>s.id===id);
const liveAccounts=()=>S.accounts.filter(a=>!a.archived);
const catsOf=t=>S.categories.filter(c=>c.type===t);
function sortTx(){S.transactions.sort((a,b)=>(b.date+b.time).localeCompare(a.date+a.time));}

/* ===================== MONEY ===================== */
function num(n){return Math.round((+n||0)*100)/100;}
function fmt(n,o){o=o||{};const st=S.settings;if(st.hideBalances&&!o.force)return st.currency+'••••';let v=num(n);const a=Math.abs(v);const loc=st.numFmt==='indian'?'en-IN':'en-US';const str=(Number.isInteger(a)&&st.decimals!=='always')?a.toLocaleString(loc):a.toLocaleString(loc,{minimumFractionDigits:2,maximumFractionDigits:2});let out=st.currency+str;if(v<0&&!o.abs)out='-'+out;else if(o.sign&&v>0)out='+'+out;return out;}
function fmtK(n){const a=Math.abs(n);let s;if(a>=1e6)s=(a/1e6).toFixed(a%1e6?1:0).replace(/\.0$/,'')+'M';else if(a>=1000)s=(a/1000).toFixed(a%1000?1:0).replace(/\.0$/,'')+'k';else s=Math.round(a).toString();return (n<0?'-':'')+S.settings.currency+s;}
function cls(n){return n>0?'pos':n<0?'neg':'';}

/* ===================== ENGINE ===================== */
function txSign(t,id){if(t.type==='income')return t.accountId===id?1:0;if(t.type==='expense')return t.accountId===id?-1:0;let s=0;if(t.accountId===id)s-=1;if(t.toAccountId===id)s+=1;return s;}
function accBalance(id,upto){const a=acc(id);if(!a)return 0;let b=a.opening||0;for(const t of S.transactions){if(upto&&t.date>upto)continue;const s=txSign(t,id);if(s)b+=s*t.amount;}return num(b);}
function deltaByDate(ids){const set=new Set(ids);const m={};for(const t of S.transactions){let d=0;if(t.type==='transfer'){if(set.has(t.accountId))d-=t.amount;if(set.has(t.toAccountId))d+=t.amount;}else if(set.has(t.accountId))d+=t.type==='income'?t.amount:-t.amount;if(d)m[t.date]=(m[t.date]||0)+d;}return m;}
function series(ids,start,end){const m=deltaByDate(ids);let base=ids.reduce((s,id)=>s+(acc(id).opening||0),0);let change=0;for(const d in m){if(d<start)base+=m[d];else if(d<=end)change+=m[d];}const pts=[];let v=base;for(let d=start;d<=end;d=addDays(d,1)){v+=m[d]||0;pts.push({date:d,value:num(v)});}return {pts,base:num(base),change:num(change)};}
function flow(start,end,f){f=f||{};let income=0,expense=0;for(const t of S.transactions){if(t.type==='transfer')continue;if(t.date<start||t.date>end)continue;if(f.accIds&&!f.accIds.includes(t.accountId))continue;if(f.catIds&&!f.catIds.includes(t.categoryId))continue;if(t.type==='income')income+=t.amount;else expense+=t.amount;}return {income:num(income),expense:num(expense),net:num(income-expense)};}
function txIn(start,end){return S.transactions.filter(t=>t.date>=start&&t.date<=end);}
function budgetSpent(b,off){const r=monthRange(off||0);let s=0;for(const t of S.transactions){if(t.type!=='expense'||t.date<r.start||t.date>r.end)continue;if(b.categoryIds&&b.categoryIds.length&&!b.categoryIds.includes(t.categoryId))continue;if(b.accountIds&&b.accountIds.length&&!b.accountIds.includes(t.accountId))continue;s+=t.amount;}return num(s);}
function creditInfo(a){const c=a.credit||{};const t=today();const d=fromISO(t);const sd=Math.min(31,Math.max(1,c.statementDay||1)),dd=Math.min(31,Math.max(1,c.dueDay||1));
 let y=d.getFullYear(),m=d.getMonth();let last=clampDate(y,m,sd);if(last>t){m--;if(m<0){m=11;y--;}last=clampDate(y,m,sd);}
 const next=clampDate(y,m+1,sd);
 let due=clampDate(y,m,dd);if(due<=last)due=clampDate(y,m+1,dd);
 const balNow=accBalance(a.id),balStmt=accBalance(a.id,last);
 let paid=0,unbilled=0;for(const x of S.transactions){if(x.date<=last)continue;if(x.type==='transfer'&&x.toAccountId===a.id)paid+=x.amount;if(x.type==='income'&&x.accountId===a.id)paid+=x.amount;if(x.type==='expense'&&x.accountId===a.id)unbilled+=x.amount;if(x.type==='transfer'&&x.accountId===a.id)unbilled+=x.amount;}
 const stmtDue=num(Math.max(0,-balStmt-paid));const outstanding=num(Math.max(0,-balNow));const limit=c.limit||0;const available=limit?num(limit-outstanding):null;
 return {last,next,due,stmtDue,outstanding,limit,available,unbilled:num(unbilled),daysToDue:diffDays(t,due),daysToStmt:diffDays(t,next),overdue:stmtDue>0&&t>due,balNow,cycleStart:addDays(last,1)};
}
function postRecurring(){const t=today();let n=0;for(const r of S.recurring){if(!r.active)continue;let guard=0;while(r.nextDate&&r.nextDate<=t&&guard++<400){const x=Object.assign({},r.template,{id:uid(),date:r.nextDate,recurringId:r.id});S.transactions.push(x);n++;r.nextDate=advance(r.nextDate,r.freq);}}if(n){sortTx();save();toast(n+' scheduled transaction'+(n>1?'s':'')+' added');}}
function advance(d,freq){const x=fromISO(d);if(freq==='daily')return addDays(d,1);if(freq==='weekly')return addDays(d,7);if(freq==='monthly')return clampDate(x.getFullYear(),x.getMonth()+1,x.getDate());return clampDate(x.getFullYear()+1,x.getMonth(),x.getDate());}

/* ===================== CHARTS ===================== */
function monoPath(xs,ys){const n=xs.length;if(n<2)return '';if(n===2)return `M${xs[0]},${ys[0]}L${xs[1]},${ys[1]}`;const dx=[],m=[];for(let i=0;i<n-1;i++){dx[i]=xs[i+1]-xs[i]||1e-6;m[i]=(ys[i+1]-ys[i])/dx[i];}const t=[m[0]];for(let i=1;i<n-1;i++)t[i]=(m[i-1]*m[i]<=0)?0:(m[i-1]+m[i])/2;t[n-1]=m[n-2];for(let i=0;i<n-1;i++){if(m[i]===0){t[i]=0;t[i+1]=0;}else{const a=t[i]/m[i],b=t[i+1]/m[i],s=a*a+b*b;if(s>9){const k=3/Math.sqrt(s);t[i]=k*a*m[i];t[i+1]=k*b*m[i];}}}let d=`M${xs[0].toFixed(1)},${ys[0].toFixed(1)}`;for(let i=0;i<n-1;i++){const h=dx[i]/3;d+=`C${(xs[i]+h).toFixed(1)},${(ys[i]+h*t[i]).toFixed(1)},${(xs[i+1]-h).toFixed(1)},${(ys[i+1]-h*t[i+1]).toFixed(1)},${xs[i+1].toFixed(1)},${ys[i+1].toFixed(1)}`;}return d;}
let gid=0;
function lineChart(o){const w=o.w||380,h=o.h||190,padL=o.padL||62,padR=12,padT=12,padB=28;const all=[];o.series.forEach(s=>s.values.forEach(v=>all.push(v)));let lo=Math.min(0,...all),hi=Math.max(0,...all);if(hi===lo)hi=lo+100;const span=hi-lo;hi+=span*0.04;if(lo<0)lo-=span*0.04;const n=Math.max(...o.series.map(s=>s.values.length));const X=i=>n>1?padL+i/(n-1)*(w-padL-padR):padL;const Y=v=>padT+(hi-v)/(hi-lo)*(h-padT-padB);const id='g'+(++gid);
 let ticks=[];const steps=o.ticks||3;for(let i=0;i<=steps;i++)ticks.push(hi-(hi-lo)*i/steps);if(lo<0&&!ticks.some(t=>Math.abs(t)<span*.02))ticks.push(0);
 let svg=`<svg class="chart" viewBox="0 0 ${w} ${h}" style="max-height:${h}px"><defs>`;
 o.series.forEach((s,k)=>{svg+=`<linearGradient id="${id}f${k}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${s.color}" stop-opacity=".35"/><stop offset="1" stop-color="${s.color}" stop-opacity="0"/></linearGradient>`;});
 svg+=`<linearGradient id="${id}neg" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="#ec5f4f" stop-opacity=".35"/><stop offset="1" stop-color="#ec5f4f" stop-opacity="0"/></linearGradient><clipPath id="${id}up"><rect x="0" y="0" width="${w}" height="${Y(0)}"/></clipPath><clipPath id="${id}dn"><rect x="0" y="${Y(0)}" width="${w}" height="${h}"/></clipPath></defs>`;
 ticks.forEach(t=>{svg+=`<text x="${padL-8}" y="${Y(t)+5}" fill="#9a9ca4" font-size="14" text-anchor="end">${o.yfmt?o.yfmt(t):fmtK(t)}</text>`;});
 o.series.forEach((s,k)=>{if(!s.values.length)return;const xs=s.values.map((_,i)=>X(i)),ys=s.values.map(Y);const p=monoPath(xs,ys);if(!p){svg+=`<circle cx="${(w+padL)/2}" cy="${ys[0]}" r="5" fill="${s.color}"/>`;return;}const y0=Y(0);const area=p+`L${xs[xs.length-1].toFixed(1)},${y0}L${xs[0].toFixed(1)},${y0}Z`;
  if(s.neg){svg+=`<path d="${area}" fill="url(#${id}f${k})" clip-path="url(#${id}up)"/><path d="${area}" fill="url(#${id}neg)" clip-path="url(#${id}dn)"/><path d="${p}" fill="none" stroke="${s.color}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${id}up)"/><path d="${p}" fill="none" stroke="#ec5f4f" stroke-width="3" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#${id}dn)"/>`;}
  else{if(s.fill)svg+=`<path d="${area}" fill="url(#${id}f${k})"/>`;svg+=`<path d="${p}" fill="none" stroke="${s.color}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;}
  if(s.values.length===1)svg+=`<circle cx="${xs[0]}" cy="${ys[0]}" r="5" fill="${s.color}"/>`;});
 (o.labels||[]).forEach(l=>{svg+=`<text x="${X(l.i)}" y="${h-6}" fill="#c8c9cf" font-size="14" text-anchor="${l.anchor||'middle'}">${l.text}</text>`;});
 return svg+'</svg>';}
function arcPath(cx,cy,r,a0,a1){const rad=a=>(a-90)*Math.PI/180;const x0=cx+r*Math.cos(rad(a0)),y0=cy+r*Math.sin(rad(a0)),x1=cx+r*Math.cos(rad(a1)),y1=cy+r*Math.sin(rad(a1));return `M${x0.toFixed(2)},${y0.toFixed(2)}A${r},${r},0,${a1-a0>180?1:0},1,${x1.toFixed(2)},${y1.toFixed(2)}`;}
function donut(o){const size=o.size||300,thick=o.thick||18,extra=o.labels?150:0,r=size/2-thick/2-(o.labels?40:2),cx=(size+extra)/2,cy=size/2;const total=o.slices.reduce((s,x)=>s+x.value,0);let svg=`<svg viewBox="0 0 ${size+extra} ${size}" style="width:100%;max-width:${size+extra}px;display:block;margin:0 auto">`;
 if(total<=0){for(let i=0;i<4;i++)svg+=`<path d="${arcPath(cx,cy,r,i*90+3,i*90+87)}" fill="none" stroke="#2a2b30" stroke-width="${thick}" stroke-linecap="butt"/>`;}
 else{let a=0;const gap=o.slices.filter(s=>s.value>0).length>1?3:0;o.slices.forEach(s=>{if(s.value<=0)return;const ang=s.value/total*360;const a0=a+gap/2,a1=a+ang-gap/2;if(a1>a0)svg+=`<path d="${arcPath(cx,cy,r,a0,Math.min(a1,a0+359.9))}" fill="none" stroke="${s.color}" stroke-width="${thick}" stroke-linecap="butt"/>`;
  if(o.labels&&ang>=14){const mid=(a+ang/2-90)*Math.PI/180;const x1=cx+(r+thick/2+4)*Math.cos(mid),y1=cy+(r+thick/2+4)*Math.sin(mid),x2=cx+(r+thick/2+16)*Math.cos(mid),y2=cy+(r+thick/2+16)*Math.sin(mid);const rightSide=Math.cos(mid)>=0;const x3=x2+(rightSide?14:-14);let lab=s.label||'';if(lab.length>13)lab=lab.slice(0,11)+'…';svg+=`<path d="M${x1},${y1}L${x2},${y2}L${x3},${y2}" fill="none" stroke="${s.color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="${x3+(rightSide?6:-6)}" y="${y2+5}" fill="#ececef" font-size="17" text-anchor="${rightSide?'start':'end'}">${esc(lab)}</text>`;}
  a+=ang;});}
 svg+='</svg>';return `<div style="position:relative">${svg}<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;pointer-events:none;text-align:center">${o.center||''}</div></div>`;}
function ring(pct,color,icon){const r=25,c=2*Math.PI*r;const p=Math.min(1,Math.max(0,pct));return `<div class="ring"><svg viewBox="0 0 56 56"><circle cx="28" cy="28" r="${r}" fill="none" stroke="#2c2d33" stroke-width="4"/><circle cx="28" cy="28" r="${r}" fill="none" stroke="${pct>1?'#ec5f4f':color}" stroke-width="4" stroke-dasharray="${(p*c).toFixed(1)} ${c.toFixed(1)}" stroke-linecap="round" transform="rotate(-90 28 28)"/></svg>${tile(icon,color,'lg round')}<div class="p">${Math.round(pct*100)}%</div></div>`;}

/* ===================== SHEETS / UI PLUMBING ===================== */
const sheets=[];
function openSheet(key,render,opts){opts=opts||{};sheets.push({key,render,live:opts.live!==false,cls:opts.cls||''});history.pushState({sheet:key,n:sheets.length},'');drawSheets();}
function closeSheet(){if(sheets.length)history.back();}
window.addEventListener('popstate',()=>{const want=(history.state&&history.state.n)||0;while(sheets.length>want)sheets.pop();closeMenu();drawSheets();});
history.replaceState({n:0},'');
function drawSheets(){const host=document.getElementById('sheets');host.innerHTML='';sheets.forEach((s,i)=>{if(s.cls==='tx'){const sc=document.createElement('div');sc.className='txscrim';sc.onclick=closeSheet;host.appendChild(sc);}const d=document.createElement('div');d.className='sheet '+s.cls;d.id='sheet-'+i;d.innerHTML=s.render();host.appendChild(d);if(s.cls==='tx'){attachTxSwipe(d);scrollChipIntoView(d);}});document.body.style.overflow=sheets.length?'hidden':'';document.getElementById('fab').style.display=sheets.length?'none':'';}
function rerenderTop(){if(!sheets.length)return;const i=sheets.length-1;const d=document.getElementById('sheet-'+i);if(d){const sc=d.scrollTop;d.innerHTML=sheets[i].render();d.scrollTop=sc;if(sheets[i].cls==='tx')scrollChipIntoView(d);}}
function refresh(){save();render();sheets.forEach((s,i)=>{if(!s.live)return;const d=document.getElementById('sheet-'+i);if(d){const sc=d.scrollTop;d.innerHTML=s.render();d.scrollTop=sc;}});}
let toastT=null;function toast(m){let t=document.querySelector('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t);}t.textContent=m;clearTimeout(toastT);toastT=setTimeout(()=>t.remove(),2200);}
function menu(e,items){closeMenu();const ov=document.getElementById('overlay');const r=e.currentTarget.getBoundingClientRect();const m=document.createElement('div');m.className='menu';m.innerHTML=items.map((it,i)=>`<button class="${it.on?'on':''}" data-i="${i}">${it.on?ic('check'):'<span style="width:22px"></span>'}<span>${esc(it.label)}</span></button>`).join('');const sc=document.createElement('div');sc.className='scrim';sc.onclick=closeMenu;ov.appendChild(sc);ov.appendChild(m);m.querySelectorAll('button').forEach(b=>b.onclick=()=>{closeMenu();items[+b.dataset.i].act();});const mw=m.offsetWidth,mh=m.offsetHeight;let left=Math.min(r.right-mw,window.innerWidth-mw-10);if(left<10)left=10;let top=r.bottom+6;if(top+mh>window.innerHeight-10)top=Math.max(10,r.top-mh-6);m.style.left=left+'px';m.style.top=top+'px';}
function closeMenu(){document.getElementById('overlay').innerHTML='';}
function confirmDlg(msg,ok){const ov=document.getElementById('overlay');ov.innerHTML=`<div class="scrim" style="background:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;padding:24px"><div class="card" style="max-width:380px;width:100%;margin:0"><div style="font-size:18px;line-height:1.45">${esc(msg)}</div><div class="row" style="justify-content:flex-end;gap:10px;margin-top:20px"><button class="btn sm ghost" id="dlgNo">Cancel</button><button class="btn sm" id="dlgOk">OK</button></div></div></div>`;document.getElementById('dlgNo').onclick=closeMenu;document.getElementById('dlgOk').onclick=()=>{closeMenu();ok();};}

/* swipe gestures on the transaction sheet: keypad = change account, upper area = change type */
function attachTxSwipe(d){let sx=0,sy=0,t0=null,moved=false;d.addEventListener('touchstart',e=>{const t=e.touches[0];sx=t.clientX;sy=t.clientY;t0=e.target;moved=false;},{passive:true});
 d.addEventListener('touchend',e=>{const t=e.changedTouches[0];const dx=t.clientX-sx,dy=t.clientY-sy;if(Math.abs(dx)<55||Math.abs(dy)>Math.abs(dx)*0.6)return;if(!t0||t0.closest('.chips,.subchips,input,.seg'))return;const dir=dx<0?1:-1;if(t0.closest('.keypad'))A.txCycleAcc(dir);else if(t0.closest('.txbody,.hdr'))A.txCycleType(dir);},{passive:true});}
function scrollChipIntoView(d){const on=d.querySelector('.chips .chip.on');if(on&&on.scrollIntoView)try{on.scrollIntoView({inline:'center',block:'nearest'});}catch(e){}}
