/* ==========================================================================
   NEXUS DYNAMICS - MASTER APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  currentBilling: 'monthly', // 'monthly' | 'annual'
  currentProjectFilter: 'all',
  currentServiceFilter: 'all',
  currentTestimonialIndex: 0,
  testimonialAutoTimer: null,

  init() {
    this.initTheme();
    this.initNavigation();
    this.renderServices();
    this.renderProjects();
    this.initPortfolioFilters();
    this.initServiceFilters();
    this.initPricingToggle();
    this.initTestimonialsCarousel();
    this.initFaqAccordion();
    this.initContactForm();
    this.initNewsletterForm();
    this.initBackToTop();
    this.initModals();
  },

  /* ------------------------------------------------------------------------
     1. THEME SWITCHER
     ------------------------------------------------------------------------ */
  initTheme() {
    const savedTheme = localStorage.getItem('nexus_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);

    const toggleBtn = document.getElementById('themeToggleBtn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('nexus_theme', newTheme);
        this.updateThemeIcon(newTheme);
        this.showToast('info', 'Theme Updated', `Switched to ${newTheme === 'dark' ? 'Obsidian Dark' : 'Luxe Light'} mode.`);
      });
    }
  },

  updateThemeIcon(theme) {
    const toggleBtn = document.getElementById('themeToggleBtn');
    if (!toggleBtn) return;
    if (theme === 'light') {
      toggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      toggleBtn.setAttribute('title', 'Switch to Dark Mode');
      toggleBtn.setAttribute('aria-label', 'Switch to Dark Mode');
    } else {
      toggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      toggleBtn.setAttribute('title', 'Switch to Light Mode');
      toggleBtn.setAttribute('aria-label', 'Switch to Light Mode');
    }
  },

  /* ------------------------------------------------------------------------
     2. NAVIGATION & SCROLL SPY
     ------------------------------------------------------------------------ */
  initNavigation() {
    const header = document.querySelector('.site-header');
    const mobileBtn = document.getElementById('mobileToggleBtn');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Header scroll background
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Scroll spy
      let currentSectionId = '';
      const scrollPos = window.scrollY + 140;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSectionId = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }, { passive: true });

    // Mobile Drawer Toggle
    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
        const isOpen = mobileDrawer.classList.contains('open');
        mobileBtn.setAttribute('aria-expanded', isOpen);
        mobileBtn.innerHTML = isOpen
          ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
          : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
      });

      // Close mobile drawer when clicking any link
      mobileDrawer.querySelectorAll('.nav-link, .btn').forEach(el => {
        el.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
          mobileBtn.setAttribute('aria-expanded', false);
          mobileBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
        });
      });
    }

    // Smooth Scroll Offset for in-page anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#' || targetId === '') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const navOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    // About Tabs
    const aboutTabBtns = document.querySelectorAll('.about-tab-btn');
    const aboutTabPanes = document.querySelectorAll('.about-tab-content');
    aboutTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        aboutTabBtns.forEach(b => b.classList.remove('active'));
        aboutTabPanes.forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        const activePane = document.getElementById(`tab-${targetTab}`);
        if (activePane) activePane.classList.add('active');
      });
    });
  },

  /* ------------------------------------------------------------------------
     3. SERVICES COMPONENT & FILTERING
     ------------------------------------------------------------------------ */
  renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    const filtered = this.currentServiceFilter === 'all'
      ? APP_DATA.services
      : APP_DATA.services.filter(s => s.category === this.currentServiceFilter);

    grid.innerHTML = filtered.map(service => `
      <article class="glass-card service-card" data-service-id="${service.id}">
        <div class="service-card-top">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.25rem;">
            <div class="service-icon-wrap">${service.icon}</div>
            <span class="badge badge-cyan">${service.badge}</span>
          </div>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <ul class="service-features-list">
            ${service.features.map(f => `
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="service-card-footer">
          <button class="btn btn-outline btn-sm open-service-modal" data-id="${service.id}">
            <span>Explore Architecture</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <button class="btn btn-primary btn-sm service-book-btn" data-service-title="${service.title}">
            <span>Select</span>
          </button>
        </div>
      </article>
    `).join('');

    // Attach event listeners to newly rendered service buttons
    grid.querySelectorAll('.open-service-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.openServiceModal(id);
      });
    });

    grid.querySelectorAll('.service-book-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-service-title');
        this.selectServiceAndScroll(title);
      });
    });
  },

  initServiceFilters() {
    const filterBtns = document.querySelectorAll('.services-filter-nav .filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentServiceFilter = btn.getAttribute('data-filter');
        this.renderServices();
      });
    });
  },

  selectServiceAndScroll(serviceTitle) {
    const serviceSelect = document.getElementById('contactService');
    const contactSection = document.getElementById('contact');
    if (serviceSelect) {
      for (let option of serviceSelect.options) {
        if (option.text.toLowerCase().includes(serviceTitle.toLowerCase()) || serviceTitle.toLowerCase().includes(option.text.toLowerCase())) {
          serviceSelect.value = option.value;
          break;
        }
      }
    }
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      this.showToast('info', 'Service Selected', `Pre-selected "${serviceTitle}" in your project request.`);
    }
  },

  /* ------------------------------------------------------------------------
     4. PROJECTS / PORTFOLIO RENDERING & FILTERING
     ------------------------------------------------------------------------ */
  renderProjects() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    const filtered = this.currentProjectFilter === 'all'
      ? APP_DATA.projects
      : APP_DATA.projects.filter(p => p.category === this.currentProjectFilter);

    grid.innerHTML = filtered.map(project => `
      <article class="portfolio-card" data-category="${project.category}">
        <div class="portfolio-media-wrap">
          <img src="${project.image}" alt="${project.title}" class="portfolio-img" loading="lazy" />
          <button class="btn btn-primary btn-sm portfolio-overlay-btn open-case-study" data-id="${project.id}">
            <span>Case Study & Architecture</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>
        </div>
        <div class="portfolio-body">
          <div>
            <div class="portfolio-tags">
              <span class="badge badge-purple">${project.categoryLabel}</span>
              ${project.tags.slice(0, 3).map(tag => `<span class="badge">${tag}</span>`).join('')}
            </div>
            <h3 class="portfolio-title">${project.title}</h3>
            <p>${project.summary}</p>
          </div>
          <div class="portfolio-metrics-row">
            ${project.metrics.map(m => `
              <div>
                <div class="portfolio-metric-num">${m.value}</div>
                <div class="portfolio-metric-lbl">${m.label}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </article>
    `).join('');

    // Attach click events
    grid.querySelectorAll('.open-case-study').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.openCaseStudyModal(id);
      });
    });
  },

  initPortfolioFilters() {
    const filterBtns = document.querySelectorAll('.portfolio-filter-nav .filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentProjectFilter = btn.getAttribute('data-filter');
        this.renderProjects();
      });
    });
  },

  /* ------------------------------------------------------------------------
     5. PRICING TOGGLE & PLAN SELECTION
     ------------------------------------------------------------------------ */
  initPricingToggle() {
    const switchInput = document.getElementById('billingSwitch');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const annualLabel = document.getElementById('annualLabel');
    const planButtons = document.querySelectorAll('.select-plan-btn');

    const updatePrices = (isAnnual) => {
      this.currentBilling = isAnnual ? 'annual' : 'monthly';
      
      if (isAnnual) {
        monthlyLabel.classList.remove('active');
        annualLabel.classList.add('active');
      } else {
        monthlyLabel.classList.add('active');
        annualLabel.classList.remove('active');
      }

      APP_DATA.pricing.forEach(plan => {
        const amountEl = document.getElementById(`price-${plan.id}`);
        const periodEl = document.getElementById(`period-${plan.id}`);
        if (amountEl) {
          const targetPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
          amountEl.textContent = targetPrice.toLocaleString();
        }
        if (periodEl) {
          periodEl.textContent = isAnnual ? '/ month (billed annually)' : '/ month';
        }
      });
    };

    if (switchInput) {
      switchInput.addEventListener('change', (e) => {
        updatePrices(e.target.checked);
      });
    }

    // Plan selection triggers scroll to contact form with prefill
    planButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const planId = btn.getAttribute('data-plan');
        const plan = APP_DATA.pricing.find(p => p.id === planId);
        if (plan) {
          const budgetSelect = document.getElementById('contactBudget');
          const detailsArea = document.getElementById('contactMessage');
          
          if (budgetSelect) {
            if (plan.id === 'sprint') budgetSelect.value = '5k-15k';
            else if (plan.id === 'growth') budgetSelect.value = '15k-30k';
            else budgetSelect.value = '30k+';
          }

          if (detailsArea) {
            detailsArea.value = `Interested in the "${plan.title}" engagement plan (${this.currentBilling === 'annual' ? 'Annual Billing' : 'Monthly Billing'}). We would like to discuss: `;
            detailsArea.focus();
          }

          const contact = document.getElementById('contact');
          if (contact) {
            contact.scrollIntoView({ behavior: 'smooth' });
          }
          this.showToast('success', 'Plan Selected', `Pre-filled your inquiry for the ${plan.title} package!`);
        }
      });
    });
  },

  /* ------------------------------------------------------------------------
     6. TESTIMONIALS CAROUSEL
     ------------------------------------------------------------------------ */
  initTestimonialsCarousel() {
    const track = document.getElementById('testimonialTrack');
    const dotsContainer = document.getElementById('testimonialDots');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    if (!track) return;

    // Render slides
    track.innerHTML = APP_DATA.testimonials.map(item => `
      <div class="testimonial-slide">
        <div class="glass-card testimonial-card-inner">
          <div class="testimonial-stars">
            ${'★'.repeat(item.rating)}
          </div>
          <p class="testimonial-quote">"${item.quote}"</p>
          <div class="testimonial-profile">
            <div class="testimonial-avatar">${item.avatarInitials}</div>
            <div class="testimonial-info" style="text-align: left;">
              <h4>${item.author}</h4>
              <p>${item.role} • <strong>${item.company}</strong></p>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Render dots
    if (dotsContainer) {
      dotsContainer.innerHTML = APP_DATA.testimonials.map((_, i) => `
        <div class="carousel-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
      `).join('');

      dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.getAttribute('data-index'), 10);
          this.goToTestimonial(idx);
        });
      });
    }

    const updateCarousel = () => {
      track.style.transform = `translateX(-${this.currentTestimonialIndex * 100}%)`;
      if (dotsContainer) {
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === this.currentTestimonialIndex);
        });
      }
    };

    this.goToTestimonial = (idx) => {
      this.currentTestimonialIndex = idx;
      updateCarousel();
    };

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + APP_DATA.testimonials.length) % APP_DATA.testimonials.length;
        updateCarousel();
        this.resetTestimonialTimer();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % APP_DATA.testimonials.length;
        updateCarousel();
        this.resetTestimonialTimer();
      });
    }

    // Auto rotate every 7 seconds
    this.startTestimonialTimer = () => {
      this.testimonialAutoTimer = setInterval(() => {
        this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % APP_DATA.testimonials.length;
        updateCarousel();
      }, 7000);
    };

    this.resetTestimonialTimer = () => {
      clearInterval(this.testimonialAutoTimer);
      this.startTestimonialTimer();
    };

    this.startTestimonialTimer();
  },

  /* ------------------------------------------------------------------------
     7. FAQ ACCORDION & SEARCH
     ------------------------------------------------------------------------ */
  initFaqAccordion() {
    const container = document.getElementById('faqContainer');
    const searchInput = document.getElementById('faqSearchInput');
    if (!container) return;

    const renderFaqs = (filterQuery = '') => {
      const q = filterQuery.toLowerCase().trim();
      const filtered = APP_DATA.faqs.filter(faq => 
        faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
            <p>No questions matched "${filterQuery}". Need personalized answers?</p>
            <a href="#contact" class="btn btn-outline btn-sm" style="margin-top: 1rem;">Contact Technical Team</a>
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map((faq, index) => `
        <div class="accordion-item ${index === 0 && !filterQuery ? 'active' : ''}">
          <button class="accordion-header" aria-expanded="${index === 0 && !filterQuery ? 'true' : 'false'}">
            <span>${faq.question}</span>
            <span class="accordion-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </button>
          <div class="accordion-content" style="${index === 0 && !filterQuery ? 'max-height: 200px;' : ''}">
            <p>${faq.answer}</p>
          </div>
        </div>
      `).join('');

      // Add accordion click handlers
      container.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
          const item = header.parentElement;
          const content = item.querySelector('.accordion-content');
          const isActive = item.classList.contains('active');

          // Close other open items
          container.querySelectorAll('.accordion-item').forEach(other => {
            if (other !== item) {
              other.classList.remove('active');
              other.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
              other.querySelector('.accordion-content').style.maxHeight = null;
            }
          });

          if (!isActive) {
            item.classList.add('active');
            header.setAttribute('aria-expanded', 'true');
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            item.classList.remove('active');
            header.setAttribute('aria-expanded', 'false');
            content.style.maxHeight = null;
          }
        });
      });
    };

    renderFaqs();

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderFaqs(e.target.value);
      });
    }
  },

  /* ------------------------------------------------------------------------
     8. INTERACTIVE CONTACT FORM WITH VALIDATION & LOADING STATE
     ------------------------------------------------------------------------ */
  initContactForm() {
    const form = document.getElementById('contactForm');
    const successOverlay = document.getElementById('formSuccessOverlay');
    const resetBtn = document.getElementById('resetFormBtn');
    const msgInput = document.getElementById('contactMessage');
    const counterEl = document.getElementById('messageCharCounter');
    const submitBtn = document.getElementById('contactSubmitBtn');

    if (!form) return;

    // Live character counter
    if (msgInput && counterEl) {
      msgInput.addEventListener('input', () => {
        const len = msgInput.value.length;
        counterEl.textContent = `${len} / 500 characters`;
      });
    }

    // Input blur real-time validation
    const fields = [
      { id: 'contactName', validate: (v) => v.trim().length >= 2, msg: 'Please provide your full name (at least 2 letters).' },
      { id: 'contactEmail', validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), msg: 'Please enter a valid business email address.' },
      { id: 'contactService', validate: (v) => v !== '', msg: 'Please choose the primary service or solution needed.' },
      { id: 'contactMessage', validate: (v) => v.trim().length >= 15, msg: 'Please give us a brief project summary (min 15 characters).' }
    ];

    fields.forEach(f => {
      const el = document.getElementById(f.id);
      if (el) {
        el.addEventListener('blur', () => this.validateField(el, f.validate));
        el.addEventListener('input', () => {
          if (el.classList.contains('is-invalid')) {
            this.validateField(el, f.validate);
          }
        });
      }
    });

    // Form Submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isFormValid = true;
      fields.forEach(f => {
        const el = document.getElementById(f.id);
        if (el && !this.validateField(el, f.validate)) {
          isFormValid = false;
        }
      });

      if (!isFormValid) {
        this.showToast('error', 'Form Incomplete', 'Please correct the highlighted fields before submitting.');
        return;
      }

      // Enter loading state
      submitBtn.classList.add('btn-loading');
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.classList.remove('btn-loading');
        submitBtn.disabled = false;

        const nameVal = document.getElementById('contactName').value;
        const serviceVal = document.getElementById('contactService').options[document.getElementById('contactService').selectedIndex].text;
        const ticketNum = 'NX-' + Math.floor(100000 + Math.random() * 900000);

        // Update success overlay ticket details
        const summaryEl = document.getElementById('successTicketSummary');
        if (summaryEl) {
          summaryEl.innerHTML = `
            <strong>Engagement Reference: ${ticketNum}</strong><br>
            Thank you, <strong>${nameVal}</strong>! Our engineering leadership has received your request regarding <strong>${serviceVal}</strong>. A technical director will reach out within 2 hours.
          `;
        }

        form.style.display = 'none';
        successOverlay.classList.add('show');
        this.showToast('success', 'Inquiry Dispatched!', 'Your consultation request has been logged successfully.');
      }, 1200);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        form.reset();
        fields.forEach(f => {
          const el = document.getElementById(f.id);
          if (el) {
            el.classList.remove('is-valid');
            el.classList.remove('is-invalid');
          }
        });
        if (counterEl) counterEl.textContent = '0 / 500 characters';
        successOverlay.classList.remove('show');
        form.style.display = 'block';
      });
    }
  },

  validateField(el, validationFn) {
    const isValid = validationFn(el.value);
    if (!isValid) {
      el.classList.add('is-invalid');
      el.classList.remove('is-valid');
      return false;
    } else {
      el.classList.remove('is-invalid');
      el.classList.add('is-valid');
      return true;
    }
  },

  /* ------------------------------------------------------------------------
     9. NEWSLETTER SUBSCRIPTION FORM
     ------------------------------------------------------------------------ */
  initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const email = input.value.trim();

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        this.showToast('error', 'Invalid Email', 'Please enter a valid email address to subscribe.');
        input.focus();
        return;
      }

      input.value = '';
      this.showToast('success', 'Subscribed to Nexus Intelligence', 'You will receive our bi-weekly architecture insights & case studies.');
    });
  },

  /* ------------------------------------------------------------------------
     10. BACK TO TOP BUTTON WITH PROGRESS
     ------------------------------------------------------------------------ */
  initBackToTop() {
    const btn = document.getElementById('backToTopBtn');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  },

  /* ------------------------------------------------------------------------
     11. MODAL DIALOG CONTROLLERS (CASE STUDY, SHOWREEL, SERVICE)
     ------------------------------------------------------------------------ */
  initModals() {
    const modalOverlay = document.getElementById('globalModalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');

    if (!modalOverlay || !closeBtn) return;

    closeBtn.addEventListener('click', () => this.closeModal());
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) this.closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });

    // Showreel button in hero
    const showreelBtn = document.getElementById('heroShowreelBtn');
    if (showreelBtn) {
      showreelBtn.addEventListener('click', () => {
        this.openShowreelModal();
      });
    }

    // Hero Announcement click -> scrolls to AI section
    const announcement = document.querySelector('.hero-announcement');
    if (announcement) {
      announcement.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) servicesSection.scrollIntoView({ behavior: 'smooth' });
      });
    }
  },

  openModal(htmlContent) {
    const modalOverlay = document.getElementById('globalModalOverlay');
    const modalBody = document.getElementById('modalDynamicBody');
    if (!modalOverlay || !modalBody) return;

    modalBody.innerHTML = htmlContent;
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeModal() {
    const modalOverlay = document.getElementById('globalModalOverlay');
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  },

  openCaseStudyModal(projectId) {
    const project = APP_DATA.projects.find(p => p.id === projectId);
    if (!project) return;

    const html = `
      <div style="padding: 2.5rem;">
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap;">
          <span class="badge badge-cyan">${project.categoryLabel}</span>
          <span class="badge">Client: ${project.client}</span>
          <span class="badge">Year: ${project.year}</span>
        </div>
        <h2 style="margin-bottom: 1.25rem;">${project.title}</h2>
        
        <div style="border-radius: var(--radius-lg); overflow: hidden; margin-bottom: 2rem; border: 1px solid var(--border-light);">
          <img src="${project.image}" alt="${project.title}" style="width: 100%; height: auto; max-height: 420px; object-fit: cover;" />
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 0.75rem; color: var(--accent-cyan);">Project Overview & Challenge</h4>
          <p style="font-size: 1.05rem; line-height: 1.8;">${project.description}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 2rem; background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-md);">
          ${project.metrics.map(m => `
            <div>
              <div style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700; color: var(--accent-cyan);">${m.value}</div>
              <div style="font-size: 0.8rem; color: var(--text-muted);">${m.label}</div>
            </div>
          `).join('')}
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem;">Core Engineering Deliverables</h4>
          <ul style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
            ${project.deliverables.map(d => `
              <li style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.95rem; color: var(--text-secondary);">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${d}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="background: rgba(0, 242, 254, 0.05); border-left: 4px solid var(--accent-cyan); padding: 1.25rem 1.75rem; border-radius: var(--radius-sm); margin-bottom: 2rem;">
          <p style="font-style: italic; color: var(--text-primary); margin-bottom: 0.5rem;">"${project.quote}"</p>
          <div style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">— ${project.author}</div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            ${project.tags.map(t => `<span class="badge badge-purple">${t}</span>`).join('')}
          </div>
          <button class="btn btn-primary btn-sm" onclick="App.closeModal(); document.getElementById('contact').scrollIntoView({behavior:'smooth'});">
            <span>Inquire About Similar Architecture</span>
          </button>
        </div>
      </div>
    `;

    this.openModal(html);
  },

  openServiceModal(serviceId) {
    const service = APP_DATA.services.find(s => s.id === serviceId);
    if (!service) return;

    const html = `
      <div style="padding: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
          <div class="service-icon-wrap" style="margin-bottom: 0;">${service.icon}</div>
          <div>
            <span class="badge badge-cyan">${service.badge} Solution</span>
            <h2 style="font-size: 1.85rem; margin-top: 0.35rem;">${service.title}</h2>
          </div>
        </div>

        <p style="font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">${service.description}</p>

        <h4 style="margin-bottom: 1rem; color: var(--accent-cyan);">Architecture Capabilities & Deliverables</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem;">
          ${service.features.map(f => `
            <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); display: flex; align-items: center; gap: 0.75rem;">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span style="font-weight: 500; font-size: 0.95rem;">${f}</span>
            </div>
          `).join('')}
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 1rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
          <button class="btn btn-secondary btn-sm" onclick="App.closeModal();">Close</button>
          <button class="btn btn-primary btn-sm" onclick="App.closeModal(); App.selectServiceAndScroll('${service.title}');">
            <span>Request Technical Blueprint</span>
          </button>
        </div>
      </div>
    `;

    this.openModal(html);
  },

  openShowreelModal() {
    const html = `
      <div style="padding: 2.5rem; text-align: center;">
        <span class="badge badge-cyan" style="margin-bottom: 1rem;">Cinematic Showreel 2026</span>
        <h2 style="margin-bottom: 1.5rem;">Engineering the Impossible: Nexus Reel</h2>
        
        <div style="position: relative; width: 100%; border-radius: var(--radius-lg); overflow: hidden; background: #000; border: 1px solid var(--border-light); aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center; box-shadow: 0 20px 50px rgba(0,0,0,0.8);">
          <img src="assets/images/hero_neural_ai.jpg" alt="Showreel Preview" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0.7;" />
          <div style="position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 1rem;">
            <div style="width: 80px; height: 80px; border-radius: 50%; background: var(--gradient-brand); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 35px rgba(0,242,254,0.6); animation: pulseGlow 2s infinite;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#060911"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.9rem; color: #fff; background: rgba(6,9,17,0.8); padding: 0.35rem 1rem; border-radius: var(--radius-full);">
              HD 4K • 60 FPS • Spatial Audio Showreel
            </div>
          </div>
        </div>

        <p style="margin-top: 1.75rem; color: var(--text-secondary); max-width: 600px; margin-left: auto; margin-right: auto;">
          Take a two-minute deep dive across our award-winning work in autonomous neural interfaces, high-throughput financial engines, and visionOS spatial computing.
        </p>

        <div style="margin-top: 2rem;">
          <button class="btn btn-primary" onclick="App.closeModal(); document.getElementById('portfolio').scrollIntoView({behavior:'smooth'});">
            <span>Explore Individual Case Studies</span>
          </button>
        </div>
      </div>
    `;

    this.openModal(html);
  },

  /* ------------------------------------------------------------------------
     12. TOAST NOTIFICATION UTILITY
     ------------------------------------------------------------------------ */
  showToast(type = 'info', title = 'Notice', message = '') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = `🔔`;
    if (type === 'success') icon = `✅`;
    if (type === 'error') icon = `⚠️`;

    toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-content">
        <h4>${title}</h4>
        <p>${message}</p>
      </div>
    `;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    // Auto dismiss after 4.5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
      }, 350);
    }, 4500);
  }
};
