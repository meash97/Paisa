/* ===================== MAIN SCREENS ===================== */
const A={};
function render(){const sc=document.getElementById('screen');const top=sc.scrollTop;sc.innerHTML=({home:renderHome,cats:renderCats,ana:renderAna,tx:renderTx})[ui.tab]();
 document.getElementById('bnav').innerHTML=[['home','home','Home'],['cats','donut','Categories'],['ana','bars','Analytics'],['tx','clipboard','Transactions']].map(([k,i,l])=>`<button class="${ui.tab===k?'on':''}" onclick="A.tab('${k}')"><span class="pill">${ic(i)}</span>${l}</button>`).join('');
 document.getElementById('fab').innerHTML=ic('plus');}
A.tab=k=>{ui.tab=k;render();window.scrollTo(0,0);};
function mnav(label,prevFn,nextFn,extra){return `<div class="mnav"><div class="m">${ic('calendar')}<span>${label}</span></div><button class="ibtn" onclick="${prevFn}">${ic('chevL')}</button><button class="ibtn" onclick="${nextFn}">${ic('chevR')}</button>${extra||''}</div>`;}
function catIcon(c,s,cl){return `<div class="tile ${cl||''}" style="background:${c.color}">${ic(c.icon)}${s?`<span class="badge" style="background:${s.color||shade(c.color)}">${ic(s.icon)}</span>`:''}</div>`;}
function subColor(c,s){return (s&&s.color)||c.color;}
function shade(hex){return '#'+hex.slice(1).match(/../g).map(h=>pad(Math.max(0,Math.round(parseInt(h,16)*.72)).toString(16))).join('');}
function accLabel(a){return `<span style="color:${a.color}">${ic(a.icon)} ${esc(a.name)}</span>`;}

