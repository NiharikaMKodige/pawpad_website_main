
const { useState: useStateE, useEffect: useEffectE, useRef: useRefE } = React;
const EXPERIENCE_STEPS = [
  {
    no: "01",
    title: "A Little Hello",
    body: "Tell us about your pet \u2014 their personality, preferences, and anything you'd like us to know.",
    img: "assets/img/pawpad/experience-a-little-hello.webp",
    pos: "right center"
  },
  {
    no: "02",
    title: "A Calm Welcome",
    body: "Your pet arrives in a quiet, appointment-only space designed to help them settle in comfortably.",
    img: "assets/img/pawpad/experience-a-calm-welcome-snapshot.webp"
  },
  {
    no: "03",
    title: "Getting to Know Them",
    body: "We take a moment to assess their coat, comfort levels, and individual needs before we begin.",
    img: "assets/img/pawpad/experience-getting-to-know-them-snapshot.webp"
  },
  {
    no: "04",
    title: "Care at Their Pace",
    body: "Grooming is tailored to your pet, with plenty of patience, breaks, and gentle handling along the way.",
    img: "assets/img/pawpad/experience-care-at-their-pace-snapshot.webp"
  },
  {
    no: "05",
    title: "One-on-One Attention",
    body: "No cages. No rushing. Just dedicated care focused entirely on your pet's wellbeing.",
    img: "assets/img/pawpad/grooming-snapshot-new.jpg"
  },
  {
    no: "06",
    title: "Ready to Head Home",
    body: "A fresh coat, a comfortable pet, and personalised recommendations for care between visits.",
    img: "assets/img/pawpad/experience-ready-to-head-home-snapshot.webp"
  }
];
function ExperienceHero() {
  return /* @__PURE__ */ React.createElement("section", { className: "exp-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow reveal in" }, "The Pawpad experience"), /* @__PURE__ */ React.createElement("h1", { className: "h-display reveal in", style: { marginTop: 24, maxWidth: "18ch" } }, "What it actually ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "feels like"), " to bring your pet here"), /* @__PURE__ */ React.createElement("p", { className: "lead reveal in", style: { marginTop: 28, maxWidth: "60ch" } }, "At Pawpad, appointments are intentionally spaced out to ensure that grooming is never rushed. We work at a pace that allows pets to settle, adjust, and feel comfortable throughout the grooming process.")), /* @__PURE__ */ React.createElement("style", null, `
        .exp-hero { padding: 180px 0 60px; }
      `));
}
function StepJourney() {
  return /* @__PURE__ */ React.createElement("section", { className: "journey" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "journey-main" }, EXPERIENCE_STEPS.map((s, i) => /* @__PURE__ */ React.createElement("article", { key: s.no, className: "j-step reveal" }, /* @__PURE__ */ React.createElement("div", { className: "j-step-img blob-1" }, /* @__PURE__ */ React.createElement("img", { src: s.img, alt: s.title, style: { objectPosition: s.pos || "center center" } }), /* @__PURE__ */ React.createElement("span", { className: "j-step-no" }, s.no)), /* @__PURE__ */ React.createElement("div", { className: "j-step-text" }, /* @__PURE__ */ React.createElement("h3", { className: "h-2" }, s.title), /* @__PURE__ */ React.createElement("p", null, s.body)))))), /* @__PURE__ */ React.createElement("style", null, `
        .journey { background: var(--champagne-soft); padding: 40px 0 80px; }
        .journey-main {
          max-width: 1060px;
          margin-left: auto;
        }
        .j-step {
          display: grid; grid-template-columns: minmax(300px, 440px) 1fr; gap: clamp(32px, 5vw, 64px);
          align-items: center;
          padding: 48px 0;
          border-bottom: 1px dashed color-mix(in oklab, var(--ink), transparent 85%);
        }
        .j-step:last-child { border-bottom: 0; }
        .j-step-img {
          aspect-ratio: 4/4.4;
          overflow: hidden; background: transparent;
          position: relative;
          animation: morph 14s ease-in-out infinite alternate;
        }
        body[data-motion="still"] .j-step-img { animation: none; }
        .j-step-img img { width: 100%; height: 100%; object-fit: cover; }
        .j-step-no {
          position: absolute; top: 20px; left: 20px;
          font-family: var(--f-display); font-size: 56px;
          color: var(--cream-bg);
          text-shadow: 0 4px 24px color-mix(in oklab, var(--ink), transparent 40%);
          line-height: 1;
        }
        .j-step-text h3 {
          font-family: var(--f-display);
          font-size: clamp(32px, 3.5vw, 46px);
          line-height: 1.1;
          color: var(--ink);
          margin: 0;
        }
        .j-step-text p { margin-top: 18px; font-size: 17px; line-height: 1.7; max-width: 48ch; }
        @media (max-width: 768px) {
          .j-step { grid-template-columns: 1fr; gap: 28px; padding: 32px 0; }
          .journey-main { margin-left: 0; }
        }
      `));
}
function HandlingPhilosophy() {
  return /* @__PURE__ */ React.createElement("section", { className: "handling" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "handling-grid" }, /* @__PURE__ */ React.createElement("div", { className: "handling-images reveal" }, /* @__PURE__ */ React.createElement("div", { className: "h-img-1 blob-2" }, /* @__PURE__ */ React.createElement("img", { src: "assets/img/pawpad/grooming-snapshot-new.jpg", alt: "Gentle grooming at Pawpad" })), /* @__PURE__ */ React.createElement("div", { className: "h-img-2 blob-1" }, /* @__PURE__ */ React.createElement("img", { src: "assets/img/pawpad/grooming-page-grooming-massage.webp", alt: "A dog calmly relaxing during a gentle massage" })), /* @__PURE__ */ React.createElement("div", { className: "handling-badge" }, /* @__PURE__ */ React.createElement(PawIcon, { size: 20, color: "var(--driftwood)" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, "Calm"), /* @__PURE__ */ React.createElement("span", null, "appointment-only care with room to pause")))), /* @__PURE__ */ React.createElement("div", { className: "handling-text reveal" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "The Pawpad experience"), /* @__PURE__ */ React.createElement("h2", { className: "h-1", style: { marginTop: 18, maxWidth: "15ch" } }, "Grooming at ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "your pet's pace")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 28, maxWidth: "54ch" } }, "Every session is guided by the individual animal. We pay close attention to body language, comfort levels, and stress signals, adapting our approach as needed. If a pet requires more time, more breaks, or a slower introduction to a particular part of grooming, that is exactly what they receive."), /* @__PURE__ */ React.createElement("p", { style: { maxWidth: "54ch" } }, "The grooming environment has been designed to minimise unnecessary stress and overstimulation. Appointments are staggered to avoid crowded spaces, excessive noise, and overwhelming activity."), /* @__PURE__ */ React.createElement("p", { style: { maxWidth: "54ch" } }, "Every pet receives dedicated attention throughout their appointment. We take the time to understand their individual needs, preferences, sensitivities, and comfort levels before and during the grooming process."), /* @__PURE__ */ React.createElement("p", { style: { maxWidth: "54ch" } }, "Our approach to animal handling has been shaped by years of working with rescue animals, community animals, and pets with a wide range of personalities and experiences. Trust cannot be forced. It is built through patience, consistency, and respect for what an animal is communicating."), /* @__PURE__ */ React.createElement("p", { style: { maxWidth: "54ch" } }, "For anxious or reactive pets, we assess each pet individually and adapt our handling and grooming approach to suit their comfort levels. We also offer guidance to help owners maintain coat care and hygiene in ways that are appropriate for their individual pet.")))), /* @__PURE__ */ React.createElement("style", null, `
        .handling { background: var(--cream-bg); }
        .handling-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .handling-images { position: relative; aspect-ratio: 1/1.1; }
        .h-img-1, .h-img-2 { position: absolute; overflow: hidden; }
        .h-img-1 img, .h-img-2 img { width: 100%; height: 100%; object-fit: cover; }
        .h-img-1 { left: 0; top: 0; width: 64%; height: 60%; background: var(--driftwood); }
        .h-img-2 { right: 0; bottom: 0; width: 60%; height: 56%; background: var(--eagle); box-shadow: -20px 30px 60px -30px color-mix(in oklab, var(--ink), transparent 60%); }
        .handling-badge {
          position: absolute; left: 8%; bottom: 8%;
          background: var(--white);
          padding: 16px 22px;
          border-radius: 18px;
          display: flex; align-items: center; gap: 14px;
          z-index: 3;
          box-shadow: 0 24px 40px -20px color-mix(in oklab, var(--ink), transparent 60%);
        }
        body[data-palette="dark"] .handling-badge { background: color-mix(in oklab, var(--champagne), black 5%); }
        .handling-badge strong { display: block; font-family: var(--f-display); font-size: 26px; color: var(--driftwood); line-height: 1; }
        .handling-badge span { font-size: 12px; color: var(--ink-mute); }
        .handling-text p { margin-top: 18px; font-size: 16px; line-height: 1.7; }
        @media (max-width: 900px) {
          .handling-grid { grid-template-columns: 1fr; gap: 36px; }
          .handling-images { aspect-ratio: 1.1/1; }
        }
      `));
}
function ProductsStrip() {
  const products = [
    { name: "Coat-specific care", note: "Products are selected according to each pet's coat type, skin condition, sensitivities, and grooming requirements." },
    { name: "Healthy skin", note: "Shampoos, conditioners, treatments, and coat care products are chosen to support skin and coat maintenance." },
    { name: "Sensitive pets", note: "Particular care is taken when working with pets who have sensitive skin, allergies, coat concerns, or specific grooming needs." },
    { name: "Gentle formulas", note: "We prioritise products that are gentle, safe, and effective without unnecessarily harsh ingredients or overpowering fragrances." },
    { name: "Individual plans", note: "Rather than taking a one-product-fits-all approach, each product choice is tailored to the individual animal." },
    { name: "Long-term comfort", note: "Every product used should contribute positively to your pet's comfort, wellbeing, and long-term coat health." }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "products" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "products-head reveal" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Products we use"), /* @__PURE__ */ React.createElement("h2", { className: "h-1", style: { marginTop: 18, maxWidth: "22ch" } }, "What we put ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "on them"), ", matters"), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 24, maxWidth: "54ch" } }, "We use professional-grade grooming products selected according to each pet's individual coat type, skin condition, sensitivities, and grooming requirements.")), /* @__PURE__ */ React.createElement("div", { className: "products-grid reveal" }, products.map((p, i) => /* @__PURE__ */ React.createElement("div", { key: p.name, className: "product-card", style: { transitionDelay: `${i * 70}ms` } }, /* @__PURE__ */ React.createElement("div", { className: "product-no" }, "0", i + 1), /* @__PURE__ */ React.createElement("h4", { className: "h-3", style: { fontFamily: "var(--f-display)" } }, p.name), /* @__PURE__ */ React.createElement("p", null, p.note))))), /* @__PURE__ */ React.createElement("style", null, `
        .products { background: var(--champagne); }
        .products-head { max-width: 720px; margin-bottom: 56px; }
        .products-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        .product-card {
          padding: 28px;
          background: var(--cream-bg);
          border-radius: 18px;
          display: flex; flex-direction: column; gap: 6px;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          transition: all var(--t-fast) var(--ease);
        }
        body[data-palette="dark"] .product-card { background: color-mix(in oklab, var(--champagne), black 5%); }
        .product-card:hover { transform: translateY(-4px); background: var(--white); }
        body[data-palette="dark"] .product-card:hover { background: color-mix(in oklab, var(--champagne), black 0%); }
        .product-no { font-size: 11px; letter-spacing: .2em; color: var(--driftwood); }
        .product-card p { font-size: 13.5px; color: var(--ink-mute); margin: 0; }
        @media (max-width: 800px) {
          .products-grid { grid-template-columns: 1fr 1fr; }
        }
      `));
}
function ExperiencePage() {
  useReveal();
  return /* @__PURE__ */ React.createElement("div", { className: "page-enter" }, /* @__PURE__ */ React.createElement(ExperienceHero, null), /* @__PURE__ */ React.createElement(StepJourney, null), /* @__PURE__ */ React.createElement(HandlingPhilosophy, null), /* @__PURE__ */ React.createElement(ProductsStrip, null));
}
Object.assign(window, { ExperiencePage });
