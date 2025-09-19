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

codex/build-complete-one-page-website-for-hos-eog06y
// Scroll spy
const navLinks = document.querySelectorAll('header nav a:not(.btn)[href^="#"]');
const sections = Array.from(navLinks).map(l => document.querySelector(l.getAttribute('href')));
const spy = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const link = document.querySelector(`header nav a[href="#${id}"]`);
    if (entry.isIntersecting && link) {
      navLinks.forEach(a => {
        a.classList.remove('active');
        a.removeAttribute('aria-current');
      });
      link.classList.add('active');
      link.setAttribute('aria-current', 'true');
    }
  });
}, {rootMargin: '0px 0px -60% 0px'});
sections.forEach(sec => spy.observe(sec));


 main
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
