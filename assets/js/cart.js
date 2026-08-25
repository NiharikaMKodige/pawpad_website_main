
const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;

const CART_CATALOG = [
  // Courses
  {
    id: "foundation-grooming",
    title: "Foundation Course in Grooming",
    category: "Courses",
    price: 95000,
    priceDisplay: "₹95,000",
    desc: "7-week foundation-level grooming certification for beginners (dogs & cats)",
    requiresPetInfo: false,
    img: "assets/img/pawpad/course-dog-grooming.webp"
  },
  {
    id: "essentials-dog-grooming",
    title: "Essentials Dog Grooming",
    category: "Courses",
    price: 30000,
    priceDisplay: "₹30,000",
    desc: "5-day hands-on introduction to professional dog grooming",
    requiresPetInfo: false,
    isDogOnly: true,
    img: "assets/img/pawpad/course-dog-grooming.webp"
  },
  {
    id: "essentials-cat-grooming",
    title: "Essentials Cat Grooming",
    category: "Courses",
    price: 30000,
    priceDisplay: "₹30,000",
    desc: "5-day hands-on introductory course in feline grooming and handling",
    requiresPetInfo: false,
    isCatOnly: true,
    img: "assets/img/pawpad/course-cat-grooming.webp"
  },
  {
    id: "practitioner-dog-grooming",
    title: "Practitioner Dog Grooming",
    category: "Courses",
    price: 50000,
    priceDisplay: "₹50,000",
    desc: "3-week practitioner-level programme in canine grooming and scissoring",
    requiresPetInfo: false,
    isDogOnly: true,
    img: "assets/img/pawpad/course-dog-grooming.webp"
  },
  {
    id: "practitioner-cat-grooming",
    title: "Practitioner Cat Grooming",
    category: "Courses",
    price: 50000,
    priceDisplay: "₹50,000",
    desc: "3-week intensive feline grooming mastery and live styling",
    requiresPetInfo: false,
    isCatOnly: true,
    img: "assets/img/pawpad/course-cat-grooming.webp"
  },
  // Boarding
  {
    id: "boarding-trial-day",
    title: "Trial Day Boarding",
    category: "Boarding",
    price: 850,
    priceDisplay: "₹850",
    desc: "Mandatory assessment trial day for small dogs before overnight stays",
    requiresPetInfo: true,
    isDogOnly: true,
    img: "assets/img/pawpad/boarding-sleeping-puppy-toy.webp"
  },
  {
    id: "boarding-overnight",
    title: "Overnight Boarding",
    category: "Boarding",
    price: 1000,
    priceDisplay: "₹1,000 / night",
    desc: "Calm, supervised overnight stay for small dogs (trial day mandatory)",
    requiresPetInfo: true,
    isDogOnly: true,
    requiresTrialDayCheck: true,
    img: "assets/img/pawpad/boarding-dog-sleep-mask.webp"
  },
  // Dog Grooming & Add-ons
  {
    id: "nail-clipping",
    title: "Nail Clipping",
    category: "Grooming",
    price: 250,
    priceDisplay: "₹250",
    desc: "Slow, gentle nail care for pets who need a quick maintenance visit",
    requiresPetInfo: true,
    img: "assets/img/pawpad/grooming-nail-clipping-new.webp"
  },
  {
    id: "massage",
    title: "Pre & Post Grooming Massage",
    category: "Wellness",
    price: 1500,
    priceDisplay: "₹1,500",
    desc: "A quiet pre & post grooming relaxation massage add-on",
    requiresPetInfo: true,
    isDogOnly: true,
    img: "assets/img/pawpad/grooming-page-grooming-massage.webp"
  },
  {
    id: "hygiene-clip",
    title: "Hygiene Clip",
    category: "Grooming",
    price: 850,
    priceDisplay: "₹850",
    desc: "Focused sanitary trimming and paw tidying",
    requiresPetInfo: true,
    img: "assets/img/pawpad/grooming-page-grooming-hygine-clip.webp"
  },
  {
    id: "dog-short",
    title: "Dog Grooming | Short Hair",
    category: "Grooming",
    price: 1600,
    priceDisplay: "₹1,600",
    desc: "A complete grooming reset for short-coated dogs",
    requiresPetInfo: true,
    isDogOnly: true,
    img: "assets/img/pawpad/grooming-page-dog-short-hair-image.webp"
  },
  {
    id: "dog-long",
    title: "Dog Grooming | Long Hair",
    category: "Grooming",
    price: 2000,
    priceDisplay: "₹2,000",
    desc: "Maintenance and detailed coat care for longer coats",
    requiresPetInfo: true,
    isDogOnly: true,
    img: "assets/img/pawpad/grooming-page-gromming-long-hair-dog.webp"
  },
  {
    id: "dog-grooming-long-hair",
    title: "Dog Grooming Long Hair with haircut",
    category: "Grooming",
    price: 2500,
    priceDisplay: "₹2,500",
    desc: "Full styling session with scissoring & haircut for long-coated dogs",
    requiresPetInfo: true,
    isDogOnly: true,
    img: "assets/img/pawpad/grooming-page-dog-long-hair-haircut.webp"
  },
  {
    id: "puppy-short",
    title: "Puppy Grooming | Short Hair",
    category: "Grooming",
    price: 1000,
    priceDisplay: "₹1,000",
    desc: "Gentle introductions for puppies below 3 months",
    requiresPetInfo: true,
    isDogOnly: true,
    img: "assets/img/pawpad/grooming-page-puppy-short-hair-image.webp"
  },
  {
    id: "puppy-long",
    title: "Puppy Grooming | Long Hair",
    category: "Grooming",
    price: 1500,
    priceDisplay: "₹1,500",
    desc: "Extra coat care & deshedding for long-coated puppies",
    requiresPetInfo: true,
    isDogOnly: true,
    img: "assets/img/pawpad/grooming-page-puppy-long-hair-image.webp"
  },
  {
    id: "matted-dogs",
    title: "Matted Dogs Care",
    category: "Grooming",
    price: 850,
    priceDisplay: "₹850",
    desc: "Careful support and assessment for tangled coats",
    requiresPetInfo: true,
    isDogOnly: true,
    img: "assets/img/pawpad/grooming-page-grooming-matted-dogs.webp"
  },
  // Cat Grooming
  {
    id: "cat-short",
    title: "Cat Grooming | Short Hair",
    category: "Grooming",
    price: 1500,
    priceDisplay: "₹1,500",
    desc: "Calm coat and hygiene care for short-haired cats",
    requiresPetInfo: true,
    isCatOnly: true,
    img: "assets/img/pawpad/cat-grooming-short-hair.webp"
  },
  {
    id: "cat-long",
    title: "Cat Grooming | Long Hair",
    category: "Grooming",
    price: 2000,
    priceDisplay: "₹2,000",
    desc: "Extra support for long coats, sanitary trim & dematting",
    requiresPetInfo: true,
    isCatOnly: true,
    img: "assets/img/pawpad/cat-grooming-long-hair.webp"
  },
  {
    id: "cat-haircut",
    title: "Cat Hair Cut",
    category: "Grooming",
    price: 1500,
    priceDisplay: "₹1,500",
    desc: "Complete haircut and gentle care session for cats",
    requiresPetInfo: true,
    isCatOnly: true,
    img: "assets/img/pawpad/cat-hair-cut.webp"
  }
];