/* ---------- HOME ---------- */
function renderHome(){const st=S.settings;const period=periodRange(ui.homePeriod,ui.homeOff);const ids=(st.balanceFilter||liveAccounts().map(a=>a.id)).filter(id=>acc(id)&&!acc(id).archived);const ser=series(ids,period.start,period.end);const t=today();const endIdx=ser.pts.findIndex(p=>p.date>t);const shown=endIdx===-1?ser.pts[ser.pts.length-1]:ser.pts[Math.max(0,endIdx-1)];const bal=shown?shown.value:ser.base;
 const vis=ser.pts.filter(p=>p.date<=t);const pts=vis.length?vis:ser.pts;const labels=xLabels(pts,ui.homePeriod);
 let h=`<div class="title"><span>Home</span><button class="ibtn muted" onclick="A.toggleHide()">${ic(st.hideBalances?'eyeOff':'eye')}</button><button class="ibtn muted" onclick="A.settings()" title="${cloud.status}">${ic(cloud.status==='synced'?'cloud':'cloudOff')}</button><button class="ibtn muted" onclick="A.settings()">${ic('gear')}</button></div>`;
 if(st.backupDays>0&&S.transactions.length>15&&(!st.lastBackup||diffDays(st.lastBackup,t)>st.backupDays))h+=`<div class="banner" onclick="A.settings()">${ic('cloudOff')}<span>No backup in a while — tap to back up your data.</span></div>`;
 h+=`<div class="card"><div class="chead"><h2 class="t">Total balance</h2><button class="ibtn muted" onclick="A.balanceFilter()">${ic('filter')}</button></div>
 <div class="seg">${['week','month','year','all'].map(k=>`<button class="${ui.homePeriod===k?'on':''}" onclick="A.homePeriod('${k}')">${k[0].toUpperCase()+k.slice(1)}</button>`).join('')}</div>
 <div class="row" style="margin-top:18px"><div class="grow"><div class="big">${fmt(bal)}</div><div class="sub" style="font-size:calc(17px*var(--fs));margin-top:2px"><span class="${cls(ser.change)}">${fmt(ser.change,{sign:true})}</span> ${period.label}</div></div>
 ${ui.homePeriod!=='all'?`<button class="ibtn" onclick="A.homeOff(-1)">${ic('chevL')}</button><button class="ibtn ${ui.homeOff>=0?'muted':''}" onclick="A.homeOff(1)">${ic('chevR')}</button>`:''}</div>
 <div style="margin-top:10px">${lineChart({series:[{values:pts.map(p=>p.value),color:'#4d87f5',fill:true,neg:true}],labels})}</div></div>`;
 const CARDS={
 credit:()=>{const credits=liveAccounts().filter(a=>a.type==='credit');if(!credits.length)return '';let h=`<div class="card"><div class="chead"><h2 class="t">Credit cards</h2><button class="ibtn muted" onclick="A.accounts()">${ic('chevR')}</button></div>`;
  credits.forEach(a=>{const ci=creditInfo(a);const used=ci.limit?Math.min(1,ci.outstanding/ci.limit):0;h+=`<div class="li tap" onclick="A.openAccount('${a.id}')">${tile(a.icon,a.color)}<div class="grow"><div class="nm ell">${esc(a.name)}</div><div class="sb">${ci.stmtDue>0?`Due ${fmt(ci.stmtDue)} · ${ci.overdue?'<span class="neg">overdue</span>':ci.daysToDue===0?'<span class="neg">today</span>':'in '+ci.daysToDue+' day'+(ci.daysToDue===1?'':'s')+' ('+fmtDateShort(ci.due)+')'}`:`Nothing due · statement ${fmtDateShort(ci.next)}`}</div>${ci.limit?`<div class="crow" style="padding:0"><div class="bar" style="margin-top:6px;height:6px"><i style="width:${(used*100).toFixed(1)}%;background:${used>.9?'#ec5f4f':a.color}"></i></div></div>`:''}</div><div class="right"><div style="font-size:calc(17px*var(--fs))" class="${ci.outstanding>0?'neg':''}">${ci.outstanding>0?fmt(ci.outstanding):fmt(ci.balNow)}</div>${ci.limit?`<div class="small">of ${fmtK(ci.limit)}</div>`:''}</div></div>`;});return h+'</div>';},
 accounts:()=>{let h=`<div class="card"><div class="chead"><h2 class="t">Accounts</h2><button class="ibtn muted" onclick="A.accounts()">${ic('chevR')}</button></div><div class="agrid">`;
  liveAccounts().forEach(a=>{const b=accBalance(a.id);h+=`<div class="aitem" onclick="A.openAccount('${a.id}')">${tile(a.icon,a.color,'',a.fav?`<span class="badge">${ic('heart')}</span>`:'')}<div class="grow"><div class="n ell">${esc(a.name)}</div><div class="b ell">${fmt(b)}</div></div></div>`;});return h+'</div></div>';},
 categories:()=>{const r=monthRange(0);const type=st.homeCatType;const rows=catsOf(type).map(c=>({c,v:flow(r.start,r.end,{catIds:[c.id]})[type]})).sort((a,b)=>b.v-a.v);
  return `<div class="card"><div class="chead"><div class="t"><h2>Categories</h2><div class="sub">${r.label}</div></div><button class="ibtn muted" onclick="A.homeCatMenu(event)">${ic('more')}</button></div>
  <div class="row" style="align-items:flex-start"><div style="width:44%;flex:none;cursor:pointer" onclick="A.tab('cats')">${donut({size:150,thick:14,slices:rows.map(x=>({value:x.v,color:x.c.color})),center:`<span class="${type==='income'?'pos':'neg'}" style="font-size:calc(15px*var(--fs))">${type==='income'?'Income':'Expenses'}</span>`})}</div>
  <div class="grow" style="padding-top:4px">${rows.slice(0,5).map(x=>`<div class="row" style="gap:10px;padding:4px 0;cursor:pointer" onclick="A.catDetail('${x.c.id}',0)">${tile(x.c.icon,x.c.color,'xs round')}<div class="grow ell" style="font-size:calc(15px*var(--fs))">${esc(x.c.name)}</div><div class="${type==='income'?'pos':'neg'}" style="font-size:calc(15px*var(--fs))">${fmt(x.v)}</div></div>`).join('')||'<div class="empty">No categories</div>'}</div></div></div>`;},
 cashflow:()=>{const cp=st.cashflowPeriod;const rr=cfRange(cp);const f=flow(rr.start,rr.end);return `<div class="card"><div class="chead"><div class="t"><h2>Cash flow</h2><div class="sub">${rr.label}</div></div><button class="ibtn muted" onclick="A.cfMenu(event)">${ic('more')}</button></div>${cashflowRows(f)}</div>`;},
 budgets:()=>{let h=`<div class="card"><div class="chead"><h2 class="t">Budgets</h2><button class="ibtn muted" onclick="A.budgets()">${ic('chevR')}</button></div>`;
  if(!S.budgets.length)h+=`<div class="empty">No budgets yet. <span class="link" onclick="A.editBudget()">Add one</span></div>`;
  S.budgets.forEach(b=>{const sp=budgetSpent(b,0);const left=b.amount-sp;h+=`<div class="brow" onclick="A.editBudget('${b.id}')">${ring(b.amount?sp/b.amount:0,b.color,b.icon)}<div class="grow" style="padding-bottom:10px"><div style="font-size:calc(18px*var(--fs))">${esc(b.name)}</div><div class="sub" style="font-size:calc(15px*var(--fs))">${fmt(sp)} of ${fmt(b.amount)}</div></div><div class="${left>=0?'pos':'neg'}" style="font-size:calc(18px*var(--fs));padding-bottom:10px">${fmt(left)}</div></div>`;});return h+'</div>';}};
 (st.homeOrder||[]).forEach(k=>{if(st.homeCards[k]&&CARDS[k])h+=CARDS[k]();});
 h+=`<div class="center" style="padding:10px"><span class="sub" style="font-size:calc(17px*var(--fs));cursor:pointer" onclick="A.settings()">Edit</span></div>`;
 return h;}
