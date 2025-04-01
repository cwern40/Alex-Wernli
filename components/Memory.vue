<template>
  <UCard variant="soft" class="w-full max-w-[400px] min-h-[fit-content]">
    <template #header>
      <h3 class="text-center font-bold text-xl">{{ memory.author }}</h3>
      <h4 class="italic text-center">{{ memory.relationship }}</h4>
    </template>
    <p v-for="p of memory.paragraphs">{{ p }}</p>
  </UCard>
</template>

<script setup>
const props = defineProps({
  memory: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
