// Motion design SecureFlow — génère motion.html (timeline GSAP pilotée par cues.json)
// puis rend chaque image à 30 i/s via Chromium et encode en vidéo avec ffmpeg.
//   node motion.mjs                 → rendu complet (frames → video_silent.mp4)
//   node motion.mjs --stills 1,5,9  → captures de contrôle aux secondes données
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { chromium } from "playwright";

const DIR = path.dirname(new URL(import.meta.url).pathname);
const NM = path.resolve(DIR, "../node_modules");
const IMG = path.resolve(DIR, "../brochure/img");
const C = JSON.parse(fs.readFileSync(path.join(DIR, "cues.json"), "utf8"));
const FPS = 30;

const icon = (name, size = 48, sw = 1.6) => {
  const raw = fs.readFileSync(`${NM}/lucide-static/icons/${name}.svg`, "utf8");
  const inner = raw.slice(raw.indexOf(">", raw.indexOf("<svg")) + 1, raw.lastIndexOf("</svg>"));
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
};
const img = (n) => `file://${IMG}/${n}`;
const font = (pkg, f) => `file://${NM}/@fontsource/${pkg}/files/${f}`;
const words = (t, cls = "w") => t.split(" ").map((w) => `<span class="${cls}">${w}</span>`).join(" ");