function cfRange(cp){const t=today();if(cp==='today')return {start:t,end:t,label:'Today'};if(cp==='week'){const r=periodRange('week',0);return {start:r.start,end:r.end,label:'This week'};}if(cp==='year'){const y=new Date().getFullYear();return {start:`${y}-01-01`,end:`${y}-12-31`,label:String(y)};}if(cp==='all')return {start:'0000-01-01',end:'9999-12-31',label:'All time'};const r=monthRange(0);return {start:r.start,end:r.end,label:r.label};}
function cashflowRows(f){return `<div class="kv"><span class="row" style="gap:12px">${tile('arrowUp','#34c77b','xs round')}Income</span><span class="pos">${fmt(f.income)}</span></div><div class="kv"><span class="row" style="gap:12px">${tile('arrowDown','#ec5f4f','xs round')}Expenses</span><span class="neg">${fmt(f.expense)}</span></div><div class="hr"></div><div class="kv" style="padding-left:40px"><span class="k">Total:</span><span class="${cls(f.net)}">${fmt(f.net,{sign:true})}</span></div>`;}
function xLabels(pts,kind){const n=pts.length;if(!n)return [];const L=[];if(kind==='week'){pts.forEach((p,i)=>L.push({i,text:DAY3[fromISO(p.date).getDay()]}));}
 else if(kind==='month'){pts.forEach((p,i)=>{const d=fromISO(p.date).getDate();if(d===1||d===10||d===20||d===30)L.push({i,text:fmtDateShort(p.date),anchor:i===0?'start':i===n-1?'end':'middle'});});}
 else if(kind==='year'){pts.forEach((p,i)=>{const d=fromISO(p.date);if(d.getDate()===1&&d.getMonth()%2===0)L.push({i,text:MON3[d.getMonth()],anchor:i===0?'start':'middle'});});}
 else{const k=Math.min(4,n);for(let j=0;j<k;j++){const i=Math.round(j*(n-1)/(k-1||1));const d=fromISO(pts[i].date);L.push({i,text:j===0?`${MON3[d.getMonth()]} ${d.getFullYear()}`:MON3[d.getMonth()],anchor:j===0?'start':j===k-1?'end':'middle'});}}
 return L;}
