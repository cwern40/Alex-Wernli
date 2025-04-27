<template>
  <UContainer>
    <UBreadcrumb :items="breadcrumbs" class="my-4" />
    <section class="columns-2 md:columns-3 lg:columns-4 gap-2 space-y-2 mx-auto w-[fit-content] mb-12">
      <NuxtImg
        v-for="(img, index) of album.photos"
        :src="img.src"
        :alt="img.alt"
        :key="img.src"
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
          class="max-h-[100vh] max-w-full"
        >
          <img
            :src="item.src"
            :alt="item.alt"
            class="rounded-lg max-w-[90vw] max-h-[85vh] object-contain m-auto"
            loading="lazy"
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
const breadcrumbs = ref([
  {
    label: 'Albums',
    to: '/albums',
  },
  {
    label: album.value.title,
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
</script>
