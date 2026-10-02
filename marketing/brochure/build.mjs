// Génère la brochure institutionnelle SecureFlow (HTML → PDF A4 via Chromium)
import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const DIR = path.dirname(new URL(import.meta.url).pathname);
const NM = path.resolve(DIR, "../node_modules");

// ---------- Icônes (Lucide) ----------
const icon = (name, size = 20, sw = 1.75) => {
  const raw = fs.readFileSync(`${NM}/lucide-static/icons/${name}.svg`, "utf8");
  const inner = raw.slice(raw.indexOf(">", raw.indexOf("<svg")) + 1, raw.lastIndexOf("</svg>"));
  return `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
};

const font = (pkg, file) => `${NM}/@fontsource/${pkg}/files/${file}`;
const img = (n) => `img/${n}`;

// ---------- Gabarits ----------
const TOTAL = 15;
const header = (num, label) => `
  <div class="hd">
    <div class="hd-brand"><img src="${img("mark-blue.png")}" alt=""><span>SECUREFLOW</span></div>
    <div class="hd-label"><b>${num}</b><i></i>${label}</div>
  </div>`;
const footer = (n) => `
  <div class="ft">
    <span>SecureFlow SARL · Présentation institutionnelle 2026</span>
    <span class="ft-n">${String(n).padStart(2, "0")} <em>/ ${TOTAL}</em></span>
  </div>`;
const page = (n, num, label, body, cls = "") => `
  <section class="page inner ${cls}">
    <img class="wm" src="${img("mark-blue.png")}" alt="">
    ${header(num, label)}
    <div class="content">${body}</div>
    ${footer(n)}
  </section>`;
const eyebrow = (t) => `<div class="eyebrow"><i></i>${t}</div>`;
const checks = (items) => `<ul class="checks">${items.map((t) => `<li>${icon("check", 13, 2.5)}<span>${t}</span></li>`).join("")}</ul>`;

// ---------- Contenu ----------
const services = [
  { n: "01", ic: "search", img: "s_trans.jpg", t: "Vérification des fournisseurs",
    d: "Nous éliminons les fraudes en identifiant et vérifiant rigoureusement vos partenaires commerciaux à la source.",
    f: ["Identification légale complète", "Vérification d'existence physique", "Analyse de capacité opérationnelle", "Audit de conformité et de licence"] },
  { n: "02", ic: "badge-check", img: "s_insp.jpg", t: "Inspection et certification sur site",
    d: "Nos experts se déplacent physiquement pour garantir la réalité de vos actifs et la conformité de vos partenaires.",
    f: ["Contrôle physique des stocks", "Inspection des infrastructures", "Validation des processus qualité", "Rapports détaillés avec preuves visuelles"] },
  { n: "03", ic: "landmark", img: "s_verif.jpg", t: "Sécurité des transactions",
    d: "Nous sécurisons vos flux financiers et protégeons vos intérêts lors de transactions internationales complexes.",
    f: ["Encadrement des paiements internationaux", "Réduction des risques de prépaiement", "Protection du capital engagé", "Transparence totale des processus"] },
  { n: "04", ic: "ship", img: "s_logi.jpg", t: "Supervision logistique",
    d: "Une surveillance constante de vos marchandises, depuis le point de départ jusqu'à la livraison finale.",
    f: ["Suivi maritime, portuaire et aérien", "Contrôle de conformité des cargaisons", "Vérification de la documentation", "Réduction des risques de substitution"] },
  { n: "05", ic: "radar", img: "s_risk.jpg", t: "Gestion des risques",
    d: "Identification et atténuation proactive des risques opérationnels, juridiques et stratégiques.",
    f: ["Analyse de vulnérabilité", "Stratégies de réduction des risques", "Accompagnement projets Mines & Énergie", "Veille sécuritaire constante"] },
];

const sectors = [
  { ic: "wheat", img: "sec_agri.jpg", t: "Agriculture & Agro-alimentaire", d: "Sécurisation des flux agricoles, de la production à l'exportation mondiale.",
    a: ["Vérification des producteurs et exportateurs", "Sécurisation des contrats d'achat", "Supervision logistique (ports, transit)", "Réduction des fraudes à l'export"] },
  { ic: "pickaxe", img: "sec_mine.jpg", t: "Mines & Ressources naturelles", d: "Contrôle strict des flux financiers, contractuels et logistiques miniers.",
    a: ["Due diligence des partenaires miniers", "Sécurisation des transactions", "Supervision du transport", "Protection contre les intermédiaires"] },
  { ic: "zap", img: "sec_energy.jpg", t: "Énergie & Électricité", d: "Sécurisation des projets énergétiques et des équipements industriels.",
    a: ["Vérification des fournisseurs d'équipements", "Sécurisation des paiements", "Supervision des livraisons sensibles", "Gestion des risques contractuels"] },
  { ic: "fuel", img: "sec_oil.jpg", t: "Pétrole & Gaz", d: "Sécurisation des transactions pétrolières, gazières et de leurs produits dérivés.",
    a: ["Vérification des fournisseurs de pétrole brut", "Sécurisation des contrats de livraison", "Supervision du transport maritime et terrestre", "Contrôle qualité et conformité des produits"] },
  { ic: "heart-pulse", img: "sec_health.jpg", t: "Santé & Équipements médicaux", d: "Protection des importations sensibles : médicaments et dispositifs critiques.",
    a: ["Contrôle des fournisseurs certifiés", "Sécurisation des chaînes logistiques", "Prévention des contrefaçons", "Traçabilité des livraisons"] },
  { ic: "plane", img: "sec_avia.jpg", t: "Aviation & Transport spécialisé", d: "Gestion sécurisée des flux aéronautiques et logistiques à haute valeur.",
    a: ["Sécurisation des pièces aéronautiques", "Supervision du fret aérien", "Gestion des documents internationaux", "Protection des paiements et délais"] },
  { ic: "building-2", img: "sec_infra.jpg", t: "Infrastructures & Projets", d: "Sécurisation des projets complexes impliquant plusieurs acteurs mondiaux.",
    a: ["Coordination des parties prenantes", "Sécurisation financière des projets", "Supervision contractuelle", "Réduction des risques opérationnels"] },
];

const sectorCard = (s) => `
  <article class="sector">
    <div class="sector-img" style="background-image:url(${img(s.img)})"><span class="sector-ic">${icon(s.ic, 18)}</span></div>
    <div class="sector-body">
      <h3>${s.t}</h3>
      <p>${s.d}</p>
      ${checks(s.a)}
    </div>
  </article>`;

const serviceRow = (s, flip = false) => `
  <article class="svc ${flip ? "flip" : ""}">
    <div class="svc-img" style="background-image:url(${img(s.img)})"><span class="svc-n">${s.n}</span></div>
    <div class="svc-body">
      <div class="svc-head"><span class="ic-box">${icon(s.ic, 18)}</span><h3>${s.t}</h3></div>
      <p>${s.d}</p>
      ${checks(s.f)}
    </div>
  </article>`;

// ---------- Pages ----------
const pages = [];

// 1 — Couverture
pages.push(`
<section class="page cover">
  <div class="cover-bg" style="background-image:url(${img("cover.jpg")})"></div>
  <div class="cover-shade"></div>
  <img class="cover-wm" src="${img("mark-white.png")}" alt="">
  <div class="cover-top">
    <div class="logo-lockup light"><img src="${img("mark-white.png")}" alt=""><span>SECUREFLOW</span></div>
    <div class="cover-tag">Dossier de présentation<br>Partenaires &amp; investisseurs</div>
  </div>
  <div class="cover-main">
    <div class="cover-kicker"><i></i>Commerce international · Logistique · Gestion des risques</div>
    <h1>Sécuriser chaque flux,<br><span>de la source à la<br>livraison finale.</span></h1>
    <p>Tiers de confiance pour les entreprises, traders et investisseurs qui opèrent dans les secteurs stratégiques — en Afrique et à l'international.</p>
  </div>
  <div class="cover-bottom">
    <div><b>Siège</b>Cotonou, Bénin</div>
    <div><b>Édition</b>2026</div>
    <div><b>Web</b>secureflow.solutions</div>
  </div>
</section>`);

// 2 — Sommaire + en bref
const toc = [
  ["01", "Qui sommes-nous", 3], ["02", "Le constat", 4], ["03", "Nos valeurs", 5], ["04", "Nos services", 6],
  ["05", "Notre méthodologie", 8], ["06", "Secteurs d'intervention", 9], ["07", "Opérations de référence", 11],
  ["08", "Réseau international", 12], ["09", "Le fondateur", 13], ["10", "Ce que nous apportons", 14],
];
pages.push(page(2, "00", "Sommaire", `
  <div class="toc-grid">
    <div>
      ${eyebrow("Sommaire")}
      <h2 class="h2">Un partenaire pour<br><span class="hl">opérer en toute certitude.</span></h2>
      <p class="lead">Ce document présente SecureFlow, ses métiers, sa méthode et ce qu'elle apporte concrètement à ses clients et partenaires.</p>
      <ol class="toc">
        ${toc.map(([n, t, p]) => `<li><b>${n}</b><span>${t}</span><i></i><em>${String(p).padStart(2, "0")}</em></li>`).join("")}
      </ol>
    </div>
    <aside class="brief">
      <div class="brief-title">${icon("shield-check", 18)}SecureFlow en bref</div>
      <dl>
        <dt>Raison sociale</dt><dd>SecureFlow SARL</dd>
        <dt>Siège</dt><dd>Cotonou, Bénin</dd>
        <dt>Métier</dt><dd>Sécurisation du commerce international et des opérations logistiques sensibles</dd>
        <dt>Fondateur &amp; CEO</dt><dd>Éric Brunnel QUENUM</dd>
        <dt>Expérience terrain</dt><dd>Plus de 9 ans en import-export et transactions complexes</dd>
        <dt>Champ d'action</dt><dd>5 services · 8 secteurs stratégiques</dd>
        <dt>Réseau</dt><dd>Afrique de l'Ouest, Europe, Asie, Moyen-Orient</dd>
      </dl>
      <div class="brief-quote">« La confiance ne se déclare pas — elle se prouve. »</div>
    </aside>
  </div>`, "pg-toc"));

// 3 — Qui sommes-nous
pages.push(page(3, "01", "Qui sommes-nous", `
  ${eyebrow("Qui sommes-nous")}
  <h2 class="h2">L'excellence opérationnelle<br><span class="hl">au service de votre sécurité.</span></h2>
  <div class="two-col">
    <div>
      <p class="lead">SecureFlow est une société spécialisée dans la sécurisation du commerce international et des opérations logistiques sensibles.</p>
      <p>Nous aidons les entreprises, traders et investisseurs à <b>sécuriser leurs transactions</b>, <b>vérifier leurs partenaires</b> et <b>protéger leurs flux</b>, de la source jusqu'à la livraison finale.</p>
      <p>Dans un écosystème mondial saturé d'incertitudes, SecureFlow agit comme un rempart contre la fraude et l'instabilité opérationnelle. Nous fusionnons logistique de précision et haute sécurité : chaque flux de capitaux ou de marchandises est <b>audité, sécurisé et escorté</b> selon des protocoles rigoureux.</p>
      <div class="tags"><span>${icon("search", 14)}Vérification</span><span>${icon("lock", 14)}Sécurisation</span><span>${icon("eye", 14)}Supervision</span></div>
    </div>
    <div class="photo tall" style="background-image:url(${img("s_insp.jpg")})">
      <div class="photo-badge">${icon("globe", 16)}<div><b>Sécurité 360°</b><span>De l'origine à la destination</span></div></div>
    </div>
  </div>
  <div class="mission">
    <div class="mission-label">Notre mission</div>
    <blockquote>« Réduire les risques, éliminer les incertitudes et permettre à nos clients d'opérer <span>partout en toute sérénité.</span> »</blockquote>
  </div>
  <div class="pillars">
    <div><span class="ic-box">${icon("target", 18)}</span><b>Impact stratégique</b><p>Sécuriser chaque maillon de votre chaîne de valeur.</p></div>
    <div><span class="ic-box">${icon("handshake", 18)}</span><b>Confiance</b><p>Votre partenaire de confiance en Afrique et ailleurs.</p></div>
    <div><span class="ic-box">${icon("compass", 18)}</span><b>Contrôle total</b><p>Une vision claire sur chaque étape de vos opérations.</p></div>
  </div>`, "pg-about"));

// 4 — Le constat
const risks = [
  ["triangle-alert", "Risques opérationnels", "Défaillance d'un partenaire, mauvaise exécution"],
  ["scale", "Risques juridiques et contractuels", "Non-conformité, litiges potentiels"],
  ["truck", "Risques logistiques", "Retards, pertes, détournements"],
  ["landmark", "Risques financiers", "Fraude, non-paiement, flux non sécurisés"],
  ["file-warning", "Fraude documentaire", "Documents falsifiés ou non conformes"],
  ["user-x", "Faux partenaires", "Faux fournisseurs ou faux acheteurs"],
];
pages.push(page(4, "02", "Le constat", `
  <div class="band-photo" style="background-image:url(${img("problem.jpg")})">
    <div class="band-shade"></div>
    <div class="band-text">
      ${eyebrow("Pourquoi SecureFlow existe")}
      <h2 class="h2 light">Un commerce mondial<br>de plus en plus incertain.</h2>
    </div>
  </div>
  <blockquote class="big-quote">« SecureFlow est née d'un constat simple : trop d'entreprises et d'investisseurs perdent de l'argent à cause <span>d'arnaques, de partenaires non fiables</span> et d'opérations mal sécurisées. »</blockquote>
  <p class="lead center">Nous avons créé SecureFlow pour apporter de la <b>certitude</b> là où il n'y avait que de la confiance aveugle.</p>
  <h3 class="h3">Les risques que nous identifions avant chaque opération</h3>
  <div class="risk-grid">
    ${risks.map(([ic, t, d]) => `<div class="risk"><span class="ic-box red">${icon(ic, 18)}</span><div><b>${t}</b><p>${d}</p></div></div>`).join("")}
  </div>
  <p class="note">${icon("shield-check", 15)}Chaque opération fait l'objet d'une analyse préalable adaptée à son contexte spécifique.</p>`, "pg-problem"));

// 5 — Valeurs
const values = [
  ["shield-check", "Sécurité", "Nous anticipons les menaces avant qu'elles ne se matérialisent. Notre posture proactive protège vos actifs et votre réputation."],
  ["eye", "Transparence", "Des canaux de communication clairs et des rapports réguliers pour une visibilité totale sur vos opérations."],
  ["badge-check", "Fiabilité", "Nous respectons nos engagements. Dans un commerce mondial volatil, nous sommes la constante sur laquelle vous pouvez compter."],
  ["lock", "Discrétion", "La confidentialité est primordiale. Nous traitons les transactions sensibles avec le plus haut niveau de secret professionnel."],
];
const method = [
  ["Intégrité", "La base de toute transaction sécurisée."],
  ["Responsabilité", "Un engagement total sur la scène internationale."],
  ["Rigueur", "Zéro compromis sur la conformité opérationnelle."],
  ["Protection", "Défense absolue des intérêts de nos clients."],
];
pages.push(page(5, "03", "Nos valeurs", `
  ${eyebrow("Nos valeurs fondamentales")}
  <h2 class="h2">La confiance<br><span class="hl">n'est pas négociable.</span></h2>
  <p class="lead">Quatre piliers guident chacune de nos interventions, du premier échange à la livraison finale.</p>
  <div class="values">
    ${values.map(([ic, t, d], i) => `<div class="value"><div class="value-top"><span class="ic-box">${icon(ic, 20)}</span><em>0${i + 1}</em></div><h3>${t}</h3><p>${d}</p></div>`).join("")}
  </div>
  <div class="approach">
    <div class="approach-photo" style="background-image:url(${img("about.jpg")})"></div>
    <div class="approach-body">
      <div class="eyebrow light"><i></i>Notre approche</div>
      <h3>Une approche sans compromis</h3>
      <p>Basée sur la rigueur, la transparence et la présence physique sur le terrain.</p>
      <div class="approach-grid">
        ${method.map(([t, d]) => `<div><b>${t}</b><span>${d}</span></div>`).join("")}
      </div>
    </div>
  </div>`));

// 6 — Services 1/2
pages.push(page(6, "04", "Nos services", `
  ${eyebrow("Nos services")}
  <h2 class="h2">Une expertise terrain pour sécuriser<br><span class="hl">chaque étape de vos opérations.</span></h2>
  <div class="svc-list">
    ${serviceRow(services[0])}
    ${serviceRow(services[1], true)}
    ${serviceRow(services[2])}
  </div>`, "pg-svc1"));

// 7 — Services 2/2
pages.push(page(7, "04", "Nos services", `
  <div class="svc-list">
    ${serviceRow(services[3], true)}
    ${serviceRow(services[4])}
  </div>
  <div class="svc-summary">
    <div class="svc-summary-head">
      <div class="eyebrow light"><i></i>En synthèse</div>
      <h3>Un dispositif complet, de bout en bout</h3>
    </div>
    <div class="flow">
      ${[["search", "Vérifier", "les partenaires"], ["badge-check", "Inspecter", "sur site"], ["landmark", "Sécuriser", "les paiements"], ["ship", "Superviser", "les flux"], ["radar", "Anticiper", "les risques"]]
        .map(([ic, a, b], i) => `<div class="flow-step"><span>${icon(ic, 20)}</span><b>${a}</b><em>${b}</em></div>${i < 4 ? `<i class="flow-arrow">${icon("arrow-right", 16)}</i>` : ""}`).join("")}
    </div>
  </div>`, "pg-svc2"));

// 8 — Méthodologie
const steps = [
  ["search", "Identification des risques", "Analyse approfondie des risques pouvant affecter l'opération : opérationnels, juridiques, logistiques, financiers, documentaires.", []],
  ["chart-no-axes-column", "Analyse & évaluation", "Évaluation du niveau de risque associé à chaque opération.", ["Vérification des parties impliquées", "Analyse des documents commerciaux", "Évaluation du cadre contractuel", "Classification du risque : faible, modéré, élevé"]],
  ["shield-check", "Prévention & sécurisation", "Mesures destinées à réduire l'exposition aux risques.", ["Contrôles de cohérence préalables", "Encadrement contractuel des engagements", "Sécurisation des échanges d'informations", "Procédures d'alerte"]],
  ["eye", "Supervision & suivi", "Suivi continu de l'exécution, pour réagir rapidement en cas de difficulté.", ["Respect des délais et procédures", "Détection rapide des anomalies", "Traçabilité claire des actions"]],
  ["siren", "Gestion des incidents", "En cas d'incident, nous accompagnons les parties jusqu'à la résolution.", ["Signalement immédiat des anomalies", "Options de gestion et de mitigation", "Documentation pour éviter la récurrence"]],
];
pages.push(page(8, "05", "Notre méthodologie", `
  ${eyebrow("Notre méthodologie")}
  <h2 class="h2">Cinq étapes pour<br><span class="hl">anticiper plutôt que subir.</span></h2>
  <p class="lead">Chaque mission suit un processus structuré qui permet de détecter les vulnérabilités avant l'exécution — et d'agir vite si un incident survient.</p>
  <div class="steps">
    ${steps.map(([ic, t, d, items], i) => `
      <div class="step">
        <div class="step-rail"><span class="step-n">0${i + 1}</span>${i < steps.length - 1 ? "<i></i>" : ""}</div>
        <div class="step-card">
          <div class="step-head"><span class="ic-box">${icon(ic, 18)}</span><h3>${t}</h3></div>
          <p>${d}</p>
          ${items.length ? `<div class="chips">${items.map((x) => `<span>${x}</span>`).join("")}</div>` : ""}
        </div>
      </div>`).join("")}
  </div>
  <div class="objective"><b>Objectif</b>Réduire significativement les risques, sans prétendre à leur suppression totale.</div>`, "pg-steps"));

// 9 — Secteurs 1/2
pages.push(page(9, "06", "Secteurs d'intervention", `
  ${eyebrow("Secteurs d'intervention")}
  <h2 class="h2">Des secteurs stratégiques<br><span class="hl">à haut niveau de risque.</span></h2>
  <p class="lead">SecureFlow sécurise les opérations commerciales et logistiques là où la fiabilité de chaque transaction est décisive.</p>
  <div class="sector-grid">${sectors.slice(0, 4).map(sectorCard).join("")}</div>`));

// 10 — Secteurs 2/2 + Investissement Afrique
pages.push(page(10, "06", "Secteurs d'intervention", `
  <div class="sector-grid three">${sectors.slice(4).map(sectorCard).join("")}</div>
  <article class="featured">
    <div class="featured-img" style="background-image:url(${img("sec_africa.jpg")})"></div>
    <div class="featured-body">
      <div class="featured-top"><span class="ic-box gold">${icon("crown", 18)}</span><span class="pill">Offre exclusive</span></div>
      <h3>Investissement en Afrique</h3>
      <p>Votre porte d'entrée stratégique pour investir en Afrique, avec des connexions gouvernementales de haut niveau.</p>
      ${checks(["Partenariats avec des chefs d'État africains", "Accès privilégié aux opportunités d'investissement", "Facilitation des procédures administratives", "Sécurisation juridique et financière des projets", "Accompagnement sur tous les secteurs économiques"])}
      <div class="featured-foot"><span>Agriculture</span><span>Mines</span><span>Énergie</span><span>Pétrole &amp; gaz</span><span>Santé</span><span>Infrastructures</span></div>
    </div>
  </article>`));

// 11 — Opérations de référence
const ops = [
  ["gold.jpg", "Afrique de l'Ouest", "Transaction aurifère", ["Vérification du fournisseur", "Déplacement sur site", "Sécurisation documentaire", "Supervision logistique et financière"]],
  ["agri_port.jpg", "Afrique / Europe", "Opération agro-industrielle", ["Sécurisation contractuelle", "Supervision portuaire", "Livraison conforme"]],
  ["sec_energy.jpg", "Équipements industriels", "Projet énergétique", ["Vérification d'un fournisseur asiatique", "Contrôle qualité", "Gestion des risques contractuels"]],
];
pages.push(page(11, "07", "Opérations de référence", `
  ${eyebrow("Opérations de référence")}
  <h2 class="h2">Des opérations concrètes,<br><span class="hl">sur des transactions à haut risque.</span></h2>
  <p class="lead">L'expertise de SecureFlow est forgée par l'action, pas par la théorie. Exemples d'opérations menées par notre équipe :</p>
  <div class="ops">
    ${ops.map(([im, zone, t, items], i) => `
      <article class="op">
        <div class="op-img" style="background-image:url(${img(im)})"><span>Cas 0${i + 1}</span></div>
        <div class="op-body">
          <em>${zone}</em>
          <h3>${t}</h3>
          <ol>${items.map((x) => `<li>${x}</li>`).join("")}</ol>
        </div>
      </article>`).join("")}
  </div>
  <div class="ops-note">${icon("lock", 15)}Par souci de confidentialité, les noms des clients et contreparties ne sont jamais divulgués.</div>`, "pg-ops"));

// 12 — Réseau international
pages.push(page(12, "08", "Réseau international", `
  ${eyebrow("Réseau international")}
  <h2 class="h2">Un réseau d'affaires<br><span class="hl">de l'Afrique à l'Asie et à l'Europe.</span></h2>
  <p class="lead">De Cotonou à la Chine, de Dubaï à Paris : SecureFlow construit des relations directes avec les acteurs qui comptent pour vos opérations.</p>
  <div class="gallery">
    <figure class="g1" style="background-image:url(${img("p_china.jpg")})"><figcaption><b>Chine</b>Rendez-vous d'investisseurs à la Chambre de Commerce — SecureFlow apporteur d'affaires stratégique</figcaption></figure>
    <figure class="g2" style="background-image:url(${img("p_exim.jpg")})"><figcaption><b>Finance</b>Partenariat stratégique avec EXIM Finance pour le financement de projets internationaux</figcaption></figure>
    <figure class="g3" style="background-image:url(${img("p_dubai.jpg")})"><figcaption><b>Dubaï</b>Sécurisation des flux énergétiques entre le Golfe, l'Afrique et l'Asie</figcaption></figure>
    <figure class="g4" style="background-image:url(${img("p_paris.jpg")})"><figcaption><b>Paris</b>Rencontres stratégiques avec le réseau européen</figcaption></figure>
    <figure class="g5" style="background-image:url(${img("p_award.jpg")})"><figcaption><b>Chine</b>Coopération et échanges avec des partenaires institutionnels</figcaption></figure>
  </div>
  <div class="regions">
    ${[["Afrique de l'Ouest", "Siège à Cotonou, port d'entrée régional"], ["Asie", "Chine — fournisseurs, industrie, investisseurs"], ["Moyen-Orient", "Dubaï — énergie et pétrole"], ["Europe", "Paris — réseau européen"]]
      .map(([a, b]) => `<div>${icon("map-pin", 16)}<b>${a}</b><span>${b}</span></div>`).join("")}
  </div>`, "pg-net"));

// 13 — Le fondateur
pages.push(page(13, "09", "Le fondateur", `
  <div class="founder">
    <div class="founder-photo" style="background-image:url(${img("founder.jpg")})">
      <div class="founder-name"><b>Éric Brunnel QUENUM</b><span>Fondateur &amp; CEO</span></div>
    </div>
    <div class="founder-body">
      ${eyebrow("Le fondateur")}
      <h2 class="h2">Une vision<br><span class="hl">née du terrain.</span></h2>
      <p>SecureFlow n'est pas née d'une opportunité commerciale, mais d'une nécessité observée sur le terrain. Face à l'augmentation des fraudes, des faux fournisseurs et des pertes subies par les acteurs du commerce mondial, une réponse radicale était nécessaire.</p>
      <blockquote class="founder-q">« J'ai vu trop d'entreprises perdre des capitaux vitaux par manque de contrôle réel. SecureFlow a été créée pour être cette structure de sécurisation globale qui manquait au marché. »</blockquote>
      <div class="fz">
        <div><h4>Terrains d'opération</h4><div class="fz-chips"><span>Afrique de l'Ouest</span><span>Chine</span><span>Dubaï</span><span>Paris</span></div></div>
        <div><h4>Opérations menées</h4><div class="fz-chips"><span>Or &amp; ressources</span><span>Agro-industrie</span><span>Énergie</span></div></div>
      </div>
      <div class="exp">
        <div class="exp-num"><b>9+</b><span>années<br>de terrain</span></div>
        <ul>
          <li>${icon("globe", 15)}Import-export multi-pays</li>
          <li>${icon("landmark", 15)}Transactions complexes</li>
          <li>${icon("radar", 15)}Gestion de risques élevés</li>
          <li>${icon("users", 15)}Coordination internationale</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="word">
    <div class="word-label">Mot du fondateur</div>
    <p>« Chaque mission confiée à SecureFlow <span>engage ma responsabilité personnelle.</span> Dans le commerce international, la confiance ne se déclare pas : elle se prouve. »</p>
    <div class="word-sign">Éric Brunnel QUENUM<em>Fondateur &amp; CEO, SecureFlow</em></div>
  </div>`, "pg-founder"));

// 14 — Ce que nous apportons
const benefits = [
  ["badge-check", "Certitude avant engagement", "Vos partenaires sont identifiés et vérifiés — légalement, physiquement et opérationnellement — avant que le moindre capital ne soit engagé."],
  ["landmark", "Capital protégé", "Paiements internationaux encadrés et risques de prépaiement réduits : vos fonds ne partent que lorsque les conditions sont réunies."],
  ["ship", "Marchandises suivies", "Supervision maritime, portuaire et aérienne, contrôle de conformité et lutte contre la substitution, jusqu'à la livraison finale."],
  ["file-check", "Preuves concrètes", "Inspections sur site et rapports détaillés avec preuves visuelles : vous décidez sur des faits, pas sur des promesses."],
  ["globe", "Un réseau qui ouvre des portes", "Accès à notre réseau en Afrique, en Asie, au Moyen-Orient et en Europe, et aux opportunités d'investissement sur le continent."],
  ["lock", "Confidentialité & neutralité", "Vos informations stratégiques sont traitées avec le plus haut niveau de secret professionnel, en toute indépendance."],
];
pages.push(page(14, "10", "Ce que nous apportons", `
  ${eyebrow("Ce que nous apportons")}
  <h2 class="h2">Pourquoi s'associer<br><span class="hl">à SecureFlow.</span></h2>
  <div class="who">
    <span class="who-label">Pour qui</span>
    ${["Importateurs & exportateurs", "Traders", "Investisseurs", "Porteurs de projets industriels", "Institutions & partenaires financiers"].map((x) => `<span>${x}</span>`).join("")}
  </div>
  <div class="benefits">
    ${benefits.map(([ic, t, d]) => `<div class="benefit"><span class="ic-box">${icon(ic, 19)}</span><h3>${t}</h3><p>${d}</p></div>`).join("")}
  </div>
  <div class="frame">
    <div class="frame-head">${icon("scale", 18)}<b>Notre cadre d'intervention</b></div>
    <div class="frame-cols">
      <div><h4>Nos engagements</h4>${checks(["Respect des lois et réglementations applicables", "Neutralité et indépendance", "Confidentialité des informations traitées", "Lutte contre la fraude et les pratiques illicites"])}</div>
      <div><h4>En toute transparence</h4><ul class="dashes"><li>SecureFlow intervient comme tiers de confiance et facilitateur stratégique</li><li>SecureFlow n'est ni assureur ni garant financier</li><li>L'intervention est encadrée par les contrats conclus</li><li>Les parties demeurent responsables de leurs engagements</li></ul></div>
    </div>
  </div>`));

// 15 — Dos de couverture
pages.push(`
<section class="page back">
  <div class="cover-bg" style="background-image:url(${img("back.jpg")})"></div>
  <div class="back-shade"></div>
  <img class="cover-wm back-wm" src="${img("mark-white.png")}" alt="">
  <div class="back-main">
    <div class="logo-lockup light big"><img src="${img("mark-white.png")}" alt=""><span>SECUREFLOW</span></div>
    <h2>Vous avez une opération<br>sensible à sécuriser ?</h2>
    <p>Parlons de votre projet. Nos équipes analysent et sécurisent votre opération de A à Z, en toute confidentialité.</p>
  </div>
  <div class="contact-card">
    <div class="cc-item">${icon("map-pin", 18)}<div><b>Siège</b><span>Ilot 1480, Quartier Kouhounou<br>Cotonou — Bénin</span></div></div>
    <div class="cc-item">${icon("phone", 18)}<div><b>Téléphone</b><span>+229 50 63 63 63</span></div></div>
    <div class="cc-item">${icon("message-circle", 18)}<div><b>WhatsApp</b><span>+229 50 36 36 36</span></div></div>
    <div class="cc-item">${icon("mail", 18)}<div><b>Email</b><span>infosecureflowco@gmail.com</span></div></div>
    <div class="cc-item">${icon("globe", 18)}<div><b>Site web</b><span>secureflow.solutions</span></div></div>
  </div>
  <div class="back-legal">
    <span>SecureFlow SARL</span><span>RCCM RB/COT/26 B 41799</span><span>IFU 3202677480120</span>
    <span class="back-copy">© 2026 SecureFlow — Document confidentiel destiné à nos partenaires</span>
  </div>
</section>`);

// ---------- Styles ----------
const css = `
@font-face{font-family:Manrope;font-weight:400;src:url(file://${font("manrope", "manrope-latin-400-normal.woff2")})}
@font-face{font-family:Manrope;font-weight:500;src:url(file://${font("manrope", "manrope-latin-500-normal.woff2")})}
@font-face{font-family:Manrope;font-weight:600;src:url(file://${font("manrope", "manrope-latin-600-normal.woff2")})}
@font-face{font-family:Manrope;font-weight:700;src:url(file://${font("manrope", "manrope-latin-700-normal.woff2")})}
@font-face{font-family:Manrope;font-weight:800;src:url(file://${font("manrope", "manrope-latin-800-normal.woff2")})}
@font-face{font-family:Playfair;font-style:italic;font-weight:500;src:url(file://${font("playfair-display", "playfair-display-latin-500-italic.woff2")})}
@font-face{font-family:Playfair;font-style:normal;font-weight:600;src:url(file://${font("playfair-display", "playfair-display-latin-600-normal.woff2")})}
@page{size:A4;margin:0}
:root{
  --navy:#0A1330; --navy2:#111C45; --blue:#1624A0; --blue2:#2B4FE0; --sky:#E9EEFB; --ice:#F4F6FB;
  --ink:#0F172A; --text:#3A4459; --muted:#6B7590; --line:#DDE3F0; --gold:#C29B57; --red:#B4233A;
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{background:#888}
body{font-family:Manrope,sans-serif;color:var(--text);font-size:9.6pt;line-height:1.55;-webkit-print-color-adjust:exact;print-color-adjust:exact;font-feature-settings:"ss01"}
.page{width:210mm;height:297mm;position:relative;overflow:hidden;background:#fff;page-break-after:always;break-after:page}
.page:last-child{page-break-after:auto}
b{font-weight:700;color:var(--ink)}
.ic{flex:none;display:block}
/* ---- inner page chrome ---- */
.inner{padding:0}
.wm{position:absolute;width:150mm;right:-38mm;bottom:-30mm;opacity:.045;transform:rotate(-12deg);pointer-events:none}
.hd{position:absolute;top:0;left:0;right:0;height:19mm;padding:0 16mm;display:flex;align-items:center;justify-content:space-between;border-bottom:.3mm solid var(--line)}
.hd-brand{display:flex;align-items:center;gap:2.4mm;font-weight:800;letter-spacing:.32em;font-size:7.6pt;color:var(--ink)}
.hd-brand img{width:6.6mm;height:auto}
.hd-label{display:flex;align-items:center;gap:2.5mm;font-size:7.4pt;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);font-weight:600}
.hd-label b{color:var(--blue);font-weight:800}
.hd-label i{width:6mm;height:.3mm;background:var(--blue);display:block}
.ft{position:absolute;bottom:0;left:16mm;right:16mm;height:14mm;display:flex;align-items:center;justify-content:space-between;font-size:7pt;color:var(--muted);border-top:.3mm solid var(--line);letter-spacing:.04em}
.ft-n{font-weight:800;color:var(--ink);letter-spacing:.08em}
.ft-n em{font-style:normal;color:var(--muted);font-weight:500}
.content{position:absolute;top:19mm;bottom:14mm;left:16mm;right:16mm;padding-top:10mm;padding-bottom:6mm;display:flex;flex-direction:column}
/* ---- type ---- */
.eyebrow{display:flex;align-items:center;gap:2.5mm;font-size:7.4pt;font-weight:800;letter-spacing:.22em;text-transform:uppercase;color:var(--blue2);margin-bottom:3.5mm}
.eyebrow i{width:7mm;height:.45mm;background:var(--gold);display:block}
.eyebrow.light{color:#9DB2FF}
.h2{font-size:24pt;line-height:1.12;font-weight:800;color:var(--ink);letter-spacing:-.02em;margin-bottom:5mm}
.h2 .hl{color:var(--blue)}
.h2.light{color:#fff}
.h3{font-size:11.5pt;font-weight:800;color:var(--ink);margin:6mm 0 4mm}
.lead{font-size:11pt;line-height:1.55;color:var(--ink);font-weight:500;margin-bottom:4mm;max-width:165mm}
.lead.center{text-align:center;margin:0 auto 2mm;max-width:150mm}
p{margin-bottom:3mm}
.ic-box{width:9.5mm;height:9.5mm;border-radius:2.6mm;background:var(--sky);color:var(--blue);display:flex;align-items:center;justify-content:center;flex:none}
.ic-box.red{background:#FBEBEE;color:var(--red)}
.ic-box.gold{background:#F7EFE1;color:#9A7536}
.checks{list-style:none;display:grid;gap:1.6mm}
.checks li{display:flex;gap:2mm;align-items:flex-start;font-size:8.6pt;color:var(--ink);font-weight:500;line-height:1.4}
.checks li .ic{color:#fff;background:var(--blue2);border-radius:50%;padding:.6mm;width:3.8mm;height:3.8mm;margin-top:.35mm}
/* ---- cover ---- */
.cover,.back{background:var(--navy);color:#fff}
.cover-bg{position:absolute;inset:0;background-size:cover;background-position:center}
.cover-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,19,48,.55) 0%,rgba(10,19,48,.35) 30%,rgba(10,19,48,.88) 62%,#0A1330 82%)}
.cover-wm{position:absolute;width:175mm;right:-55mm;top:62mm;opacity:.07;transform:rotate(-12deg)}
.cover-top{position:absolute;top:16mm;left:18mm;right:18mm;display:flex;justify-content:space-between;align-items:flex-start}
.logo-lockup{display:flex;align-items:center;gap:3.5mm;font-weight:800;letter-spacing:.38em;font-size:11pt}
.logo-lockup img{width:13mm}
.logo-lockup.big{font-size:14pt;gap:4.5mm}
.logo-lockup.big img{width:17mm}
.cover-tag{text-align:right;font-size:7.6pt;letter-spacing:.18em;text-transform:uppercase;font-weight:700;line-height:1.7;color:rgba(255,255,255,.85);border-right:.6mm solid var(--gold);padding-right:3.5mm}
.cover-main{position:absolute;left:18mm;right:18mm;bottom:52mm}
.cover-kicker{display:flex;align-items:center;gap:3mm;font-size:7.8pt;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#B9C7FF;margin-bottom:7mm}
.cover-kicker i{width:10mm;height:.5mm;background:var(--gold);display:block}
.cover h1{font-size:38pt;line-height:1.06;font-weight:800;letter-spacing:-.025em;margin-bottom:7mm}
.cover h1 span{color:#8FA6FF}
.cover-main p{font-size:11.5pt;line-height:1.55;color:rgba(255,255,255,.82);max-width:150mm}
.cover-bottom{position:absolute;left:18mm;right:18mm;bottom:16mm;display:grid;grid-template-columns:repeat(3,1fr);border-top:.3mm solid rgba(255,255,255,.25);padding-top:5mm;font-size:9pt;color:#fff;font-weight:600}
.cover-bottom b{display:block;color:#8FA6FF;font-size:6.8pt;letter-spacing:.2em;text-transform:uppercase;margin-bottom:1mm;font-weight:800}
/* ---- toc ---- */
.toc-grid{display:grid;grid-template-columns:1fr 68mm;gap:10mm;flex:1}
.toc{list-style:none;margin-top:7mm}
.toc li{display:flex;align-items:center;gap:4mm;padding:3.4mm 0;border-bottom:.3mm solid var(--line);font-size:11pt;font-weight:700;color:var(--ink)}
.toc li b{font-size:8pt;color:var(--blue2);width:7mm;letter-spacing:.06em}
.toc li i{flex:1;border-bottom:.35mm dotted #C3CBDD;transform:translateY(1.2mm)}
.toc li em{font-style:normal;font-size:8.5pt;color:var(--muted);font-weight:700}
.brief{background:var(--navy);color:#C9D3F2;border-radius:4mm;padding:8mm 7mm;align-self:start;position:relative;overflow:hidden}
.brief-title{display:flex;align-items:center;gap:2.5mm;color:#fff;font-weight:800;font-size:10.5pt;margin-bottom:5mm;padding-bottom:4mm;border-bottom:.3mm solid rgba(255,255,255,.15)}
.brief-title .ic{color:#8FA6FF}
.brief dt{font-size:6.6pt;letter-spacing:.18em;text-transform:uppercase;color:#8FA6FF;font-weight:800;margin-top:3.6mm}
.brief dd{font-size:8.8pt;color:#fff;font-weight:600;line-height:1.4;margin-top:.8mm}
.brief-quote{margin-top:6mm;padding-top:4mm;border-top:.3mm solid rgba(255,255,255,.15);font-family:Playfair;font-style:italic;font-size:11pt;color:#fff;line-height:1.4}
/* ---- about ---- */
.two-col{display:grid;grid-template-columns:1fr 70mm;gap:8mm;margin-bottom:6mm}
.tags{display:flex;gap:2mm;margin-top:4mm;flex-wrap:wrap}
.tags span{display:flex;align-items:center;gap:1.5mm;padding:1.8mm 3.2mm;border-radius:10mm;background:var(--sky);color:var(--blue);font-size:7.4pt;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.photo{background-size:cover;background-position:center;border-radius:4mm;position:relative}
.photo.tall{min-height:92mm}
.photo-badge{position:absolute;left:4mm;right:4mm;bottom:4mm;background:rgba(10,19,48,.88);border-radius:3mm;padding:3.2mm 4mm;display:flex;gap:3mm;align-items:center;color:#8FA6FF}
.photo-badge b{color:#fff;display:block;font-size:9pt}
.photo-badge span{color:#C9D3F2;font-size:7.6pt}
.mission{background:linear-gradient(120deg,var(--navy),var(--navy2) 60%,#1A2A86);border-radius:4mm;padding:8mm 10mm;color:#fff;margin-bottom:6mm;position:relative;overflow:hidden}
.mission-label{font-size:7.2pt;letter-spacing:.22em;text-transform:uppercase;font-weight:800;color:var(--gold);margin-bottom:3mm}
.mission blockquote{font-family:Playfair;font-style:italic;font-size:15pt;line-height:1.38}
.mission blockquote span{color:#9DB2FF}
.pillars{display:grid;grid-template-columns:repeat(3,1fr);gap:5mm}
.pillars div{border:.3mm solid var(--line);border-radius:3.5mm;padding:5mm;background:#fff}
.pillars b{display:block;margin:3mm 0 1mm;font-size:10pt}
.pillars p{font-size:8.6pt;margin:0;line-height:1.45}
/* ---- problem ---- */
.band-photo{height:62mm;border-radius:4mm;background-size:cover;background-position:center 40%;position:relative;overflow:hidden;margin-bottom:7mm;flex:none}
.band-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(10,19,48,.95) 0%,rgba(10,19,48,.7) 55%,rgba(10,19,48,.2))}
.band-text{position:absolute;left:9mm;bottom:8mm}
.band-text .eyebrow{color:#9DB2FF}
.band-text .h2{margin:0}
.big-quote{font-family:Playfair;font-style:italic;font-size:14pt;line-height:1.42;color:var(--ink);text-align:center;margin:0 8mm 5mm}
.big-quote span{color:var(--red)}
.risk-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:3.6mm}
.risk{display:flex;gap:3.5mm;align-items:center;border:.3mm solid var(--line);border-radius:3mm;padding:4mm;background:#fff}
.risk b{font-size:9.4pt;display:block}
.risk p{margin:0;font-size:8.4pt;color:var(--muted)}
.note{display:flex;align-items:center;gap:2.5mm;margin-top:auto;padding:3.5mm 4.5mm;background:var(--ice);border-left:.8mm solid var(--blue2);border-radius:0 2mm 2mm 0;font-size:8.8pt;color:var(--ink);font-weight:600}
.note .ic{color:var(--blue2)}
/* ---- values ---- */
.values{display:grid;grid-template-columns:repeat(2,1fr);gap:5mm;margin:3mm 0 7mm}
.value{border:.3mm solid var(--line);border-radius:4mm;padding:6mm;background:#fff;position:relative}
.value-top{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4mm}
.value-top em{font-style:normal;font-weight:800;font-size:20pt;color:var(--sky);line-height:1;-webkit-text-stroke:.25mm #C7D2F4}
.value h3{font-size:12pt;font-weight:800;color:var(--ink);margin-bottom:2mm}
.value p{font-size:8.8pt;margin:0}
.approach{display:grid;grid-template-columns:56mm 1fr;border-radius:4mm;overflow:hidden;background:var(--navy);flex:1;min-height:0}
.approach-photo{background-size:cover;background-position:center}
.approach-body{padding:7mm 8mm;color:#C9D3F2}
.approach-body h3{color:#fff;font-size:14pt;font-weight:800;margin-bottom:1.5mm}
.approach-body p{font-size:9pt}
.approach-grid{display:grid;grid-template-columns:1fr 1fr;gap:4mm 6mm;margin-top:3mm}
.approach-grid div{border-top:.4mm solid var(--gold);padding-top:2.5mm}
.approach-grid b{color:#fff;display:block;font-size:10pt}
.approach-grid span{font-size:8.4pt;line-height:1.4;display:block;margin-top:.8mm}
/* ---- services ---- */
.svc-list{display:grid;gap:6mm}
.svc{display:grid;grid-template-columns:66mm 1fr;gap:7mm;align-items:stretch}
.svc.flip{grid-template-columns:1fr 66mm}
.svc.flip .svc-img{order:2}
.svc-img{border-radius:4mm;background-size:cover;background-position:center;min-height:56mm;position:relative}
.svc-n{position:absolute;top:3.5mm;left:3.5mm;background:rgba(10,19,48,.85);color:#fff;font-weight:800;font-size:9pt;padding:1.4mm 3mm;border-radius:2mm;letter-spacing:.1em}
.svc-body{padding:2mm 0}
.svc-head{display:flex;align-items:center;gap:3.5mm;margin-bottom:3mm}
.svc-head h3{font-size:13.5pt;font-weight:800;color:var(--ink);line-height:1.2}
.svc-body p{font-size:9.4pt;margin-bottom:3.5mm}
.svc-body .checks{grid-template-columns:1fr 1fr;gap:2mm 4mm}
.svc-summary{margin-top:auto;background:var(--navy);border-radius:4mm;padding:7mm 8mm;color:#fff}
.svc-summary-head h3{font-size:14pt;font-weight:800;margin-bottom:5mm}
.flow{display:flex;align-items:center;justify-content:space-between}
.flow-step{display:flex;flex-direction:column;align-items:center;text-align:center;width:27mm}
.flow-step span{width:13mm;height:13mm;border-radius:50%;background:rgba(143,166,255,.14);border:.3mm solid rgba(143,166,255,.4);display:flex;align-items:center;justify-content:center;color:#B9C7FF;margin-bottom:2.5mm}
.flow-step b{color:#fff;font-size:9.6pt}
.flow-step em{font-style:normal;font-size:7.8pt;color:#9FAED6}
.flow-arrow{color:var(--gold);margin-top:-9mm}
/* ---- steps ---- */
.steps{display:grid;gap:0;margin-top:2mm}
.step{display:grid;grid-template-columns:13mm 1fr;gap:4mm}
.step-rail{display:flex;flex-direction:column;align-items:center}
.step-n{width:11mm;height:11mm;border-radius:50%;background:var(--blue);color:#fff;font-weight:800;font-size:9pt;display:flex;align-items:center;justify-content:center;flex:none;box-shadow:0 0 0 1.4mm var(--sky)}
.step-rail i{flex:1;width:.5mm;background:linear-gradient(var(--blue),#C7D2F4);margin:1.5mm 0}
.step-card{border:.3mm solid var(--line);border-radius:3.5mm;padding:4mm 5mm;margin-bottom:3.6mm;background:#fff}
.step-head{display:flex;align-items:center;gap:3mm;margin-bottom:1.5mm}
.step-head .ic-box{width:8mm;height:8mm;border-radius:2.2mm}
.step-head h3{font-size:11pt;font-weight:800;color:var(--ink)}
.step-card p{font-size:8.8pt;margin-bottom:2mm}
.chips{display:flex;flex-wrap:wrap;gap:1.6mm}
.chips span{font-size:7.6pt;font-weight:600;color:var(--blue);background:var(--sky);padding:1.1mm 2.6mm;border-radius:10mm}
.objective{margin-top:auto;display:flex;align-items:center;gap:4mm;background:var(--navy);color:#fff;border-radius:3mm;padding:4.5mm 6mm;font-size:9.6pt;font-weight:600}
.objective b{color:var(--gold);font-size:7.2pt;letter-spacing:.22em;text-transform:uppercase;font-weight:800}
/* ---- sectors ---- */
.sector-grid{display:grid;grid-template-columns:1fr 1fr;gap:5mm;flex:1;min-height:0}
.sector-grid.three{grid-template-columns:repeat(3,1fr);flex:none;margin-bottom:6mm}
.sector{border:.3mm solid var(--line);border-radius:4mm;overflow:hidden;background:#fff;display:flex;flex-direction:column}
.sector-img{height:40mm;background-size:cover;background-position:center;position:relative;flex:none}
.sector-grid.three .sector-img{height:32mm}
.sector-ic{position:absolute;left:4mm;bottom:-4.75mm;width:9.5mm;height:9.5mm;border-radius:2.6mm;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;box-shadow:0 0 0 1mm #fff}
.sector-body{padding:7.5mm 5mm 5mm}
.sector h3{font-size:11.2pt;font-weight:800;color:var(--ink);margin-bottom:1.5mm;line-height:1.25}
.sector p{font-size:8.6pt;color:var(--muted);margin-bottom:3mm;line-height:1.45}
.sector-grid.three .sector h3{font-size:10pt}
.sector-grid.three .checks li{font-size:8pt}
.featured{display:grid;grid-template-columns:70mm 1fr;border-radius:4mm;overflow:hidden;background:var(--navy);flex:1;min-height:0}
.featured-img{background-size:cover;background-position:center}
.featured-body{padding:7mm 8mm;color:#C9D3F2}
.featured-top{display:flex;align-items:center;gap:3mm;margin-bottom:3mm}
.pill{font-size:7pt;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--navy);background:var(--gold);padding:1.2mm 3mm;border-radius:10mm}
.featured h3{color:#fff;font-size:15pt;font-weight:800;margin-bottom:2mm}
.featured p{font-size:9.2pt}
.featured .checks li{color:#fff}
.featured .checks li .ic{background:var(--gold);color:var(--navy)}
/* ---- ops ---- */
.ops{display:grid;gap:5mm;margin-top:2mm}
.op{display:grid;grid-template-columns:62mm 1fr;border:.3mm solid var(--line);border-radius:4mm;overflow:hidden;background:#fff}
.op-img{background-size:cover;background-position:center;min-height:46mm;position:relative}
.op-img span{position:absolute;top:3.5mm;left:3.5mm;background:var(--gold);color:var(--navy);font-weight:800;font-size:7.4pt;letter-spacing:.14em;text-transform:uppercase;padding:1.2mm 2.8mm;border-radius:1.5mm}
.op-body{padding:6mm 7mm}
.op-body em{font-style:normal;font-size:7.2pt;font-weight:800;letter-spacing:.2em;text-transform:uppercase;color:var(--blue2)}
.op-body h3{font-size:13pt;font-weight:800;color:var(--ink);margin:1mm 0 3.5mm}
.op-body ol{list-style:none;counter-reset:s;display:grid;grid-template-columns:1fr 1fr;gap:2.2mm 5mm}
.op-body li{counter-increment:s;display:flex;gap:2.4mm;align-items:center;font-size:8.8pt;font-weight:600;color:var(--ink)}
.op-body li::before{content:counter(s);width:5mm;height:5mm;border-radius:50%;background:var(--sky);color:var(--blue);font-size:7pt;font-weight:800;display:flex;align-items:center;justify-content:center;flex:none}
.ops-note{margin-top:auto;display:flex;align-items:center;gap:2.5mm;font-size:8.4pt;color:var(--muted);font-weight:600}
.ops-note .ic{color:var(--blue2)}
/* ---- gallery ---- */
.gallery{display:grid;grid-template-columns:1.25fr 1fr 1fr;grid-template-rows:62mm 50mm;gap:4mm;margin:2mm 0 6mm}
.gallery figure{border-radius:3.5mm;background-size:cover;background-position:center;position:relative;overflow:hidden}
.gallery .g1{grid-row:span 2}
.gallery .g2{background-position:center 20%}
.gallery figcaption{position:absolute;left:0;right:0;bottom:0;padding:9mm 4mm 3.5mm;background:linear-gradient(transparent,rgba(10,19,48,.92) 45%);color:#D6DEF7;font-size:7.6pt;line-height:1.4}
.gallery figcaption b{display:block;color:#fff;font-size:7.2pt;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.8mm}
.regions{display:grid;grid-template-columns:repeat(4,1fr);gap:4mm;margin-top:auto}
.regions div{border-top:.6mm solid var(--blue);padding-top:3mm;color:var(--blue)}
.regions b{display:block;color:var(--ink);font-size:9.4pt;margin:1.5mm 0 .5mm}
.regions span{display:block;font-size:8pt;color:var(--muted);line-height:1.4}
/* ---- founder ---- */
.founder{display:grid;grid-template-columns:72mm 1fr;gap:9mm;margin-bottom:7mm}
.founder-photo{border-radius:4mm;background-size:cover;background-position:center 30%;min-height:132mm;position:relative;overflow:hidden}
.founder-name{position:absolute;left:0;right:0;bottom:0;padding:14mm 5mm 5mm;background:linear-gradient(transparent,rgba(10,19,48,.95) 55%);color:#fff}
.founder-name b{color:#fff;display:block;font-size:11.5pt}
.founder-name span{font-size:7.4pt;letter-spacing:.18em;text-transform:uppercase;color:var(--gold);font-weight:800}
.founder-body p{font-size:9.4pt}
.founder-q{font-family:Playfair;font-style:italic;font-size:11.5pt;line-height:1.45;color:var(--ink);border-left:.8mm solid var(--gold);padding:1mm 0 1mm 5mm;margin:4mm 0 5mm}
.exp{display:grid;grid-template-columns:30mm 1fr;gap:5mm;align-items:center;background:var(--ice);border-radius:3.5mm;padding:5mm}
.exp-num b{display:block;font-size:30pt;line-height:1;color:var(--blue);font-weight:800}
.exp-num span{font-size:7.6pt;letter-spacing:.14em;text-transform:uppercase;font-weight:800;color:var(--muted)}
.exp ul{list-style:none;display:grid;gap:2mm}
.exp li{display:flex;gap:2.5mm;align-items:center;font-size:8.8pt;font-weight:700;color:var(--ink)}
.exp li .ic{color:var(--blue2)}
.word{margin-top:auto;background:linear-gradient(120deg,var(--navy),#1A2A86);border-radius:4mm;padding:8mm 10mm;color:#fff}
.word-label{font-size:7.2pt;letter-spacing:.22em;text-transform:uppercase;font-weight:800;color:var(--gold);margin-bottom:3mm}
.word p{font-family:Playfair;font-style:italic;font-size:14pt;line-height:1.42;margin-bottom:4mm}
.word p span{color:#9DB2FF}
.word-sign{font-weight:800;font-size:9.4pt}
.word-sign em{display:block;font-style:normal;font-weight:500;font-size:8pt;color:#9FAED6}
/* ---- benefits ---- */
.who{display:flex;flex-wrap:wrap;gap:2mm;align-items:center;margin-bottom:6mm}
.who span{font-size:8pt;font-weight:700;color:var(--ink);border:.3mm solid var(--line);border-radius:10mm;padding:1.4mm 3.2mm;background:#fff}
.who .who-label{border:none;background:var(--blue);color:#fff;letter-spacing:.16em;text-transform:uppercase;font-size:7pt;font-weight:800}
.benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:4.5mm;margin-bottom:6mm}
.benefit{border:.3mm solid var(--line);border-radius:3.5mm;padding:5mm;background:#fff}
.benefit h3{font-size:10pt;font-weight:800;color:var(--ink);margin:3.5mm 0 1.5mm;line-height:1.25}
.benefit p{font-size:8.3pt;margin:0;line-height:1.45}
.frame{margin-top:auto;border-radius:4mm;background:var(--ice);border:.3mm solid var(--line);padding:6mm 7mm}
.frame-head{display:flex;align-items:center;gap:2.5mm;color:var(--blue);margin-bottom:4mm}
.frame-head b{font-size:11pt}
.frame-cols{display:grid;grid-template-columns:1fr 1fr;gap:8mm}
.frame h4{font-size:7.2pt;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);font-weight:800;margin-bottom:3mm}
.dashes{list-style:none;display:grid;gap:1.6mm}
.dashes li{font-size:8.6pt;color:var(--ink);font-weight:500;padding-left:5mm;position:relative;line-height:1.4}
.dashes li::before{content:"";position:absolute;left:0;top:2.1mm;width:2.5mm;height:.35mm;background:var(--gold)}
/* ---- back ---- */
.back-shade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,19,48,.82),rgba(10,19,48,.93) 45%,#0A1330 70%)}
.back-wm{top:auto;bottom:-40mm;right:-50mm}
.back-main{position:absolute;top:34mm;left:18mm;right:18mm}
.back-main h2{font-size:30pt;line-height:1.1;font-weight:800;letter-spacing:-.02em;margin:18mm 0 5mm}
.back-main p{font-size:11.5pt;color:rgba(255,255,255,.82);max-width:140mm}
.contact-card{position:absolute;left:18mm;right:18mm;top:150mm;display:grid;grid-template-columns:1fr 1fr;gap:6mm 10mm;background:rgba(255,255,255,.06);border:.3mm solid rgba(255,255,255,.16);border-radius:4mm;padding:8mm}
.cc-item{display:flex;gap:3.5mm;align-items:flex-start;color:#8FA6FF}
.cc-item b{display:block;color:#8FA6FF;font-size:6.8pt;letter-spacing:.2em;text-transform:uppercase;font-weight:800;margin-bottom:.8mm}
.cc-item span{color:#fff;font-size:10.5pt;font-weight:600;line-height:1.4}
.back-legal{position:absolute;left:18mm;right:18mm;bottom:16mm;display:flex;flex-wrap:wrap;gap:2mm 6mm;border-top:.3mm solid rgba(255,255,255,.2);padding-top:5mm;font-size:8pt;color:#9FAED6;font-weight:600}
.back-copy{width:100%;color:#6F7FA8;font-weight:500}

/* ---- ajustements de remplissage par page ---- */
.pg-toc .toc li{padding:4.6mm 0}
.pg-toc .toc-grid{align-items:stretch}
.pg-toc .brief{align-self:stretch;display:flex;flex-direction:column}
.pg-toc .brief-quote{margin-top:auto}
.pg-toc .brief dt{margin-top:5mm}
.pg-about .photo.tall{min-height:112mm}
.pg-about .pillars{margin-top:auto}
.pg-problem .band-photo{height:80mm}
.pg-problem .risk{padding:5.5mm 5mm}
.pg-problem .risk-grid{gap:4.5mm}
.pg-problem .big-quote{margin:2mm 8mm 6mm}
.pg-svc1 .svc-list{flex:1;align-content:space-between}
.pg-svc1 .svc-img{min-height:64mm}
.pg-svc2 .svc-list{gap:9mm}
.pg-svc2 .svc-img{min-height:84mm}
.pg-svc2 .svc-body{display:flex;flex-direction:column;justify-content:center}
.pg-steps .h2{margin-bottom:3mm}
.pg-steps .lead{margin-bottom:3mm}
.pg-steps .step-card{padding:3.2mm 5mm;margin-bottom:2.6mm}
.pg-steps .step-card p{margin-bottom:1.6mm}
.pg-steps .objective{margin-top:2mm}
.pg-ops .ops{flex:1;grid-auto-rows:1fr;margin-bottom:5mm}
.pg-ops .op-body{display:flex;flex-direction:column;justify-content:center}
.pg-net .gallery{grid-template-rows:80mm 66mm}
.pg-founder .founder-photo{min-height:150mm}
.pg-founder .founder-body{display:flex;flex-direction:column}
.pg-founder .exp{margin-top:auto}
.fz{display:grid;gap:4mm;margin-top:1mm}
.fz h4{font-size:7.2pt;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);font-weight:800;margin-bottom:2mm}
.fz-chips{display:flex;flex-wrap:wrap;gap:1.6mm}
.fz-chips span{font-size:8.4pt;font-weight:700;color:var(--blue);background:var(--sky);padding:1.4mm 3.2mm;border-radius:10mm}
.pg-founder .founder{flex:1;margin-bottom:6mm}
.pg-founder .word{margin-top:0}
.featured-body{display:flex;flex-direction:column}
.featured-foot{margin-top:auto;padding-top:5mm;border-top:.3mm solid rgba(255,255,255,.15);display:flex;flex-wrap:wrap;gap:1.6mm}
.featured-foot span{font-size:7.4pt;font-weight:700;color:#D6DEF7;border:.3mm solid rgba(255,255,255,.2);border-radius:10mm;padding:1mm 2.6mm}
`;

const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>SecureFlow — Présentation institutionnelle</title><style>${css}</style></head><body>${pages.join("\n")}</body></html>`;
fs.writeFileSync(path.join(DIR, "brochure.html"), html);

const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" });
const p = await browser.newPage({ viewport: { width: 794, height: 1123 }, deviceScaleFactor: 2 });
await p.goto("file://" + path.join(DIR, "brochure.html"), { waitUntil: "networkidle" });
await p.evaluate(() => document.fonts.ready);
// Contrôle de débordement : tout élément sortant de sa page est signalé
const overflow = await p.evaluate(() => {
  const out = [];
  document.querySelectorAll(".page").forEach((pg, i) => {
    const pr = pg.getBoundingClientRect();
    const content = pg.querySelector(".content");
    if (content && content.scrollHeight > content.clientHeight + 1) out.push(`page ${i + 1}: contenu déborde de ${content.scrollHeight - content.clientHeight}px`);
    pg.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width && (r.bottom > pr.bottom + 1 || r.right > pr.right + 1) && !el.closest(".wm,.cover-wm,.cover-bg") && !el.classList.contains("wm") && !el.classList.contains("cover-wm"))
        out.push(`page ${i + 1}: ${el.tagName}.${el.className} dépasse`);
    });
  });
  return out;
});
console.log(overflow.length ? overflow.join("\n") : "Aucun débordement");
if (process.argv.includes("--png")) {
  const n = await p.evaluate(() => document.querySelectorAll(".page").length);
  for (let i = 0; i < n; i++) {
    const el = (await p.$$(".page"))[i];
    await el.screenshot({ path: path.join(DIR, `../pv/p${String(i + 1).padStart(2, "0")}.png`) });
  }
}
await p.pdf({ path: path.join(DIR, "SecureFlow_Presentation_2026.pdf"), format: "A4", printBackground: true, preferCSSPageSize: true });
await browser.close();