A.homePeriod=k=>{ui.homePeriod=k;ui.homeOff=0;render();};
A.homeOff=d=>{ui.homeOff=Math.min(0,ui.homeOff+d);render();};
A.homeCatMenu=e=>menu(e,[{label:'Income',on:S.settings.homeCatType==='income',act:()=>{S.settings.homeCatType='income';refresh();}},{label:'Expenses',on:S.settings.homeCatType==='expense',act:()=>{S.settings.homeCatType='expense';refresh();}}]);
A.cfMenu=e=>menu(e,[['today','Today'],['week','This week'],['month','This month'],['year','This year'],['all','All time']].map(([k,l])=>({label:l,on:S.settings.cashflowPeriod===k,act:()=>{S.settings.cashflowPeriod=k;refresh();}})));
A.balanceFilter=()=>openSheet('balfilter',()=>{const sel=S.settings.balanceFilter;const all=!sel;const ids=sel||[];return `<div class="hdr"><button class="ibtn" onclick="closeSheet()">${ic('close')}</button><h1 class="c">Total balance filter</h1><span style="width:42px"></span></div>
 <div class="li tap" onclick="A.bfAll()">${tile('checkAll','#5a3a3f')}<div class="grow nm">All accounts</div><span class="cb ${all?'on':''}">${all?ic('check'):''}</span></div><div class="hr"></div>
 ${liveAccounts().map(a=>{const on=all||ids.includes(a.id);return `<div class="li tap" onclick="A.bfToggle('${a.id}')">${tile(a.icon,a.color,'',a.fav?`<span class="badge">${ic('heart')}</span>`:'')}<div class="grow"><div class="nm">${esc(a.name)}</div><div class="sb">${fmt(accBalance(a.id))}</div></div><span class="cb ${on?'on':''}">${on?ic('check'):''}</span></div>`;}).join('')}
 <div class="btnrow"><button class="btn w" onclick="closeSheet()">Done</button></div>`;});
A.bfAll=()=>{S.settings.balanceFilter=null;refresh();};
A.bfToggle=id=>{let f=S.settings.balanceFilter||liveAccounts().map(a=>a.id);f=f.includes(id)?f.filter(x=>x!==id):f.concat(id);S.settings.balanceFilter=f;refresh();};

/* ---------- CATEGORIES ---------- */
function renderCats(){const r=monthRange(ui.catOff);const type=ui.catType;const rows=catsOf(type).map(c=>({c,v:flow(r.start,r.end,{catIds:[c.id]})[type]})).filter(x=>x.v>0).sort((a,b)=>b.v-a.v);const total=rows.reduce((s,x)=>s+x.v,0);const f=flow(r.start,r.end);
 let h=`<div class="title"><span>Categories</span><button class="ibtn muted" onclick="A.manageCats()">${ic('pencil')}</button></div>`;
 h+=mnav(r.label,'A.catOff(-1)','A.catOff(1)',`<button class="ibtn muted" onclick="A.catTypeMenu(event)">${ic('filter')}</button>`);
 h+=donut({size:360,thick:20,labels:true,slices:rows.map(x=>({value:x.v,color:x.c.color,label:x.c.name})),center:`<div style="font-size:calc(26px*var(--fs))" class="${type==='expense'?'neg':'pos'}">${fmt(type==='expense'?f.expense:f.income)}</div><div style="font-size:calc(21px*var(--fs))" class="${type==='expense'?'pos':'neg'}">${fmt(type==='expense'?f.income:f.expense)}</div>`});
 if(!rows.length)h+=`<div class="empty">No ${type==='expense'?'expenses':'income'} in ${r.label}</div>`;
 rows.forEach(x=>{const pc=total?x.v/total:0;h+=`<div class="crow" onclick="A.catDetail('${x.c.id}',${ui.catOff})">${tile(x.c.icon,x.c.color,'lg round')}<div class="grow"><div class="row"><div class="nm grow ell">${esc(x.c.name)}</div><div class="am ${type==='expense'?'neg':'pos'}">${fmt(x.v)}</div></div><div class="row" style="gap:12px"><div class="bar"><i style="width:${(pc*100).toFixed(1)}%;background:${x.c.color}"></i></div><div class="pc" style="width:44px;margin:0">${pc<.01?'<1':Math.round(pc*100)}%</div></div></div></div>`;});
 return h;}
