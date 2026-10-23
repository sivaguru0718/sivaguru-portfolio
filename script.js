/* ============================================================
   SIVAGURU E — DATA ANALYST PORTFOLIO
   Animations, Interactions & Dynamic Behavior
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Scroll Progress Indicator ───────────────────────────── */
  const scrollProgress = document.getElementById('scrollProgress');
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = scrollPercent + '%';
  };

  /* ── Navigation Scroll State ─────────────────────────────── */
  const nav = document.getElementById('nav');
  const updateNav = () => {
    if (window.scrollY > 50) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  };

  /* Combined scroll handler */
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateScrollProgress();
        updateNav();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ── Mobile Navigation ───────────────────────────────────── */
  const navToggle = document.getElementById('navToggle');
  const mobileNav = document.getElementById('mobileNav');

  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-nav__link, .mobile-nav__cta').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  /* ── Mouse Glow Effect ───────────────────────────────────── */
  const mouseGlow = document.getElementById('mouseGlow');
  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    mouseGlow.style.left = glowX + 'px';
    mouseGlow.style.top = glowY + 'px';
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  /* ── Smooth Scroll for Anchor Links ──────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = nav.offsetHeight + 20;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Intersection Observer — Reveal Animations ───────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger children within the same parent
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal-up').forEach((el, i) => {
    el.dataset.delay = i % 6; // Stagger within visible group
    revealObserver.observe(el);
  });

  /* ── Count-Up Animation ──────────────────────────────────── */
  function animateCountUp(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target.toLocaleString() + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  // Observe count-up elements
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('[data-target]');
        counters.forEach((counter, i) => {
          setTimeout(() => animateCountUp(counter), i * 150);
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  // Observe hero stats
  const heroStats = document.querySelector('.hero__stats');
  if (heroStats) counterObserver.observe(heroStats);

  // Observe results grid
  const resultsGrid = document.querySelector('.results__grid');
  if (resultsGrid) counterObserver.observe(resultsGrid);

  // Observe analytics panel KPIs
  const panelKpis = document.querySelector('.panel-kpis');
  if (panelKpis) counterObserver.observe(panelKpis);

  /* ── Analytics Panel Chart Animations ────────────────────── */
  const panelObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate line chart
        const lineLine = entry.target.querySelector('.line-chart__line');
        const lineArea = entry.target.querySelector('.line-chart__area');
        const lineDot = entry.target.querySelector('.line-chart__dot');
        if (lineLine) lineLine.classList.add('animated');
        if (lineArea) lineArea.classList.add('animated');
        if (lineDot) lineDot.classList.add('animated');

        // Animate bar chart bars
        const bars = entry.target.querySelectorAll('.bar-chart__bar');
        bars.forEach((bar, i) => {
          setTimeout(() => bar.classList.add('animated'), i * 100);
        });

        // Animate risk bars
        const riskFills = entry.target.querySelectorAll('.panel-risk__fill');
        riskFills.forEach(fill => {
          setTimeout(() => {
            fill.style.width = fill.dataset.width + '%';
          }, 500);
        });

        panelObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const analyticsPanel = document.querySelector('.analytics-panel');
  if (analyticsPanel) panelObserver.observe(analyticsPanel);

  /* ── Featured Section Bar Animations ─────────────────────── */
  const featuredObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.featured__bar-fill');
        fills.forEach((fill, i) => {
          setTimeout(() => {
            fill.style.width = fill.dataset.width + '%';
          }, 300 + i * 300);
        });
        featuredObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const featuredViz = document.querySelector('.featured__viz');
  if (featuredViz) featuredObserver.observe(featuredViz);

  /* ── Hero Canvas — Particle System ───────────────────────── */
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 60;
    const connectionDistance = 150;
    let canvasWidth, canvasHeight;

    function resizeCanvas() {
      canvasWidth = canvas.parentElement.offsetWidth;
      canvasHeight = canvas.parentElement.offsetHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      };
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
      }
    }

    function drawParticles() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(77, 124, 254, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77, 124, 254, ${p.opacity})`;
        ctx.fill();
      });

      // Update positions
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvasWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvasHeight) p.vy *= -1;
      });

      requestAnimationFrame(drawParticles);
    }

    resizeCanvas();
    initParticles();
    drawParticles();

    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        initParticles();
      }, 250);
    });
  }

  /* ── Magnetic Buttons ────────────────────────────────────── */
  document.querySelectorAll('.magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });

  /* ── FAQ Accordion ───────────────────────────────────────── */
  document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq__item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ── Contact Form ────────────────────────────────────────── */
  const contactForm = document.getElementById('contactForm');
  const contactSuccess = document.getElementById('contactSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Simulate form submission
      const submitBtn = document.getElementById('formSubmit');
      submitBtn.innerHTML = '<span>Sending...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        contactForm.style.display = 'none';
        document.querySelector('.contact__info').style.display = 'none';
        contactSuccess.classList.add('show');
      }, 1200);
    });
  }

  /* ── Parallax Effect for Hero ────────────────────────────── */
  let parallaxTicking = false;
  window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const heroContent = document.querySelector('.hero__content');
        const heroPanel = document.querySelector('.hero__panel');

        if (heroContent && scrollY < window.innerHeight) {
          heroContent.style.transform = `translateY(${scrollY * 0.1}px)`;
          heroContent.style.opacity = 1 - (scrollY / (window.innerHeight * 0.8));
        }

        if (heroPanel && scrollY < window.innerHeight) {
          heroPanel.style.transform = `translateY(${scrollY * 0.15}px)`;
          heroPanel.style.opacity = 1 - (scrollY / (window.innerHeight * 0.7));
        }

        parallaxTicking = false;
      });
      parallaxTicking = true;
    }
  }, { passive: true });

  /* ── Project Card Hover Chart Animation ──────────────────── */
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      const svg = card.querySelector('.project-card__chart svg');
      if (svg) {
        svg.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        svg.style.transform = 'scale(1.05) translateY(-4px)';
      }
    });
    card.addEventListener('mouseleave', () => {
      const svg = card.querySelector('.project-card__chart svg');
      if (svg) {
        svg.style.transform = 'scale(1) translateY(0)';
      }
    });
  });

  /* ── Text Reveal Animation (Hero Title) ──────────────────── */
  const heroTitle = document.querySelector('.hero__title');
  if (heroTitle) {
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(30px)';

    setTimeout(() => {
      heroTitle.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
      heroTitle.style.opacity = '1';
      heroTitle.style.transform = 'translateY(0)';
    }, 300);
  }

  /* ── Staggered Reveal for Hero Elements ──────────────────── */
  const heroElements = document.querySelectorAll('.hero__content .reveal-up');
  heroElements.forEach((el, i) => {
    el.style.transitionDelay = `${0.15 + i * 0.12}s`;
  });

  // Force hero reveals after a short delay
  setTimeout(() => {
    heroElements.forEach(el => el.classList.add('revealed'));
    const heroPanel = document.querySelector('.hero__panel .reveal-up, .hero__panel.reveal-up');
    if (heroPanel) heroPanel.classList.add('revealed');
  }, 100);

});
