export function initScrollSpy() {
  const sections = document.querySelectorAll('[data-section]');
  const navItems = document.querySelectorAll('[data-nav]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-section');
          navItems.forEach(item => {
            if (item.getAttribute('data-nav') === id) {
              item.classList.add('active');
            } else {
              item.classList.remove('active');
            }
          });
        }
      });
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
  );

  sections.forEach(s => observer.observe(s));
}

export function initScrollReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = Number(entry.target.getAttribute('data-delay') || 0);
          setTimeout(() => {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  els.forEach(el => observer.observe(el));
}

export function initMobileMenu() {
  const toggle = document.getElementById('mobile-menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  const closeBtns = document.querySelectorAll('.sidebar-close');

  function openSidebar() {
    sidebar?.classList.remove('-translate-x-full');
    backdrop?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar?.classList.add('-translate-x-full');
    backdrop?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  toggle?.addEventListener('click', openSidebar);
  backdrop?.addEventListener('click', closeSidebar);
  closeBtns.forEach(btn => btn.addEventListener('click', closeSidebar));
}