A.catOff=d=>{ui.catOff+=d;render();};
A.catTypeMenu=e=>menu(e,[{label:'Income',on:ui.catType==='income',act:()=>{ui.catType='income';render();}},{label:'Expenses',on:ui.catType==='expense',act:()=>{ui.catType='expense';render();}}]);
A.catDetail=(id,off)=>openSheet('catdetail',()=>{const c=cat(id);if(!c)return '';const r=monthRange(off);const list=txIn(r.start,r.end).filter(t=>t.categoryId===id);const total=list.reduce((s,t)=>s+t.amount,0);const subs={};list.forEach(t=>{const k=t.subId||'_';subs[k]=(subs[k]||0)+t.amount;});
 return `<div class="hdr"><button class="ibtn" onclick="closeSheet()">${ic('close')}</button><h1>${esc(c.name)}</h1><button class="ibtn" onclick="A.editCat('${c.id}')">${ic('pencil')}</button></div>
 <div class="row" style="padding:6px 4px 14px">${tile(c.icon,c.color,'lg round')}<div class="grow"><div class="sub">${r.label}</div><div class="big ${c.type==='expense'?'neg':'pos'}" style="font-size:calc(28px*var(--fs))">${fmt(total)}</div></div></div>
 ${Object.keys(subs).length>1?`<div class="sec">Subcategories</div>${Object.entries(subs).sort((a,b)=>b[1]-a[1]).map(([k,v])=>{const s=sub(c,k);return `<div class="crow"><div class="tile sm round" style="background:${s?subColor(c,s):c.color}">${ic(s?s.icon:c.icon)}</div><div class="grow"><div class="row"><div class="grow" style="font-size:calc(16px*var(--fs))">${s?esc(s.name):'(no subcategory)'}</div><div style="font-size:calc(16px*var(--fs))">${fmt(v)}</div></div><div class="bar" style="height:7px"><i style="width:${total?(v/total*100).toFixed(1):0}%;background:${s?subColor(c,s):c.color}"></i></div></div></div>`;}).join('')}`:''}
 <div class="sec">Transactions</div>${txList(list)||'<div class="empty">Nothing here</div>'}`;});

/* ---------- ANALYTICS ---------- */
function anaBuckets(){const g=ui.anaGran;const r=monthRange(ui.anaOff);const B=[];
 if(g==='D'){for(let d=r.start;d<=r.end;d=addDays(d,1))B.push({start:d,end:d,label:fmtDateShort(d)});}
 else if(g==='W'){let s=r.start;while(s<=r.end){const e=addDays(weekStartOf(s),6);B.push({start:s,end:e<r.end?e:r.end,label:fmtDateShort(s)});s=addDays(e,1);}}
 else{for(let i=11;i>=0;i--){const m=monthRange(ui.anaOff-i);B.push({start:m.start,end:m.end,label:MON3[m.m]});}}
 return B.map(b=>Object.assign(b,flow(b.start,b.end)));}
function renderAna(){const r=monthRange(ui.anaOff);const B=anaBuckets();const f=flow(r.start,r.end);const prev=monthRange(ui.anaOff-1);const pf=flow(prev.start,prev.end);const t=today();const days=r.end<t?dim(r.y,r.m):Math.max(1,diffDays(r.start,t)+1);
 const ser=[];if(ui.anaSeries.income)ser.push({values:B.map(b=>b.income),color:'#34c77b'});if(ui.anaSeries.expense)ser.push({values:B.map(b=>b.expense),color:'#ec5f4f'});if(ui.anaSeries.total)ser.push({values:B.map(b=>b.net),color:'#4d87f5',neg:true});
 const n=B.length;const labels=ui.anaGran==='D'?[0,9,19,n-1].filter(i=>i<n).map(i=>({i,text:B[i].label,anchor:i===0?'start':i===n-1?'end':'middle'})):B.map((b,i)=>({i,text:b.label,anchor:i===0?'start':i===n-1?'end':'middle'})).filter((x,i)=>ui.anaGran==='W'||i%2===0||i===n-1);
 let h=`<div class="title"><span>Analytics</span></div>`+mnav(r.label,'A.anaOff(-1)','A.anaOff(1)',`<button class="ibtn muted" onclick="A.anaFilterMenu(event)">${ic('filter')}</button>`);
 h+=`<div class="row" style="gap:8px;padding:2px 0 8px"><div class="seg sm grow" style="padding:3px">${[['income','Income'],['expense','Expenses'],['total','Total']].map(([k,l])=>`<button class="${ui.anaSeries[k]?'on':''}" onclick="A.anaToggle('${k}')">${l}</button>`).join('')}</div><button class="ibtn" onclick="A.anaGran()" style="font-size:calc(16px*var(--fs));font-weight:600;gap:4px">${ic('chart')}${ui.anaGran}</button></div>`;
 h+=lineChart({series:ser,labels,h:230,padL:70});
 h+=`<div class="card" style="margin-top:12px"><div class="chead"><div class="t"><h2>Cash flow</h2><div class="sub">${r.label}</div></div></div>${cashflowRows(f)}</div>`;
 h+=`<div class="card"><div class="chead"><div class="t"><h2>Average</h2><div class="sub">${r.label}</div></div></div>
 ${[['Day',1],['Week',7],['Month',days]].map(([l,k])=>`<div class="kv"><span>${l}</span><span><span class="pos">${fmt(f.income/days*k)}</span> &nbsp; <span class="neg">${fmt(f.expense/days*k)}</span></span></div>`).join('')}</div>`;
 const pct=(a,b)=>b?Math.round((a-b)/b*100):(a?100:0);
 h+=`<div class="card"><div class="chead"><div class="t"><h2>Compare</h2><div class="sub">vs. ${prev.label}</div></div></div>
 <div class="kv"><span>Cash flow</span><span><span class="pos">${fmt(pf.income)}</span> &nbsp; <span class="neg">${fmt(pf.expense)}</span></span></div>
 <div class="kv"><span>Amount</span><span><span class="pos">${fmt(f.income-pf.income,{sign:true})}</span> &nbsp; <span class="neg">${fmt(f.expense-pf.expense,{sign:true})}</span></span></div>
 <div class="kv"><span>Percent</span><span><span class="pos">${pct(f.income,pf.income)>0?'+':''}${pct(f.income,pf.income)}%</span> &nbsp; <span class="neg">${pct(f.expense,pf.expense)>0?'+':''}${pct(f.expense,pf.expense)}%</span></span></div></div>`;
 const er=catsOf('expense').map(c=>({c,v:flow(r.start,r.end,{catIds:[c.id]}).expense})).filter(x=>x.v>0).sort((a,b)=>b.v-a.v);
 if(er.length){h+=`<div class="card"><div class="chead"><div class="t"><h2>Top expenses</h2><div class="sub">${r.label}</div></div></div>${er.slice(0,6).map(x=>`<div class="row" style="padding:7px 0;cursor:pointer" onclick="A.catDetail('${x.c.id}',${ui.anaOff})">${tile(x.c.icon,x.c.color,'sm round')}<div class="grow ell" style="font-size:calc(16px*var(--fs))">${esc(x.c.name)}</div><div class="neg" style="font-size:calc(16px*var(--fs))">${fmt(x.v)}</div><div class="small" style="width:40px;text-align:right">${f.expense?Math.round(x.v/f.expense*100):0}%</div></div>`).join('')}</div>`;}
 return h;}