function getRecommendedAdditions(cartItems) {
  if (!cartItems || cartItems.length === 0) {
    return CART_CATALOG.filter((c) => c.category === "Courses").slice(0, 3);
  }

  const inCartIds = new Set(cartItems.map((i) => i.id));

  const hasDogGrooming = cartItems.some((i) => {
    const id = (i.id || "").toLowerCase();
    const title = (i.title || "").toLowerCase();
    const cat = (i.category || "").toLowerCase();
    const isCat = id.includes("cat") || title.includes("cat") || !!i.isCatOnly;
    return (
      !isCat &&
      (cat === "grooming" ||
        cat === "wellness" ||
        cat === "styling" ||
        cat === "care" ||
        id.includes("dog") ||
        id.includes("puppy") ||
        id.includes("matted") ||
        id.includes("nail") ||
        id.includes("hygiene") ||
        id.includes("massage") ||
        !!i.isDogOnly)
    );
  });

  const hasCatGrooming = cartItems.some((i) => {
    const id = (i.id || "").toLowerCase();
    const title = (i.title || "").toLowerCase();
    return id.includes("cat") || title.includes("cat") || !!i.isCatOnly;
  });

  const hasCourse = cartItems.some((i) => {
    const id = (i.id || "").toLowerCase();
    const cat = (i.category || "").toLowerCase();
    return (
      cat === "courses" ||
      id.includes("course") ||
      id.includes("grooming-") ||
      id.includes("foundation") ||
      id.includes("practitioner") ||
      id.includes("essentials")
    );
  });

  const hasBoarding = cartItems.some((i) => {
    const id = (i.id || "").toLowerCase();
    const cat = (i.category || "").toLowerCase();
    return cat === "boarding" || id.startsWith("boarding-");
  });

  let candidateIds = [];

  // Rule 1: If dog related grooming services are added, display related dog grooming services or trial day / overnight stay
  if (hasDogGrooming) {
    candidateIds.push(
      "nail-clipping",
      "massage",
      "hygiene-clip",
      "boarding-trial-day",
      "boarding-overnight",
      "dog-short",
      "dog-long",
      "dog-grooming-long-hair",
      "puppy-short",
      "matted-dogs"
    );
  }

  // Rule 2: If cat grooming is added, display related cat grooming services
  if (hasCatGrooming) {
    candidateIds.push(
      "cat-short",
      "cat-long",
      "cat-haircut",
      "nail-clipping",
      "hygiene-clip",
      "essentials-cat-grooming"
    );
  }

  // Rule 3: If course is added, display other courses
  if (hasCourse) {
    candidateIds.push(
      "foundation-grooming",
      "essentials-dog-grooming",
      "essentials-cat-grooming",
      "practitioner-dog-grooming",
      "practitioner-cat-grooming"
    );
  }

  // Rule 4: If any boarding service is added, display dog grooming related services (and boarding pairing)
  if (hasBoarding) {
    if (inCartIds.has("boarding-overnight") && !inCartIds.has("boarding-trial-day")) {
      candidateIds.push("boarding-trial-day");
    } else if (inCartIds.has("boarding-trial-day") && !inCartIds.has("boarding-overnight")) {
      candidateIds.push("boarding-overnight");
    }
    candidateIds.push(
      "nail-clipping",
      "massage",
      "hygiene-clip",
      "dog-short",
      "dog-long",
      "dog-grooming-long-hair"
    );
  }

  // Deduplicate and filter out items already in cart
  const seen = new Set();
  const recommendations = [];

  for (const cid of candidateIds) {
    if (!inCartIds.has(cid) && !seen.has(cid)) {
      seen.add(cid);
      const catalogItem = CART_CATALOG.find((c) => c.id === cid);
      if (catalogItem) {
        recommendations.push(catalogItem);
      }
    }
  }

  // Fallback if needed
  if (recommendations.length < 3) {
    for (const c of CART_CATALOG) {
      if (!inCartIds.has(c.id) && !seen.has(c.id)) {
        if (hasCatGrooming && !hasDogGrooming && !hasBoarding && c.isDogOnly) {
          continue;
        }
        seen.add(c.id);
        recommendations.push(c);
        if (recommendations.length >= 3) break;
      }
    }
  }

  return recommendations.slice(0, 3);
}

const CART_STORAGE_KEY = "pawpad_cart_v1";

