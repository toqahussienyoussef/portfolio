<template>
  <div class="hero">
    <!-- Navigation Bar -->
    <nav class="main-nav" aria-label="Primary Navigation">
      <div class="nav-container">
        <!-- Logo -->
        <a href="/" class="nav-logo">ToQa Hussien</a>

        <!-- Desktop Links -->
        <ul class="nav-links-desktop">
          <li href="#about" class="nav-item">About</li>
          <li href="#journey" class="nav-item">Journey</li>
          <li href="#skills" class="nav-item">Skills</li>
          <li href="#projects" class="nav-item">Projects</li>
          <li href="#contact" class="nav-item nav-cta">Contact</li>
        </ul>

        <!-- Mobile Burger -->
        <button
          class="nav-burger md:hidden"
          @click="menuOpen = true"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    <!-- Mobile Overlay -->
    <div v-if="menuOpen" class="nav-overlay" @click="menuOpen = false"></div>

    <!-- Mobile Side Menu -->
    <aside v-if="menuOpen" class="nav-mobile" :class="{ open: menuOpen }">
      <button
        class="nav-close"
        @click="menuOpen = false"
        aria-label="Close menu"
      >
        ✕
      </button>

      <a href="#about" @click="menuOpen = false">About</a>
      <a href="#journey" @click="menuOpen = false">Journey</a>
      <a href="#skills" @click="menuOpen = false">Skills</a>
      <a href="#projects" @click="menuOpen = false">Projects</a>
      <a href="#contact" @click="menuOpen = false" class="cta"> Contact </a>
    </aside>

    <!-- Header Section -->
    <header class="header">
      <div class="blue-header-bg">
        <div class="header-pattern">
          <div class="header-pattern-inner"></div>
        </div>

        <div class="header-content-wrapper">
          <div class="header-flex">
            <!-- Profile Image -->
            <div class="profile-image-container">
              <div class="profile-image-group">
                <div class="profile-glow"></div>
                <div class="profile-image-frame">
                  <img
                    src="~/assets/images/Toqa_img.jpg"
                    loading="lazy"
                    alt="Toqa Hussien"
                    class="profile-image"
                  />
                </div>
              </div>
            </div>

            <!-- Header Content -->
            <div class="header-text">
              <h1 class="hero-title">Toqa Hussien Youssef</h1>
              <p class="hero-subtitle">
                Senior Frontend Developer | Vue.js & Nuxt.js Specialist
              </p>
              <p class="hero-description">
                Senior Front-End Developer with extensive experience across all
                stages of the front-end development lifecycle for dynamic,
                user-centric web applications. Specialized in Vue.js, modern UI
                frameworks, responsive design, and performance optimization.
                Strong background in WordPress, Laravel, Umbraco, Agile
                development, and leading development teams.
              </p>

              <!-- Contact Links -->
              <div class="contact-links">
                <NuxtLink
                  to="mailto:toqauae.2017@gmail.com"
                  class="contact-link"
                  external
                >
                  <Mail :size="20" />
                  <span class="font-medium">Email Me</span>
                </NuxtLink>
                <NuxtLink to="tel:01120328188" class="contact-link" external>
                  <Phone :size="20" />
                  <span class="font-medium">01120328188</span>
                </NuxtLink>
                <NuxtLink
                  to="https://www.linkedin.com/in/toqa-hussin-143a5a15b/"
                  class="contact-link"
                  external
                  target="_blank"
                >
                  <Linkedin :size="20" />
                  <span class="font-medium">LinkedIn</span>
                </NuxtLink>
                <button @click="downloadCV" class="cv-button">
                  <Download :size="20" />
                  <span>Download CV</span>
                </button>
              </div>

              <!-- Location -->
              <div class="location">
                <MapPin :size="18" />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- About Me Section -->
    <section id="about" class="about-section">
      <div class="section-container-about">
        <h2 class="section-title">About Me</h2>

        <div class="stats-grid">
          <div class="stat-card main-bg-color">
            <div class="stat-number">6+</div>
            <div class="stat-label">Years of Experience</div>
          </div>
          <div class="stat-card second-bg-color">
            <div class="stat-number">15+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-card main-bg-color">
            <div class="stat-number">5</div>
            <div class="stat-label">Companies Worked</div>
          </div>
        </div>

        <div class="about-prose">
          <p class="about-paragraph">
            I'm a passionate Senior Front-End Developer based in Cairo, Egypt,
            with a proven track record of delivering high-quality, user-centric
            web applications. My journey in web development spans over 6 years,
            during which I've specialized in Vue.js and Nuxt.js ecosystems.
          </p>
          <p class="about-paragraph">
            Throughout my career, I've had the privilege of leading development
            teams, mentoring junior developers, and architecting complex
            enterprise applications. I'm deeply committed to writing clean,
            maintainable code and implementing best practices in performance
            optimization and responsive design.
          </p>
        </div>
      </div>
    </section>

    <!-- Journey Timeline Section -->
    <section id="journey" class="journey-section">
      <div class="journey-container">
        <h2 class="journey-title">My Journey</h2>

        <div class="timeline-wrapper">
          <!-- Timeline vertical line -->
          <div class="timeline-line"></div>

          <!-- Timeline Items -->
          <div class="timeline-list">
            <div
              v-for="(job, index) in timeline"
              :key="index"
              class="timeline-item"
            >
              <div
                :class="[
                  'timeline-card-wrapper',
                  index % 2 === 0 ? 'right' : 'left',
                ]"
              >
                <div class="timeline-card" :class="`border-${job.color}-500`">
                  <!-- Timeline Dot -->
                  <div
                    class="timeline-dot"
                    :class="[
                      index % 2 === 0 ? 'dot-right' : 'dot-left',
                      `border-${job.color}-500`,
                    ]"
                  ></div>

                  <div class="timeline-header">
                    <div>
                      <h3 class="job-role">{{ job.role }}</h3>
                      <p class="job-company" :class="`text-${job.color}-600`">
                        {{ job.company }}
                      </p>
                    </div>
                  </div>

                  <div class="timeline-meta">
                    <div class="meta-row">
                      <Calendar :size="16" />
                      <span>{{ job.period }}</span>
                    </div>

                    <span class="job-duration">
                      {{ job.duration }}
                    </span>
                  </div>

                  <ul class="responsibility-list">
                    <li v-for="(resp, idx) in job.responsibilities" :key="idx">
                      <span>{{ resp }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section">
      <div class="section-container">
        <h2 class="section-title">Technical Skills</h2>

        <div class="progress-grid">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="progress-item"
          >
            <div class="progress-header">
              <span class="skill-name">{{ skill.name }}</span>
              <span class="skill-level">{{ skill.level }}%</span>
            </div>
            <div class="progress-bar-container">
              <div
                class="progress-bar"
                :style="{
                  width: animatedSkills[index] ? `${skill.level}%` : '0%',
                }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Skill Categories -->
        <!-- <div class="categories-grid">
          <div class="category-card emerald">
            <div class="category-number">Core</div>
            <p class="category-text">HTML, CSS, JS, TS</p>
          </div>
          <div class="category-card amber">
            <div class="category-number">Frameworks</div>
            <p class="category-text">Vue, Nuxt, Vuex</p>
          </div>
          <div class="category-card teal">
            <div class="category-number">Styling</div>
            <p class="category-text">Tailwind, SCSS</p>
          </div>
          <div class="category-card rose">
            <div class="category-number">Tools</div>
            <p class="category-text">Git, Jira, APIs</p>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <div class="section-container">
        <h2 class="section-title">Part Of Featured Projects</h2>

        <div class="projects-grid">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="project-card group"
          >
            <div
              class="project-accent"
              :class="`from-${project.color}-400 to-${project.color}-600`"
            ></div>

            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="project-link"
                >
                  <ExternalLink :size="20" />
                </a>
                <span v-else-if="project.status" class="project-status">
                  {{ project.status }}
                </span>
              </div>

              <p class="project-tech">{{ project.tech }}</p>

              <p class="project-description">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
      <div class="section-container">
        <h2 class="section-title">Get In Touch</h2>

        <div class="contact-grid">
          <!-- Contact Form -->
          <div>
            <div v-if="!formSubmitted" class="form-container">
              <form action="https://formspree.io/f/xqarnyak" method="POST">
                <div class="form-group">
                  <label class="form-label" for="name">Your Name</label>
                  <input
                    v-model="formData.name"
                    id="name"
                    name="name"
                    type="text"
                    class="form-input"
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label" for="email">Your Email</label>
                  <input
                    v-model="formData.email"
                    id="email"
                    name="email"
                    type="email"
                    class="form-input"
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div class="form-group">
                  <label class="form-label" for="message">Your Message</label>
                  <textarea
                    v-model="formData.message"
                    id="message"
                    name="message"
                    required
                    rows="6"
                    class="form-textarea"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button @click="submitForm" class="submit-button">
                  <Send :size="20" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            <div v-else class="success-message">
              <CheckCircle :size="48" class="success-icon" />
              <h3 class="success-title">Thank You!</h3>
              <p class="success-text">
                Your message has been sent successfully. I'll get back to you
                soon!
              </p>
            </div>
          </div>

          <!-- Contact Info & Social -->
          <div class="contact-info">
            <div>
              <h3 class="contact-subtitle">Contact Information</h3>

              <div class="info-list">
                <a
                  href="mailto:toqauae.2017@gmail.com"
                  class="info-item bg-[var(--main-color-light)]"
                >
                  <div class="info-icon-wrapper">
                    <Mail :size="24" />
                  </div>
                  <div>
                    <div class="info-type">Email</div>
                    <div class="info-value">toqauae.2017@gmail.com</div>
                  </div>
                </a>

                <a
                  href="tel:01120328188"
                  class="info-item bg-[var(--second-color-light)]"
                >
                  <div class="info-icon-wrapper bg-[var(--second-color)]">
                    <Phone :size="24" />
                  </div>
                  <div>
                    <div class="info-type">Phone</div>
                    <div class="info-value">01120328188</div>
                  </div>
                </a>

                <a href="#" class="info-item bg-[var(--main-color-light)]">
                  <div class="info-icon-wrapper">
                    <MapPin :size="24" />
                  </div>
                  <div>
                    <div class="info-type">Location</div>
                    <div class="info-value">Cairo, Egypt</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="section-container">
        <div class="footer-content">
          <h3 class="footer-title">Toqa Hussien Youssef</h3>
          <p class="footer-subtitle">
            Senior Frontend Developer | Vue.js & Nuxt.js Specialist
          </p>

          <div class="nav-links">
            <a href="#about" class="nav-link">About</a>
            <a href="#journey" class="nav-link">Journey</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>

          <div class="footer-bottom">
            <p class="copyright">
              © 2025 Toqa Hussien Youssef. All rights reserved.
            </p>
            <p class="built-with">Built with Nuxt 3, Vue 3, and Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
