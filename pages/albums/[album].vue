<template>
  <UContainer>
    <UBreadcrumb :items="breadcrumbs" class="my-4" />
    <section class="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2 mx-auto w-[fit-content] mb-12">
      <NuxtImg
        v-for="(img, index) of album.photos"
        :src="img.src"
        :alt="img.alt"
        :key="img.src"
        format="webp"
        class="rounded-lg cursor-pointer break-inside-avoid"
        sizes="180px sm:285px"
        loading="lazy"
        @click="
          activeIndex = index;
          open = true;
        "
      />
    </section>
    <section
      v-if="open"
      :data-state="open ? 'open' : 'closed'"
      class="fixed inset-0 bg-(--ui-bg-elevated)/75 data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in] z-50 py-4 m-w-[100vw]"
      style="pointer-events: auto"
      @click.self="open = false"
      @keyup.esc="open = false"
    >
      <UContainer class="h-full flex flex-col justify-center items-center" @click.self="open = false">
        <div class="flex justify-end items-center w-full mb-2 px-4 sm:px-0" @click="open = false">
          <UIcon
            name="weui:close2-outlined"
            size="26px"
            class="text-burnt-orange-500 cursor-pointer transform transition-transform hover:rotate-180"
          />
        </div>
        <UCarousel
          v-slot="{ item }"
          :items="album.photos"
          arrows
          :prev="{ color: 'primary' }"
          :next="{ color: 'primary' }"
          :startIndex="activeIndex"
          class="max-h-[100vh] sm:max-w-[90vw] max-w-full"
        >
          <NuxtPicture
            :src="item.src"
            format="webp"
            :imgAttrs="{
              alt: item.alt,
              class: 'rounded-lg sm:max-w-[90vw] max-w-full sm:max-h-[85vh] max-h-[90vh] m-auto w-full sm:w-auto',
              loading: 'lazy',
            }"
          />
        </UCarousel>
      </UContainer>
    </section>
  </UContainer>
</template>

<script setup>
const open = ref(false);
const activeIndex = ref(0);
const route = useRoute();
const { data: album } = await useAsyncData(route.params.album, () => {
  return queryCollection('albums').where('url', '=', route.params.album).first();
});

if (!album.value) {
  await navigateTo('/albums');
}
const breadcrumbs = ref([
  {
    label: 'Albums',
    to: '/albums',
  },
  {
    label: album?.value?.title ?? 'Loading...',
    to: `/albums/${route.params.album}`,
  },
]);

watch(open, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'; // Disable scrolling
  } else {
    document.body.style.overflow = ''; // Restore scrolling
  }
});

if (import.meta.server) {
  useSeoMeta({
    description: 'Explore the photo albums of Alex Wernli, showcasing his life and memories.',
    ogDescription: 'Explore the photo albums of Alex Wernli, showcasing his life and memories.',
  });
}

useSeoMeta({
  title: () => album?.value?.title ?? '',
  ogtitle: () => album?.value?.title ?? '',
  ogImage: () => `https://alexwernlimemorial.com/${album?.value?.photos?.[0]?.src ?? ''}`,
  url: () => `https://alexwernlimemorial.com/albums/${route.params.album}`,
});
</script>
