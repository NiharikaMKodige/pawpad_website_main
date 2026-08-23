
const { useState: useStateP } = React;
const COURSE_LIST = [
  {
    key: "professional-pet-4week",
    title: "4-Week Professional Pet Grooming Certificate (Dogs & Cats)",
    duration: "4 weeks \xB7 Monday\u2013Friday",
    summary: "Professional hands-on training in both dog and cat grooming",
    spots: "Small batches \xB7 Hands-on training",
    price: "Rs.",
    img: "assets/img/pawpad/courses-cover-new.webp",
    for: "Aspiring professional pet groomers who want comprehensive training in both dog and cat grooming, with the confidence to work in salons or establish their own grooming studio.",
    learn: "Professional grooming techniques, pet handling, breed and coat assessment, grooming equipment and hygiene, pet first aid, studio operations, customer communication, branding, and business fundamentals.",
    includes: "Professional Certificate upon successful practical assessment, placement facilitation, and guidance on setting up your own grooming studio."
  },
  {
    key: "professional-dog-3week",
    title: "3-Week Professional Dog Grooming Certificate",
    duration: "3 weeks \xB7 Monday\u2013Friday",
    summary: "Professional hands-on training focused on dog grooming",
    spots: "Small batches \xB7 Hands-on training",
    price: "Rs.",
    img: "assets/img/pawpad/course-dog-grooming.webp",
    for: "Beginners and aspiring professional dog groomers looking to build industry-ready practical skills and begin a career in dog grooming.",
    learn: "Breed-specific grooming, bathing, drying, de-shedding, coat care, scissoring techniques, nail trimming, pet handling, equipment maintenance, first aid, and professional salon practices.",
    includes: "Professional Certificate upon successful practical assessment, placement facilitation, and business guidance for those looking to establish their own grooming studio."
  },
  {
    key: "professional-cat-3week",
    title: "3-Week Professional Cat Grooming Certificate",
    duration: "3 weeks \xB7 Monday\u2013Friday",
    summary: "Professional hands-on training focused on cat grooming",
    spots: "Small batches \xB7 Hands-on training",
    price: "Rs.",
    img: "assets/img/pawpad/course-cat-grooming.webp",
    for: "Beginners and aspiring professional cat groomers who want specialised feline grooming skills in a practical studio environment.",
    learn: "Cat handling, coat assessment, bathing, drying, de-matting, hygiene grooming, nail trimming, equipment care, feline first aid awareness, and professional grooming practices.",
    includes: "Professional Certificate upon successful practical assessment, placement facilitation, and business guidance for setting up your own grooming studio."
  },
  {
    key: "weekend-professional-pet",
    title: "Weekend Professional Pet Grooming Certificate (Dogs & Cats)",
    duration: "8 weekends (16 sessions) \xB7 Saturdays & Sundays \xB7 9:30 AM\u20135:30 PM",
    summary: "Professional hands-on training covering both dog and cat grooming",
    spots: "Flexible weekend learning",
    price: "Rs.",
    img: "assets/img/pawpad/courses-cover-new.webp",
    for: "Working professionals, students, or career changers who want to become professional pet groomers without stepping away from their weekday commitments. This course follows the same curriculum, practical training, and professional certification as the weekday intensive programme, delivered over weekends."
  },
  {
    key: "weekend-professional-dog",
    title: "Weekend Professional Dog Grooming Certificate",
    duration: "6 weekends (12 sessions) \xB7 Saturdays & Sundays \xB7 9:30 AM\u20135:30 PM",
    summary: "Professional hands-on training focused on dog grooming",
    spots: "Flexible weekend learning",
    price: "Rs.",
    img: "assets/img/pawpad/course-dog-grooming.webp",
    for: "Beginners, pet parents, and aspiring dog groomers who need the flexibility of weekend learning while developing practical, industry-ready dog grooming skills. The course mirrors the weekday programme but is spread across weekend sessions for greater convenience."
  },
  {
    key: "weekend-professional-cat",
    title: "Weekend Professional Cat Grooming Certificate",
    duration: "6 weekends (12 sessions) \xB7 Saturdays & Sundays \xB7 9:30 AM\u20135:30 PM",
    summary: "Professional hands-on training focused on cat grooming",
    spots: "Flexible weekend learning",
    price: "Rs.",
    img: "assets/img/pawpad/course-cat-grooming.webp",
    for: "Beginners, pet parents, and aspiring cat groomers looking to build professional feline grooming skills while balancing work, studies, or other commitments. This flexible weekend programme delivers the same hands-on learning and professional certification as the weekday course."
  },
  {
    key: "dog-1week",
    title: "1-Week Dog Grooming \u2013 Foundation Certificate",
    duration: "5 days \xB7 Monday\u2013Friday",
    spots: "Maximum of two students at a time",
    price: "Rs. 35,000",
    deposit: "Non-refundable deposit: Rs. 14,000",
    balance: "Balance Rs. 21,000 payable on Day 1",
    img: "assets/img/pawpad/course-dog-grooming.webp",
    for: "Beginners who want hands-on, practical grooming skills in a shorter, intensive format. Practical sessions use dogs already accustomed to grooming and handling. This is a narrower-scope certificate than our 3-week Professional Certificate \u2014 it does not include the studio-setup/business module or placement facilitation.",
    curriculum: [
      { day: "Day 1 \u2014 Equipment, Safety & Assessment", items: ["Use, clean and sterilise grooming equipment", "Canine anatomy basics", "Breed and coat type identification", "Handling techniques for calm dogs"] },
      { day: "Day 2 \u2014 Bathing & Coat Care", items: ["Bathing technique", "Drying techniques", "Deshedding", "Ear and eye cleaning"] },
      { day: "Day 3 \u2014 Maintenance Skills", items: ["Nail clipping", "Brush and comb technique", "Dematting and knot removal", "Hygiene clip"] },
      { day: "Day 4 \u2014 Scissoring Fundamentals", items: ["Scissoring technique for light shaping and finishing touches \u2014 taught and practiced on a training model, not a live dog. Does not cover a complete haircut or face trimming."] },
      { day: "Day 5 \u2014 First Aid & Assessment", items: ["First aid essentials \u2014 preparing for emergencies, recognising signs of distress", "Practical skills assessment covering bathing, drying, brushing, nail trim and hygiene clip on live dogs", "Scissoring is assessed as a finishing touch on the training model \u2014 light shaping and blending, not a complete haircut or face trimming, which require more time than this format allows", "Foundation Certificate awarded"] }
    ],
    certificate: "On successful completion, students receive a Foundation Certificate in Dog Grooming. Please note: this reflects course attendance and practical skill-building, and is distinct from our 3-week Professional Certificate.",
    cancellation: "The booking deposit is non-refundable. Once the course begins, the balance fee is non-refundable and non-transferable to another person. A missed day within the 5-day course cannot be made up within that batch, as the format is sequential and each day builds on the last. At Pawpad's discretion, a student may repeat the missed day(s) in a later batch at an additional fee, or repeat the full course at a reduced re-enrolment rate. No refund is made for days not attended."
  },
  {
    key: "cat-1week",
    title: "1-Week Cat Grooming \u2013 Foundation Certificate",
    duration: "5 days \xB7 Monday\u2013Friday",
    spots: "Maximum of two students at a time",
    price: "Rs. 35,000",
    deposit: "Non-refundable deposit: Rs. 14,000",
    balance: "Balance Rs. 21,000 payable on Day 1",
    img: "assets/img/pawpad/course-cat-grooming.webp",
    for: "Beginners who want hands-on, practical cat grooming skills in a shorter, intensive format. This is a narrower-scope certificate than our 3-week Professional Certificate \u2014 it does not include the studio-setup/business module or placement facilitation.",
    curriculum: [
      { day: "Day 1 \u2014 Feline Handling & Assessment", items: ["Feline anatomy basics", "Reading feline stress signals", "Low-stress restraint and handling", "Grooming equipment"] },
      { day: "Day 2 \u2014 Bathing & Coat Care", items: ["Bathing technique", "Ear and eye cleaning", "Nail trimming"] },
      { day: "Day 3 \u2014 Maintenance Skills", items: ["Brushing technique", "Dematting", "Deshedding"] },
      { day: "Day 4 \u2014 Clip Demonstration, Skills Review & First Aid", items: ["Sanitary clip and basic lion-clip technique \u2014 demonstrated by the facilitator only", "Supervised review and practice of bathing, brushing, dematting and nail trim technique", "First aid essentials \u2014 preparing for emergencies, recognising signs of distress"] },
      { day: "Day 5 \u2014 Assessment", items: ["Practical skills assessment", "Foundation Certificate awarded"] }
    ],
    certificate: "On successful completion, students receive a Foundation Certificate in Cat Grooming. Please note: this reflects course attendance and practical skill-building, and is distinct from our 3-week Professional Certificate.",
    cancellation: "The booking deposit is non-refundable. Once the course begins, the balance fee is non-refundable and non-transferable to another person. A missed day within the 5-day course cannot be made up within that batch, as the format is sequential and each day builds on the last. At Pawpad's discretion, a student may repeat the missed day(s) in a later batch at an additional fee, or repeat the full course at a reduced re-enrolment rate. No refund is made for days not attended."
  },
  {
    key: "anxious-pets",
    title: "At-Home Grooming & Handling Course for Anxious Pets",
    duration: "2 weekends \xB7 4 days \xB7 Saturdays & Sundays",
    spots: "Tailored to your dog's pace",
    price: "Rs. 30,000",
    deposit: "Non-refundable deposit: Rs. 15,000",
    balance: "Balance Rs. 15,000 payable on Day 1",
    img: "assets/img/pawpad/course-at-home.webp",
    for: "Pet parents of anxious, fearful or reactive dogs who want to build home grooming and handling skills at their pet's own pace \u2014 no restraint, no cage, dog-paced, behaviour-led. This is not a professional grooming qualification.",
    curriculum: [
      { day: "Weekend 1, Day 1 \u2014 Reading the Dog", items: ["Recognising fear, stress and anxiety body language", "Consent-based handling \u2014 pause points and reading readiness", "Tool desensitisation (brush, clippers, dryer, nail trimmer \u2014 introduced without use)", "A brief, procedure-free studio visit with your own dog to build early comfort with the space"] },
      { day: "Weekend 1, Day 2 \u2014 Core Maintenance Technique", items: ["Brushing and dematting technique", "Nail trim technique \u2014 locating the quick, recognising a bad trim early", "Ear cleaning technique and spotting infection", "Full bathing and drying sequence", "Technique practiced hands-on", "Take-home tool desensitisation exercises for the week ahead"] },
      { day: "Weekend 2, Day 3 \u2014 Your Dog's Second Visit", items: ["A guided, pace-matched session applying Weekend 1's brushing, nail and ear technique with your own dog \u2014 timed to your dog's individual readiness, not the clock"] },
      { day: "Weekend 2, Day 4 \u2014 Haircut Fundamentals & Home Plan", items: ["Scissoring and clipping fundamentals, tool safety near skin, and sanitary-area clipping \u2014 practiced on a training model", "A guided session applying what's realistic for your dog that day", "An individual consult covering your dog's specific triggers, a written home-care plan, and honest guidance on which grooming tasks to continue at home versus when to book a professional groomer"] }
    ],
    certificate: "Participants receive a Certificate of Participation, along with a written home-care plan specific to their pet. This certificate reflects course attendance and is not a professional grooming qualification.",
    cancellation: "The booking deposit is non-refundable. Once the course begins, the balance fee is non-refundable and non-transferable to another person. This course is structured around each dog's individual pace \u2014 Day 3 and Day 4 content is adapted to what the dog is ready for on that day, at the facilitator's discretion, and may mean a modified session rather than the full activity described in the curriculum. Course fee covers instruction, guidance and the written home-care plan; it does not guarantee a specific behavioural outcome or that a given dog will be ready for hands-on grooming work by Day 4. No refund is issued if a dog's pace requires a modified Day 3 or Day 4 session."
  }
];
function CoursesHero() {
  return /* @__PURE__ */ React.createElement("section", { className: "c-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container c-hero-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "eyebrow reveal in" }, "Pawpad courses"), /* @__PURE__ */ React.createElement("h1", { className: "h-display reveal in c-course-title", style: { marginTop: 24, maxWidth: "18ch" } }, "Become a Professional ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)", whiteSpace: "nowrap" } }, "Pet Groomer")), /* @__PURE__ */ React.createElement("p", { className: "lead reveal in", style: { marginTop: 28, maxWidth: "58ch" } }, "A hands-on grooming course designed for animal lovers looking to build the skills, confidence, and practical experience needed to start a career in pet grooming."), /* @__PURE__ */ React.createElement("p", { className: "reveal in", style: { marginTop: 18, maxWidth: "62ch" } }, "Learn dog grooming, cat grooming, handling techniques, coat care, hygiene, safety, and business fundamentals through personalised training with experienced professionals.")), /* @__PURE__ */ React.createElement("div", { className: "c-hero-image reveal in" }, /* @__PURE__ */ React.createElement("img", { src: "assets/img/pawpad/courses-cover-new.webp", alt: "Pawpad grooming course", fetchpriority: "high", decoding: "async" }))), /* @__PURE__ */ React.createElement("style", null, `
        .c-hero { padding: 180px 0 60px; }
        .c-hero-grid { display: grid; grid-template-columns: 1.05fr .9fr; gap: 64px; align-items: center; }
        .c-hero-image { background: transparent; }
        .c-hero-image img { width: 100%; height: auto; display: block; object-fit: contain; }
        @media (max-width: 900px) { .c-hero-grid { grid-template-columns: 1fr; gap: 34px; } .c-course-title em { white-space: normal !important; } }
      `));
}
function CourseCards({ onBook }) {
  const [open, setOpen] = useStateP(null);
  return /* @__PURE__ */ React.createElement("section", { className: "course-cards" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "cc-head reveal" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Course Overview"), /* @__PURE__ */ React.createElement("h2", { className: "h-1", style: { marginTop: 18, maxWidth: "22ch" } }, "Hands-on training in ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "conscious grooming"))), /* @__PURE__ */ React.createElement("div", { className: "cc-grid" }, COURSE_LIST.map((c, i) => {
    var _a;
    const isOpen = open === c.key;
    return /* @__PURE__ */ React.createElement("article", { key: c.key, className: "cc-card reveal " + (isOpen ? "open" : "") }, /* @__PURE__ */ React.createElement("div", { className: "cc-img" }, /* @__PURE__ */ React.createElement("img", { src: c.img, alt: c.title })), /* @__PURE__ */ React.createElement("div", { className: "cc-body" }, /* @__PURE__ */ React.createElement("h3", { className: "h-3" }, c.title), /* @__PURE__ */ React.createElement("div", { className: "cc-meta" }, /* @__PURE__ */ React.createElement("span", null, c.duration), /* @__PURE__ */ React.createElement("span", null, c.spots)), c.summary && /* @__PURE__ */ React.createElement("p", { className: "cc-summary" }, c.summary), (c.deposit || c.balance) && /* @__PURE__ */ React.createElement("div", { className: "cc-fees" }, c.deposit && /* @__PURE__ */ React.createElement("span", { className: "cc-deposit" }, c.deposit), c.balance && /* @__PURE__ */ React.createElement("span", { className: "cc-balance" }, c.balance)), /* @__PURE__ */ React.createElement("p", { className: "cc-for" }, /* @__PURE__ */ React.createElement("strong", null, "Who this is for:"), " ", c.for), isOpen && /* @__PURE__ */ React.createElement("div", { className: "cc-detail" }, c.learn && /* @__PURE__ */ React.createElement("p", { className: "cc-for" }, /* @__PURE__ */ React.createElement("strong", null, "You'll learn:"), " ", c.learn), c.includes && /* @__PURE__ */ React.createElement("p", { className: "cc-for" }, /* @__PURE__ */ React.createElement("strong", null, "Includes:"), " ", c.includes), c.curriculum && /* @__PURE__ */ React.createElement("h5", null, "Curriculum"), (_a = c.curriculum) == null ? void 0 : _a.map((day) => /* @__PURE__ */ React.createElement("div", { key: day.day, className: "cc-day" }, /* @__PURE__ */ React.createElement("p", { className: "cc-day-title" }, day.day), /* @__PURE__ */ React.createElement("ul", null, day.items.map((item, idx) => /* @__PURE__ */ React.createElement("li", { key: idx }, /* @__PURE__ */ React.createElement(PawIcon, { size: 10, color: "var(--driftwood)" }), " ", item))))), (c.certificate || c.cancellation) && /* @__PURE__ */ React.createElement("div", { className: "cc-cert-block" }, c.certificate && /* @__PURE__ */ React.createElement("p", { className: "cc-for" }, /* @__PURE__ */ React.createElement("strong", null, "Certificate:"), " ", c.certificate), c.cancellation && /* @__PURE__ */ React.createElement("p", { className: "cc-for" }, /* @__PURE__ */ React.createElement("strong", null, "Cancellation & Withdrawal:"), " ", c.cancellation))), /* @__PURE__ */ React.createElement("div", { className: "cc-foot" }, /* @__PURE__ */ React.createElement("span", { className: "cc-price" }, c.price), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" } }, /* @__PURE__ */ React.createElement("button", { className: "g-pkg-toggle", "aria-expanded": isOpen, onClick: () => setOpen((current) => current === c.key ? null : c.key) }, isOpen ? "Show less" : "Course details", " ", /* @__PURE__ */ React.createElement("span", { className: "g-pkg-arrow" }, isOpen ? "\u2212" : "+")), /* @__PURE__ */ React.createElement("button", {
      className: "btn btn-ghost btn-sm", onClick: () => {
        if (window.addToCart) {
          const parsedPrice = c.price.includes("35,000") ? 35000 : c.price.includes("30,000") ? 30000 : 25000;
          window.addToCart({
            id: c.key,
            title: c.title,
            category: "Courses",
            price: parsedPrice,
            priceDisplay: c.price,
            desc: c.summary || c.duration,
            requiresPetInfo: c.key === "anxious-pets",
            img: c.img
          });
        }
      }
    }, "+ Add to Cart")))));
  }))), /* @__PURE__ */ React.createElement("style", null, `
        .course-cards { background: var(--cream-bg); padding-top: 0; }
        .cc-head { margin-bottom: 48px; max-width: 720px; }
        .cc-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .cc-card {
          background: var(--white); border-radius: 26px; overflow: hidden;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          display: grid; grid-template-columns: minmax(280px, 420px) 1fr;
          transition: all var(--t-fast) var(--ease);
        }
        body[data-palette="dark"] .cc-card { background: color-mix(in oklab, var(--champagne), black 5%); }
        .cc-card:hover { transform: translateY(-4px); box-shadow: 0 30px 60px -40px color-mix(in oklab, var(--ink), transparent 60%); }
        .cc-img { aspect-ratio: auto; min-height: 100%; overflow: hidden; }
        .cc-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s var(--ease); }
        .cc-card:hover .cc-img img { transform: scale(1.04); }
        .cc-body { padding: 28px; display: flex; flex-direction: column; gap: 14px; flex: 1; }
        .cc-meta { display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--ink-mute); }
        .cc-fees { display: flex; flex-direction: column; gap: 2px; }
        .cc-summary { margin: 0; color: var(--ink); font-size: 14px; font-weight: 600; line-height: 1.5; }
        .cc-deposit, .cc-balance { font-size: 12.5px; color: var(--driftwood); font-weight: 600; }
        .cc-for { font-size: 13.5px; margin: 0; color: var(--ink-soft); line-height: 1.55; }
        .cc-for strong { color: var(--driftwood); }
        .cc-detail { display: flex; flex-direction: column; gap: 12px; }
        .cc-detail h5 {
          font-family: var(--f-body); font-size: 11px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase; color: var(--ink-mute); margin: 12px 0 16px;
        }
        .cc-day { margin-bottom: 18px; }
        .cc-day-title {
          font-size: 12px; font-weight: 700; letter-spacing: .06em;
          color: var(--ink); margin: 0 0 8px; text-transform: uppercase;
        }
        .cc-day ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; font-size: 13px; }
        .cc-day li { display: flex; align-items: flex-start; gap: 8px; color: var(--ink-soft); line-height: 1.5; }
        .cc-cert-block {
          margin-top: 18px; padding-top: 18px;
          border-top: 1px dashed color-mix(in oklab, var(--ink), transparent 80%);
          display: flex; flex-direction: column; gap: 10px;
        }
        .cc-foot {
          margin-top: auto; padding-top: 18px;
          border-top: 1px dashed color-mix(in oklab, var(--ink), transparent 80%);
          display: flex; justify-content: space-between; align-items: center;
          gap: 14px; flex-wrap: wrap;
        }
        .cc-price { font-family: var(--f-display); font-size: 26px; color: var(--driftwood); }
        .g-pkg-toggle {
          font-size: 13px; font-weight: 600;
          display: inline-flex; align-items: center; gap: 8px; color: var(--ink);
        }
        .g-pkg-arrow {
          font-family: var(--f-body); font-size: 16px; font-weight: 600;
          width: 26px; height: 26px; background: var(--champagne);
          border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; line-height: 1;
        }
        @media (max-width: 860px) { .cc-card { grid-template-columns: 1fr; } .cc-img { aspect-ratio: 4/3; } }
      `));
}
function CredibilityStrip() {
  return /* @__PURE__ */ React.createElement("section", { className: "cred" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "cred-grid" }, /* @__PURE__ */ React.createElement("div", { className: "cred-text reveal" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Why Learn With Pawpad?"), /* @__PURE__ */ React.createElement("h2", { className: "h-1", style: { marginTop: 18, maxWidth: "16ch" } }, "Learn directly ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "from Leena")), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 28, maxWidth: "56ch" } }, "Learn directly from Leena Munikempanna, founder of Pawpad and a professional groomer with over a decade of industry experience. Students benefit not only from technical grooming knowledge, but also from Pawpad's philosophy of behaviour-led, compassionate animal care."), /* @__PURE__ */ React.createElement("ul", { className: "cred-bullets" }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Learn through real-world experience."), " Training combines theory with practical, hands-on grooming experience alongside professional groomers."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Small batches, personalised attention."), " A maximum of two students at a time allows for focused guidance and personalised feedback."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Train in both dogs and cats."), " Pawpad offers the opportunity to learn both canine and feline grooming for a broader professional skill set."), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("strong", null, "Leena's qualifications."), " Certified Master Cat Groomer (PCGAA), PetCPR+ Certified, Certified Canine Esthetician, and Certified Coat Expert."))), /* @__PURE__ */ React.createElement("div", { className: "cred-images reveal" }, /* @__PURE__ */ React.createElement("div", { className: "cred-portrait blob-1" }, /* @__PURE__ */ React.createElement("img", { src: "assets/img/pawpad/courses-learn-from-leena.webp", alt: "Leena Munikempanna, founder of Pawpad", loading: "lazy", decoding: "async" }))))), /* @__PURE__ */ React.createElement("style", null, `
        .cred { background: var(--champagne-soft); }
        .cred-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .cred-bullets { list-style: none; padding: 0; margin: 28px 0 0; display: flex; flex-direction: column; gap: 14px; }
        .cred-bullets li { padding-left: 24px; position: relative; font-size: 15px; line-height: 1.65; }
        .cred-bullets li::before { content: ""; position: absolute; left: 0; top: 11px; width: 12px; height: 1px; background: var(--driftwood); }
        .cred-bullets strong { color: var(--ink); font-weight: 600; }
        .cred-images { position: relative; display: flex; align-items: center; }
        .cred-portrait { width: 100%; }
        .cred-portrait img { width: 100%; height: auto; display: block; object-fit: contain; }
        @media (max-width: 900px) { .cred-grid { grid-template-columns: 1fr; gap: 36px; } }
      `));
}
function CoursesPage({ onBook }) {
  useReveal();
  return /* @__PURE__ */ React.createElement("div", { className: "page-enter" }, /* @__PURE__ */ React.createElement(CoursesHero, null), /* @__PURE__ */ React.createElement(CourseCards, { onBook }), /* @__PURE__ */ React.createElement(CredibilityStrip, null), /* @__PURE__ */ React.createElement(StudentTestimonials, null), /* @__PURE__ */ React.createElement(CourseCTA, { onBook }));
}
function StudentTestimonials() {
  const testimonials = [
    {
      name: "Bhavya Srinivas",
      studio: "Woof Magic Spa",
      quote: "Thank you so much Leena for the great experience you gave me on my new journey. I feel very confident in the fundamental work and I learned so much about handling pets with different temperaments, especially cats."
    },
    {
      name: "Clare Pachuau",
      studio: "A Tiny Groomer",
      quote: "I highly recommend the Pawpad Grooming Studio Academy to all prospective groomers. The instructor's knowledge, skills, experience, and expertise gave me a curriculum that exceeded my expectations."
    },
    {
      name: "Deeksha Shetty",
      studio: "The Purple Pawlor",
      quote: "Leena's approach to pet grooming is always comfort and well-being first. Working with Pawpad helped me understand animal body language and shaped the way I care for every pet in my own business."
    },
    {
      name: "Sanchari Mukherjee",
      studio: "The Bubble Bath",
      quote: "Training under Leena was a transformative experience. She taught grooming techniques while always stressing the comfort and well-being of the pets under our care."
    },
    {
      name: "Renjitha",
      studio: "Earthy Paws",
      quote: "Magic happened here and my life changed forever. Pawpad is highly recommended for anyone interested in starting their career as a groomer."
    }
  ];
  return /* @__PURE__ */ React.createElement("section", { className: "student-testimonials" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "st-head reveal" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Student Testimonials"), /* @__PURE__ */ React.createElement("h2", { className: "h-1", style: { marginTop: 18, maxWidth: "18ch" } }, "What students carry forward")), /* @__PURE__ */ React.createElement("div", { className: "st-grid" }, testimonials.map((item, i) => /* @__PURE__ */ React.createElement("article", { key: item.name, className: "st-card reveal", style: { transitionDelay: `${i * 60}ms` } }, /* @__PURE__ */ React.createElement("p", null, item.quote), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("strong", null, item.name), /* @__PURE__ */ React.createElement("span", null, item.studio)))))), /* @__PURE__ */ React.createElement("style", null, `
        .student-testimonials { background: var(--cream-bg); }
        .st-head { margin-bottom: 44px; }
        .st-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .st-card {
          background: var(--white);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-height: 280px;
        }
        .st-card p { margin: 0; font-size: 16px; line-height: 1.7; color: var(--ink-soft); }
        .st-card strong { display: block; color: var(--ink); }
        .st-card span { display: block; margin-top: 4px; color: var(--driftwood); font-size: 14px; }
        @media (max-width: 1000px) { .st-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 680px) { .st-grid { grid-template-columns: 1fr; } }
      `));
}
function CourseCTA({ onBook }) {
  const [form, setForm] = useStateP({ name: "", email: "", phone: "" });
  const [sent, setSent] = useStateP(false);
  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email && !form.phone) return;
    window.hsSubmit && window.hsSubmit("courses", form);
    setSent(true);
  };
  return /* @__PURE__ */ React.createElement("section", { className: "course-cta" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "course-cta-inner reveal" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Course Enquiry"), /* @__PURE__ */ React.createElement("h2", { className: "h-1", style: { marginTop: 18, maxWidth: "18ch" } }, "Ready to Start Your Grooming Journey?"), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 24, maxWidth: "58ch" } }, "Courses run on a rolling basis throughout the year. Leave your details and we'll help you find the right start date for your training.")), sent ? /* @__PURE__ */ React.createElement("div", { className: "course-form-sent" }, /* @__PURE__ */ React.createElement(PawIcon, { size: 44, color: "var(--driftwood)" }), /* @__PURE__ */ React.createElement("h3", { className: "h-2", style: { margin: "16px 0 8px" } }, "We'll be in touch soon"), /* @__PURE__ */ React.createElement("p", { style: { margin: 0, color: "var(--ink-mute)", fontSize: 15, lineHeight: 1.6 } }, "The Pawpad team will reach out with course dates and batch availability.")) : /* @__PURE__ */ React.createElement("form", { className: "course-form", onSubmit: handleSubmit }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Name"), /* @__PURE__ */ React.createElement("input", { value: form.name, onChange: upd("name"), placeholder: "Your name" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Email"), /* @__PURE__ */ React.createElement("input", { type: "email", value: form.email, onChange: upd("email"), placeholder: "you@example.com" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Phone"), /* @__PURE__ */ React.createElement("input", { type: "tel", value: form.phone, onChange: upd("phone"), placeholder: "96630 77496" })), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", type: "submit" }, "Register interest ", /* @__PURE__ */ React.createElement(Arrow, null))))), /* @__PURE__ */ React.createElement("style", null, `
        .course-cta { background: var(--cream-bg); }
        .course-cta-inner {
          padding: 48px;
          border-radius: 24px;
          background: var(--champagne-soft);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          display: grid;
          grid-template-columns: 1fr minmax(280px, 420px);
          gap: 42px;
          align-items: center;
        }
        .course-form { display: grid; gap: 16px; }
        .course-form .btn { margin-top: 8px; justify-content: center; }
        .course-form-sent { display: flex; flex-direction: column; }
        @media (max-width: 860px) { .course-cta-inner { grid-template-columns: 1fr; padding: 30px; } }
      `));
}
function BoardingPage({ onBook }) {
  useReveal();
  return /* @__PURE__ */ React.createElement("div", { className: "page-enter" },
    /* @__PURE__ */ React.createElement("section", { className: "editorial-page" },
      /* @__PURE__ */ React.createElement("div", { className: "container editorial-container" },
        /* @__PURE__ */ React.createElement("p", { className: "editorial-eyebrow reveal in" }, "PAWPAD \xB7 BOARDING"),
        /* @__PURE__ */ React.createElement("h1", { className: "editorial-title reveal in" }, "Boarding, Reimagined"),
        /* @__PURE__ */ React.createElement("p", { className: "editorial-subtitle reveal in" }, "Trial Day & Overnight Stay \u2014 What's Included"),
        /* @__PURE__ */ React.createElement("hr", { className: "editorial-divider reveal in" }),

        /* @__PURE__ */ React.createElement("div", { className: "editorial-section reveal in" },
          /* @__PURE__ */ React.createElement("h2", { className: "editorial-heading" }, "Trial Day"),
          /* @__PURE__ */ React.createElement("p", { className: "editorial-price" }, "\u20B9850 per dog"),
          /* @__PURE__ */ React.createElement("p", { className: "editorial-lead" }, "A full day with us, so both you and we can see if it\u2019s a good fit before committing to an overnight stay. Currently open to small dogs only."),
          /* @__PURE__ */ React.createElement("ul", { className: "editorial-bullets" },
            /* @__PURE__ */ React.createElement("li", null, "Feeding on your dog's regular schedule \u2014 our standard meals are home-cooked, with chicken, pumpkin, carrot, beans, sweet potato, and rice"),
            /* @__PURE__ */ React.createElement("li", null, "Rest and quiet time in the same space used for overnight boarding"),
            /* @__PURE__ */ React.createElement("li", null, "Direct observation from our team throughout the day"),
            /* @__PURE__ */ React.createElement("li", null, "A conversation with you at pickup on how the day went, and whether we're moving forward together")
          ),
          /* @__PURE__ */ React.createElement("div", { className: "editorial-callout" },
            "Trial days don't include walks \u2014 activity happens on-site, supervised, within the boarding space itself. If your dog has any food allergies, let us know in advance. If your dog is on vet-specified food, you'll need to provide it for the day. Paid separately from any future boarding stay."
          )
        ),

        /* @__PURE__ */ React.createElement("div", { className: "editorial-section reveal in" },
          /* @__PURE__ */ React.createElement("h2", { className: "editorial-heading" }, "Overnight Boarding"),
          /* @__PURE__ */ React.createElement("p", { className: "editorial-price" }, "\u20B91,000 per dog, per night"),
          /* @__PURE__ */ React.createElement("p", { className: "editorial-lead" }, "A calm, supervised overnight stay in the same space and with the same small cohort your dog got to know during their trial day. Currently open to small dogs only."),
          /* @__PURE__ */ React.createElement("ul", { className: "editorial-bullets" },
            /* @__PURE__ */ React.createElement("li", null, "Overnight human supervision, always \u2014 never left alone"),
            /* @__PURE__ */ React.createElement("li", null, "Feeding on your dog's regular schedule \u2014 home-cooked meals of chicken, pumpkin, carrot, beans, sweet potato, and rice"),
            /* @__PURE__ */ React.createElement("li", null, "Rest and quiet time in a space designed to reduce stress, with never more than four dogs boarding at once"),
            /* @__PURE__ */ React.createElement("li", null, "Ongoing supervised time with the other dogs in the cohort")
          ),
          /* @__PURE__ */ React.createElement("div", { className: "editorial-callout" },
            "A completed trial day is required before booking an overnight stay \u2014 it's how we make sure your dog is a good fit before an overnight commitment. Walks aren't included; activity stays on-site and supervised, same as the trial day. If your dog has any food allergies, let us know in advance. If your dog is on vet-specified food, you'll need to provide it. No minimum or maximum stay length."
          )
        )
      )
    ),
    /* @__PURE__ */ React.createElement("style", null, `
      .editorial-page { padding: 180px 0 60px; }
      .editorial-container { max-width: 820px; margin: 0 auto; }
      .editorial-eyebrow {
        font-family: var(--f-body);
        font-size: 11.5px;
        font-weight: 700;
        letter-spacing: .2em;
        text-transform: uppercase;
        color: var(--driftwood);
        margin: 0 0 20px;
      }
      .editorial-title {
        font-family: var(--f-display);
        font-size: clamp(38px, 4.5vw, 54px);
        font-weight: 400;
        line-height: 1.15;
        color: var(--ink);
        margin: 0 0 16px;
      }
      .editorial-subtitle {
        font-size: 16.5px;
        color: var(--ink-soft);
        margin: 0 0 28px;
        line-height: 1.5;
      }
      .editorial-divider {
        border: none;
        border-top: 1px solid color-mix(in oklab, var(--ink), transparent 86%);
        margin: 28px 0 48px;
      }
      .editorial-section {
        margin-bottom: 54px;
      }
      .editorial-heading {
        font-family: var(--f-display);
        font-size: clamp(28px, 3.2vw, 36px);
        font-weight: 400;
        color: var(--ink);
        margin: 0 0 8px;
      }
      .editorial-price {
        font-size: 19px;
        font-weight: 600;
        color: var(--driftwood);
        margin: 0 0 20px;
      }
      .editorial-lead {
        font-style: italic;
        font-size: 15.5px;
        line-height: 1.7;
        color: var(--ink-soft);
        margin: 0 0 24px;
      }
      .editorial-bullets {
        list-style: none;
        padding: 0;
        margin: 0 0 28px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }
      .editorial-bullets li {
        position: relative;
        padding-left: 20px;
        font-size: 15px;
        line-height: 1.65;
        color: var(--ink-soft);
      }
      .editorial-bullets li::before {
        content: "";
        position: absolute;
        left: 2px;
        top: 9px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--driftwood);
      }
      .editorial-callout {
        background: #f7efe3;
        border-radius: 14px;
        padding: 24px 28px;
        font-size: 14.5px;
        line-height: 1.7;
        color: var(--ink-soft);
        margin-top: 28px;
      }
      @media (max-width: 900px) {
        .editorial-page { padding: 140px 0 40px; }
        .editorial-container { max-width: 100%; }
      }
    `)
  );
}

function MyotherapyPage({ onBook }) {
  useReveal();
  return /* @__PURE__ */ React.createElement("div", { className: "page-enter" },
    /* @__PURE__ */ React.createElement("section", { className: "editorial-page" },
      /* @__PURE__ */ React.createElement("div", { className: "container editorial-container" },
        /* @__PURE__ */ React.createElement("p", { className: "editorial-eyebrow reveal in" }, "PAWPAD \xB7 MYOTHERAPY"),
        /* @__PURE__ */ React.createElement("h1", { className: "editorial-title reveal in" }, "Myotherapy \u2013 Coming Soon"),
        /* @__PURE__ */ React.createElement("hr", { className: "editorial-divider reveal in" }),
        /* @__PURE__ */ React.createElement("div", { className: "editorial-content reveal in" },
          /* @__PURE__ */ React.createElement("p", { className: "editorial-lead" },
            "Ever noticed a subtle change in how your dog moves \u2014 a slight shift in gait, a new hesitation before jumping onto the couch or into the car, needing a boost for stairs they used to take without a second thought? A calm, quiet dog isn't always a relaxed one, either. Sometimes it's a dog who's learned to move less, because moving hurts \u2014 and it's easy to miss, especially in a dog you already think of as \"chilled\" or \"lazy.\""
          ),
          /* @__PURE__ */ React.createElement("p", { className: "editorial-text" },
            "Myotherapy is gentle, hands-on bodywork for dogs \u2014 targeted massage and movement techniques that work with the whole body, not just wherever seems sore, to ease tension and support mobility. It's genuinely for every dog: keeping a dog feeling at their best, helping a puppy build good movement habits, supporting a senior through the slower years. But dogs with musculoskeletal issues \u2014 stiffness, old injuries, post-op recovery, arthritis, or a gait that just doesn't look quite right \u2014 are the ones who see the most benefit, often within just a few sessions."
          ),
          /* @__PURE__ */ React.createElement("p", { className: "editorial-text" },
            "Curious about the methodology? ",
            /* @__PURE__ */ React.createElement("a", {
              href: "https://www.galenmyotherapy.com",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "editorial-link"
            }, "Visit Galen Myotherapy"),
            ". Join the waitlist to be the first to know when sessions open."
          ),
          /* @__PURE__ */ React.createElement("hr", { className: "editorial-divider-sub" }),
          /* @__PURE__ */ React.createElement("p", { className: "editorial-note" },
            "Pawpad \xB7 Details current as of this document's creation date."
          )
        )
      )
    ),
    /* @__PURE__ */ React.createElement("style", null, `
      .editorial-page { padding: 180px 0 60px; }
      .editorial-container { max-width: 820px; margin: 0 auto; }
      .editorial-eyebrow {
        font-family: var(--f-body);
        font-size: 11.5px;
        font-weight: 700;
        letter-spacing: .2em;
        text-transform: uppercase;
        color: var(--driftwood);
        margin: 0 0 20px;
      }
      .editorial-title {
        font-family: var(--f-display);
        font-size: clamp(38px, 4.5vw, 54px);
        font-weight: 400;
        line-height: 1.15;
        color: var(--ink);
        margin: 0 0 16px;
      }
      .editorial-divider {
        border: none;
        border-top: 1px solid color-mix(in oklab, var(--ink), transparent 86%);
        margin: 28px 0 44px;
      }
      .editorial-divider-sub {
        border: none;
        border-top: 1px solid color-mix(in oklab, var(--ink), transparent 88%);
        margin: 48px 0 24px;
      }
      .editorial-lead {
        font-style: italic;
        font-size: 16px;
        line-height: 1.8;
        color: var(--ink-soft);
        margin: 0 0 28px;
      }
      .editorial-text {
        font-size: 16px;
        line-height: 1.8;
        color: var(--ink-soft);
        margin: 0 0 28px;
      }
      .editorial-link {
        color: var(--driftwood);
        text-decoration: underline;
        text-underline-offset: 3px;
        font-weight: 500;
        transition: color var(--t-fast) var(--ease);
      }
      .editorial-link:hover {
        color: var(--driftwood-deep);
      }
      .editorial-note {
        font-style: italic;
        font-size: 13.5px;
        color: var(--ink-mute);
        margin: 0 0 40px;
        opacity: .9;
      }
      @media (max-width: 900px) {
        .editorial-page { padding: 140px 0 40px; }
        .editorial-container { max-width: 100%; }
      }
    `)
  );
}

Object.assign(window, { CoursesPage, BoardingPage, MyotherapyPage });