const toast = useToast();
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  MapPin,
  Calendar,
  ExternalLink,
  Send,
  CheckCircle,
} from "lucide-vue-next";

useSeoMeta({
  title: "Toqa Hussien Youssef | Senior Frontend Developer (Vue & Nuxt)",
  description:
    "Senior Frontend Developer with 6+ years of experience specializing in Vue.js, Nuxt.js, Tailwind CSS, and modern UI development. Based in Cairo, Egypt.",

  keywords:
    "Senior Frontend Developer, Vue.js, Nuxt.js, Tailwind CSS, Frontend Engineer, Cairo Egypt",

  author: "Toqa Hussien Youssef",

  robots: "index, follow",
});
useSeoMeta({
  ogTitle: "Toqa Hussien Youssef | Senior Frontend Developer",
  ogDescription:
    "Senior Frontend Developer specializing in Vue.js & Nuxt.js with strong experience in scalable, user-centric web applications.",
  ogType: "website",
  ogUrl: "https://toqahussienyoussef.github.io/portfolio/",
  ogImage:
    "https://toqahussienyoussef.github.io/portfolio/Toqa_img.yZTTQ72J.jpg",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://toqahussienyoussef.github.io/portfolio/",
    },
  ],
});

const menuOpen = ref(false);

const animatedSkills = ref(new Array(12).fill(false)); // Matches skills.length

