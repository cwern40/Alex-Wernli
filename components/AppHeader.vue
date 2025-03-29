<template>
  <header class="flex justify-center items-center p-4 bg-burnt-orange-500">
    <UNavigationMenu hightlight color="neutral" :items="items" orientation="horizontal" class="gap-4" />
  </header>
</template>

<script setup>
const items = ref([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Photos',
    to: '/photos',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]);
</script>
