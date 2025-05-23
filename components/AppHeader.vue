<template>
  <header
    :class="[
      'flex justify-between items-center py-4 px-4 sm:px-8 bg-burnt-orange-500 transition-transform duration-300 z-50 w-full',
      isScrollingUp ? 'sticky top-0' : 'static',
    ]"
  >
    <USlideover v-model:open="menuOpen" side="left" class="block sm:hidden">
      <UButton
        icon="ic:round-menu"
        aria-label="menu"
        color="primary"
        size="md"
        variant="solid"
        class="text-white text-3xl self-center p-0 h-[30px]"
      ></UButton>

      <template #content>
        <div class="bg-burnt-orange-500 h-full p-8 flex flex-col items-center">
          <div class="flex justify-between items-center w-full mb-4">
            <ULink to="/albums/texas-trip" @click="menuOpen = false">
              <NuxtImg src="/img/texas-longhorns-2-logo-black-and-white.png" alt="Logo" height="30" width="30" />
            </ULink>
            <ULink to="/life-story" @click="menuOpen = false">
              <p class="text-white font-bold text-2xl">AW</p>
            </ULink>
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
    <ULink to="/albums/texas-trip" class="hidden sm:block">
      <NuxtImg src="/img/texas-longhorns-2-logo-black-and-white.png" alt="Logo" height="30" width="30" />
    </ULink>
    <ULink to="/life-story" class="block sm:hidden" @click="menuOpen = false"
      ><p class="text-white font-bold text-2xl">AW</p>
    </ULink>
    <UNavigationMenu color="neutral" :items="items" orientation="horizontal" class="gap-4 hidden sm:block" />
    <ULink to="/albums/texas-trip">
      <NuxtImg src="/img/texas-longhorns-2-logo-black-and-white.png" alt="Logo" height="30" width="30" />
    </ULink>
  </header>
</template>

<script setup>
const menuOpen = ref(false);
const isScrollingUp = ref(true);
let lastScrollY = 0;

const handleScroll = () => {
  if (typeof window !== 'undefined') {
    const currentScrollY = window.scrollY;
    isScrollingUp.value = currentScrollY < lastScrollY || currentScrollY <= 0;
    lastScrollY = currentScrollY;
  }
};

onMounted(() => {
  if (typeof window !== 'undefined') {
    lastScrollY = window.scrollY; // Initialize lastScrollY after mounting
    window.addEventListener('scroll', handleScroll);
  }
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll);
  }
});

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
    label: 'Life Story',
    to: '/life-story',
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
    label: 'Share a Memory',
    to: '/share-a-memory',
    class: 'text-xl sm:text-base my-4 sm:my-0',
    onSelect: () => {
      menuOpen.value = false;
    },
  },
]);
</script>
