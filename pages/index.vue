<template>
  <section
    class="flex flex-col items-center justify-center w-full h-screen bg-center bg-no-repeat bg-cover sm:bg-contain"
    :style="backgroundStyles"
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

const img = useImage();

const backgroundStyles = computed(() => {
  const imgUrl = img('/img/Teenager/Alex_obituary.jpg');

  return { backgroundImage: `url('${imgUrl}')`, backgroundColor: '#2a2a2a', backgroundPosition: 'center' };
});

if (import.meta.server) {
  useSeoMeta({
    description:
      'Alex Wernli was born June 1st 1992 and passed away March 12th 2012 at the age of 19 from brain cancer (DIPG). He never complained, choosing instead to use his radiant smile and infectious sense of humor to brighten the lives of those around him. This is his memorial.',
    ogDescription:
      'Alex Wernli was born June 1st 1992 and passed away March 12th 2012 at the age of 19 from brain cancer (DIPG). He never complained, choosing instead to use his radiant smile and infectious sense of humor to brighten the lives of those around him. This is his memorial.',
    ogImage: '/img/Teenager/Alex_obituary.jpg',
    url: 'https://alexwernlimemorial.com',
  });
}

useSeoMeta({
  title: "Alex Wernli's Memorial",
  ogtitle: "Alex Wernli's Memorial",
});
</script>
