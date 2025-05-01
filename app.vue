<template>
  <UApp :toaster="appConfig.toaster">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup>
const appConfig = useAppConfig();

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        type: 'application/ld+json',
        textContent: {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://alexwernlimemorial.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Life Story',
              item: 'https://alexwernlimemorial.com/life-story',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Photo Albums',
              item: 'https://alexwernlimemorial.com/albums',
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: 'Obituary',
              item: 'https://alexwernlimemorial.com/obituary',
            },
            {
              '@type': 'ListItem',
              position: 5,
              name: 'Memories',
              item: 'https://alexwernlimemorial.com/memories',
            },
            {
              '@type': 'ListItem',
              position: 6,
              name: 'Share a Memory',
              item: 'https://alexwernlimemorial.com/share-a-memory',
            },
          ],
        },
      }),
    },
  ],
});
</script>
<style>
@import '@/assets/css/main.css';

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