const PawpadCartStore = {
  getItems() {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.warn("Could not read cart from localStorage", e);
      return [];
    }
  },
  saveItems(items) {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      window.dispatchEvent(new CustomEvent("pawpad-cart-updated", { detail: items }));
    } catch (e) {
      console.warn("Could not save cart to localStorage", e);
    }
  },
  addItem(item) {
    const items = this.getItems();
    const existingIndex = items.findIndex((i) => i.id === item.id);
    if (existingIndex > -1) {
      items[existingIndex].quantity = (items[existingIndex].quantity || 1) + 1;
    } else {
      items.push({
        id: item.id || `item-${Date.now()}`,
        title: item.title || "Custom Service",
        category: item.category || "Service",
        price: Number(item.price) || 1000,
        priceDisplay: item.priceDisplay || `₹${(Number(item.price) || 1000).toLocaleString("en-IN")}`,
        desc: item.desc || "",
        requiresPetInfo: item.requiresPetInfo !== false,
        isDogOnly: item.isDogOnly !== undefined ? !!item.isDogOnly : (item.category === "Boarding"),
        requiresTrialDayCheck: item.requiresTrialDayCheck !== undefined ? !!item.requiresTrialDayCheck : (item.id === "boarding-overnight"),
        img: item.img || "assets/img/pawpad/landing-page-cover.webp",
        quantity: 1
      });
    }
    this.saveItems(items);
    return items;
  },
  updateQuantity(id, delta) {
    let items = this.getItems();
    const index = items.findIndex((i) => i.id === id);
    if (index > -1) {
      const newQty = (items[index].quantity || 1) + delta;
      if (newQty <= 0) {
        items = items.filter((i) => i.id !== id);
      } else {
        items[index].quantity = newQty;
      }
      this.saveItems(items);
    }
    return items;
  },
  removeItem(id) {
    const items = this.getItems().filter((i) => i.id !== id);
    this.saveItems(items);
    return items;
  },
  clearCart() {
    this.saveItems([]);
    return [];
  },
  getTotalCount() {
    return this.getItems().reduce((acc, item) => acc + (item.quantity || 1), 0);
  },
  getSubtotal() {
    return this.getItems().reduce((acc, item) => acc + (Number(item.price) || 0) * (item.quantity || 1), 0);
  },
  requiresPetInfo() {
    const items = this.getItems();
    if (items.length === 0) return true;
    return items.some((item) => item.requiresPetInfo !== false);
  }
};

// Cart Drawer Component (Side Window)
function CartDrawer({ open, onClose, onCheckout }) {
  const [items, setItems] = useStateC(PawpadCartStore.getItems());

  useEffectC(() => {
    const onCartUpdate = (e) => {
      setItems(e.detail || PawpadCartStore.getItems());
    };
    window.addEventListener("pawpad-cart-updated", onCartUpdate);
    setItems(PawpadCartStore.getItems());
    return () => window.removeEventListener("pawpad-cart-updated", onCartUpdate);
  }, []);


  useEffectC(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open, onClose]);

  if (!open) return null;

  const totalCount = items.reduce((acc, i) => acc + (i.quantity || 1), 0);
  const subtotal = items.reduce((acc, i) => acc + (Number(i.price) || 0) * (i.quantity || 1), 0);

  const handleAddQuick = (catItem) => {
    PawpadCartStore.addItem(catItem);
  };

  return React.createElement(
    "div",
    { className: "cart-overlay", role: "dialog", "aria-modal": "true", "aria-label": "Shopping cart drawer" },
    React.createElement("div", { className: "cart-backdrop", onClick: onClose }),
    React.createElement(
      "div",
      { className: "cart-drawer" },
      // Header
      React.createElement(
        "div",
        { className: "cart-header" },
        React.createElement(
          "div",
          { className: "cart-title-wrap" },
          React.createElement("span", { className: "cart-icon-badge" }, React.createElement(CartIcon, { size: 18 })),
          React.createElement("h3", { className: "cart-heading" }, "Your Cart"),
          React.createElement(
            "span",
            { className: "cart-item-pill" },
            `${totalCount} ${totalCount === 1 ? "item" : "items"}`
          )
        ),
        React.createElement(
          "button",
          { className: "cart-close-btn", onClick: onClose, "aria-label": "Close cart" },
          "×"
        )
      ),

      // Body / Item list
      React.createElement(
        "div",
        { className: "cart-body" },
        items.length === 0
          ? React.createElement(
            "div",
            { className: "cart-empty-state" },
            React.createElement("div", { className: "cart-empty-paw" }, React.createElement(PawIcon, { size: 48, color: "var(--driftwood)" })),
            React.createElement("h4", null, "Your cart is empty"),
            React.createElement("p", null, "Add professional pet grooming courses and certificate programs to get started."),
            React.createElement(
              "div",
              { className: "cart-suggested-wrap" },
              React.createElement("p", { className: "cart-suggested-label" }, "Popular Grooming Courses"),
              React.createElement(
                "div",
                { className: "cart-suggested-list" },
                CART_CATALOG.filter((c) => c.category === "Courses").slice(0, 3).map((item) =>
                  React.createElement(
                    "div",
                    { key: item.id, className: "cart-suggest-card" },
                    React.createElement("img", { src: item.img, alt: item.title, className: "cart-suggest-img" }),
                    React.createElement(
                      "div",
                      { className: "cart-suggest-info" },
                      React.createElement("strong", null, item.title),
                      React.createElement("span", { className: "cart-suggest-price" }, item.priceDisplay)
                    ),
                    React.createElement(
                      "button",
                      {
                        className: "btn btn-cream btn-sm",
                        onClick: () => handleAddQuick(item)
                      },
                      "+ Add"
                    )
                  )
                )
              )
            )
          )
          : React.createElement(
            "div",
            { className: "cart-items-list" },
            items.map((item) =>
              React.createElement(
                "div",
                { key: item.id, className: "cart-item-card" },
                React.createElement("img", { src: item.img, alt: item.title, className: "cart-item-img" }),
                React.createElement(
                  "div",
                  { className: "cart-item-details" },
                  React.createElement(
                    "div",
                    { className: "cart-item-top" },
                    React.createElement("span", { className: "cart-item-cat" }, item.category || "Service"),
                    React.createElement(
                      "button",
                      {
                        className: "cart-item-remove",
                        onClick: () => PawpadCartStore.removeItem(item.id),
                        "aria-label": `Remove ${item.title}`
                      },
                      "✕"
                    )
                  ),
                  React.createElement("h5", { className: "cart-item-title" }, item.title),
                  item.desc ? React.createElement("p", { className: "cart-item-desc" }, item.desc) : null,
                  React.createElement(
                    "div",
                    { className: "cart-item-bottom" },
                    React.createElement("span", { className: "cart-item-price" }, `₹${(item.price * (item.quantity || 1)).toLocaleString("en-IN")}`),
                    React.createElement(
                      "div",
                      { className: "cart-qty-stepper" },
                      React.createElement(
                        "button",
                        {
                          onClick: () => PawpadCartStore.updateQuantity(item.id, -1),
                          "aria-label": "Decrease quantity"
                        },
                        "−"
                      ),
                      React.createElement("span", null, item.quantity || 1),
                      React.createElement(
                        "button",
                        {
                          onClick: () => PawpadCartStore.updateQuantity(item.id, 1),
                          "aria-label": "Increase quantity"
                        },
                        "+"
                      )
                    )
                  )
                )
              )
            ),
            (() => {
              const recommendations = getRecommendedAdditions(items);
              if (!recommendations || recommendations.length === 0) return null;
              return React.createElement(
                "div",
                { className: "cart-addons-section" },
                React.createElement("p", { className: "cart-addons-title" }, "Recommended Additions"),
                React.createElement(
                  "div",
                  { className: "cart-addons-slider" },
                  recommendations.map((addon) =>
                    React.createElement(
                      "div",
                      { key: addon.id, className: "cart-addon-pill" },
                      React.createElement(
                        "div",
                        { className: "cart-addon-info-wrap" },
                        React.createElement("span", { className: "cart-addon-name" }, addon.title),
                        React.createElement("span", { className: "cart-addon-price" }, ` · ${addon.priceDisplay}`)
                      ),
                      React.createElement(
                        "button",
                        {
                          className: "cart-addon-add",
                          onClick: () => handleAddQuick(addon),
                          "aria-label": `Add ${addon.title}`
                        },
                        "+"
                      )
                    )
                  )
                )
              );
            })()
          )
      ),

      // Footer
      items.length > 0 &&
      React.createElement(
        "div",
        { className: "cart-footer" },
        React.createElement(
          "div",
          { className: "cart-subtotal-row" },
          React.createElement("span", { className: "cart-subtotal-label" }, "Subtotal"),
          React.createElement("span", { className: "cart-subtotal-val" }, `₹${subtotal.toLocaleString("en-IN")}`)
        ),
        React.createElement(
          "p",
          { className: "cart-tax-note" },
          "Taxes & personalized scheduling confirmed at studio upon session."
        ),
        React.createElement(
          "button",
          {
            className: "btn btn-primary cart-checkout-btn",
            onClick: () => {
              onClose();
              onCheckout();
            }
          },
          "Proceed to Checkout ",
          React.createElement(Arrow, null)
        ),
        React.createElement(
          "button",
          {
            className: "cart-clear-link",
            onClick: () => PawpadCartStore.clearCart()
          },
          "Empty cart"
        )
      )
    )
  );
}