const timeline = ref([
  {
    company: "TurnDigital Software Company",
    role: "Senior Front-End Developer",
    period: "May 2025 – Present",
    duration: "8 months",
    responsibilities: [
      "Specialized in Vue.js, Vuex, Pinia, Tailwind CSS, Umbraco Admin, and Agile methodologies",
      "Responsible for building scalable, maintainable front-end architectures for enterprise projects",
      "Leading development of complex enterprise applications with focus on performance and scalability",
    ],
    color: "emerald",
  },
  {
    company: "QuadraTech Software Company",
    role: "Senior Front-End Developer",
    period: "March 2022 – January 2025",
    duration: "2 yrs,10 mos",
    responsibilities: [
      "Led the front-end development team and trained new trainees",
      "Specialized in Vue.js, Nuxt.js, Vuetify, Vuex, Pinia, BootstrapVue, HTML5, CSS3, Javascript, and Agile",
      "Delivered high-quality interfaces and ensured best coding practices",
      "Mentored junior developers and conducted code reviews",
    ],
    color: "amber",
  },
  {
    company: "Shifters Software Company",
    role: "Front-End Developer",
    period: "July 2019 – March 2022",
    duration: "2 yrs 8 mos",
    responsibilities: [
      "Worked with HTML, CSS, JavaScript, Bootstrap, jQuery, Vue.js, and Jira",
      "Developed dynamic UIs and maintained multiple client projects",
      "Collaborated with cross-functional teams to deliver pixel-perfect implementations",
    ],
    color: "teal",
  },
  {
    company: "Engaz Media Digital Marketing Agency",
    role: "Front-End Developer",
    period: "March 2019 – April 2019",
    duration: "2 months",
    responsibilities: [
      "Conducted meetings with Product Owners, built sitemaps, selected templates",
      "Customized UI and handled WordPress development",
      "Delivered client projects within tight deadlines",
    ],
    color: "rose",
  },
  {
    company: "GORGOV Digital Marketing Agency",
    role: "Front-End Developer",
    period: "May 2018 – March 2019",
    duration: "10 months",
    responsibilities: [
      "Responsible for template customization, data entry, WordPress setup",
      "Created sitemaps and implemented UI enhancements",
      "Managed multiple client websites and digital assets",
    ],
    color: "violet",
  },
]);

