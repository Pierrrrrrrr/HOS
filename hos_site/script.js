// Minimal enhancements: open footer dialogs, smooth scroll, respects reduced motion
document.querySelectorAll('a.linklike').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').replace('#','');
    const dlg = document.getElementById(id);
    if(dlg && typeof dlg.showModal==='function'){ e.preventDefault(); dlg.showModal(); }
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({behavior: prefersReduced ? 'auto' : 'smooth'});
    }
  });
});

// Simple mailto guard for waitlist (optional enhancement)
const form = document.getElementById('waitlist-form');
if(form){
  form.addEventListener('submit', (e)=>{
    // allow default mailto behavior; could add validation here
  });
}
