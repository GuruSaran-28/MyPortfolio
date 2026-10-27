// ── Mobile navigation menu (hamburger toggle) ────────────────────
var hamburgerBtn = document.getElementById('hamburger-btn');
var navLinks     = document.getElementById('nav-links');
var navOverlay   = document.getElementById('nav-overlay');

function openMenu() {
  navLinks.classList.add('open');
  navOverlay.classList.add('active');
  hamburgerBtn.setAttribute('aria-label', 'Close navigation menu');
}

function closeMenu() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('active');
  hamburgerBtn.setAttribute('aria-label', 'Open navigation menu');
}

hamburgerBtn.addEventListener('click', function () {
  if (navLinks.classList.contains('open')) {
    closeMenu();
  } else {
    openMenu();
  }
});

navOverlay.addEventListener('click', closeMenu);

navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeMenu);
});


// ── Highlight active nav link on scroll ──────────────────────────
var sections    = document.querySelectorAll('section[id]');
var navbarLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY + 100;

  sections.forEach(function (section) {
    var top    = section.offsetTop;
    var height = section.offsetHeight;
    var id     = section.getAttribute('id');

    if (scrollPos >= top && scrollPos < top + height) {
      navbarLinks.forEach(function (link) {
        link.classList.remove('active');
      });
      var match = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (match) {
        match.classList.add('active');
      }
    }
  });
});

// Inject active-link highlight style
var style = document.createElement('style');
style.textContent = `
  .nav-links a.active {
    color: var(--accent-color);
    background-color: var(--accent-light);
    font-weight: 600;
  }
`;
document.head.appendChild(style);
