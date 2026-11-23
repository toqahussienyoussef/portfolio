<template>
  <div class="project-page">
    <header class="project-nav work-container">
      <NuxtLink to="/" class="project-brand">
        Toqa Hussien
        <span>Frontend Developer &amp; Lead</span>
      </NuxtLink>
      <NuxtLink to="/#projects" class="project-back">
        ← All projects
      </NuxtLink>
    </header>

    <main v-if="project">
      <section class="project-hero work-container">
        <p class="work-eyebrow">{{ project.company }} / {{ project.eyebrow }}</p>
        <div class="project-heading">
          <h1>{{ project.title }}</h1>
          <a
            v-if="project.url"
            :href="project.url"
            class="project-live"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit live site
            ↗
            <span class="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <p class="project-deck">{{ project.subtitle }}</p>
        <div class="work-tech" aria-label="Technologies">
          <span v-for="tech in project.tech" :key="tech">{{ tech }}</span>
        </div>
        <div class="project-meta">
          <div>
            <span>MY ROLE</span>
            <p>{{ project.role }}</p>
          </div>
          <div>
            <span>STATUS</span>
            <p>{{ project.status }}</p>
          </div>
        </div>
      </section>

      <section class="work-container project-cover">
        <div class="browser-bar" aria-hidden="true">
          <i></i><i></i><i></i>
          <span>{{ project.url ? new URL(project.url).host : project.title }}</span>
        </div>
        <img
          :src="assetUrl(base, project.cover)"
          :alt="`${project.title} ${project.coverIsScreenshot ? 'homepage screenshot' : 'project illustration'}`"
          width="1440"
          height="1000"
          fetchpriority="high"
        />
        <p class="project-image-note">{{ project.coverIsScreenshot ? "Homepage screenshot" : "Portfolio illustration" }}</p>
      </section>

      <section class="work-container project-story">
        <div>
          <p class="work-eyebrow">THE PROJECT</p>
          <h2>A closer look.</h2>
        </div>
        <div>
          <p class="project-overview">{{ project.overview }}</p>
          <h3>My contribution</h3>
          <ul>
            <li v-for="item in project.contributions" :key="item">{{ item }}</li>
          </ul>
        </div>
      </section>

      <section
        v-if="project.impact?.length"
        class="project-impact work-container"
        aria-label="Project impact"
      >
        <dl
          v-for="item in project.impact"
          :key="item.label"
          class="project-impact-item"
        >
          <dd>{{ item.value }}</dd>
          <dt>{{ item.label }}</dt>
        </dl>
      </section>

      <section class="project-features">
        <div class="work-container">
          <p class="work-eyebrow">WHAT IT DOES</p>
          <h2>Features that matter.</h2>
          <div class="feature-grid">
            <article
              v-for="(feature, index) in project.features"
              :key="feature.title"
            >
              <span class="feature-number">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <section class="project-bottom work-container">
        <p class="work-eyebrow">KEEP EXPLORING</p>
        <h2>Different interfaces.<br />The same care for the details.</h2>
        <div class="related-projects">
          <NuxtLink
            v-for="item in related"
            :key="item.slug"
            :to="`/projects/${item.slug}`"
          >
            <img
              :src="assetUrl(base, item.cover)"
              :alt="`${item.title} project preview`"
              loading="lazy"
              width="1440"
              height="1000"
            />
            <span>{{ item.title }} <b aria-hidden="true">↗</b></span>
          </NuxtLink>
        </div>
        <NuxtLink to="/#contact" class="project-live">
          Let’s work together →
        </NuxtLink>
      </section>
    </main>

    <footer class="project-footer work-container">
      <span>© {{ new Date().getFullYear() }} Toqa Hussien Youssef</span>
      <NuxtLink to="/#projects">Back to all projects ↑</NuxtLink>
    </footer>

  </div>
</template>

<script setup>
import { projects, assetUrl } from "~/data/projects";

const route = useRoute();
const base = useRuntimeConfig().app.baseURL;
const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug),
);

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
}

const related = computed(() =>
  projects.filter((item) => item.slug !== project.value.slug).slice(0, 3),
);

useSeoMeta({
  title: () => `${project.value.title} | Toqa Hussien Youssef`,
  description: () => project.value.subtitle,
  ogTitle: () => `${project.value.title} — Project showcase`,
  ogDescription: () => project.value.subtitle,
});

useHead({
  link: [
    {
      rel: "canonical",
      href: `https://toqahussienyoussef.github.io/portfolio/projects/${project.value.slug}/`,
    },
  ],
});
</script>
