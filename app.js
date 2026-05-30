// ===== CPS App =====
const app = document.getElementById('app');

// ---- Router ----
const routes = {
  '/':       renderHome,
  '/gpus':   () => renderGpus(),
  '/cpus':   () => renderCpus(),
  '/ram':    renderRam,
  '/storage':renderStorage,
  '/compare':renderCompare,
  '/about':  renderAbout,
};
function currentRoute(){
  const h = location.hash.replace(/^#/,'') || '/';
  return routes[h] ? h : '/';
}
function navigate(){
  const r = currentRoute();
  document.querySelectorAll('.nav a').forEach(a=>{
    a.classList.toggle('active', a.dataset.route === r);
  });
  app.innerHTML = '';
  routes[r]();
  window.scrollTo({top:0,behavior:'smooth'});
  document.querySelector('.sidebar')?.classList.remove('open');
}
window.addEventListener('hashchange', navigate);

// ---- Helpers ----
const brandClass = b => b === 'NVIDIA' ? 'nvidia' : b === 'AMD' ? 'amd' : 'intel';
const brandIcon  = b => b === 'NVIDIA' ? '▲' : b === 'AMD' ? '◆' : '◢';
const el = (html) => { const t = document.createElement('div'); t.innerHTML = html.trim(); return t.firstElementChild; };

function pageHead(eyebrow, title, sub){
  return `<div class="page-head">
    <span class="eyebrow">${eyebrow}</span>
    <h1 class="title">${title}</h1>
    ${sub ? `<p class="subtitle">${sub}</p>` : ''}
  </div>`;
}

// ---- HOME ----
function renderHome(){
  const totalGpu = GPUS.length, totalCpu = CPUS.length, totalRam = RAM.length, totalSsd = STORAGE.length;
  app.innerHTML = `
    ${pageHead('// CPS · DASHBOARD', 'Performance Operating System', 'A futuristic database for GPUs, CPUs, RAM and Storage — benchmark, compare and explore.')}

    <section class="glass hero">
      <div class="hero-grid">
        <div>
          <span class="eyebrow">// system online</span>
          <h2>POWER. <span class="neon">PRECISION.</span><br/>PERFORMANCE.</h2>
          <p>Real specs, real benchmarks. Browse 240+ hardware components across NVIDIA, AMD, and Intel — from legacy classics to next-gen Blackwell and Zen 5.</p>
          <div class="cta-row">
            <a class="btn primary" href="#/gpus">Explore GPUs</a>
            <a class="btn" href="#/compare">Run Comparison ⇋</a>
          </div>
        </div>
        <div class="glass hud">
          <div class="hud-row"><span>GPU Load</span><b>87%</b></div>
          <div class="bar"><i style="width:87%"></i></div>
          <div class="hud-row"><span>CPU Usage</span><b>62%</b></div>
          <div class="bar"><i style="width:62%"></i></div>
          <div class="hud-row"><span>RAM</span><b>24.6 / 32 GB</b></div>
          <div class="bar"><i style="width:77%"></i></div>
          <div class="hud-row"><span>NVMe Temp</span><b>48°C</b></div>
          <div class="bar"><i style="width:48%"></i></div>
        </div>
      </div>
    </section>

    <div class="stat-grid">
      <div class="stat glass"><div class="k">GPU Models</div><div class="v">${totalGpu}</div></div>
      <div class="stat glass"><div class="k">CPU Models</div><div class="v">${totalCpu}</div></div>
      <div class="stat glass"><div class="k">RAM Profiles</div><div class="v">${totalRam}</div></div>
      <div class="stat glass"><div class="k">Storage</div><div class="v">${totalSsd}</div></div>
    </div>

    <div class="tiles">
      <a class="tile glass" href="#/gpus"><div class="icon">▲</div><div class="label">GPU Database</div><div class="desc">NVIDIA · AMD · Intel Arc</div><div class="count">→ ${totalGpu} models</div></a>
      <a class="tile glass" href="#/cpus"><div class="icon">■</div><div class="label">CPU Database</div><div class="desc">Intel Core · Ryzen · Ultra</div><div class="count">→ ${totalCpu} models</div></a>
      <a class="tile glass" href="#/ram"><div class="icon">≡</div><div class="label">RAM Library</div><div class="desc">DDR · DDR5 · LPDDR5X</div><div class="count">→ ${totalRam} profiles</div></a>
      <a class="tile glass" href="#/storage"><div class="icon">◇</div><div class="label">Storage</div><div class="desc">HDD · SATA · NVMe Gen5</div><div class="count">→ ${totalSsd} drives</div></a>
      <a class="tile glass" href="#/compare"><div class="icon">⇋</div><div class="label">Compare</div><div class="desc">Head-to-head benchmark</div><div class="count">→ Open tool</div></a>
      <a class="tile glass" href="#/about"><div class="icon">✦</div><div class="label">About CPS</div><div class="desc">Mission & methodology</div><div class="count">→ Read more</div></a>
    </div>
  `;
}

// ---- GPUS ----
let gpuFilter = {brand:'NVIDIA', q:'', series:'All'};
function renderGpus(){
  app.innerHTML = pageHead('// GPU DATABASE', 'Graphics Processing Units', 'The complete NVIDIA GeForce, AMD Radeon and Intel Arc library — from legacy GTX to next-gen Blackwell and RDNA 4.');

  const tabs = el(`<div class="toolbar">
    <button class="tab nvidia ${gpuFilter.brand==='NVIDIA'?'active':''}" data-b="NVIDIA">NVIDIA GeForce</button>
    <button class="tab amd ${gpuFilter.brand==='AMD'?'active':''}" data-b="AMD">AMD Radeon</button>
    <button class="tab intel ${gpuFilter.brand==='INTEL'?'active':''}" data-b="INTEL">Intel Arc</button>
    <input class="filter-input" id="gq" placeholder="Search GPU model..." value="${gpuFilter.q}" />
  </div>`);
  app.appendChild(tabs);

  const seriesSet = ['All', ...new Set(GPUS.filter(g=>g.brand===gpuFilter.brand).map(g=>g.series))];
  const sBar = el(`<div class="toolbar">${seriesSet.map(s=>`<button class="tab ${gpuFilter.series===s?'active':''}" data-s="${s}">${s}</button>`).join('')}</div>`);
  app.appendChild(sBar);

  const grid = el(`<div class="cards" id="gpuGrid"></div>`);
  app.appendChild(grid);
  drawGpuCards();

  tabs.querySelectorAll('[data-b]').forEach(btn=>btn.onclick=()=>{gpuFilter.brand=btn.dataset.b;gpuFilter.series='All';renderGpus();});
  sBar.querySelectorAll('[data-s]').forEach(btn=>btn.onclick=()=>{gpuFilter.series=btn.dataset.s;drawGpuCards();});
  tabs.querySelector('#gq').oninput = e => { gpuFilter.q = e.target.value; drawGpuCards(); };
}
function drawGpuCards(){
  const grid = document.getElementById('gpuGrid');
  const list = GPUS.filter(g=>g.brand===gpuFilter.brand)
    .filter(g=>gpuFilter.series==='All'||g.series===gpuFilter.series)
    .filter(g=>g.name.toLowerCase().includes(gpuFilter.q.toLowerCase()));
  grid.innerHTML = list.map((g,i)=>gpuCard(g,i)).join('') || `<p style="color:var(--muted)">No results.</p>`;
}
function gpuCard(g,i){
  const c = brandClass(g.brand);
  const fps = Math.round(g.gaming*1.6);
  return `<div class="card glass ${c}" style="animation-delay:${Math.min(i*20,300)}ms">
    <div class="card-head">
      <div>
        <div class="series">${g.series} · ${g.year}</div>
        <div class="name">${g.name}</div>
        <div class="arch">${g.arch}</div>
      </div>
      <div class="icon">${brandIcon(g.brand)}</div>
    </div>
    <div class="specs">
      <div class="spec"><div class="l">VRAM</div><div class="v">${g.vram}</div></div>
      <div class="spec"><div class="l">Cores</div><div class="v">${g.cores.toLocaleString()}</div></div>
      <div class="spec"><div class="l">Boost</div><div class="v">${g.boost} MHz</div></div>
      <div class="spec"><div class="l">TFLOPS</div><div class="v">${g.tflops}</div></div>
      <div class="spec"><div class="l">RT Cores</div><div class="v">${g.rt || '—'}</div></div>
      <div class="spec"><div class="l">TDP</div><div class="v">${g.tdp} W</div></div>
    </div>
    <div class="bars">
      ${metric('Gaming 1440p', Math.min(g.gaming,100), `${fps} FPS`)}
      ${metric('AI / Compute', Math.min(g.ai,100))}
      ${metric('Productivity', Math.min(g.prod,100))}
      ${metric('Benchmark', Math.min(g.bench,100))}
    </div>
  </div>`;
}
function metric(label, val, suffix){
  return `<div class="metric">
    <div class="top"><span>${label}</span><b>${suffix||val+'/100'}</b></div>
    <div class="bar"><i style="width:${val}%"></i></div>
  </div>`;
}

// ---- CPUS ----
let cpuFilter = {brand:'INTEL', q:'', series:'All'};
function renderCpus(){
  app.innerHTML = pageHead('// CPU DATABASE', 'Central Processing Units', 'Intel Core · Ryzen · Ultra · Xeon · Threadripper — from FX to Zen 5 and Arrow Lake.');

  const tabs = el(`<div class="toolbar">
    <button class="tab intel ${cpuFilter.brand==='INTEL'?'active':''}" data-b="INTEL">Intel</button>
    <button class="tab amd ${cpuFilter.brand==='AMD'?'active':''}" data-b="AMD">AMD</button>
    <input class="filter-input" id="cq" placeholder="Search CPU model..." value="${cpuFilter.q}" />
  </div>`);
  app.appendChild(tabs);

  const seriesSet = ['All', ...new Set(CPUS.filter(c=>c.brand===cpuFilter.brand).map(c=>c.series))];
  const sBar = el(`<div class="toolbar">${seriesSet.map(s=>`<button class="tab ${cpuFilter.series===s?'active':''}" data-s="${s}">${s}</button>`).join('')}</div>`);
  app.appendChild(sBar);

  const grid = el(`<div class="cards" id="cpuGrid"></div>`);
  app.appendChild(grid);
  drawCpuCards();

  tabs.querySelectorAll('[data-b]').forEach(btn=>btn.onclick=()=>{cpuFilter.brand=btn.dataset.b;cpuFilter.series='All';renderCpus();});
  sBar.querySelectorAll('[data-s]').forEach(btn=>btn.onclick=()=>{cpuFilter.series=btn.dataset.s;drawCpuCards();});
  tabs.querySelector('#cq').oninput = e => { cpuFilter.q = e.target.value; drawCpuCards(); };
}
function drawCpuCards(){
  const grid = document.getElementById('cpuGrid');
  const list = CPUS.filter(c=>c.brand===cpuFilter.brand)
    .filter(c=>cpuFilter.series==='All'||c.series===cpuFilter.series)
    .filter(c=>c.name.toLowerCase().includes(cpuFilter.q.toLowerCase()));
  grid.innerHTML = list.map((c,i)=>cpuCard(c,i)).join('') || `<p style="color:var(--muted)">No results.</p>`;
}
function cpuCard(c,i){
  const cls = brandClass(c.brand);
  return `<div class="card glass ${cls}" style="animation-delay:${Math.min(i*20,300)}ms">
    <div class="card-head">
      <div>
        <div class="series">${c.series} · ${c.year}</div>
        <div class="name">${c.name}</div>
        <div class="arch">${c.arch}</div>
      </div>
      <div class="icon">${brandIcon(c.brand)}</div>
    </div>
    <div class="specs">
      <div class="spec"><div class="l">Cores</div><div class="v">${c.cores}</div></div>
      <div class="spec"><div class="l">Threads</div><div class="v">${c.threads}</div></div>
      <div class="spec"><div class="l">Base</div><div class="v">${c.base} GHz</div></div>
      <div class="spec"><div class="l">Boost</div><div class="v">${c.boost} GHz</div></div>
      <div class="spec"><div class="l">Cache</div><div class="v">${c.cache}</div></div>
      <div class="spec"><div class="l">TDP</div><div class="v">${c.tdp} W</div></div>
      <div class="spec"><div class="l">iGPU</div><div class="v">${c.igpu}</div></div>
      <div class="spec"><div class="l">Bench</div><div class="v">${c.bench}/100</div></div>
    </div>
    <div class="bars">
      ${metric('Gaming', Math.min(c.gaming,100))}
      ${metric('AI', Math.min(c.ai,100))}
      ${metric('Productivity', Math.min(c.prod,100))}
    </div>
  </div>`;
}

// ---- RAM ----
function renderRam(){
  app.innerHTML = pageHead('// RAM LIBRARY', 'Memory Generations', 'From DDR to next-gen DDR5 and LPDDR5X — speed, bandwidth and latency at a glance.');
  const grid = el(`<div class="cards"></div>`);
  RAM.forEach((r,i)=>{
    grid.appendChild(el(`<div class="card glass" style="animation-delay:${i*30}ms">
      <div class="card-head">
        <div>
          <div class="series">${r.gen} · ${r.year}</div>
          <div class="name">${r.speed}</div>
          <div class="arch">Latency CL${r.cas} · ${r.voltage}V</div>
        </div>
        <div class="icon" style="color:var(--cyan)">≡</div>
      </div>
      <div class="specs">
        <div class="spec"><div class="l">Speed</div><div class="v">${r.speed}</div></div>
        <div class="spec"><div class="l">Bandwidth</div><div class="v">${r.bandwidth}</div></div>
        <div class="spec"><div class="l">CAS</div><div class="v">${r.cas}</div></div>
        <div class="spec"><div class="l">Voltage</div><div class="v">${r.voltage}V</div></div>
      </div>
      <div class="bars">${metric('Gaming Impact', r.gaming)}</div>
    </div>`));
  });
  app.appendChild(grid);
}

// ---- STORAGE ----
function renderStorage(){
  app.innerHTML = pageHead('// STORAGE', 'Drives & SSDs', 'Boot times, sequential throughput and endurance across HDD, SATA SSD and NVMe Gen 3/4/5.');
  const grid = el(`<div class="cards"></div>`);
  STORAGE.forEach((s,i)=>{
    const score = Math.min(100, Math.round(s.read/140));
    grid.appendChild(el(`<div class="card glass" style="animation-delay:${i*30}ms">
      <div class="card-head">
        <div>
          <div class="series">${s.type} · ${s.year}</div>
          <div class="name">${s.name}</div>
          <div class="arch">${s.capacity}</div>
        </div>
        <div class="icon" style="color:var(--purple)">◇</div>
      </div>
      <div class="specs">
        <div class="spec"><div class="l">Read</div><div class="v">${s.read} MB/s</div></div>
        <div class="spec"><div class="l">Write</div><div class="v">${s.write} MB/s</div></div>
        <div class="spec"><div class="l">Endurance</div><div class="v">${s.endurance}</div></div>
        <div class="spec"><div class="l">Boot</div><div class="v">${s.boot}s</div></div>
      </div>
      <div class="bars">${metric('Speed Index', score)}</div>
    </div>`));
  });
  app.appendChild(grid);
}

// ---- COMPARE ----
let cmp = {type:'gpu', a:0, b:1};
function renderCompare(){
  app.innerHTML = pageHead('// COMPARE', 'Head-to-Head Benchmark', 'Pick two components and see who wins on FPS, AI workloads, productivity and efficiency.');

  const typeBar = el(`<div class="toolbar">
    <button class="tab ${cmp.type==='gpu'?'active':''}" data-t="gpu">GPU vs GPU</button>
    <button class="tab ${cmp.type==='cpu'?'active':''}" data-t="cpu">CPU vs CPU</button>
    <button class="tab ${cmp.type==='ram'?'active':''}" data-t="ram">RAM vs RAM</button>
    <button class="tab ${cmp.type==='ssd'?'active':''}" data-t="ssd">SSD vs SSD</button>
  </div>`);
  app.appendChild(typeBar);
  typeBar.querySelectorAll('[data-t]').forEach(b=>b.onclick=()=>{cmp.type=b.dataset.t;cmp.a=0;cmp.b=1;renderCompare();});

  const list = cmp.type==='gpu'?GPUS:cmp.type==='cpu'?CPUS:cmp.type==='ram'?RAM:STORAGE;
  const labelOf = item => cmp.type==='ram' ? `${item.gen} ${item.speed}` : item.name;

  const wrap = el(`<div class="compare-grid">
    <div class="compare-col glass" id="colA"></div>
    <div class="vs">VS</div>
    <div class="compare-col glass" id="colB"></div>
  </div>`);
  app.appendChild(wrap);

  ['A','B'].forEach((side,idx)=>{
    const col = wrap.querySelector('#col'+side);
    const key = side==='A'?'a':'b';
    const sel = el(`<select>${list.map((it,i)=>`<option value="${i}" ${cmp[key]===i?'selected':''}>${labelOf(it)}</option>`).join('')}</select>`);
    sel.onchange = e => { cmp[key] = +e.target.value; renderCompareDetails(); };
    col.appendChild(sel);
    col.appendChild(el(`<div id="detail${side}"></div>`));
  });

  renderCompareDetails();
}
function renderCompareDetails(){
  const list = cmp.type==='gpu'?GPUS:cmp.type==='cpu'?CPUS:cmp.type==='ram'?RAM:STORAGE;
  const A = list[cmp.a], B = list[cmp.b];
  document.getElementById('detailA').innerHTML = compareDetail(A);
  document.getElementById('detailB').innerHTML = compareDetail(B);
  // highlight winners
  const rows = document.querySelectorAll('.bench-table tr');
  rows.forEach(r=>{
    const a = r.querySelector('.cmpA'), b = r.querySelector('.cmpB');
    if(!a||!b) return;
    const va = parseFloat(a.dataset.v), vb = parseFloat(b.dataset.v);
    if(isNaN(va)||isNaN(vb)) return;
    const better = r.dataset.lowerBetter==='1' ? (va<vb?a:b) : (va>vb?a:b);
    const worse = better===a?b:a;
    better.classList.add('win'); worse.classList.add('lose');
  });
}
function compareDetail(item){
  // Build benchmark table per type
  let rows = [];
  if(cmp.type==='gpu'){
    rows = [
      ['Gaming', item.gaming, 0],['AI', item.ai, 0],['Productivity', item.prod, 0],
      ['TFLOPS', item.tflops, 0],['VRAM', item.vram, 0, true],['TDP (W)', item.tdp, 1],
      ['Year', item.year, 0, true],['Benchmark', item.bench, 0],
    ];
  } else if(cmp.type==='cpu'){
    rows = [
      ['Gaming', item.gaming, 0],['AI', item.ai, 0],['Productivity', item.prod, 0],
      ['Cores', item.cores, 0],['Threads', item.threads, 0],['Boost (GHz)', item.boost, 0],
      ['Cache', item.cache, 0, true],['TDP (W)', item.tdp, 1],['Benchmark', item.bench, 0],
    ];
  } else if(cmp.type==='ram'){
    rows = [
      ['Gen', item.gen, 0, true],['Speed', item.speed, 0, true],
      ['Bandwidth', item.bandwidth, 0, true],['CAS', item.cas, 1],
      ['Voltage', item.voltage, 1],['Gaming Impact', item.gaming, 0],
    ];
  } else {
    rows = [
      ['Type', item.type, 0, true],['Capacity', item.capacity, 0, true],
      ['Read MB/s', item.read, 0],['Write MB/s', item.write, 0],
      ['Boot (s)', item.boot, 1],['Endurance', item.endurance, 0, true],
    ];
  }
  const title = cmp.type==='ram' ? `${item.gen} ${item.speed}` : item.name;
  return `<h3 style="font-family:Orbitron;letter-spacing:.1em;color:var(--cyan);margin:14px 0 4px">${title}</h3>
  <p style="color:var(--muted);font-size:13px;margin:0 0 6px">${item.arch||item.type||item.gen||''}</p>
  <table class="bench-table">${rows.map(([l,v,lower,text])=>`
    <tr data-lower-better="${lower}">
      <td>${l}</td>
      <td class="cmp${title===item.name||cmp.type==='ram'? '' :''}${arguments[0]===item?'A':'B'}" data-v="${text?'-':v}">${v}</td>
    </tr>`).join('')}</table>`;
}
// the above used arguments; simpler: build pair-wise table in renderCompareDetails. Refactor:
function compareDetail(item){
  const rows = buildRows(item);
  const title = cmp.type==='ram' ? `${item.gen} ${item.speed}` : item.name;
  const side = item===((cmp.type==='gpu'?GPUS:cmp.type==='cpu'?CPUS:cmp.type==='ram'?RAM:STORAGE)[cmp.a]) ? 'A' : 'B';
  return `<h3 style="font-family:Orbitron;letter-spacing:.1em;color:var(--cyan);margin:14px 0 4px">${title}</h3>
  <p style="color:var(--muted);font-size:13px;margin:0 0 6px">${item.arch||item.type||item.gen||''}</p>
  <table class="bench-table">${rows.map(([l,v,lower,text])=>`
    <tr data-lower-better="${lower?1:0}">
      <td>${l}</td>
      <td class="cmp${side}" data-v="${text?'-':v}">${v}</td>
    </tr>`).join('')}</table>`;
}
function buildRows(item){
  if(cmp.type==='gpu') return [
    ['Gaming', item.gaming],['AI', item.ai],['Productivity', item.prod],
    ['TFLOPS', item.tflops],['VRAM', item.vram, false, true],
    ['TDP (W)', item.tdp, true],['Year', item.year],['Benchmark', item.bench],
  ];
  if(cmp.type==='cpu') return [
    ['Gaming', item.gaming],['AI', item.ai],['Productivity', item.prod],
    ['Cores', item.cores],['Threads', item.threads],['Boost (GHz)', item.boost],
    ['Cache', item.cache, false, true],['TDP (W)', item.tdp, true],['Benchmark', item.bench],
  ];
  if(cmp.type==='ram') return [
    ['Gen', item.gen, false, true],['Speed', item.speed, false, true],
    ['Bandwidth', item.bandwidth, false, true],['CAS', item.cas, true],
    ['Voltage', item.voltage, true],['Gaming Impact', item.gaming],
  ];
  return [
    ['Type', item.type, false, true],['Capacity', item.capacity, false, true],
    ['Read MB/s', item.read],['Write MB/s', item.write],
    ['Boot (s)', item.boot, true],['Endurance', item.endurance, false, true],
  ];
}

// ---- ABOUT ----
function renderAbout(){
  app.innerHTML = pageHead('// ABOUT CPS', 'Computer Performance System', 'A futuristic encyclopedia and benchmark hub for PC hardware enthusiasts.');
  app.appendChild(el(`<div class="about-grid">
    <div class="about-card glass"><h3>◉ Mission</h3><p style="color:var(--muted)">Make decades of PC hardware data — from GTX 480 to RTX 5090 — explorable in seconds, with a UI that feels like cockpit telemetry.</p></div>
    <div class="about-card glass"><h3>▲ Database</h3><p style="color:var(--muted)">Over 240 components spanning NVIDIA, AMD and Intel, with TFLOPS, cores, TDP, latency, bandwidth and synthetic benchmark scores.</p></div>
    <div class="about-card glass"><h3>⇋ Compare Engine</h3><p style="color:var(--muted)">Side-by-side benchmark comparator highlights the winner on every metric — gaming, AI, productivity, efficiency.</p></div>
    <div class="about-card glass"><h3>✦ Built With</h3><p style="color:var(--muted)">Pure HTML, CSS and vanilla JavaScript. Zero dependencies, fully responsive, ships in &lt; 100 KB.</p></div>
  </div>`));
}

// ---- Global search ----
document.getElementById('globalSearch').addEventListener('input', e=>{
  const q = e.target.value.toLowerCase();
  if(!q) return;
  // Route to gpus or cpus based on match
  const inGpu = GPUS.find(g=>g.name.toLowerCase().includes(q));
  const inCpu = CPUS.find(c=>c.name.toLowerCase().includes(q));
  if(inGpu){ gpuFilter.q = q; gpuFilter.brand = inGpu.brand; location.hash = '#/gpus'; }
  else if(inCpu){ cpuFilter.q = q; cpuFilter.brand = inCpu.brand; location.hash = '#/cpus'; }
});

// ---- Mobile menu ----
document.getElementById('menuBtn').onclick = () => document.querySelector('.sidebar').classList.toggle('open');

// ---- Particle background ----
(function particles(){
  const c = document.getElementById('particles');
  const ctx = c.getContext('2d');
  let W, H, parts = [];
  function resize(){ W = c.width = innerWidth; H = c.height = innerHeight; }
  function init(){ parts = Array.from({length: Math.min(90, Math.floor(W*H/18000))}, ()=>({
    x:Math.random()*W, y:Math.random()*H,
    vx:(Math.random()-.5)*0.4, vy:(Math.random()-.5)*0.4,
    r:Math.random()*1.6+0.4,
    col: Math.random()<.5? 'rgba(0,229,255,' : 'rgba(168,85,247,'
  })); }
  function loop(){
    ctx.clearRect(0,0,W,H);
    for(const p of parts){
      p.x+=p.vx; p.y+=p.vy;
      if(p.x<0||p.x>W) p.vx*=-1;
      if(p.y<0||p.y>H) p.vy*=-1;
      ctx.beginPath();
      ctx.fillStyle = p.col+'0.7)';
      ctx.shadowColor = p.col+'1)';
      ctx.shadowBlur = 8;
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fill();
    }
    // connections
    for(let i=0;i<parts.length;i++) for(let j=i+1;j<parts.length;j++){
      const a=parts[i], b=parts[j];
      const dx=a.x-b.x, dy=a.y-b.y, d=Math.sqrt(dx*dx+dy*dy);
      if(d<110){
        ctx.strokeStyle=`rgba(0,229,255,${(1-d/110)*0.18})`;
        ctx.lineWidth=0.5; ctx.shadowBlur=0;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      }
    }
    requestAnimationFrame(loop);
  }
  window.addEventListener('resize', ()=>{resize();init();});
  resize(); init(); loop();
})();

// ---- boot ----
navigate();
