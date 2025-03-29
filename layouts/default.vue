<template>
  <div>
    <AppHeader />
    <slot />
  </div>
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

<style lang="scss" scoped></style>
