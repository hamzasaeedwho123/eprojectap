/* ===== Merciado Amusement Park - Main JavaScript ===== */

document.addEventListener('DOMContentLoaded', function() {

  // ----- Navbar scroll effect -----
  const navbar = document.querySelector('.navbar-merciado');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ----- Smooth scroll for anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----- Animate on scroll -----
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

  // ----- Booking form (dummy) -----
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('guestName')?.value || 'Guest';
      const date = document.getElementById('bookingDate')?.value || 'Selected date';
      const tickets = document.getElementById('ticketCount')?.value || '0';
      alert(`Thank you, ${name}! Your booking request for ${date} (${tickets} ticket(s)) has been received.\n\nThis is a demo. In production, this would process your payment and send a confirmation email.`);
      bookingForm.reset();
    });
  }

  // ----- Registration form (dummy) -----
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('regEmail')?.value || '';
      alert(`Account creation request received for ${email}.\n\nThis is a demo. In production, you would receive a verification email.`);
      registerForm.reset();
    });
  }

  // ----- Contact form (dummy) -----
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.\n\nThis is a demo submission.');
      contactForm.reset();
    });
  }

  // ----- Gallery lightbox (simple) -----
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      const img = this.querySelector('img');
      if (img && img.src) {
        const win = window.open('', '_blank');
        win.document.write('<html><head><title>Merciado Gallery</title></head><body style="margin:0;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#1b2838;"><img src="' + img.src + '" style="max-width:100%;max-height:100vh;object-fit:contain;"></body></html>');
      }
    });
  });

  // ----- Set active nav link based on current page -----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
});
