<template>
  <section
    class="flex flex-col items-center justify-center w-full h-screen bg-center bg-no-repeat sm:bg-contain bg-cover"
    style="background-image: url('/img/Teenager/Alex_obituary.jpg'); background-color: #2a2a2a"
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
</script>
