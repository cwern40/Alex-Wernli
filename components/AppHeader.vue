<template>
  <header class="flex justify-between items-center p-4 bg-burnt-orange-500">
    <USlideover v-model:open="menuOpen" side="left" class="block sm:hidden">
      <UButton
        icon="ic:round-menu"
        color="primary"
        size="md"
        variant="solid"
        class="text-white text-3xl self-center p-0 h-[30px]"
      ></UButton>

      <template #content>
        <div class="bg-burnt-orange-500 h-full p-8 flex flex-col items-center">
          <div class="flex justify-between items-center w-full mb-4">
            <div class="w-[36px]"></div>
            <p class="text-white font-bold text-2xl">AW</p>
            <UIcon
              name="weui:close2-outlined"
              size="28px"
              class="text-white cursor-pointer transform transition-transform hover:rotate-180"
              @click="menuOpen = false"
            />
          </div>
          <hr class="w-full border-b-1 border-white mb-4" />
          <UNavigationMenu
            color="neutral"
            :items="items"
            orientation="vertical"
            :ui="{ linkLabel: 'truncate mx-auto' }"
          />
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
const { data: albums } = await useAsyncData('albums', () => {
  return queryCollection('albums').order('order', 'ASC').all();
});

const childAlbums = albums.value.map((album) => {
  return {
    label: album.title,
    to: `/albums/${album.url}`,
    class: 'text-xl sm:text-base',
    onSelect: () => {
      menuOpen.value = false;
    },
  };
});

childAlbums.unshift({
  label: 'Albums Home',
  to: '/albums',
  class: 'text-xl sm:text-base',
  onSelect: () => {
    menuOpen.value = false;
  },
});
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
    class: 'text-xl sm:text-base my-4 sm:my-0',
    children: childAlbums,
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