const skills = ref([
  { name: "Vue.js", level: 95, category: "framework" },
  { name: "Nuxt.js", level: 95, category: "framework" },
  { name: "JavaScript (ES6+)", level: 90, category: "language" },
  { name: "TypeScript", level: 85, category: "language" },
  { name: "HTML5 & CSS3", level: 95, category: "language" },
  { name: "SCSS/Sass", level: 90, category: "styling" },
  { name: "Tailwind CSS", level: 92, category: "styling" },
  { name: "Vuex & Pinia", level: 90, category: "state" },
  { name: "REST APIs", level: 88, category: "integration" },
  { name: "Git & GitHub", level: 85, category: "tools" },
  { name: "Responsive Design", level: 95, category: "design" },
  { name: "Performance Optimization", level: 87, category: "optimization" },
]);

const projects = ref([
  {
    title: "CPA – Customer Protection Agency",
    tech: "Vue.js, Vuelidate, Pinia, SCSS, Tailwind CSS, REST API, Umbraco CMS",
    description:
      "Built the entire platform from scratch, including authentication and authorization. Developed multi-step complaint submission with validation and filtering. Implemented file upload, notifications, and comprehensive complaint management.",
    status: "To Be Released",
    color: "emerald",
  },
  {
    title: "Quran Radio From Cairo",
    tech: "Vue.js, Vuex, Vue Router, Vuelidate, SCSS, Bootstrap, REST API",
    description:
      "Implemented live streaming radio synchronized with Cairo Time Zone. Built global sticky audio player across the whole website. Developed programs, episodes, and Quran text/recordings sections with full admin system.",
    link: "https://misrquran.gov.eg/",
    color: "teal",
  },
  {
    title: "MCIT — Ministry of Communication & IT",
    tech: "Vue.js, Pinia, SCSS, Tailwind CSS, REST API",
    description:
      "Developed listings and detailed pages for Tenders, Vacancies, Media Center, and What's New. Created a global printing utility for generating clean, print-ready pages.",
    status: "To Be Released",
    color: "amber",
  },
  {
    title: "Fulfillment Management System",
    tech: "Nuxt.js 2.x, Vue.js, Vuex, Vuetify, Webpack 5, Vee-Validate, XLSX, Chart.js",
    description:
      "Developed a complete inventory management system using Nuxt 2. Implemented full authentication, dynamic dashboards with Chart.js, barcode scanning, Excel import/export system, and multiple business-critical modules including product management and stock operations.",
    link: "https://fulladmin.quadra-soft.net/",
    color: "violet",
  },
  {
    title: "Bayank - Modern Government Services Platform",
    tech: "Nuxt 3, Vue 3, Vuetify 3, Chart.js 4, NextAuth, i18n v8, ReCAPTCHA v3",
    description:
      "Developed a fully modernized government services platform using Nuxt 3 and Vue 3, leveraging server-side rendering. Implemented secure NextAuth-based authentication, advanced multi-language capabilities with Arabic and English RTL support, dual Gregorian + Hijri calendar support.",
    link: "https://admin.bayank.sa/",
    color: "rose",
  },

  {
    title: "Sahm - logistic Mangment Platform",
    tech: "HTML , SCSS , Javascript , Laravel , Bootstrap ",
    description:
      "Crafted a modern, responsive frontend using Laravel Blade templates integrated with Bootstrap 5 for component-based UI design. Utilized Vite 4 for fast hot module replacement and optimized asset bundling, with Sass for modular styling. Incorporated Axios for efficient API communications and Popper.js for dynamic positioning in dropdowns and tooltips, ensuring a seamless user experience across devices.",
    link: "https://supply-ways.com/",
    color: "rose",
  },
  {
    title: "E-Commerce Platform - Basta Store",
    tech: "Vue 3, Nuxt 3, Vuetify 3, Chart.js 4, NextAuth, i18n v8, ReCAPTCHA v3",
    description:
      "Built a full-stack e-commerce application from scratch, featuring user authentication, product catalog with search and filters, shopping cart, and secure payment integration. Optimized for performance with lazy loading and implemented responsive design for seamless mobile and desktop experiences.",
    status: "To Be Released",
    color: "amber",
  },
  {
    title: "San wa Hukm - Realistic Baloot Card Game Platform",
    tech: "HTML , SCSS , Javascript , Laravel 10, Bootstrap 5, Vite",
    description:
      "Developed an engaging entertainment app focused on realistic mental and card games, particularly Baloot. Users can create sessions, invite friends, and join competitive multiplayer games. Features a dynamic environment that enhances interactivity and excitement through organized play, result tracking, and community-driven competitions.",
    link: "https://sunhakam.com/",
    color: "indigo",
  },
]);

