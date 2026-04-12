/* ============================================
   AGAFAY LABS — Main Script
   ============================================ */

/* --- Translations --- */
const translations = {
  fr: {
    // Navbar
    navServices: "Services",
    navProcess: "Processus",
    navPortfolio: "Portfolio",
    navBlog: "Blog",
    navContact: "Contact",
    // Hero
    heroTagline: "Votre présence en ligne, notre mission.",
    heroSubtitle: "Nous créons des sites web modernes et performants pour les entreprises marocaines qui veulent grandir en ligne.",
    heroCta: "Demander un devis gratuit",
    // Services
    servicesTitle: "Nos services",
    service1Title: "Création de site web",
    service1Desc: "Des sites modernes, rapides et adaptés à votre secteur d'activité.",
    service2Title: "Développement web",
    service2Desc: "Des solutions sur mesure pour vos besoins spécifiques.",
    service3Title: "Référencement SEO",
    service3Desc: "Apparaissez en tête des résultats Google et attirez plus de clients.",
    service4Title: "Audit de site web",
    service4Desc: "Nous analysons votre site existant et proposons des améliorations concrètes.",
    // Process
    processTitle: "Comment ça marche",
    step1Title: "Audit",
    step1Desc: "Nous analysons vos besoins et votre marché.",
    step2Title: "Design",
    step2Desc: "Nous créons une maquette sur mesure pour votre marque.",
    step3Title: "Lancement",
    step3Desc: "Votre site est en ligne, rapide et optimisé.",
    // Why Us
    whyTitle: "Pourquoi choisir Agafay Labs\u00A0?",
    reason1Title: "Expertise locale",
    reason1Desc: "Nous comprenons le marché marocain et ses spécificités.",
    reason2Title: "Trilingue",
    reason2Desc: "Votre site en arabe, français et anglais pour toucher plus de clients.",
    reason3Title: "Livraison rapide",
    reason3Desc: "Votre site livré en 7 à 14 jours ouvrables.",
    reason4Title: "Prix abordables",
    reason4Desc: "Des tarifs adaptés aux PME marocaines.",
    // Portfolio
    portfolioTitle: "Nos réalisations",
    viewProject: "Voir le projet",
    portfolio1Title: "Riad Étoile — Site vitrine",
    portfolio1Desc: "Site web élégant pour un riad de charme à Marrakech.",
    portfolio2Title: "Saveurs du Souk — Restaurant",
    portfolio2Desc: "Présence en ligne complète pour un restaurant marocain moderne.",
    portfolio3Title: "Atlas Dental — Clinique",
    portfolio3Desc: "Site professionnel avec prise de rendez-vous en ligne.",
    // Testimonials
    testimonialsTitle: "Ce que disent nos clients",
    testimonial1Quote: "Agafay Labs a transformé notre présence en ligne. Nous recevons trois fois plus de demandes depuis le lancement de notre nouveau site.",
    testimonial1Author: "Amina B.",
    testimonial1Role: "Propriétaire, Riad Étoile",
    testimonial2Quote: "Un travail professionnel, rapide et à un prix très raisonnable. Je recommande vivement.",
    testimonial2Author: "Karim M.",
    testimonial2Role: "Gérant, Saveurs du Souk",
    testimonial3Quote: "L'équipe a parfaitement compris nos besoins. Le site est beau, rapide et nos patients le trouvent très facile à utiliser.",
    testimonial3Author: "Dr. Fatima Z.",
    testimonial3Role: "Directrice, Atlas Dental",
    // Blog
    blogTitle: "Notre blog",
    readMore: "Lire la suite →",
    blog1Title: "Pourquoi votre entreprise a besoin d'un site web en 2025",
    blog1Excerpt: "Découvrez pourquoi une présence en ligne est devenue indispensable pour les PME marocaines.",
    blog2Title: "كيف يساعدك الموقع الإلكتروني على جذب المزيد من العملاء",
    blog2Excerpt: "تعرف على الطرق التي يمكن لموقعك الإلكتروني من خلالها استقطاب عملاء جدد.",
    blog3Title: "5 Signs Your Business Website Needs a Redesign",
    blog3Excerpt: "Is your website holding your business back? Here are the warning signs.",
    // Contact
    contactTitle: "Contactez-nous",
    contactSubtitle: "Vous avez un projet\u00A0? Parlons-en.",
    labelName: "Nom complet",
    labelEmail: "Email",
    labelPhone: "Téléphone",
    labelMessage: "Votre message",
    labelSend: "Envoyer",
    formSuccess: "Merci\u00A0! Votre message a été envoyé avec succès.",
    // Footer
    footerDesc: "Agence web basée à Marrakech spécialisée dans la création de sites web modernes pour les entreprises marocaines.",
    footerNav: "Navigation",
    footerSocial: "Réseaux sociaux",
    footerCopyright: "© 2025 Agafay Labs. Tous droits réservés."
  },
  en: {
    navServices: "Services",
    navProcess: "Process",
    navPortfolio: "Portfolio",
    navBlog: "Blog",
    navContact: "Contact",
    heroTagline: "Your online presence, our mission.",
    heroSubtitle: "We build modern, high-performance websites for Moroccan businesses ready to grow online.",
    heroCta: "Get a free quote",
    servicesTitle: "Our services",
    service1Title: "Website creation",
    service1Desc: "Modern, fast websites tailored to your industry.",
    service2Title: "Web development",
    service2Desc: "Custom solutions built around your specific needs.",
    service3Title: "SEO optimization",
    service3Desc: "Rank higher on Google and attract more customers.",
    service4Title: "Website audit",
    service4Desc: "We review your existing site and deliver clear improvement recommendations.",
    processTitle: "How it works",
    step1Title: "Audit",
    step1Desc: "We assess your needs and analyze your market.",
    step2Title: "Design",
    step2Desc: "We craft a custom mockup aligned with your brand.",
    step3Title: "Launch",
    step3Desc: "Your site goes live, fast and fully optimized.",
    whyTitle: "Why choose Agafay Labs?",
    reason1Title: "Local expertise",
    reason1Desc: "We understand the Moroccan market and its nuances.",
    reason2Title: "Trilingual",
    reason2Desc: "Your site in Arabic, French and English to reach more customers.",
    reason3Title: "Fast delivery",
    reason3Desc: "Your site delivered in 7 to 14 business days.",
    reason4Title: "Affordable pricing",
    reason4Desc: "Rates designed for Moroccan SMEs.",
    portfolioTitle: "Our portfolio",
    viewProject: "View project",
    portfolio1Title: "Riad Étoile — Showcase site",
    portfolio1Desc: "Elegant website for a charming riad in Marrakech.",
    portfolio2Title: "Saveurs du Souk — Restaurant",
    portfolio2Desc: "Complete online presence for a modern Moroccan restaurant.",
    portfolio3Title: "Atlas Dental — Clinic",
    portfolio3Desc: "Professional website with online appointment booking.",
    testimonialsTitle: "What our clients say",
    testimonial1Quote: "Agafay Labs transformed our online presence. We receive three times more inquiries since launching our new website.",
    testimonial1Author: "Amina B.",
    testimonial1Role: "Owner, Riad Étoile",
    testimonial2Quote: "Professional, fast work at a very reasonable price. Highly recommended.",
    testimonial2Author: "Karim M.",
    testimonial2Role: "Manager, Saveurs du Souk",
    testimonial3Quote: "The team perfectly understood our needs. The site is beautiful, fast, and our patients find it very easy to use.",
    testimonial3Author: "Dr. Fatima Z.",
    testimonial3Role: "Director, Atlas Dental",
    blogTitle: "Our blog",
    readMore: "Read more →",
    blog1Title: "Pourquoi votre entreprise a besoin d'un site web en 2025",
    blog1Excerpt: "Discover why an online presence has become essential for Moroccan SMEs.",
    blog2Title: "كيف يساعدك الموقع الإلكتروني على جذب المزيد من العملاء",
    blog2Excerpt: "Learn how your website can attract new customers to your business.",
    blog3Title: "5 Signs Your Business Website Needs a Redesign",
    blog3Excerpt: "Is your website holding your business back? Here are the warning signs.",
    contactTitle: "Contact us",
    contactSubtitle: "Got a project? Let's talk.",
    labelName: "Full name",
    labelEmail: "Email",
    labelPhone: "Phone",
    labelMessage: "Your message",
    labelSend: "Send",
    formSuccess: "Thank you! Your message has been sent successfully.",
    footerDesc: "Web agency based in Marrakech specializing in creating modern websites for Moroccan businesses.",
    footerNav: "Navigation",
    footerSocial: "Social media",
    footerCopyright: "© 2025 Agafay Labs. All rights reserved."
  },
  ar: {
    navServices: "خدماتنا",
    navProcess: "طريقة العمل",
    navPortfolio: "أعمالنا",
    navBlog: "المدونة",
    navContact: "تواصل معنا",
    heroTagline: "حضورك الرقمي، مهمتنا.",
    heroSubtitle: "نبني مواقع إلكترونية حديثة وعالية الأداء للشركات المغربية التي تريد النمو على الإنترنت.",
    heroCta: "احصل على عرض مجاني",
    servicesTitle: "خدماتنا",
    service1Title: "إنشاء المواقع",
    service1Desc: "مواقع حديثة وسريعة مصممة خصيصاً لقطاعك.",
    service2Title: "تطوير الويب",
    service2Desc: "حلول مخصصة بناءً على احتياجاتك الخاصة.",
    service3Title: "تحسين محركات البحث",
    service3Desc: "احتل مراتب أعلى في جوجل واستقطب المزيد من العملاء.",
    service4Title: "تدقيق الموقع",
    service4Desc: "نحلل موقعك الحالي ونقدم توصيات تحسين واضحة.",
    processTitle: "كيف نعمل",
    step1Title: "التدقيق",
    step1Desc: "نقيّم احتياجاتك ونحلل سوقك.",
    step2Title: "التصميم",
    step2Desc: "نصمم نموذجاً مخصصاً يعكس هويتك البصرية.",
    step3Title: "الإطلاق",
    step3Desc: "موقعك يصبح متاحاً، سريعاً ومحسّناً بالكامل.",
    whyTitle: "لماذا تختار Agafay Labs؟",
    reason1Title: "خبرة محلية",
    reason1Desc: "نفهم السوق المغربي وخصوصياته.",
    reason2Title: "ثلاث لغات",
    reason2Desc: "موقعك بالعربية والفرنسية والإنجليزية للوصول إلى عملاء أكثر.",
    reason3Title: "تسليم سريع",
    reason3Desc: "موقعك يُسلّم في غضون 7 إلى 14 يوم عمل.",
    reason4Title: "أسعار معقولة",
    reason4Desc: "أسعار مناسبة للمؤسسات الصغيرة والمتوسطة المغربية.",
    portfolioTitle: "أعمالنا",
    viewProject: "عرض المشروع",
    portfolio1Title: "رياض النجمة — موقع تعريفي",
    portfolio1Desc: "موقع أنيق لرياض ساحر في مراكش.",
    portfolio2Title: "نكهات السوق — مطعم",
    portfolio2Desc: "حضور رقمي كامل لمطعم مغربي عصري.",
    portfolio3Title: "أطلس دنتال — عيادة",
    portfolio3Desc: "موقع احترافي مع نظام حجز المواعيد عبر الإنترنت.",
    testimonialsTitle: "ماذا يقول عملاؤنا",
    testimonial1Quote: "غيّرت Agafay Labs حضورنا الرقمي بالكامل. نتلقى ثلاثة أضعاف الاستفسارات منذ إطلاق موقعنا الجديد.",
    testimonial1Author: "أمينة ب.",
    testimonial1Role: "مالكة، رياض النجمة",
    testimonial2Quote: "عمل احترافي وسريع بسعر معقول جداً. أنصح بهم بشدة.",
    testimonial2Author: "كريم م.",
    testimonial2Role: "مدير، نكهات السوق",
    testimonial3Quote: "فهم الفريق احتياجاتنا تماماً. الموقع جميل وسريع ومرضانا يجدونه سهل الاستخدام.",
    testimonial3Author: "د. فاطمة ز.",
    testimonial3Role: "مديرة، أطلس دنتال",
    blogTitle: "مدونتنا",
    readMore: "اقرأ المزيد ←",
    blog1Title: "Pourquoi votre entreprise a besoin d'un site web en 2025",
    blog1Excerpt: "اكتشف لماذا أصبح التواجد على الإنترنت ضرورة للمقاولات المغربية.",
    blog2Title: "كيف يساعدك الموقع الإلكتروني على جذب المزيد من العملاء",
    blog2Excerpt: "تعرف على الطرق التي يمكن لموقعك الإلكتروني من خلالها استقطاب عملاء جدد.",
    blog3Title: "5 Signs Your Business Website Needs a Redesign",
    blog3Excerpt: "هل يعيق موقعك الإلكتروني نمو مشروعك؟ إليك العلامات التحذيرية.",
    contactTitle: "تواصل معنا",
    contactSubtitle: "لديك مشروع؟ دعنا نتحدث.",
    labelName: "الاسم الكامل",
    labelEmail: "البريد الإلكتروني",
    labelPhone: "الهاتف",
    labelMessage: "رسالتك",
    labelSend: "إرسال",
    formSuccess: "شكراً! تم إرسال رسالتك بنجاح.",
    footerDesc: "وكالة ويب مقرها مراكش متخصصة في إنشاء مواقع إلكترونية حديثة للشركات المغربية.",
    footerNav: "التنقل",
    footerSocial: "وسائل التواصل",
    footerCopyright: "© 2025 Agafay Labs. جميع الحقوق محفوظة."
  }
};

