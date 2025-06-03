<template>
  <UCard variant="soft" class="w-full max-w-[400px] min-h-[fit-content]">
    <template #header>
      <h3 class="text-center font-bold text-xl">{{ memory.author }}</h3>
      <h4 class="italic text-center">{{ memory.relationship }}</h4>
    </template>
    <p>
      <span class="inline">{{ truncatedText }}</span>
      <template v-if="overflowText">
        <UButton v-if="!open" @click="open = true" variant="text" class="text-burnt-orange-500 inline py-0 pl-1 pr-0">
          Read more
        </UButton>
        <span v-if="open" class="inline">{{ overflowText }}</span>
        <UButton v-if="open" @click="open = false" variant="text" class="text-burnt-orange-500 inline py-0 pl-1 pr-0">
          Less</UButton
        >
      </template>
    </p>
  </UCard>
</template>

<script setup>
const props = defineProps({
  memory: {
    type: Object,
    required: true,
  },
});

const open = ref(false);

const truncatedText = computed(() => {
  const text = props.memory.paragraphs.join('\n');
  const elipses = open.value ? '' : '...';
  return text.length > 650 ? text.slice(0, 600) + elipses : text;
});

const overflowText = computed(() => {
  const text = props.memory.paragraphs.join('\n');
  if (text.length <= 650) return '';
  return text.slice(600);
});
</script>

<style scoped></style>