const downloadCV = async () => {
  const pdfPath = "/portfolio/files/Senior_FRONTEND_TOQA_HUSSIEN_CV.pdf";

  try {
    const response = await $fetch.raw(pdfPath, { method: "HEAD" });

    if (response.ok) {
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = "Senior_FRONTEND_TOQA_HUSSIEN_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success({
        title: "Success!",
        message: "CV Download completed successfully.",
      });
    } else {
      throw new Error(`HTTP ${response.status}: File not accessible`);
    }
  } catch (error) {
    console.error("Download error:", error);
    toast.error({
      title: "Error!",
      message:
        "Something went wrong. Please check the file path or try again later.",
    });
  }
};

// Form functionality

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const formSubmitted = ref(false);
const isLoading = ref(false);

const submitForm = async () => {
  if (
    !formData.value.name ||
    !formData.value.email ||
    !formData.value.message
  ) {
    toast.warning({
      title: "Warning!",
      message: "Please fill in all fields.",
    });
    return;
  }

  isLoading.value = true;

  try {
    const response = await $fetch("https://formspree.io/f/xqarnyak", {
      method: "POST",
      body: {
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
      },
    });

    formSubmitted.value = true;

    setTimeout(() => {
      formSubmitted.value = false;
      formData.value = { name: "", email: "", message: "" };
    }, 5000);
  } catch (error) {
    toast.error({
      title: "Error!",
      message: "Something went wrong. Please try again.",
    });
  } finally {
    isLoading.value = false;
  }
};

// Trigger skill animations on mount (now sets to level and stays)
onMounted(() => {
  setTimeout(() => {
    skills.value.forEach((_, index) => {
      setTimeout(() => {
        animatedSkills.value[index] = true;
      }, index * 50);
    });
  }, 500);
});
</script>
