/**
 * Pawpad Global Cursor & Paw Trail
 * Provides the interactive custom cursor dot and animated paw trail on all pages.
 */
(function () {
  if (typeof window === "undefined") return;
  if (window.__pawpad_cursor_initialized) return;
  window.__pawpad_cursor_initialized = true;

  function initCursor() {
    if (window.matchMedia && !window.matchMedia("(pointer: fine)").matches) return;

    let trail = document.querySelector(".paw-trail");
    if (!trail) {
      trail = document.createElement("div");
      trail.className = "paw-trail";
      document.body.appendChild(trail);
    }

    let dot = document.querySelector(".cursor-dot");
    if (!dot) {
      dot = document.createElement("div");
      dot.className = "cursor-dot";
      document.body.appendChild(dot);
    }

    let lastX = -100,
      lastY = -100,
      lastStamp = 0,
      alt = 0;
    let mx = window.innerWidth / 2,
      my = window.innerHeight / 2;
    let dx = mx,
      dy = my;
    let raf;

    function onMove(e) {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target;
      if (
        t &&
        t.closest &&
        t.closest(
          "a, button, .hover-zone, input, select, textarea, label, [role='button'], .nav-cart-btn, .hamburger, .m-link, .nav-link, .btn, .chip-btn, .back-link, .nav-pill"
        )
      ) {
        dot.classList.add("hover");
      } else {
        dot.classList.remove("hover");
      }

      const dist = Math.hypot(mx - lastX, my - lastY);
      const now = performance.now();
      if (dist > 65 && now - lastStamp > 55) {
        lastX = mx;
        lastY = my;
        lastStamp = now;
        const paw = document.createElement("div");
        const angle = (Math.atan2(my - dy, mx - dx) * 180) / Math.PI + 90;
        const side = alt ? -10 : 10;
        alt = 1 - alt;
        const offX = Math.cos(((angle - 90) * Math.PI) / 180 + Math.PI / 2) * side;
        const offY = Math.sin(((angle - 90) * Math.PI) / 180 + Math.PI / 2) * side;
        paw.className = "paw-print";
        paw.style.cssText =
          "position:fixed; left:" +
          (mx + offX) +
          "px; top:" +
          (my + offY) +
          "px; width:22px; height:22px; transform:translate(-50%,-50%) rotate(" +
          angle +
          "deg); opacity:.42; transition:opacity 1.4s ease, transform 1.4s ease; pointer-events:none; z-index:9999;";
        paw.innerHTML =
          '<svg viewBox="0 0 64 64" width="22" height="22" style="display:block;"><ellipse cx="32" cy="16" rx="5.5" ry="7.5" fill="#B18D4E"/><ellipse cx="20" cy="24" rx="6" ry="8" fill="#B18D4E"/><ellipse cx="44" cy="24" rx="6" ry="8" fill="#B18D4E"/><ellipse cx="11" cy="38" rx="5" ry="6.5" fill="#B18D4E"/><ellipse cx="53" cy="38" rx="5" ry="6.5" fill="#B18D4E"/><ellipse cx="32" cy="46" rx="13" ry="11" fill="#B18D4E"/></svg>';
        trail.appendChild(paw);
        requestAnimationFrame(function () {
          paw.style.opacity = "0";
          paw.style.transform += " scale(1.2)";
        });
        setTimeout(function () {
          paw.remove();
        }, 1500);
      }
    }

    function tick() {
      dx += (mx - dx) * 0.22;
      dy += (my - dy) * 0.22;
      dot.style.transform = "translate(" + dx + "px, " + dy + "px) translate(-50%,-50%)";
      raf = requestAnimationFrame(tick);
    }

    tick();
    window.addEventListener("mousemove", onMove, { passive: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initCursor);
  } else {
    initCursor();
  }
})();
