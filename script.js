/* ============================================================
   HARLOT PIERCINGS — Script
   Smooth scroll, reveal animations, hamburger, form handling
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ── Hamburger Menu Toggle ──
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  const toggleMobileNav = (forceClose = false) => {
    const willOpen = forceClose ? false : !navLinks.classList.contains('open');

    if (willOpen) {
      navLinks.classList.add('open');
      hamburger.classList.add('active');
      document.body.style.overflow = 'hidden';
    } else {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  hamburger.addEventListener('click', () => toggleMobileNav());

  // Close mobile nav when tapping the overlay background (not a link)
  navLinks.addEventListener('click', (e) => {
    if (e.target === navLinks) {
      toggleMobileNav(true);
    }
  });

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
      toggleMobileNav(true);
    });
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

  // ── FAQ Accordion (The Inquisition) ──
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items (optional: remove this loop to allow multiple open at once)
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ── Gallery Lightbox ──
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  if (lightbox) {
    // Open lightbox
    galleryItems.forEach(item => {
      const openItem = () => {
        const img = item.querySelector('img');
        const label = item.querySelector('.gallery-label');
        
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightboxCaption.textContent = label ? label.textContent : '';
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
      };
      
      item.addEventListener('click', openItem);
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') openItem();
      });
    });

    // Close lightbox function
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // Restore scrolling
      setTimeout(() => {
        if (!lightbox.classList.contains('active')) lightboxImg.src = ''; 
      }, 400);
    };

    // Close events
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });
  }

});
