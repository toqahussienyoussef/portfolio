<template>
  <div class="hero">
    <!-- Header Section -->
    <header class="header">
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
              <a href="mailto:toqauae.2017@gmail.com" class="contact-link">
                <Mail :size="20" />
                <span class="font-medium">Email Me</span>
              </a>
              <a href="tel:01120328188" class="contact-link">
                <Phone :size="20" />
                <span class="font-medium">01120328188</span>
              </a>
              <a href="#" target="_blank" class="contact-link">
                <Linkedin :size="20" />
                <span class="font-medium">LinkedIn</span>
              </a>
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
    </header>

    <!-- About Me Section -->
    <section id="about" class="about-section">
      <div class="section-container">
        <h2 class="section-title">About Me</h2>

        <div class="stats-grid">
          <div class="stat-card emerald">
            <div class="stat-number">6+</div>
            <div class="stat-label">Years of Experience</div>
          </div>
          <div class="stat-card amber">
            <div class="stat-number">15+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-card teal">
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
        <div class="categories-grid">
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
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="projects-section">
      <div class="section-container">
        <h2 class="section-title">Featured Projects</h2>

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
              <div class="form-group">
                <label class="form-label">Your Name</label>
                <input
                  v-model="formData.name"
                  type="text"
                  class="form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Your Email</label>
                <input
                  v-model="formData.email"
                  type="email"
                  class="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div class="form-group">
                <label class="form-label">Your Message</label>
                <textarea
                  v-model="formData.message"
                  rows="6"
                  class="form-textarea"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button @click="submitForm" class="submit-button">
                <Send :size="20" />
                <span>Send Message</span>
              </button>
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
                  class="info-item emerald"
                >
                  <div class="info-icon-wrapper">
                    <Mail :size="24" />
                  </div>
                  <div>
                    <div class="info-type">Email</div>
                    <div class="info-value">toqauae.2017@gmail.com</div>
                  </div>
                </a>

                <a href="tel:01120328188" class="info-item amber">
                  <div class="info-icon-wrapper">
                    <Phone :size="24" />
                  </div>
                  <div>
                    <div class="info-type">Phone</div>
                    <div class="info-value">01120328188</div>
                  </div>
                </a>

                <a href="#" class="info-item teal">
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

            <div>
              <h3 class="contact-subtitle">Connect With Me</h3>

              <div class="social-links">
                <a href="#" class="social-link linkedin">
                  <Linkedin :size="28" />
                </a>
                <a href="#" class="social-link github">
                  <Github :size="28" />
                </a>
                <a
                  href="mailto:toqauae.2017@gmail.com"
                  class="social-link email"
                >
                  <Mail :size="28" />
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

const activeSkill = ref(null);
const formData = ref({ name: "", email: "", message: "" });
const formSubmitted = ref(false);
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
    duration: "2 years 10 months",
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
    duration: "2 years 8 months",
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
]);

const downloadCV = () => {
  // Implement CV download logic
  alert("CV download functionality - Add your CV file path here");
};

const submitForm = () => {
  if (formData.value.name && formData.value.email && formData.value.message) {
    // Here you would typically send the form data to a backend
    console.log("Form submitted:", formData.value);
    formSubmitted.value = true;

    // Reset form after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
      formData.value = { name: "", email: "", message: "" };
    }, 5000);
  } else {
    alert("Please fill in all fields");
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