/* --- Language Switcher --- */
function setLanguage(lang) {
  localStorage.setItem('agafay-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (lang === 'ar') {
    document.body.style.fontFamily = "var(--font-arabic)";
  } else {
    document.body.style.fontFamily = "var(--font-primary)";
  }

  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Update active button
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* --- DOM Ready --- */
document.addEventListener('DOMContentLoaded', () => {

  // Language init
  const savedLang = localStorage.getItem('agafay-lang') || 'fr';
  setLanguage(savedLang);

  // Language button clicks
  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // --- Navbar scroll effect ---
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // --- Hamburger Menu ---
  const hamburger = document.querySelector('.navbar__hamburger');
  const navLinks = document.querySelector('.navbar__links');
  const navOverlay = document.querySelector('.nav-overlay');

  function closeMenu() {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
    navOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      navLinks?.classList.toggle('open');
      navOverlay?.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }
  navOverlay?.addEventListener('click', closeMenu);

  // Close menu when clicking a nav link
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // --- Smooth Scroll for Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Scroll Reveal (IntersectionObserver) ---
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));
  }

  // --- Contact Form ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('#name').value.trim();
      const email = contactForm.querySelector('#email').value.trim();
      const message = contactForm.querySelector('#message').value.trim();
      const errorEl = contactForm.querySelector('.form-error');
      const successEl = contactForm.querySelector('.form-success');

      if (!name || !email || !message) {
        if (errorEl) {
          errorEl.textContent = 'Please fill in all required fields.';
          errorEl.classList.add('show');
        }
        return;
      }
      if (errorEl) errorEl.classList.remove('show');
      if (successEl) {
        const lang = localStorage.getItem('agafay-lang') || 'fr';
        successEl.textContent = translations[lang]?.formSuccess || 'Message sent!';
        successEl.classList.add('show');
      }
      contactForm.reset();
      setTimeout(() => successEl?.classList.remove('show'), 5000);
    });
  }

  // --- Reading Progress Bar ---
  const progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / docHeight) * 100;
      progressBar.style.width = scrolled + '%';
    });
  }

  // --- Blog Category Filter ---
  const filterBtns = document.querySelectorAll('.category-filter button');
  const blogCards = document.querySelectorAll('.blog-listing .blog-card');
  if (filterBtns.length && blogCards.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.category;
        blogCards.forEach(card => {
          if (cat === 'all' || card.dataset.category === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

});