A.anaOff=d=>{ui.anaOff+=d;render();};
A.anaToggle=k=>{ui.anaSeries[k]=!ui.anaSeries[k];if(!Object.values(ui.anaSeries).some(Boolean))ui.anaSeries[k]=true;render();};
A.anaGran=()=>{ui.anaGran={D:'W',W:'M',M:'D'}[ui.anaGran];render();};
A.anaFilterMenu=e=>menu(e,[{label:'Daily',on:ui.anaGran==='D',act:()=>{ui.anaGran='D';render();}},{label:'Weekly',on:ui.anaGran==='W',act:()=>{ui.anaGran='W';render();}},{label:'Monthly (12 months)',on:ui.anaGran==='M',act:()=>{ui.anaGran='M';render();}}]);

/* ---------- TRANSACTIONS ---------- */
function txRow(t){const a=acc(t.accountId),b=acc(t.toAccountId);let h='';
 if(t.type==='transfer'){h=`<div class="trow" onclick="A.editTx('${t.id}')"><div class="tile round" style="background:#2c2d33">${ic('transfer')}</div><div class="grow"><div class="t2">${a?accLabel(a):'?'}</div><div class="t2">${b?accLabel(b):'?'}</div>${t.note?`<div class="t3 ell">${esc(t.note)}</div>`:''}</div><div><div class="am">${fmt(t.amount)}</div><div class="tm">${fmtTime(t.time)}</div></div></div>`;}
 else{const c=cat(t.categoryId);const s=sub(c,t.subId);h=`<div class="trow" onclick="A.editTx('${t.id}')">${c?catIcon(c,s):tile('tag','#555')}<div class="grow"><div class="t1 ell">${c?esc(c.name):'Uncategorised'}${s?' • '+esc(s.name):''}</div><div class="t2">${a?accLabel(a):'?'}</div>${t.note?`<div class="t3 ell">${esc(t.note)}</div>`:''}</div><div><div class="am ${t.type==='income'?'pos':'neg'}">${fmt(t.amount)}</div><div class="tm">${fmtTime(t.time)}</div></div></div>`;}
 return h;}
