<template>
  <section class="flex flex-col items-center justify-center w-full h-screen" :style="backgroundStyles">
    <h2 class="leading-none text-white">THE MEMORIAL</h2>
    <h1 class="text-center text-[50px] sm:text-[100px] font-bold leading-none my-10 text-white">ALEX<br />WERNLI</h1>
    <UButton class="px-7" to="/about">ENTER</UButton>
  </section>
</template>
<script setup>
definePageMeta({
  layout: false,
});
const img = useImage();

const backgroundStyles = computed(() => {
  const imgUrl = img('/img/Last Family Portrait-EDIT.jpg');

  return {
    backgroundImage: `url('${imgUrl}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
});
</script>