// Checkout Modal Component
const PET_TYPES_CHECKOUT = ["Dog", "Cat", "Other"];
const COAT_TYPES_CHECKOUT = ["Short", "Medium", "Long"];
const SIZES_CHECKOUT = ["Small (<10kg)", "Medium (10–25kg)", "Large (25kg+)"];
const TEMPERAMENTS_CHECKOUT = ["Chill & Friendly", "Excitable / Playful", "Anxious / Sensitive", "First-time visit"];

function generateCheckoutDates() {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

const CHECKOUT_TIMES = ["11:00 AM", "12:00 PM", "1:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"];

function CheckoutModal({ open, onClose }) {
  const [items, setItems] = useStateC(PawpadCartStore.getItems());
  const [step, setStep] = useStateC(0);
  const [completedOrder, setCompletedOrder] = useStateC(null);

  const [formData, setFormData] = useStateC({
    // Personal Info
    name: "",
    email: "",
    phone: "",
    area: "",
    contactMethod: "WhatsApp",
    petType: "Dog",
    petName: "",
    breed: "",
    age: "",
    coat: "Short",
    size: "Small (<10kg)",
    temperament: "Chill & Friendly",
    healthNotes: "",
    hasCompletedTrialDay: false,
    date: null,
    time: null,
    notes: ""
  });

  useEffectC(() => {
    if (open) {
      const currentItems = PawpadCartStore.getItems();
      setItems(currentItems);
      setStep(0);
      setCompletedOrder(null);
      document.body.style.overflow = "hidden";
      const onKeyDown = (e) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open, onClose]);

  if (!open) return null;

  const requiresPetInfo = items.length === 0 || items.some((i) => i.requiresPetInfo !== false);
  const hasOvernight = items.some((i) => i.id === "boarding-overnight" || i.requiresTrialDayCheck);
  const hasTrialDay = items.some((i) => i.id === "boarding-trial-day");
  const isDogOnlyCart = items.length > 0 && items.every((i) => i.isDogOnly || i.category === "Boarding");

  const mandatoryTrialDayFee = (hasOvernight && !formData.hasCompletedTrialDay && !hasTrialDay) ? 850 : 0;
  const subtotal = items.reduce((acc, i) => acc + (Number(i.price) || 0) * (i.quantity || 1), 0);
  const finalTotal = subtotal + mandatoryTrialDayFee;

  const upd = (k, v) => setFormData((d) => ({ ...d, [k]: v }));

  // Steps definition based on whether pet info is required
  const CHECKOUT_STEPS = [
    { label: "Your Info" },
    ...(requiresPetInfo ? [{ label: isDogOnlyCart ? "Dog Details" : "Pet Details" }] : []),
    { label: "Schedule" },
    { label: "Review" }
  ];

  const petStepIndex = requiresPetInfo ? 1 : -1;
  const scheduleStepIndex = requiresPetInfo ? 2 : 1;
  const reviewStepIndex = requiresPetInfo ? 3 : 2;

  const isStepValid = () => {
    if (step === 0) {
      return (
        formData.name.trim().length > 1 &&
        formData.phone.trim().length >= 8 &&
        formData.email.includes("@")
      );
    }
    if (requiresPetInfo && step === petStepIndex) {
      return formData.petName.trim().length > 0;
    }
    if (step === scheduleStepIndex) {
      return true;
    }
    return true;
  };

  const handleNext = () => {
    if (!isStepValid()) return;
    if (step < CHECKOUT_STEPS.length - 1) {
      setStep((s) => s + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const handlePlaceOrder = () => {
    const orderRef = "PAW-" + Math.floor(100000 + Math.random() * 900000);
    const orderPayload = {
      orderId: orderRef,
      items: [...items],
      subtotal: subtotal,
      mandatoryTrialDayFee: mandatoryTrialDayFee,
      hasCompletedTrialDay: !!formData.hasCompletedTrialDay,
      totalAmount: finalTotal,
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        area: formData.area,
        contactMethod: formData.contactMethod
      },
      pet: requiresPetInfo
        ? {
          name: formData.petName,
          type: isDogOnlyCart ? "Dog" : (formData.petType || "Dog"),
          breed: formData.breed,
          age: formData.age,
          coat: formData.coat,
          size: formData.size,
          temperament: formData.temperament,
          healthNotes: formData.healthNotes,
          hasCompletedTrialDay: !!formData.hasCompletedTrialDay
        }
        : null,
      appointment: {
        date: formData.date ? new Date(formData.date).toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" }) : "To be scheduled",
        time: formData.time || "Flexible",
        notes: formData.notes
      },
      createdAt: new Date().toISOString()
    };

    if (window.hsSubmit) {
      window.hsSubmit("checkout", orderPayload);
    }

    setCompletedOrder(orderPayload);
    PawpadCartStore.clearCart();
    setStep(99); // Completed confirmation state
  };

  return React.createElement(
    "div",
    { className: "checkout-overlay", role: "dialog", "aria-modal": "true", "aria-label": "Checkout booking modal" },
    React.createElement("div", { className: "checkout-backdrop", onClick: onClose }),
    React.createElement(
      "div",
      { className: "checkout-modal" },
      React.createElement(
        "button",
        { className: "checkout-close-btn", onClick: onClose, "aria-label": "Close checkout" },
        "×"
      ),

      // Confirmation screen
      step === 99 && completedOrder
        ? React.createElement(
          "div",
          { className: "checkout-success" },
          React.createElement(
            "div",
            { className: "success-icon-wrap" },
            React.createElement(PawIcon, { size: 36, color: "var(--white)" })
          ),
          React.createElement("p", { className: "eyebrow", style: { justifyContent: "center" } }, "Booking & Order Placed"),
          React.createElement("h3", { className: "h-2" }, "Thank you, ", completedOrder.customer.name, "!"),
          React.createElement(
            "p",
            { className: "success-sub" },
            "We’ve received your booking request. Our team will review your order details and confirm your slot via ",
            completedOrder.customer.contactMethod,
            "."
          ),
          React.createElement(
            "div",
            { className: "order-ref-card" },
            React.createElement(
              "div",
              { className: "ref-row" },
              React.createElement("span", null, "Booking Reference"),
              React.createElement("strong", { className: "ref-number" }, completedOrder.orderId)
            ),
            completedOrder.mandatoryTrialDayFee > 0
              ? React.createElement(
                React.Fragment,
                null,
                React.createElement(
                  "div",
                  { className: "ref-row" },
                  React.createElement("span", null, "Services Subtotal"),
                  React.createElement("strong", null, `₹${completedOrder.subtotal.toLocaleString("en-IN")}`)
                ),
                React.createElement(
                  "div",
                  { className: "ref-row" },
                  React.createElement("span", { style: { color: "var(--driftwood-deep)" } }, "Mandatory First-Time Trial Day"),
                  React.createElement("strong", { style: { color: "var(--driftwood-deep)" } }, `+₹${completedOrder.mandatoryTrialDayFee.toLocaleString("en-IN")}`)
                )
              )
              : null,
            React.createElement(
              "div",
              { className: "ref-row" },
              React.createElement("span", null, "Total Estimated"),
              React.createElement("strong", null, `₹${completedOrder.totalAmount.toLocaleString("en-IN")}`)
            ),
            completedOrder.pet &&
            React.createElement(
              "div",
              { className: "ref-row" },
              React.createElement("span", null, isDogOnlyCart ? "Dog" : "Pet"),
              React.createElement("strong", null, `${completedOrder.pet.name} (${completedOrder.pet.type}, ${completedOrder.pet.temperament})`)
            ),
            completedOrder.appointment &&
            React.createElement(
              "div",
              { className: "ref-row" },
              React.createElement("span", null, "Preferred Schedule"),
              React.createElement("strong", null, `${completedOrder.appointment.date} at ${completedOrder.appointment.time}`)
            )
          ),
          React.createElement(
            "div",
            { className: "success-actions" },
            React.createElement(
              "a",
              {
                href: `https://wa.me/919663077496?text=${encodeURIComponent(
                  `Hi Pawpad! I placed booking ref ${completedOrder.orderId} for ${completedOrder.pet ? completedOrder.pet.name : "my booking"}. Total: ₹${completedOrder.totalAmount.toLocaleString("en-IN")}${completedOrder.mandatoryTrialDayFee > 0 ? " (includes ₹850 mandatory Trial Day fee)" : ""}.`
                )}`,
                target: "_blank",
                rel: "noopener",
                className: "btn btn-primary"
              },
              "Chat on WhatsApp ",
              React.createElement(Arrow, null)
            ),
            React.createElement(
              "button",
              { className: "btn btn-ghost", onClick: onClose },
              "Return to Website"
            )
          )
        )
        : React.createElement(
          React.Fragment,
          null,
          // Stepper
          React.createElement(
            "div",
            { className: "checkout-stepper" },
            CHECKOUT_STEPS.map((s, idx) =>
              React.createElement(
                "div",
                {
                  key: s.label,
                  className: "c-stepper-item " + (idx === step ? "on" : idx < step ? "done" : "")
                },
                React.createElement(
                  "span",
                  { className: "c-step-num" },
                  idx < step ? "✓" : idx + 1
                ),
                React.createElement("span", { className: "c-step-name" }, s.label)
              )
            )
          ),

          // Form Content Area
          React.createElement(
            "div",
            { className: "checkout-body" },
            // Step 0: Personal Info
            step === 0 &&
            React.createElement(
              "div",
              { className: "checkout-step-pane" },
              React.createElement(
                "div",
                { className: "step-head" },
                React.createElement("p", { className: "eyebrow" }, "Step 1"),
                React.createElement("h4", { className: "h-3" }, "Your Personal Information"),
                React.createElement(
                  "p",
                  { className: "lead-sm" },
                  "How our team can reach you for confirmations and arrival instructions."
                )
              ),
              React.createElement(
                "div",
                { className: "form-grid" },
                React.createElement(
                  "div",
                  { className: "field" },
                  React.createElement("label", null, "Full Name *"),
                  React.createElement("input", {
                    type: "text",
                    required: true,
                    placeholder: "e.g. Maya Shankar",
                    value: formData.name,
                    onChange: (e) => upd("name", e.target.value)
                  })
                ),
                React.createElement(
                  "div",
                  { className: "field" },
                  React.createElement("label", null, "Phone Number *"),
                  React.createElement("input", {
                    type: "tel",
                    required: true,
                    placeholder: "e.g. 9876543210",
                    value: formData.phone,
                    onChange: (e) => upd("phone", e.target.value)
                  })
                ),
                React.createElement(
                  "div",
                  { className: "field" },
                  React.createElement("label", null, "Email Address *"),
                  React.createElement("input", {
                    type: "email",
                    required: true,
                    placeholder: "e.g. maya@example.com",
                    value: formData.email,
                    onChange: (e) => upd("email", e.target.value)
                  })
                ),
                React.createElement(
                  "div",
                  { className: "field" },
                  React.createElement("label", null, "Bengaluru Neighborhood / Area"),
                  React.createElement("input", {
                    type: "text",
                    placeholder: "e.g. Kalyan Nagar, Indiranagar, HRBR Layout",
                    value: formData.area,
                    onChange: (e) => upd("area", e.target.value)
                  })
                ),
                React.createElement(
                  "div",
                  { className: "field full-span" },
                  React.createElement("label", null, "Preferred Contact Mode"),
                  React.createElement(
                    "div",
                    { className: "chip-select" },
                    ["WhatsApp", "Phone Call", "Email"].map((mode) =>
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          key: mode,
                          className: "chip-btn " + (formData.contactMethod === mode ? "active" : ""),
                          onClick: () => upd("contactMethod", mode)
                        },
                        mode
                      )
                    )
                  )
                )
              )
            ),

            // Step 1: Pet Details
            requiresPetInfo &&
            step === petStepIndex &&
            React.createElement(
              "div",
              { className: "checkout-step-pane" },
              React.createElement(
                "div",
                { className: "step-head" },
                React.createElement("p", { className: "eyebrow" }, isDogOnlyCart ? "Step 2 · Dog Details" : "Step 2 · Pet Details"),
                React.createElement("h4", { className: "h-3" }, isDogOnlyCart ? "Tell Us About Your Dog" : "Tell Us About Your Pet"),
                React.createElement(
                  "p",
                  { className: "lead-sm" },
                  isDogOnlyCart
                    ? "Pawpad Boarding is open exclusively to small dogs. Knowing your dog's coat and temperament helps us ensure an intimate, stress-free stay."
                    : "Sessions at Pawpad are never rushed. Knowing your pet’s temperament and coat type helps us tailor the session pace."
                )
              ),
              React.createElement(
                "div",
                { className: "form-grid" },
                !isDogOnlyCart &&
                React.createElement(
                  "div",
                  { className: "field" },
                  React.createElement("label", null, "Pet Type *"),
                  React.createElement(
                    "div",
                    { className: "chip-select" },
                    PET_TYPES_CHECKOUT.map((t) =>
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          key: t,
                          className: "chip-btn " + (formData.petType === t ? "active" : ""),
                          onClick: () => upd("petType", t)
                        },
                        t
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: isDogOnlyCart ? "field full-span" : "field" },
                  React.createElement("label", null, isDogOnlyCart ? "Dog Name *" : "Pet Name *"),
                  React.createElement("input", {
                    type: "text",
                    required: true,
                    placeholder: "e.g. Leo, Bruno, Maya",
                    value: formData.petName,
                    onChange: (e) => upd("petName", e.target.value)
                  })
                ),
                React.createElement(
                  "div",
                  { className: "field" },
                  React.createElement("label", null, "Breed / Mix"),
                  React.createElement("input", {
                    type: "text",
                    placeholder: isDogOnlyCart ? "e.g. Shih Tzu, Indie, Lhasa Apso, Beagle" : "e.g. Indie, Golden Retriever, Shih Tzu, Persian Cat",
                    value: formData.breed,
                    onChange: (e) => upd("breed", e.target.value)
                  })
                ),
                React.createElement(
                  "div",
                  { className: "field" },
                  React.createElement("label", null, "Age"),
                  React.createElement("input", {
                    type: "text",
                    placeholder: "e.g. 2 years, 4 months",
                    value: formData.age,
                    onChange: (e) => upd("age", e.target.value)
                  })
                ),
                React.createElement(
                  "div",
                  { className: "field full-span" },
                  React.createElement("label", null, "Size / Weight Category"),
                  React.createElement(
                    "div",
                    { className: "chip-select" },
                    SIZES_CHECKOUT.map((s) =>
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          key: s,
                          className: "chip-btn " + (formData.size === s ? "active" : ""),
                          onClick: () => upd("size", s)
                        },
                        s
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "field full-span" },
                  React.createElement("label", null, "Coat Type"),
                  React.createElement(
                    "div",
                    { className: "chip-select" },
                    COAT_TYPES_CHECKOUT.map((c) =>
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          key: c,
                          className: "chip-btn " + (formData.coat === c ? "active" : ""),
                          onClick: () => upd("coat", c)
                        },
                        `${c} Coat`
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "field full-span" },
                  React.createElement("label", null, "Temperament / Handling"),
                  React.createElement(
                    "div",
                    { className: "chip-select" },
                    TEMPERAMENTS_CHECKOUT.map((t) =>
                      React.createElement(
                        "button",
                        {
                          type: "button",
                          key: t,
                          className: "chip-btn " + (formData.temperament === t ? "active" : ""),
                          onClick: () => upd("temperament", t)
                        },
                        t
                      )
                    )
                  )
                ),
                React.createElement(
                  "div",
                  { className: "field full-span" },
                  React.createElement("label", null, "Special Needs, Sensitivities or Diet"),
                  React.createElement("textarea", {
                    rows: 2,
                    placeholder: "e.g. Dislikes loud noises, food allergies, vet medicines, etc.",
                    value: formData.healthNotes,
                    onChange: (e) => upd("healthNotes", e.target.value)
                  })
                ),
                hasOvernight &&
                React.createElement(
                  "div",
                  { className: "field full-span" },
                  React.createElement(
                    "div",
                    { className: "trial-day-verify-card" },
                    React.createElement(
                      "div",
                      { className: "trial-day-verify-header" },
                      React.createElement("div", { className: "trial-day-verify-icon" }, "📋"),
                      React.createElement(
                        "div",
                        null,
                        React.createElement("h5", { className: "trial-day-verify-title" }, "Trial Day Verification"),
                        React.createElement(
                          "p",
                          { className: "trial-day-verify-notice" },
                          "A complete trial day is mandatory before an overnight stay to ensure your dog is comfortable in our intimate group."
                        )
                      )
                    ),
                    React.createElement(
                      "label",
                      { className: "trial-day-checkbox-label" },
                      React.createElement("input", {
                        type: "checkbox",
                        className: "trial-day-checkbox",
                        id: "trial-day-verify-checkbox",
                        checked: !!formData.hasCompletedTrialDay,
                        onChange: (e) => upd("hasCompletedTrialDay", e.target.checked)
                      }),
                      React.createElement(
                        "span",
                        { className: "trial-day-checkbox-text" },
                        "My pet has already completed a trial day at Pawpad before"
                      )
                    ),
                    React.createElement(
                      "div",
                      {
                        className: `trial-day-helper-badge ${formData.hasCompletedTrialDay ? "verified" : "fee-notice"}`
                      },
                      formData.hasCompletedTrialDay
                        ? "A verification will be done by our team and you might be asked to provide the previous Trial day visit proof if required. If no previous records are found, your Trial Day might be booked at the discretion of our team and the fee will be applicable"
                        : "Since your pet hasn't had a trial day before, the mandatory Trial Day fee (₹850) will be added to your final bill summary."
                    )
                  )
                )
              )
            ),

            // Step 2 (or 1): Preferred Schedule
            step === scheduleStepIndex &&
            React.createElement(
              "div",
              { className: "checkout-step-pane" },
              React.createElement(
                "div",
                { className: "step-head" },
                React.createElement("p", { className: "eyebrow" }, "Step · Schedule"),
                React.createElement("h4", { className: "h-3" }, "Preferred Date & Time"),
                React.createElement(
                  "p",
                  { className: "lead-sm" },
                  "Pick a tentative slot (closed on Thursdays). We will confirm based on studio availability and calm spacing."
                )
              ),
              React.createElement(
                "div",
                { className: "date-picker-wrap" },
                React.createElement("label", { className: "sub-label" }, "Select Date (Next 14 Days)"),
                React.createElement(
                  "div",
                  { className: "date-chip-grid" },
                  generateCheckoutDates().map((d, i) => {
                    const isClosed = d.getDay() === 4;
                    const dateStr = d.toISOString();
                    const isSel = !isClosed && formData.date && new Date(formData.date).toDateString() === d.toDateString();
                    return React.createElement(
                      "button",
                      {
                        type: "button",
                        key: i,
                        className: "date-chip " + (isSel ? "active " : "") + (isClosed ? "closed" : ""),
                        onClick: () => !isClosed && upd("date", dateStr),
                        disabled: isClosed,
                        title: isClosed ? "Closed on Thursdays" : undefined
                      },
                      React.createElement("span", { className: "d-day" }, d.toLocaleDateString("en-IN", { weekday: "short" })),
                      React.createElement("strong", { className: "d-num" }, d.getDate()),
                      React.createElement("span", { className: "d-mon" }, d.toLocaleDateString("en-IN", { month: "short" })),
                      isClosed && React.createElement("span", { className: "d-closed" }, "Closed")
                    );
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "time-picker-wrap", style: { marginTop: 24 } },
                React.createElement("label", { className: "sub-label" }, "Select Time Slot"),
                React.createElement(
                  "div",
                  { className: "time-chip-grid" },
                  CHECKOUT_TIMES.map((t) =>
                    React.createElement(
                      "button",
                      {
                        type: "button",
                        key: t,
                        className: "time-chip " + (formData.time === t ? "active" : ""),
                        onClick: () => upd("time", t)
                      },
                      t
                    )
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "field", style: { marginTop: 24 } },
                React.createElement("label", null, "Additional Instructions / Notes"),
                React.createElement("textarea", {
                  rows: 2,
                  placeholder: "Any specific requests or questions for our team?",
                  value: formData.notes,
                  onChange: (e) => upd("notes", e.target.value)
                })
              )
            ),

            // Final Step: Review & Confirm
            step === reviewStepIndex &&
            React.createElement(
              "div",
              { className: "checkout-step-pane" },
              React.createElement(
                "div",
                { className: "step-head" },
                React.createElement("p", { className: "eyebrow" }, "Final Review"),
                React.createElement("h4", { className: "h-3" }, "Review Your Booking"),
                React.createElement(
                  "p",
                  { className: "lead-sm" },
                  "Check your contact info, pet details, and selected services before submitting."
                )
              ),
              React.createElement(
                "div",
                { className: "review-summary-grid" },
                // Items list
                React.createElement(
                  "div",
                  { className: "review-items-card" },
                  React.createElement("h5", { className: "review-card-title" }, "Selected Services & Items"),
                  React.createElement(
                    "div",
                    { className: "review-items-list" },
                    items.map((item) =>
                      React.createElement(
                        "div",
                        { key: item.id, className: "review-item-row" },
                        React.createElement(
                          "div",
                          null,
                          React.createElement("strong", null, item.title),
                          React.createElement("span", { className: "review-item-qty" }, ` × ${item.quantity || 1}`)
                        ),
                        React.createElement("span", { className: "review-item-price" }, `₹${(item.price * (item.quantity || 1)).toLocaleString("en-IN")}`)
                      )
                    ),
                    mandatoryTrialDayFee > 0 &&
                    React.createElement(
                      "div",
                      { className: "review-item-row review-mandatory-fee-row" },
                      React.createElement(
                        "div",
                        null,
                        React.createElement("strong", { style: { color: "var(--driftwood-deep)" } }, "Mandatory First-Time Trial Day"),
                        React.createElement("span", { className: "review-item-qty" }, " · Required assessment")
                      ),
                      React.createElement("span", { className: "review-item-price", style: { color: "var(--driftwood-deep)" } }, `+₹${mandatoryTrialDayFee.toLocaleString("en-IN")}`)
                    )
                  ),
                  mandatoryTrialDayFee > 0 &&
                  React.createElement(
                    "div",
                    { className: "review-item-row", style: { padding: "10px 0 0", color: "var(--ink-mute)", fontSize: "13px" } },
                    React.createElement("span", null, "Services Subtotal"),
                    React.createElement("span", null, `₹${subtotal.toLocaleString("en-IN")}`)
                  ),
                  React.createElement(
                    "div",
                    { className: "review-subtotal-row" },
                    React.createElement("strong", null, "Total Estimated"),
                    React.createElement("strong", { className: "review-total-price" }, `₹${finalTotal.toLocaleString("en-IN")}`)
                  )
                ),

                // Details summary
                React.createElement(
                  "div",
                  { className: "review-details-card" },
                  React.createElement("h5", { className: "review-card-title" }, "Booking Information"),
                  React.createElement(
                    "div",
                    { className: "review-info-grid" },
                    React.createElement(
                      "div",
                      null,
                      React.createElement("span", { className: "review-label" }, "Client:"),
                      React.createElement("p", null, formData.name, " (", formData.phone, ")")
                    ),
                    React.createElement(
                      "div",
                      null,
                      React.createElement("span", { className: "review-label" }, "Email:"),
                      React.createElement("p", null, formData.email)
                    ),
                    requiresPetInfo &&
                    React.createElement(
                      "div",
                      null,
                      React.createElement("span", { className: "review-label" }, isDogOnlyCart ? "Dog:" : "Pet:"),
                      React.createElement(
                        "p",
                        null,
                        `${formData.petName} (${formData.petType || "Dog"} · ${formData.breed || "Small Dog"} · ${formData.temperament})`
                      )
                    ),
                    hasOvernight &&
                    React.createElement(
                      "div",
                      null,
                      React.createElement("span", { className: "review-label" }, "Trial Day Status:"),
                      React.createElement(
                        "p",
                        { style: { color: formData.hasCompletedTrialDay ? "#2e7d32" : "var(--driftwood-deep)", fontWeight: 600 } },
                        formData.hasCompletedTrialDay
                          ? "✓ Completed & Verified (No trial fee)"
                          : (hasTrialDay ? "Trial Day included in cart" : "First-Time Stay (+₹850 Assessment Fee added)")
                      )
                    ),
                    React.createElement(
                      "div",
                      null,
                      React.createElement("span", { className: "review-label" }, "Schedule:"),
                      React.createElement(
                        "p",
                        null,
                        formData.date
                          ? `${new Date(formData.date).toLocaleDateString("en-IN", { weekday: "short", month: "short", day: "numeric" })} · ${formData.time || "Morning"}`
                          : "To be coordinated on WhatsApp/Call"
                      )
                    )
                  ),
                  React.createElement(
                    "div",
                    { className: "studio-payment-badge" },
                    React.createElement("span", null, "📍 Payment Mode:"),
                    React.createElement("p", null, "No advance payment required today. Pay at studio via UPI, Card, or Cash after your pet's comfortable session.")
                  )
                )
              )
            )
          ),

          // Footer / Actions
          React.createElement(
            "div",
            { className: "checkout-footer" },
            React.createElement(
              "button",
              {
                className: "btn btn-ghost",
                onClick: handlePrev,
                disabled: step === 0,
                style: { opacity: step === 0 ? 0.3 : 1 }
              },
              "← Back"
            ),
            React.createElement("div", { style: { flex: 1 } }),
            step === reviewStepIndex
              ? React.createElement(
                "button",
                {
                  className: "btn btn-primary",
                  onClick: handlePlaceOrder
                },
                "Confirm Booking & Checkout ",
                React.createElement(Arrow, null)
              )
              : React.createElement(
                "button",
                {
                  className: "btn btn-primary",
                  onClick: handleNext,
                  disabled: !isStepValid(),
                  style: { opacity: isStepValid() ? 1 : 0.4 }
                },
                "Continue ",
                React.createElement(Arrow, null)
              )
          )
        )
    )
  );
}

// Global Cart Icon SVG component
const CartIcon = ({ size = 20, color = "currentColor", style }) =>
  React.createElement(
    "svg",
    {
      viewBox: "0 0 24 24",
      width: size,
      height: size,
      fill: "none",
      stroke: color,
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style,
      "aria-hidden": "true"
    },
    React.createElement("circle", { cx: "9", cy: "21", r: "1" }),
    React.createElement("circle", { cx: "20", cy: "21", r: "1" }),
    React.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })
  );

// Expose on window
Object.assign(window, {
  CART_CATALOG,
  PawpadCartStore,
  CartDrawer,
  CheckoutModal,
  CartIcon,
  getRecommendedAdditions
});
