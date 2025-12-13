<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

useHead({
  link: [
    {
      rel: "icon",
      href: `${config.app.baseURL}favicon.ico`,
    },
  ],
});
</script>
