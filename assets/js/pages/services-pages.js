const { useState: useStateP } = React;
const COURSE_LIST = [
  {
    key: "foundation-grooming",
    title: "Foundation Course in Grooming",
    price: "₹95,000",
    priceNum: 95000,
    duration: "7 weeks",
    knowMoreUrl: "course-foundations.html",
    enrollUrl: "enroll-foundations.html",
    desc: "A 7-week foundation-level grooming certification for complete beginners building toward a professional grooming career with both dogs and cats. Learn consent-based handling, anatomy, stress signals, bathing, coat care, scissoring, and clipping without restraint or force.",
    for: "Complete beginners building toward a professional grooming career with both dogs and cats.",
    learn: "Consent-based handling, canine and feline anatomy, stress signals, bathing, coat care, scissoring, and clipping without restraint or force."
  },
  {
    key: "essentials-dog-grooming",
    title: "Essentials Dog Grooming",
    price: "₹30,000",
    priceNum: 30000,
    duration: "5 days",
    knowMoreUrl: "course-essentials-dog.html",
    enrollUrl: "enroll-essentials-dog.html",
    desc: "A fast, 5-day hands-on introduction to professional dog grooming for complete beginners. Work directly with live dogs from day one under expert supervision to learn bathing, drying, brushing, ear cleaning, and coat-care fundamentals.",
    for: "Complete beginners looking for a fast, practical introduction to canine grooming.",
    learn: "Live dog handling, bathing, drying, brushing, ear cleaning, and coat-care fundamentals under expert supervision."
  },
  {
    key: "essentials-cat-grooming",
    title: "Essentials Cat Grooming",
    price: "₹30,000",
    priceNum: 30000,
    duration: "5 days",
    knowMoreUrl: "course-essentials-cat.html",
    enrollUrl: "enroll-essentials-cat.html",
    desc: "A 5-day hands-on introductory course covering feline-specific grooming and handling techniques. Build entry-level competence in cat body language, bathing, drying, brushing, de-matting, and ear care under close instructor guidance.",
    for: "Beginners wanting specialised feline handling and grooming basics.",
    learn: "Cat body language, low-stress handling, bathing, drying, brushing, de-matting, and ear care under close instructor guidance."
  },
  {
    key: "practitioner-dog-grooming",
    title: "Practitioner Dog Grooming",
    price: "₹50,000",
    priceNum: 50000,
    duration: "3 weeks",
    knowMoreUrl: "course-practitioner-dog.html",
    enrollUrl: "enroll-practitioner-dog.html",
    desc: "A 3-week practitioner-level programme designed to build industry-ready technical grounding in canine grooming. Master bathing and coat care, advance to live-dog nail trimming and hygiene clipping, and practice full scissoring techniques on training models.",
    for: "Groomers and serious beginners seeking industry-ready canine grooming proficiency.",
    learn: "Bathing, coat care, live-dog nail trimming, hygiene clipping, and full scissoring techniques on training models."
  },
  {
    key: "practitioner-cat-grooming",
    title: "Practitioner Cat Grooming",
    price: "₹50,000",
    priceNum: 50000,
    duration: "3 weeks",
    knowMoreUrl: "course-practitioner-cat.html",
    enrollUrl: "enroll-practitioner-cat.html",
    desc: "An intensive 3-week practitioner course providing hands-on feline grooming mastery. Progress from bathing and coat care to live nail trimming, hygiene clipping, and full haircuts performed directly on live cats.",
    for: "Groomers and serious beginners seeking intensive feline grooming mastery.",
    learn: "Bathing, coat care, live nail trimming, hygiene clipping, and full haircuts performed directly on live cats."
  }
];
function CoursesHero() {
  return /* @__PURE__ */ React.createElement("section", { className: "c-hero" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "c-hero-content" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow reveal in" }, "Pawpad courses"), /* @__PURE__ */ React.createElement("h1", { className: "h-display reveal in c-course-title", style: { marginTop: 24, maxWidth: "18ch" } }, "Become a Professional ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)", whiteSpace: "nowrap" } }, "Pet Groomer")), /* @__PURE__ */ React.createElement("p", { className: "lead reveal in", style: { marginTop: 28, maxWidth: "58ch" } }, "A hands-on grooming course designed for animal lovers looking to build the skills, confidence, and practical experience needed to start a career in pet grooming."), /* @__PURE__ */ React.createElement("p", { className: "reveal in", style: { marginTop: 18, maxWidth: "62ch" } }, "Learn dog grooming, cat grooming, handling techniques, coat care, hygiene, safety, and business fundamentals through personalised training with experienced professionals."))), /* @__PURE__ */ React.createElement("style", null, `
        .c-hero { padding: 180px 0 60px; }
        .c-hero-content { max-width: 780px; }
        @media (max-width: 900px) { .c-course-title em { white-space: normal !important; } }
      `));
}
function CourseCards({ onBook }) {
  return /* @__PURE__ */ React.createElement(
    "section",
    { className: "course-cards" },
    /* @__PURE__ */ React.createElement(
      "div",
      { className: "container" },
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "cc-head reveal" },
        /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "COURSE OVERVIEW"),
        /* @__PURE__ */ React.createElement(
          "h2",
          { className: "h-1", style: { marginTop: 18, maxWidth: "22ch" } },
          "Hands-on training in ",
          /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "conscious grooming")
        )
      ),
      /* @__PURE__ */ React.createElement(
        "div",
        { className: "cc-grid" },
        COURSE_LIST.map((c, i) =>
          /* @__PURE__ */ React.createElement(
            "article",
            { key: c.key, className: "cc-card reveal", style: { transitionDelay: `${i * 50}ms` } },
            /* @__PURE__ */ React.createElement("h3", { className: "cc-card-title" }, c.title),
            /* @__PURE__ */ React.createElement("div", { className: "cc-card-price" }, c.price),
            /* @__PURE__ */ React.createElement("p", { className: "cc-card-desc" }, c.desc),
            /* @__PURE__ */ React.createElement(
              "div",
              { className: "cc-card-actions" },
              /* @__PURE__ */ React.createElement(
                "a",
                {
                  href: c.knowMoreUrl,
                  className: "btn-know-more"
                },
                "Know More"
              ),
              /* @__PURE__ */ React.createElement(
                "a",
                {
                  href: c.enrollUrl,
                  className: "btn-enroll-now"
                },
                "Enroll Now ",
                /* @__PURE__ */ React.createElement("span", { className: "btn-arrow" }, "→")
              )
            )
          )
        )
      )
    ),
    /* @__PURE__ */ React.createElement(
      "style",
      null,
      `
        .course-cards { background: var(--cream-bg); padding: 40px 0 80px; }
        .cc-head { margin-bottom: 48px; max-width: 720px; }
        .cc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .cc-card {
          background: var(--white);
          border-radius: 24px;
          padding: 36px 30px 32px;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          display: flex;
          flex-direction: column;
          transition: transform var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
        }
        body[data-palette="dark"] .cc-card {
          background: color-mix(in oklab, var(--champagne), black 5%);
          border-color: color-mix(in oklab, var(--champagne), transparent 85%);
        }
        .cc-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 24px 48px -24px color-mix(in oklab, var(--ink), transparent 70%);
        }
        .cc-card-title {
          font-family: var(--f-display);
          font-size: 22px;
          font-weight: 500;
          color: var(--ink);
          line-height: 1.25;
          margin: 0 0 12px;
        }
        .cc-card-price {
          font-family: var(--f-display);
          font-size: 24px;
          color: var(--driftwood);
          font-weight: 400;
          margin: 0 0 20px;
        }
        .cc-card-desc {
          font-family: var(--f-body);
          font-size: 14px;
          line-height: 1.65;
          color: var(--ink-soft);
          margin: 0 0 32px;
          flex: 1;
        }
        .cc-card-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: auto;
          flex-wrap: wrap;
        }
        .btn-know-more {
          font-family: var(--f-body);
          font-size: 13.5px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 9999px;
          background: transparent;
          color: var(--ink);
          border: 1.5px solid color-mix(in oklab, var(--ink), transparent 70%);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all var(--t-fast) var(--ease);
        }
        .btn-know-more:hover {
          background: var(--champagne-soft);
          border-color: var(--ink);
          color: var(--ink);
          text-decoration: none;
        }
        body[data-palette="dark"] .btn-know-more {
          border-color: color-mix(in oklab, var(--champagne), transparent 50%);
          color: var(--champagne);
        }
        body[data-palette="dark"] .btn-know-more:hover {
          background: color-mix(in oklab, var(--champagne), transparent 85%);
          border-color: var(--champagne);
          color: var(--champagne);
          text-decoration: none;
        }
        .btn-enroll-now {
          font-family: var(--f-body);
          font-size: 13.5px;
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 9999px;
          background: var(--ink);
          color: var(--white) !important;
          border: 1.5px solid var(--ink);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all var(--t-fast) var(--ease);
        }
        .btn-enroll-now:hover {
          background: var(--driftwood);
          border-color: var(--driftwood);
          color: var(--white) !important;
          transform: translateX(2px);
          text-decoration: none;
        }
        .btn-arrow {
          font-size: 15px;
          transition: transform var(--t-fast) var(--ease);
        }
        .btn-enroll-now:hover .btn-arrow {
          transform: translateX(3px);
        }
        @media (max-width: 980px) {
          .cc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .cc-grid { grid-template-columns: 1fr; }
          .cc-card { padding: 28px 22px 24px; }
          .cc-card-actions { flex-direction: column; align-items: stretch; }
          .btn-know-more, .btn-enroll-now { justify-content: center; text-align: center; }
        }
      `
    )
  );
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
