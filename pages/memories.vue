<template>
  <UContainer class="pb-10">
    <h1 class="text-center text-3xl font-bold my-8">Memories</h1>
    <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mx-auto w-[fit-content]">
      <Memory v-for="memory of memories" :memory="memory" :key="memory.order" class="break-inside-avoid" />
    </div>
  </UContainer>
</template>

<script setup>
const { data: memories } = await useAsyncData('memories', () => {
  return queryCollection('memories').order('order', 'ASC').all();
});
</script>
