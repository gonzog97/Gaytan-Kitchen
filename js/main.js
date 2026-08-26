/* =========================================================
   Base Website Template — main.js
   Shared behavior: mobile nav toggle, active-link highlighting,
   and lightweight demo handlers for the contact & booking forms.
   Replace the form handlers with real submission logic
   (e.g. fetch() to your backend or a form service) when reusing
   this template on a live project.
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }

  /* ---- Highlight the current page in the nav ----
     Pages live at folder URLs now (e.g. /menu/ instead of
     services.html), so this compares resolved, trailing-slash-
     normalized paths rather than raw filenames. */
  function normalizePath(path) {
    if (path.length > 1 && path.charAt(path.length - 1) === "/") {
      path = path.slice(0, -1);
    }
    return path || "/";
  }
  var currentPath = normalizePath(window.location.pathname);
  document.querySelectorAll(".nav-links a[href]").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href.indexOf("#") === 0 || href.indexOf(":") !== -1) return;
    var linkPath = normalizePath(new URL(href, window.location.href).pathname);
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  /* ---- Set current year in footer ---- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Demo form handling (contact + booking) ----
     Prevents actual submission and shows a success message.
     Swap this out for real integration when reusing the template. */
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var successEl = form.querySelector(".form-success");
      if (successEl) {
        successEl.classList.add("visible");
      }
      form.reset();
    });
  });
});
