<template>
  <UApp :toaster="appConfig.toaster">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
<script setup>
const appConfig = useAppConfig();
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