function txList(list,accId){const groups={};list.forEach(t=>{(groups[t.date]=groups[t.date]||[]).push(t);});return Object.keys(groups).sort().reverse().map(d=>{const g=groups[d];const dt=fromISO(d);let right;
 if(accId){const bal=accBalance(accId,d);right=`<div class="right"><div class="small">Balance</div><div class="${bal<0?'neg':''}" style="font-size:calc(16px*var(--fs))">${fmt(bal)}</div></div>`;}
 else{const net=g.reduce((s,t)=>s+(t.type==='income'?t.amount:t.type==='expense'?-t.amount:0),0);right=`<div class="row ${cls(net)}" style="gap:6px;font-size:calc(15px*var(--fs))">${ic('sum')}${fmt(net,{sign:false})}</div>`;}
 return `<div class="day"><div class="dn">${dt.getDate()}</div><div class="grow"><div class="dw">${DAYS[dt.getDay()]}</div><div class="dm">${MONTHS[dt.getMonth()]} ${dt.getFullYear()}</div></div>${right}</div>${g.map(txRow).join('')}`;}).join('');}
function filteredTx(){const F=ui.txFilter;let list=S.transactions;const q=ui.txSearch.trim().toLowerCase();const r=monthRange(ui.txOff);
 if(q){list=list.filter(t=>{const c=cat(t.categoryId),s=sub(c,t.subId),a=acc(t.accountId),b=acc(t.toAccountId);return [t.note,c&&c.name,s&&s.name,a&&a.name,b&&b.name,String(t.amount)].some(x=>x&&String(x).toLowerCase().includes(q));});}
 else list=list.filter(t=>t.date>=r.start&&t.date<=r.end);
 if(F.types.length)list=list.filter(t=>F.types.includes(t.type));
 if(F.accounts.length)list=list.filter(t=>F.accounts.includes(t.accountId)||F.accounts.includes(t.toAccountId));
 if(F.categories.length)list=list.filter(t=>F.categories.includes(t.categoryId));
 if(ui.txDay)list=list.filter(t=>t.date===ui.txDay);
 return list;}
function renderTx(){const r=monthRange(ui.txOff);const list=filteredTx();const F=ui.txFilter;const active=F.types.length+F.accounts.length+F.categories.length;const oneAcc=F.accounts.length===1?F.accounts[0]:null;let inc=0,exp=0;list.forEach(t=>{if(t.type==='income')inc+=t.amount;else if(t.type==='expense')exp+=t.amount;});
 let h=`<div class="search">${ic('search')}<input id="txq" placeholder="Search" value="${esc(ui.txSearch)}" oninput="A.txSearch(this.value)"><button class="ibtn muted ${ui.txCal?'':''}" style="color:${ui.txCal?'#fff':''}" onclick="A.txCal()">${ic('grid')}</button><button class="ibtn muted" onclick="A.recurring()">${ic('calRepeat')}</button></div>`;
 if(!ui.txSearch)h+=mnav(r.label,'A.txOff(-1)','A.txOff(1)',`<button class="ibtn ${active?'':'muted'}" style="${active?'color:#4d87f5':''}" onclick="A.txFilter()">${ic('filter')}</button>`);else h+=`<div class="hint">Showing results across all dates</div>`;
 if(oneAcc){const a=acc(oneAcc);const endD=r.end<today()?r.end:today();const bal=accBalance(oneAcc,endD);h+=`<div class="tots"><span class="row" style="gap:6px">${a?accLabel(a):''}</span><span class="${bal<0?'neg':''}">Balance ${fmt(bal)}</span></div>`;}
 else h+=`<div class="tots"><span class="pos">${fmt(inc)}</span><span class="neg">${fmt(exp)}</span><span class="${cls(inc-exp)} row" style="gap:4px">${ic('sum')}${fmt(inc-exp,{sign:true})}</span></div>`;
 if(ui.txCal&&!ui.txSearch){h+=`<div class="cal">`;const ws=S.settings.weekStart||1;for(let i=0;i<7;i++)h+=`<div class="h">${DAY3[(ws+i)%7]}</div>`;const first=fromISO(r.start);const lead=(first.getDay()-ws+7)%7;for(let i=0;i<lead;i++)h+=`<div></div>`;const nd=dim(r.y,r.m);const byDay={};S.transactions.forEach(t=>{if(t.date>=r.start&&t.date<=r.end&&t.type!=='transfer')byDay[t.date]=(byDay[t.date]||0)+(t.type==='income'?t.amount:-t.amount);});
  for(let d=1;d<=nd;d++){const ds=`${r.y}-${pad(r.m+1)}-${pad(d)}`;const v=byDay[ds];h+=`<div class="d ${ui.txDay===ds?'on':''} ${ds>today()?'off':''}" onclick="A.txDay('${ds}')"><div>${d}</div>${v?`<div class="v ${cls(v)}">${fmtK(v)}</div>`:''}</div>`;}h+='</div>';}
 if(ui.txDay)h+=`<div class="hint">${fmtDate(ui.txDay)} · <span class="link" onclick="A.txDay(null)">clear</span></div>`;
 h+=txList(list,oneAcc)||`<div class="empty">No transactions${ui.txSearch?' found':' in '+r.label}.<br><br>Tap <b>+</b> to add one.</div>`;
 return h;}
