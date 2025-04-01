<template>
  <UContainer class="py-4">
    <NuxtLink v-for="(album, index) in albums" :key="album.url" class="mb-8" :to="`/albums/${album.url}`">
      <h2 class="my-4 text-center">{{ album.title }}</h2>
      <UCarousel
        v-slot="{ item }"
        class="max-w-[100vh] mx-auto"
        :items="album.photos"
        :ui="{ item: 'basis-1/2 sm:basis-1/3' }"
        loop
        :auto-scroll="{ startDelay: 1000 * (index + 1), stopOnInteraction: false }"
      >
        <NuxtImg :src="item" width="320" height="320" class="rounded-lg" loading="lazy" />
      </UCarousel>
    </NuxtLink>
  </UContainer>
</template>

<script setup>
const open = ref(false);
const { data: albums } = await useAsyncData('albums', () => {
  return queryCollection('albums').order('order', 'ASC').all();
});
</script>
