<template>
  <section
    class="flex flex-col items-center justify-center w-full h-screen min-h-screen bg-center bg-no-repeat bg-cover sm:bg-contain"
    style="background-image: url('/img/Teenager/Alex_obituary_webp.webp'); background-color: #2a2a2a"
  >
    <h2 class="leading-none text-white">THE MEMORIAL</h2>
    <h1 class="text-center text-[50px] sm:text-[100px] font-bold leading-none my-10 text-white">ALEX<br />WERNLI</h1>
    <UButton class="px-7" to="/life-story">ENTER</UButton>
  </section>
</template>
<script setup>
definePageMeta({
  layout: 'no-header',
});

if (import.meta.server) {
  useSeoMeta({
    description:
      'Alex Wernli passed away as a result of a brain tumor (DIPG) at the age of 19. In his short life he showed endurance, love & patience to all. This is his memorial.',
    ogDescription:
      'Alex Wernli passed away as a result of a brain tumor (DIPG) at the age of 19. In his short life he showed endurance, love & patience to all. This is his memorial.',
    ogImage: 'https://alexwernlimemorial.com/img/Teenager/Alex_obituary_webp.webp',
    url: 'https://alexwernlimemorial.com',
  });
}

useSeoMeta({
  title: "Alex Wernli's Memorial",
  ogtitle: "Alex Wernli's Memorial",
});
</script>
