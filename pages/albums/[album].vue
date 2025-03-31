<template>
  <UContainer>
    <UBreadcrumb :items="breadcrumbs" class="my-4" />
    <section class="flex flex-wrap justify-center gap-2 mb-12">
      <NuxtImg
        v-for="(img, index) of album.photos"
        :src="img"
        class="rounded-lg cursor-pointer w-[180px] h-[180px] sm:w-[285px] sm:h-[285px] object-cover"
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
          dots
          :prev="{ color: 'primary' }"
          :next="{ color: 'primary' }"
          :startIndex="activeIndex"
          :ui="{
            dot: 'w-6 h-1',
          }"
          class="max-h-[100vh] max-w-full"
        >
          <NuxtImg :src="item" class="rounded-lg max-w-[90vw] max-h-[85vh] object-contain m-auto" loading="lazy" />
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