const services = [
  ["search", "Vérifier", "vos fournisseurs, à la source", "s_trans.jpg"],
  ["badge-check", "Inspecter", "sur site", "s_insp.jpg"],
  ["landmark", "Sécuriser", "vos paiements", "s_verif.jpg"],
  ["ship", "Superviser", "du port à la livraison finale", "s_logi.jpg"],
  ["radar", "Anticiper", "chaque risque, avant qu'il ne vous coûte", "s_risk.jpg"],
];
const sectors = [
  ["Agriculture", "sec_agri.jpg"], ["Mines", "sec_mine.jpg"], ["Énergie", "sec_energy.jpg"], ["Pétrole & gaz", "sec_oil.jpg"],
  ["Santé", "sec_health.jpg"], ["Aviation", "sec_avia.jpg"], ["Infrastructures", "sec_infra.jpg"],
];

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:M;font-weight:500;src:url(${font("manrope", "manrope-latin-500-normal.woff2")})}
@font-face{font-family:M;font-weight:600;src:url(${font("manrope", "manrope-latin-600-normal.woff2")})}
@font-face{font-family:M;font-weight:700;src:url(${font("manrope", "manrope-latin-700-normal.woff2")})}
@font-face{font-family:M;font-weight:800;src:url(${font("manrope", "manrope-latin-800-normal.woff2")})}
@font-face{font-family:P;font-style:italic;font-weight:500;src:url(${font("playfair-display", "playfair-display-latin-500-italic.woff2")})}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1920px;height:1080px;overflow:hidden;background:#05091A}
body{font-family:M,sans-serif;color:#fff;-webkit-font-smoothing:antialiased}
:root{--navy:#05091A;--navy2:#0A1330;--blue:#2B4FE0;--sky:#8FA6FF;--gold:#D4AA62;--red:#E5384F}
#stage{position:absolute;inset:0;overflow:hidden}
.scene{position:absolute;inset:0;opacity:0;overflow:hidden}
.bgimg{position:absolute;inset:-4%;background-size:cover;background-position:center}
.shade{position:absolute;inset:0}
.center{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.kicker{font-size:26px;font-weight:800;letter-spacing:.32em;text-transform:uppercase;color:var(--sky);display:flex;align-items:center;gap:22px}
.kicker i{width:60px;height:3px;background:var(--gold);display:block}
.w{display:inline-block}
/* grain + vignette permanents */
#grain{position:absolute;inset:0;pointer-events:none;opacity:.07;mix-blend-mode:overlay;z-index:50}
#vig{position:absolute;inset:0;pointer-events:none;z-index:49;background:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.55) 100%)}
#corner{position:absolute;top:56px;left:72px;display:flex;align-items:center;gap:16px;z-index:40;opacity:0;font-weight:800;letter-spacing:.34em;font-size:20px}
#corner img{width:44px}
/* S1 */
#s1 .line{position:absolute;left:150px;font-size:84px;font-weight:800;letter-spacing:-.02em;line-height:1.05}
#s1 .l1{bottom:430px}#s1 .l2{bottom:330px;color:var(--sky)}
#route{position:absolute;left:0;top:0;width:1920px;height:1080px}
#s1b .small{font-size:40px;font-weight:600;color:rgba(255,255,255,.75);letter-spacing:.04em;margin-bottom:26px}
#s1b .big{font-size:150px;font-weight:800;letter-spacing:-.035em;line-height:1;background:linear-gradient(180deg,#FFE7B8,#D4AA62 70%,#9C7533);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 0 40px rgba(212,170,98,.35))}
/* S2 */
#s2{background:radial-gradient(ellipse at 50% 40%,#1A0D1C 0%,#05091A 70%)}
.gridbg{position:absolute;inset:0;background-image:linear-gradient(rgba(229,56,79,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(229,56,79,.08) 1px,transparent 1px);background-size:80px 80px}
.qlist{position:absolute;left:220px;right:220px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:42px}
.q{display:flex;align-items:center;gap:44px;position:relative}
.q .qi{width:120px;height:120px;border-radius:30px;background:rgba(229,56,79,.12);border:2px solid rgba(229,56,79,.45);display:flex;align-items:center;justify-content:center;color:#FF7A8A;flex:none}
.q .qt{font-size:66px;font-weight:800;letter-spacing:-.02em;line-height:1.1}
.q .qt b{color:#FF7A8A;font-weight:800}
.q .mark{margin-left:auto;font-size:120px;font-weight:800;color:var(--red);line-height:1}
.ghost{position:absolute;inset:0;pointer-events:none}
/* S3 */
#s3 .stamps{position:absolute;left:150px;right:150px;top:150px;display:grid;grid-template-columns:1fr 1fr;gap:40px}
.stamp{border:5px solid var(--red);border-radius:22px;padding:42px 46px;display:flex;align-items:center;gap:34px;background:rgba(40,6,14,.55);color:#fff}
.stamp .si{color:var(--red);flex:none}
.stamp span{font-size:58px;font-weight:800;letter-spacing:.01em;text-transform:uppercase;line-height:1.05}
#s3 .verdict{position:absolute;left:150px;right:150px;bottom:150px;text-align:center}
#s3 .verdict p{font-size:52px;font-weight:700;color:rgba(255,255,255,.85)}
#s3 .verdict h2{font-size:84px;font-weight:800;letter-spacing:-.02em;margin-top:10px;display:inline-block;position:relative}
#s3 .verdict h2 u{position:absolute;left:0;bottom:-12px;height:8px;width:100%;background:var(--red);transform-origin:left;text-decoration:none}
#flash{position:absolute;inset:0;background:var(--red);opacity:0;z-index:45;pointer-events:none}
#wflash{position:absolute;inset:0;background:#fff;opacity:0;z-index:46;pointer-events:none}
/* S4 */
#chart{position:absolute;inset:0}
#s4 .txt{position:absolute;left:150px;top:190px;width:1250px}
#s4 .a{font-size:46px;font-weight:800;letter-spacing:.3em;text-transform:uppercase;color:#FF7A8A}
#s4 .b{font-size:78px;font-weight:800;line-height:1.1;letter-spacing:-.02em;margin-top:24px}
#s4 .c{font-size:54px;font-weight:600;color:rgba(255,255,255,.8);margin-top:46px}
#s4 .d{font-size:110px;font-weight:800;letter-spacing:-.03em;color:var(--red);margin-top:18px;text-transform:uppercase}
/* S5 */
#s5 .t1{font-size:86px;font-weight:800;letter-spacing:-.02em}
#s5 .t2{font-family:P;font-style:italic;font-size:120px;color:var(--sky);margin-top:20px}
#rays{position:absolute;left:50%;top:50%;width:2600px;height:2600px;margin:-1300px 0 0 -1300px;background:conic-gradient(from 0deg,transparent 0deg,rgba(143,166,255,.10) 8deg,transparent 16deg,transparent 30deg,rgba(143,166,255,.08) 38deg,transparent 46deg,transparent 60deg,rgba(143,166,255,.1) 68deg,transparent 76deg,transparent 90deg,rgba(143,166,255,.08) 98deg,transparent 106deg,transparent 120deg,rgba(143,166,255,.1) 128deg,transparent 136deg,transparent 150deg,rgba(143,166,255,.08) 158deg,transparent 166deg,transparent 180deg,rgba(143,166,255,.1) 188deg,transparent 196deg,transparent 210deg,rgba(143,166,255,.08) 218deg,transparent 226deg,transparent 240deg,rgba(143,166,255,.1) 248deg,transparent 256deg,transparent 270deg,rgba(143,166,255,.08) 278deg,transparent 286deg,transparent 300deg,rgba(143,166,255,.1) 308deg,transparent 316deg,transparent 330deg,rgba(143,166,255,.08) 338deg,transparent 346deg);border-radius:50%;opacity:0}
#logo{position:absolute;left:50%;top:50%;width:900px;margin-left:-450px;display:flex;flex-direction:column;align-items:center;opacity:0}
#logo img{width:300px;filter:drop-shadow(0 0 60px rgba(90,120,255,.6))}
#logo .wm{margin-top:40px;font-size:64px;font-weight:800;letter-spacing:.42em;padding-left:.42em}
#tag{position:absolute;left:0;right:0;top:690px;text-align:center;opacity:0}
#tag p{font-size:30px;font-weight:800;letter-spacing:.3em;text-transform:uppercase;color:var(--gold)}
#tag h3{font-size:62px;font-weight:700;margin-top:18px;letter-spacing:-.01em}
/* S6 */
#s6{background:linear-gradient(120deg,#05091A 0%,#0B1640 60%,#13227A 100%)}
#s6 .head{position:absolute;left:150px;top:170px;font-size:30px;font-weight:800;letter-spacing:.3em;text-transform:uppercase;color:var(--sky);display:flex;align-items:center;gap:20px}
#s6 .head i{width:60px;height:3px;background:var(--gold);display:block}
.steps{position:absolute;left:150px;top:250px;width:860px;display:flex;flex-direction:column;gap:22px}
.step{display:flex;align-items:center;gap:30px;padding:22px 28px;border-radius:24px;border:2px solid rgba(143,166,255,.18);background:rgba(255,255,255,.03);position:relative;overflow:hidden}
.step .fill{position:absolute;inset:0;background:linear-gradient(90deg,#2B4FE0,#1B2FA8);transform-origin:left;transform:scaleX(0)}
.step .n{position:relative;font-size:24px;font-weight:800;color:var(--gold);width:40px}
.step .ic{position:relative;width:84px;height:84px;border-radius:22px;background:rgba(143,166,255,.12);display:flex;align-items:center;justify-content:center;color:#B9C7FF;flex:none}
.step .tx{position:relative}
.step b{display:block;font-size:46px;font-weight:800;letter-spacing:-.01em;line-height:1.1}
.step span{font-size:28px;color:rgba(255,255,255,.75);font-weight:600}
.panel{position:absolute;right:150px;top:170px;width:760px;height:740px;border-radius:40px;overflow:hidden;box-shadow:0 40px 120px rgba(0,0,0,.5)}
.panel .ph{position:absolute;inset:-6%;background-size:cover;background-position:center;opacity:0}
.panel .phshade{position:absolute;inset:0;background:linear-gradient(180deg,transparent 55%,rgba(5,9,26,.75))}
.panel .lab{position:absolute;left:44px;bottom:40px;font-size:30px;font-weight:800;letter-spacing:.24em;text-transform:uppercase}
/* S7 */
#s7{background:#05091A}
.tiles{position:absolute;left:110px;right:110px;top:150px;bottom:150px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:1fr 1fr;gap:26px}
.tile{position:relative;border-radius:30px;overflow:hidden;opacity:0}
.tile .ph{position:absolute;inset:0;background-size:cover;background-position:center}
.tile .sh{position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,rgba(5,9,26,.9))}
.tile b{position:absolute;left:34px;bottom:28px;font-size:44px;font-weight:800}
.tile.world{background:linear-gradient(135deg,#13227A,#2B4FE0);display:flex;flex-direction:column;justify-content:center;padding:40px;color:#fff}
.tile.world .gl{color:#B9C7FF;margin-bottom:18px}
.tile.world p{font-size:42px;font-weight:800;line-height:1.15}
.tile.world p span{color:var(--gold)}
/* S8 */
#s8 .q1{font-size:30px;font-weight:800;letter-spacing:.32em;color:var(--gold);text-transform:uppercase}
#s8 .q2{font-size:92px;font-weight:800;letter-spacing:-.02em;margin-top:34px;line-height:1.1}
#s8 .q3{font-family:P;font-style:italic;font-size:118px;color:#C9D6FF;margin-top:10px}
/* S9 */
#s9{background:radial-gradient(ellipse at 50% 45%,#13227A 0%,#05091A 70%)}
#s9 .c1{font-size:84px;font-weight:800;letter-spacing:-.02em}
#s9 .c2{font-size:84px;font-weight:800;letter-spacing:-.02em;margin-top:18px}
#s9 .c2 em{font-style:normal;color:var(--sky)}
#endcard{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0}
#endcard img{width:190px;filter:drop-shadow(0 0 50px rgba(90,120,255,.55))}
#endcard .wm{margin-top:30px;font-size:58px;font-weight:800;letter-spacing:.42em;padding-left:.42em}
#endcard .tg{font-family:P;font-style:italic;font-size:42px;color:var(--sky);margin-top:26px}
#endcard .ct{display:flex;gap:70px;margin-top:70px;font-size:32px;font-weight:700}
#endcard .ct div{display:flex;align-items:center;gap:16px}
#endcard .ct svg{color:var(--gold)}
</style></head><body><div id="stage">

<div class="scene" id="s1">
  <div class="bgimg" id="s1img" style="background-image:url(${img("cover.jpg")})"></div>
  <div class="shade" style="background:linear-gradient(90deg,rgba(5,9,26,.92),rgba(5,9,26,.55) 60%,rgba(5,9,26,.35)),linear-gradient(0deg,rgba(5,9,26,.9),transparent 55%)"></div>
  <svg id="route" viewBox="0 0 1920 1080"><path id="routePath" d="M 120 900 C 600 520, 1200 420, 1800 160" fill="none" stroke="rgba(212,170,98,.85)" stroke-width="4" stroke-dasharray="2 18" stroke-linecap="round"/>
    <circle id="routeDot" r="14" fill="#FFE2A8" /><circle id="routeHalo" r="40" fill="rgba(212,170,98,.25)"/></svg>
  <div class="line l1">${words("Un conteneur quitte un port,")}</div>
  <div class="line l2">${words("à l'autre bout du monde.")}</div>
</div>
<div class="scene" id="s1b"><div class="center"><div class="small">À l'intérieur…</div><div class="big">TOUT VOTRE CAPITAL.</div></div></div>

<div class="scene" id="s2"><div class="gridbg"></div>
  <div class="qlist">
    <div class="q" id="q1"><div class="qi">${icon("user-search", 64)}</div><div class="qt">Votre fournisseur… <b id="q1b">existe-t-il vraiment ?</b></div></div>
    <div class="q" id="q2"><div class="qi">${icon("package", 64)}</div><div class="qt">La marchandise sera-t-elle <b>conforme ?</b></div></div>
    <div class="q" id="q3"><div class="qi">${icon("landmark", 64)}</div><div class="qt">Et votre paiement… <b>est-il protégé ?</b></div></div>
  </div>
</div>

<div class="scene" id="s3">
  <div class="bgimg" style="background-image:url(${img("problem.jpg")});filter:grayscale(1) brightness(.35)"></div>
  <div class="shade" style="background:radial-gradient(ellipse at center,rgba(80,6,20,.35),rgba(5,9,26,.92))"></div>
  <div class="stamps">
    <div class="stamp" id="st1"><span class="si">${icon("user-round-x", 72, 2)}</span><span>Faux fournisseurs</span></div>
    <div class="stamp" id="st2"><span class="si">${icon("file-x", 72, 2)}</span><span>Documents falsifiés</span></div>
    <div class="stamp" id="st3"><span class="si">${icon("package-x", 72, 2)}</span><span>Marchandises substituées</span></div>
    <div class="stamp" id="st4"><span class="si">${icon("banknote", 72, 2)}</span><span>Paiements envolés</span></div>
  </div>
  <div class="verdict" id="verdict"><p>Dans le commerce international,</p><h2>la fraude ne prévient jamais.<u id="vline"></u></h2></div>
</div>

<div class="scene" id="s4">
  <div class="bgimg" id="s4img" style="background-image:url(${img("gold.jpg")});filter:grayscale(.85) brightness(.32)"></div>
  <div class="shade" style="background:linear-gradient(90deg,rgba(5,9,26,.95),rgba(5,9,26,.6))"></div>
  <svg id="chart" viewBox="0 0 1920 1080"><path id="chartPath" d="M 1000 260 L 1150 330 L 1250 300 L 1380 470 L 1480 440 L 1600 650 L 1700 620 L 1820 880" fill="none" stroke="#E5384F" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"/></svg>
  <div class="txt"><div class="a" id="c1">Chaque jour,</div><div class="b" id="c2">des entreprises et des investisseurs perdent des sommes considérables…</div><div class="c" id="c3">simplement parce qu'ils ont fait confiance,</div><div class="d" id="c4">sans pouvoir vérifier.</div></div>
</div>

<div class="scene" id="s5" style="background:#000">
  <div class="shade" id="s5glow" style="opacity:0;background:radial-gradient(ellipse at center,#1B2FA8 0%,#0A1330 45%,#05091A 80%)"></div>
  <div id="rays"></div>
  <div class="center" id="s5txt"><div class="t1">${words("La confiance ne se déclare pas.")}</div><div class="t2" id="t2">Elle se prouve.</div></div>
  <div id="logo"><img src="${img("mark-white.png")}"><div class="wm">SECUREFLOW</div></div>
  <div id="tag"><p>Votre tiers de confiance</p><h3>dans le commerce international</h3></div>
</div>

<div class="scene" id="s6">
  <div class="head"><i></i>Ce que fait SecureFlow</div>
  <div class="steps">
    ${services.map(([ic, t, d], i) => `<div class="step" id="step${i}"><div class="fill"></div><div class="n">0${i + 1}</div><div class="ic">${icon(ic, 44)}</div><div class="tx"><b>${t}</b><span>${d}</span></div></div>`).join("")}
  </div>
  <div class="panel" id="panel">${services.map(([, t, , im], i) => `<div class="ph" id="ph${i}" style="background-image:url(${img(im)})"></div>`).join("")}<div class="phshade"></div></div>
</div>

<div class="scene" id="s7"><div class="tiles">
  ${sectors.map(([t, im], i) => `<div class="tile" id="tile${i}"><div class="ph" style="background-image:url(${img(im)})"></div><div class="sh"></div><b>${t}</b></div>`).join("")}
  <div class="tile world" id="tileW"><div class="gl">${icon("globe", 70)}</div><p>En Afrique<br><span>& à l'international</span></p></div>
</div></div>

<div class="scene" id="s8">
  <div class="bgimg" id="s8img" style="background-image:url(${img("s_logi.jpg")})"></div>
  <div class="shade" style="background:linear-gradient(0deg,rgba(5,9,26,.92),rgba(10,19,48,.65))"></div>
  <div class="center"><div class="q1" id="v1">Notre mission</div><div class="q2" id="v2">Vous permettre d'opérer partout,</div><div class="q3" id="v3">en toute sérénité.</div></div>
</div>

<div class="scene" id="s9">
  <div class="center" id="ctaTxt"><div class="c1" id="cta1">Une opération sensible à sécuriser ?</div><div class="c2" id="cta2">Parlez dès aujourd'hui à <em>SecureFlow.</em></div></div>
  <div id="endcard"><img src="${img("mark-white.png")}"><div class="wm">SECUREFLOW</div><div class="tg">La confiance ne se déclare pas. Elle se prouve.</div>
    <div class="ct"><div>${icon("globe", 36, 2)}secureflow.solutions</div><div>${icon("message-circle", 36, 2)}+229 50 36 36 36</div><div>${icon("map-pin", 36, 2)}Cotonou, Bénin</div></div></div>
</div>

<div id="corner"><img src="${img("mark-white.png")}"><span>SECUREFLOW</span></div>
<div id="flash"></div><div id="wflash"></div><div id="vig"></div>
<svg id="grain" width="1920" height="1080"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#n)"/></svg>
</div>
<script src="file://${NM}/gsap/dist/gsap.min.js"></script>
<script>
const C=${JSON.stringify(C)};
const tl=gsap.timeline({paused:true});
const show=(sel,t,d=.5)=>tl.to(sel,{opacity:1,duration:d,ease:"power2.out"},t);
const hide=(sel,t,d=.5)=>tl.to(sel,{opacity:0,duration:d,ease:"power2.in"},t);
const up=(sel,t,o={})=>tl.fromTo(sel,{opacity:0,y:o.y??50,filter:"blur(12px)"},{opacity:1,y:0,filter:"blur(0px)",duration:o.d??.7,ease:"power3.out",stagger:o.s??0},t);
const shake=(sel,t,amp=14)=>tl.to(sel,{keyframes:[{x:amp,y:-amp*.6},{x:-amp*.8,y:amp*.5},{x:amp*.5,y:amp*.3},{x:-amp*.3,y:-amp*.2},{x:0,y:0}],duration:.3,ease:"none"},t);
const flash=(t,o=.35)=>tl.fromTo("#flash",{opacity:o},{opacity:0,duration:.45,ease:"power2.out",immediateRender:false},t);

// ---- S1 accroche
show("#s1",0,.8);
tl.fromTo("#s1img",{scale:1.18},{scale:1.02,duration:C.q1,ease:"none"},0);
up("#s1 .l1 .w",C.hook1,{s:.08});
up("#s1 .l2 .w",C.hook2,{s:.08});
const rp=document.getElementById("routePath"),L=rp.getTotalLength();
gsap.set(rp,{attr:{"stroke-dashoffset":0}});
tl.fromTo("#route",{opacity:0},{opacity:1,duration:.6},C.hook2-.2);
const dot={p:0};
tl.to(dot,{p:1,duration:C.hook3-C.hook2+.6,ease:"power1.inOut",onUpdate:()=>{const pt=rp.getPointAtLength(dot.p*L);["routeDot","routeHalo"].forEach(id=>{const c=document.getElementById(id);c.setAttribute("cx",pt.x);c.setAttribute("cy",pt.y)})}},C.hook2);
tl.fromTo(rp,{attr:{"stroke-dasharray":"2 18"},clipPath:"inset(0 100% 0 0)"},{clipPath:"inset(0 0% 0 0)",duration:C.hook3-C.hook2+.6,ease:"power1.inOut"},C.hook2);
hide("#s1",C.hook3-.1,.6);
show("#s1b",C.hook3-.1,.4);
up("#s1b .small",C.hook3,{d:.6});
tl.fromTo("#s1b .big",{opacity:0,scale:1.35,filter:"blur(24px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:.9,ease:"expo.out"},C.capital);
tl.to("#s1b .big",{scale:1.06,duration:1.2,ease:"none"},C.capital+.9);
hide("#s1b",C.q1-.15,.3);

// ---- S2 questions (glitch)
show("#s2",C.q1-.15,.25);
const glitch=(sel,t)=>{tl.fromTo(sel,{opacity:0,x:-30,skewX:-14,filter:"blur(8px)"},{keyframes:[{opacity:1,x:18,skewX:8,filter:"blur(0px)",duration:.08},{x:-10,skewX:-4,duration:.06},{x:6,skewX:0,duration:.06},{x:0,duration:.1}],ease:"none"},t)};
glitch("#q1",C.q1);
tl.fromTo("#q1b",{opacity:0},{opacity:1,duration:.3},C.q1b);
gsap.set("#q1b",{opacity:0});
tl.to("#q1",{opacity:.35,duration:.4},C.q2-.1);
glitch("#q2",C.q2);
tl.to("#q2",{opacity:.35,duration:.4},C.q3-.1);
glitch("#q3",C.q3);
flash(C.q1,.12);flash(C.q2,.12);flash(C.q3,.12);
tl.to(".q .qi",{boxShadow:"0 0 50px rgba(229,56,79,.6)",duration:.5,yoyo:true,repeat:5},C.q3);
hide("#s2",C.q3end+.3,.6);

// ---- S3 le problème (tampons)
show("#s3",C.p1-.35,.3);
["#st1","#st2","#st3","#st4"].forEach((s,i)=>{const t=[C.p1,C.p2,C.p3,C.p4][i];
  tl.fromTo(s,{opacity:0,scale:2.2,rotate:i%2?7:-7},{opacity:1,scale:1,rotate:i%2?1.5:-1.5,duration:.28,ease:"power4.in"},t-.12);
  shake("#s3 .stamps",t+.16,16);flash(t+.16,.28);});
tl.to("#s3 .stamps",{opacity:.25,y:-40,scale:.94,duration:.7,ease:"power2.inOut"},C.p5-.2);
up("#verdict p",C.p5,{d:.6});
up("#verdict h2",C.p5+1.1,{d:.6});
tl.fromTo("#vline",{scaleX:0},{scaleX:1,duration:.8,ease:"power3.inOut"},C.p5+1.6);
hide("#s3",C.p5end+.2,.4);

// ---- S4 conséquence
show("#s4",C.c1-.3,.4);
tl.fromTo("#s4img",{scale:1.1},{scale:1,duration:9,ease:"none"},C.c1-.3);
const cp=document.getElementById("chartPath"),CL=cp.getTotalLength();
gsap.set(cp,{attr:{"stroke-dasharray":CL,"stroke-dashoffset":CL}});
tl.to(cp,{attr:{"stroke-dashoffset":0},duration:6.5,ease:"power1.in"},C.c1);
up("#c1",C.c1,{d:.5});
up("#c2",C.c2,{d:.8});
up("#c3",C.c3,{d:.6});
tl.fromTo("#c4",{opacity:0,scale:1.25,filter:"blur(14px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:.45,ease:"expo.out",transformOrigin:"left center"},C.c4);
shake("#s4 .txt",C.c4+.3,10);
tl.set("#s4",{opacity:0},C.c4end+.05);

// ---- S5 bascule + logo
tl.set("#s5",{opacity:1},C.c4end+.05);
up("#s5 .t1 .w",C.t1,{s:.12,d:.8,y:30});
tl.fromTo("#t2",{opacity:0,y:30,filter:"blur(14px)"},{opacity:1,y:0,filter:"blur(0px)",duration:.9,ease:"power3.out"},C.t2);
tl.to("#s5txt",{opacity:0,scale:.92,filter:"blur(10px)",duration:.35,ease:"power2.in"},C.logo-.35);
tl.fromTo("#wflash",{opacity:.85},{opacity:0,duration:.9,ease:"power2.out",immediateRender:false},C.logo);
tl.to("#s5glow",{opacity:1,duration:.6},C.logo);
tl.fromTo("#rays",{opacity:0,rotate:0},{opacity:1,rotate:25,duration:5,ease:"none"},C.logo);
tl.fromTo("#logo",{opacity:0,scale:.55,rotate:-60,yPercent:-50},{opacity:1,scale:1,rotate:0,yPercent:-50,duration:1.1,ease:"expo.out"},C.logo);
tl.fromTo("#logo .wm",{letterSpacing:"1.2em",opacity:0},{letterSpacing:".42em",opacity:1,duration:1.2,ease:"expo.out"},C.logo+.15);
tl.to("#logo",{yPercent:-78,scale:.72,duration:.9,ease:"power3.inOut"},C.tiers-.1);
up("#tag p",C.tiers+.2,{d:.6});
up("#tag h3",C.tiers+.8,{d:.7});
tl.set("#tag",{opacity:1},C.tiers+.2);
hide("#s5",C.s1-.45,.4);

// ---- S6 services
show("#s6",C.s1-.45,.4);
show("#corner",C.s1-.2,.6);
up("#s6 .head",C.s1-.4,{d:.5});
const S=[C.s1,C.s2,C.s3,C.s4,C.s5];
S.forEach((t,i)=>{
  tl.fromTo("#step"+i,{opacity:0,x:-60},{opacity:1,x:0,duration:.55,ease:"power3.out"},t-.15);
  tl.to("#step"+i+" .fill",{scaleX:1,duration:.5,ease:"power3.out"},t);
  tl.to("#step"+i+" .ic",{background:"rgba(255,255,255,.18)",color:"#fff",duration:.3},t);
  if(i>0){tl.to("#step"+(i-1)+" .fill",{opacity:0,duration:.35,ease:"power2.out"},t);tl.to("#step"+(i-1)+" .ic",{background:"rgba(143,166,255,.12)",color:"#B9C7FF",duration:.3},t);}
  tl.fromTo("#ph"+i,{opacity:0,scale:1.12},{opacity:1,scale:1,duration:.7,ease:"power2.out"},t-.1);
  tl.to("#ph"+i,{scale:1.06,duration:(S[i+1]??C.s5end)-t+1,ease:"none"},t+.6);
  if(i>0) tl.to("#ph"+(i-1),{opacity:0,duration:.6},t+.2);
});
gsap.set(".step",{opacity:0});
tl.fromTo("#panel",{opacity:0,x:80},{opacity:1,x:0,duration:.8,ease:"power3.out"},C.s1-.3);
hide("#s6",C.s5end+.35,.4);

// ---- S7 secteurs
show("#s7",C.s5end+.35,.3);
[C.sec1,C.sec2,C.sec3,C.sec4,C.sec5,C.sec6,C.sec7].forEach((t,i)=>{
  tl.fromTo("#tile"+i,{opacity:0,scale:.82,y:40},{opacity:1,scale:1,y:0,duration:.45,ease:"back.out(1.6)"},t-.1);
  tl.fromTo("#tile"+i+" .ph",{scale:1.25},{scale:1.05,duration:4,ease:"power1.out"},t-.1);
});
tl.fromTo("#tileW",{opacity:0,scale:.82},{opacity:1,scale:1,duration:.55,ease:"back.out(1.6)"},C.world-.1);
tl.to(".tile:not(.world)",{opacity:.45,duration:.6},C.world);
hide("#s7",C.secEnd+.45,.5);

// ---- S8 vision
show("#s8",C.secEnd+.45,.6);
tl.fromTo("#s8img",{scale:1.15},{scale:1,duration:6,ease:"none"},C.secEnd+.45);
up("#v1",C.v1,{d:.6});
up("#v2",C.v2,{d:.8});
tl.fromTo("#v3",{opacity:0,y:30,filter:"blur(16px)"},{opacity:1,y:0,filter:"blur(0px)",duration:1,ease:"power3.out"},C.v3);
hide("#s8",C.cta1-.4,.5);

// ---- S9 CTA + fin
show("#s9",C.cta1-.4,.5);
up("#cta1",C.cta1,{d:.7});
up("#cta2",C.cta2,{d:.7});
tl.to("#ctaTxt",{opacity:0,y:-40,duration:.5,ease:"power2.in"},C.end-.1);
hide("#corner",C.end-.1,.4);
tl.fromTo("#endcard",{opacity:0,scale:.94},{opacity:1,scale:1,duration:.9,ease:"expo.out"},C.end+.2);
tl.fromTo("#endcard img",{rotate:-45},{rotate:0,duration:1.1,ease:"expo.out"},C.end+.2);
tl.fromTo("#endcard .ct div",{opacity:0,y:20},{opacity:1,y:0,stagger:.12,duration:.5},C.end+.7);
tl.to("#stage",{opacity:0,duration:.6},C.total-.6);
tl.set({}, {}, C.total);
window.seek=t=>{tl.seek(t,false)};
window.ready=true;
</script></body></html>`;

fs.writeFileSync(path.join(DIR, "motion.html"), html);

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium", args: ["--allow-file-access-from-files"] });
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on("pageerror", (e) => console.error("ERREUR PAGE:", e.message));
await page.goto("file://" + path.join(DIR, "motion.html"), { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForFunction(() => window.ready === true);

const si = process.argv.indexOf("--stills");
if (si > -1) {
  fs.mkdirSync(path.join(DIR, "stills"), { recursive: true });
  for (const t of process.argv[si + 1].split(",").map(Number)) {
    await page.evaluate((t) => window.seek(t), t);
    await page.screenshot({ path: path.join(DIR, `stills/t${t.toFixed(1).padStart(5, "0")}.jpg`), type: "jpeg", quality: 80 });
  }
} else {
  const total = Math.round(C.total * FPS);
  const ff = spawn("ffmpeg", ["-y", "-v", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "mjpeg", "-i", "-",
    "-c:v", "libx264", "-preset", "medium", "-crf", "18", "-pix_fmt", "yuv420p", "-r", String(FPS), path.join(DIR, "video_silent.mp4")], { stdio: ["pipe", "inherit", "inherit"] });
  const t0 = Date.now();
  for (let f = 0; f < total; f++) {
    await page.evaluate((t) => window.seek(t), f / FPS);
    const buf = await page.screenshot({ type: "jpeg", quality: 92 });
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
    if (f % 300 === 0) console.log(`frame ${f}/${total} (${((Date.now() - t0) / 1000).toFixed(0)} s)`);
  }
  ff.stdin.end();
  await new Promise((r) => ff.on("close", r));
}
await browser.close();
