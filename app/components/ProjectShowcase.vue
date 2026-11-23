<template>
  <section id="projects" class="work-section" aria-labelledby="work-title">
    <div class="work-container">
      <div class="work-intro">
        <div>
          <p class="work-eyebrow">SELECTED WORK / E-SYSTEMATIC</p>
          <h2 id="work-title">
            Built from the ground up.<br /><span>Made to grow.</span>
          </h2>
        </div>
        <p>
          One CRM. Six microsite templates. A shared frontend foundation — and
          a team that grew with the product.
        </p>
      </div>

      <div class="work-proof" aria-label="Selected project contributions">
        <div><strong>6</strong><span>microsite templates</span></div>
        <div><strong>9</strong><span>frontend developers led</span></div>
        <div><strong>~100</strong><span>Vue components created</span></div>
        <div><strong>25 Aug ’26</strong><span>first release, on time</span></div>
      </div>

      <div class="work-filters" role="group" aria-label="Filter projects">
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          :class="{ active: active === filter }"
          :aria-pressed="active === filter"
          @click="active = filter"
        >
          {{ filter }}
          <span>{{ countFor(filter) }}</span>
        </button>
      </div>

      <p class="sr-only" role="status" aria-live="polite">
        {{ visible.length }} projects shown
      </p>

      <div class="work-grid">
        <article
          v-for="project in visible"
          :key="project.slug"
          class="work-card"
          :class="{ 'work-card-featured': project.slug === 'real-estate-crm' }"
        >
          <NuxtLink
            :to="`/projects/${project.slug}`"
            class="work-card-image"
            :aria-label="`Explore ${project.title} project details`"
          >
            <img
              :src="assetUrl(base, project.cover)"
              :alt="`${project.title} ${project.coverIsScreenshot ? 'homepage screenshot' : 'project illustration'}`"
              loading="lazy"
              width="1440"
              height="1000"
            />
            <span class="work-image-label">{{ project.coverIsScreenshot ? "Homepage screenshot" : "Project illustration" }}</span>
            <span class="work-image-arrow" aria-hidden="true">↗</span>
          </NuxtLink>

          <div class="work-card-body">
            <p class="work-eyebrow">{{ project.eyebrow }}</p>
            <h3>
              <NuxtLink :to="`/projects/${project.slug}`">
                {{ project.title }}
              </NuxtLink>
            </h3>
            <p class="work-card-description">{{ project.subtitle }}</p>
            <div class="work-tech" aria-label="Technologies">
              <span v-for="tech in project.tech.slice(0, 4)" :key="tech">
                {{ tech }}
              </span>
            </div>
            <div class="work-card-links">
              <NuxtLink :to="`/projects/${project.slug}`">
                Explore project <span aria-hidden="true">→</span>
              </NuxtLink>
              <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live site
                ↗
                <span class="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects, assetUrl } from "~/data/projects";

const base = useRuntimeConfig().app.baseURL;
const active = ref("All work");
const filters = [
  "All work",
  "CRM & platforms",
  "Pro templates",
  "Core templates",
];
const visible = computed(() =>
  active.value === "All work"
    ? projects
    : projects.filter((project) => project.category === active.value),
);

function countFor(filter) {
  return filter === "All work"
    ? projects.length
    : projects.filter((project) => project.category === filter).length;
}
</script>
