<template>
  <UContainer>
    <h1 class="text-center text-3xl font-bold my-4">Contact Us</h1>
    <h2 class="w-[600px] max-w-full mx-auto">
      We'd love to hear your memories! Please fill out this form or click on this link to
      <ULink
        raw
        to="mailto:chris.wernli40@gmail.com"
        active-class="font-bold"
        inactive-class="text-burnt-orange-600 hover:text-burnt-orange-700"
        >send us an email</ULink
      >
    </h2>
    <UForm :validate="validate" :state="state" class="space-y-4 w-[600px] max-w-full mx-auto my-5" @submit="onSubmit">
      <UFormField label="Name" name="name" required>
        <UInput v-model="state.name" placeholder="Enter your name" variant="soft" class="w-full" />
      </UFormField>
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" placeholder="Enter your email" variant="soft" class="w-full" />
      </UFormField>
      <UFormField label="Memory" name="memory" required>
        <UTextarea
          v-model="state.memory"
          autoresize
          :rows="4"
          placeholder="Write your memory..."
          variant="soft"
          class="w-full"
        />
      </UFormField>
      <UFormField label="Attachments" name="attachements">
        <UInput v-model="state.attachements" type="file" variant="soft" class="w-full" />
      </UFormField>
      <UButton type="submit" class="block w-full mt-8">Submit</UButton>
    </UForm>
  </UContainer>
</template>

<script setup>
const state = reactive({
  name: '',
  email: '',
  memory: '',
  attachements: null,
});

const validate = () => {
  const errors = [];

  if (!state.name) {
    errors.push({ name: 'name', message: 'Name is required' });
  }

  if (!state.memory) {
    errors.push({ name: 'memory', message: 'A memory is required' });
  }

  return errors;
};

const toast = useToast();
async function onSubmit() {
  toast.add({ title: 'Success', description: 'Your message has been sent!', color: 'success' });
}
</script>
