// Smooth scroll for internal anchors
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior: 'smooth'});
      }
    });
  });
}

// Header shadow on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 8);
});

// Footer dialog modals
const dialogLinks = document.querySelectorAll('[data-dialog]');
dialogLinks.forEach(link => {
  const dialog = document.getElementById(link.dataset.dialog);
  const closeBtn = dialog.querySelector('button');
  link.addEventListener('click', e => {
    e.preventDefault();
    dialog.showModal();
  });
  closeBtn.addEventListener('click', () => dialog.close());
});

// Waitlist email validation
const form = document.querySelector('#waitlist-form');
form.addEventListener('submit', e => {
  const email = form.querySelector('input[type="email"]').value;
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});
