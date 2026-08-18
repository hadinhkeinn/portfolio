const MOBILE_NAV_QUERY = '(max-width: 860px)';

export function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  toggle?.addEventListener('click', () => {
    const isDark = root.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Follow the system theme only while the visitor has not chosen one.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (localStorage.getItem('theme')) return;
    root.classList.toggle('dark', event.matches);
  });
}

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
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        const delay = Number(target.getAttribute('data-delay') || 0);
        setTimeout(() => target.classList.add('is-visible'), delay);
        observer.unobserve(target);
      });
    },
    { threshold: 0.1 }
  );
  els.forEach(el => observer.observe(el));
}

export function initNavMenu() {
  const toggle = document.getElementById('nav-menu-toggle');
  const links = document.getElementById('nav-links');
  const mobileQuery = window.matchMedia(MOBILE_NAV_QUERY);

  function closeMenu() {
    links?.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
  }

  toggle?.addEventListener('click', () => {
    const isOpen = links?.classList.toggle('is-open') ?? false;
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  links?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  mobileQuery.addEventListener('change', (event) => {
    if (!event.matches) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}
