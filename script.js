/* ============================================================
   HARLOT PIERCINGS — Script
   Smooth scroll, reveal animations, hamburger, form handling
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Smooth Scroll for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        const navHeight = document.querySelector('.nav-bar').offsetHeight;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      // Close mobile nav if open
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // ── Hamburger Menu Toggle ──
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    // Animate hamburger
    hamburger.classList.toggle('active');
  });

  // ── Scroll Reveal (Intersection Observer) ──
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ── Navbar background on scroll ──
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // ── Booking Form Handler ──
  const bookingForm = document.getElementById('bookingForm');
  const formSuccess = document.getElementById('formSuccess');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Hide the form, show success
    bookingForm.style.display = 'none';
    formSuccess.classList.add('show');

    // Reset after 5 seconds
    setTimeout(() => {
      formSuccess.classList.remove('show');
      bookingForm.style.display = 'flex';
      bookingForm.reset();
    }, 5000);
  });

  // ── Parallax-lite for hero ──
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    });
  }

});
