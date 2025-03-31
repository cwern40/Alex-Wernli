<template>
  <header class="flex justify-between items-center p-4 bg-burnt-orange-500">
    <USlideover v-model:open="menuOpen" side="left" class="block sm:hidden">
      <UButton icon="ic:round-menu" color="primary" size="md" variant="outline" class="text-3xl text-white" />

      <template #content>
        <div class="bg-burnt-orange-500 h-full p-8 flex flex-col items-center">
          <UIcon
            name="weui:close2-outlined"
            size="36px"
            class="text-white cursor-pointer transform transition-transform hover:rotate-180 self-end mb-4"
            @click="menuOpen = false"
          />
          <UNavigationMenu color="neutral" :items="items" orientation="vertical" />
        </div>
      </template>
    </USlideover>
    <p class="text-white font-bold text-2xl">AW</p>
    <UNavigationMenu color="neutral" :items="items" orientation="horizontal" class="gap-4 hidden sm:block" />
    <div class="w-10"></div>
  </header>
</template>

<script setup>
const menuOpen = ref(false);
const items = ref([
  {
    label: 'Home',
    to: '/',
    class: 'text-xl sm:text-base my-4 sm:my-0',
  },
  {
    label: 'About',
    to: '/about',
    class: 'text-xl sm:text-base my-4 sm:my-0',
    onSelect: () => {
      menuOpen.value = false;
    },
  },
  {
    label: 'Albums',
    to: '/albums',
    class: 'text-xl sm:text-base my-4 sm:my-0',
    onSelect: () => {
      menuOpen.value = false;
    },
  },
  {
    label: 'Obituary',
    to: '/obituary',
    class: 'text-xl sm:text-base my-4 sm:my-0',
    onSelect: () => {
      menuOpen.value = false;
    },
  },
  {
    label: 'Memories',
    to: '/memories',
    class: 'text-xl sm:text-base my-4 sm:my-0',
    onSelect: () => {
      menuOpen.value = false;
    },
  },
  {
    label: 'Contact',
    to: '/contact',
    class: 'text-xl sm:text-base my-4 sm:my-0',
    onSelect: () => {
      menuOpen.value = false;
    },
  },
]);
</script>
