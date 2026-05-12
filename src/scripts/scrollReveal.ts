export function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
  const navItems = Array.from(document.querySelectorAll<HTMLElement>('[data-nav]'));

  function setActive(id: string | null) {
    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-nav') === id);
    });
  }

  function updateActiveSection() {
    const viewportHeight = window.innerHeight;
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const viewportBottom = window.scrollY + viewportHeight;

    const hashTarget = sections.find(section => `#${section.id}` === window.location.hash);
    if (hashTarget) {
      const rect = hashTarget.getBoundingClientRect();
      const isVisible = rect.bottom > 0 && rect.top < viewportHeight;

      if (isVisible) {
        setActive(hashTarget.getAttribute('data-section'));
        return;
      }
    }

    if (viewportBottom >= documentHeight - 8) {
      setActive(sections.at(-1)?.getAttribute('data-section') ?? null);
      return;
    }

    const activeSection = sections.reduce<{ section: HTMLElement; score: number } | null>((best, section) => {
      const rect = section.getBoundingClientRect();
      const visibleTop = Math.max(rect.top, 0);
      const visibleBottom = Math.min(rect.bottom, viewportHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);

      if (visibleHeight === 0) {
        return best;
      }

      const topPriority = rect.top <= viewportHeight * 0.38 ? 1 : 0;
      const score = visibleHeight + topPriority * viewportHeight * 0.25;

      if (!best || score > best.score) {
        return { section, score };
      }

      return best;
    }, null);

    setActive(activeSection?.section.getAttribute('data-section') ?? null);
  }

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      setActive(item.getAttribute('data-nav'));
    });
  });

  updateActiveSection();
  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', updateActiveSection);
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
  const desktopQuery = window.matchMedia('(min-width: 768px)');

  function openSidebar() {
    sidebar?.classList.add('is-open');
    backdrop?.classList.remove('hidden');
    toggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar?.classList.remove('is-open');
    backdrop?.classList.add('hidden');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.addEventListener('click', () => {
    if (sidebar?.classList.contains('is-open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });
  backdrop?.addEventListener('click', closeSidebar);
  closeBtns.forEach(btn => btn.addEventListener('click', closeSidebar));
  desktopQuery.addEventListener('change', (event) => {
    if (event.matches) {
      closeSidebar();
    }
  });
}
