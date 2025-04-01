<template>
  <UContainer>
    <h1 class="text-center text-3xl font-bold my-4">Memories</h1>
    <div class="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 mx-auto w-[fit-content]">
      <Memory v-for="memory of memories" :memory="memory" :key="memory.order" class="break-inside-avoid" />
    </div>
  </UContainer>
</template>

<script setup>
const { data: memories } = await useAsyncData('memories', () => {
  return queryCollection('memories').order('order', 'ASC').all();
});
console.log('memories', memories.value);
</script>
<style scoped>
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 10px;
  gap: 20px;
}
</style>