A.txOff=d=>{ui.txOff+=d;ui.txDay=null;render();};
A.txSearch=v=>{ui.txSearch=v;const el=document.getElementById('txq');const pos=el.selectionStart;render();const e2=document.getElementById('txq');e2.focus();e2.setSelectionRange(pos,pos);};
A.txCal=()=>{ui.txCal=!ui.txCal;if(!ui.txCal)ui.txDay=null;render();};
A.txDay=d=>{ui.txDay=ui.txDay===d?null:d;render();};
A.txFilter=()=>{ui.fTab=ui.fTab||'accounts';openSheet('txfilter',()=>{const F=ui.txFilter;const tog=(arr,v)=>arr.includes(v)?arr.filter(x=>x!==v):arr.concat(v);
 return `<div class="hdr"><button class="ibtn" onclick="closeSheet()">${ic('close')}</button><h1>Filters</h1><button class="btn sm ghost" onclick="A.fClear()">Clear</button></div>
 <div class="seg">${[['income','Income'],['expense','Expenses'],['transfer','Transfers']].map(([k,l])=>`<button class="${F.types.includes(k)?'on':''}" onclick="A.fType('${k}')">${l}</button>`).join('')}</div>
 <div class="row" style="margin:18px 0 6px;border-bottom:1px solid var(--line)">${[['accounts','Accounts'],['categories','Categories']].map(([k,l])=>`<button style="flex:1;background:none;border:0;color:${ui.fTab===k?'#fff':'var(--muted)'};font-size:calc(17px*var(--fs));padding:12px;border-bottom:3px solid ${ui.fTab===k?'#fff':'transparent'}" onclick="A.fTab('${k}')">${l}</button>`).join('')}</div>
 ${ui.fTab==='accounts'?liveAccounts().map(a=>`<div class="li tap" onclick="A.fAcc('${a.id}')">${tile(a.icon,a.color)}<div class="grow"><div class="nm">${esc(a.name)}</div><div class="sb">${fmt(accBalance(a.id))}</div></div><span class="cb ${F.accounts.includes(a.id)?'on':''}">${F.accounts.includes(a.id)?ic('check'):''}</span></div>`).join('')
 :['expense','income'].map(tp=>`<div class="sec">${tp==='expense'?'Expense':'Income'}</div>`+catsOf(tp).map(c=>`<div class="li tap" onclick="A.fCat('${c.id}')">${tile(c.icon,c.color,'round')}<div class="grow nm">${esc(c.name)}</div><span class="cb ${F.categories.includes(c.id)?'on':''}">${F.categories.includes(c.id)?ic('check'):''}</span></div>`).join('')).join('')}
 <div class="btnrow"><button class="btn" onclick="closeSheet()">${ic('check')} Apply</button></div>`;});};
const tog=(arr,v)=>arr.includes(v)?arr.filter(x=>x!==v):arr.concat(v);
A.fType=k=>{ui.txFilter.types=tog(ui.txFilter.types,k);rerenderTop();render();};
A.fAcc=k=>{ui.txFilter.accounts=tog(ui.txFilter.accounts,k);rerenderTop();render();};
A.fCat=k=>{ui.txFilter.categories=tog(ui.txFilter.categories,k);rerenderTop();render();};
A.fTab=k=>{ui.fTab=k;rerenderTop();};
A.fClear=()=>{ui.txFilter={types:[],accounts:[],categories:[]};rerenderTop();render();};

A.toggleHide=()=>{S.settings.hideBalances=!S.settings.hideBalances;refresh();};
