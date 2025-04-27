<template>
  <section class="flex gap-10 flex-col md:flex-row items-center justify-center w-full p-4 md:p-10 rounded-lg shadow-lg">
    <div class="basis-1/2 flex justify-center items-center" :class="{ 'order-0 md:order-1': imgPlacement === 'right' }">
      <NuxtImg :src="content.imgSrc" :alt="content.imgAlt" sizes="320px" class="rounded-lg" loading="lazy" />
    </div>
    <div class="basis-1/2 flex justify-center items-center">
      <p class="leading-loose">
        {{ content.text }}
      </p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
  imgPlacement: {
    type: String,
    default: 'left',
  },
});
</script>
