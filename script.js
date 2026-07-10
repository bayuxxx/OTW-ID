/**
 * OTW.ID — Open Thinking Worlds
 * Vanilla JavaScript — semua fitur
 */
document.addEventListener('DOMContentLoaded', function () {

  // ============================================================
  // 1. HERO REVEAL ON LOAD
  // ============================================================
  const heroText = document.getElementById('heroText');
  const heroIllus = document.getElementById('heroIllus');
  if (heroText) {
    heroText.classList.add('opacity-100', 'translate-y-0');
    heroText.classList.remove('opacity-0', 'translate-y-10');
  }
  if (heroIllus) {
    setTimeout(function () {
      heroIllus.classList.add('opacity-100', 'translate-y-0');
      heroIllus.classList.remove('opacity-0', 'translate-y-10');
    }, 200);
  }

  // ============================================================
  // 2. MOBILE MENU TOGGLE
  // ============================================================
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    document.querySelectorAll('.mobile-link').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // ============================================================
  // 3. NAVBAR SCROLL EFFECT (Tailwind classes via JS)
  // ============================================================
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      navbar.classList.add('bg-white/95', 'backdrop-blur-lg', 'shadow-md');
    } else {
      navbar.classList.remove('bg-white/95', 'backdrop-blur-lg', 'shadow-md');
    }
  });

  // ============================================================
  // 4. INNOVATION TAB SWITCHING
  // ============================================================
  var tabBase = 'tab-btn px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer flex items-center gap-2';
  var tabActive = 'bg-green-500 text-white shadow-lg shadow-green-500/25';
  var tabInactive = 'bg-white text-gray-600 hover:text-green-600';

  document.querySelectorAll('.tab-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tab = this.getAttribute('data-tab');

      document.querySelectorAll('.tab-btn').forEach(function (b) {
        b.className = b.className.replace(tabActive, '').replace(tabInactive, '') + ' ' + tabBase + ' ' + tabInactive;
      });
      this.className = this.className.replace(tabInactive, '') + ' ' + tabBase + ' ' + tabActive;

      document.querySelectorAll('.innovation-card').forEach(function (card) {
        card.classList.add('hidden');
      });
      var targetCard = document.getElementById(tab);
      if (targetCard) targetCard.classList.remove('hidden');
    });
  });

  // ============================================================
  // 5. GALLERY LIGHTBOX
  // ============================================================
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  document.querySelectorAll('.group[data-category]').forEach(function (item) {
    item.addEventListener('click', function () {
      var img = this.querySelector('img');
      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || 'Gallery Image';
        lightbox.classList.add('active');
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === this) closeLightbox();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // ============================================================
  // 6. SCROLL REVEAL (data-reveal attribute)
  // ============================================================
  var revealEls = document.querySelectorAll('[data-reveal]');

  if (revealEls.length > 0) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  // ============================================================
  // 7. COUNTER ANIMATION
  // ============================================================
  var counters = document.querySelectorAll('.counter');

  if (counters.length > 0) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseInt(el.getAttribute('data-target'), 10);
          var startTime = performance.now();
          var duration = 2000;

          function update(currentTime) {
            var progress = Math.min((currentTime - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
          }

          requestAnimationFrame(update);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (c) { counterObserver.observe(c); });
  }

  // ============================================================
  // 8. SMOOTH SCROLL (anchor offset)
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var offset = navbar ? navbar.offsetHeight : 0;
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.pageYOffset - offset,
          behavior: 'smooth',
        });
      }
    });
  });

});
