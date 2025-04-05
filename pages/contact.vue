<template>
  <UContainer>
    <h1 class="text-center text-3xl font-bold my-4">Contact Us</h1>
    <h2 class="w-[600px] max-w-full mx-auto">
      We'd love to hear your memories! Please click on this link to
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
        <UInput
          v-model="state.file"
          type="file"
          variant="soft"
          class="w-full"
          @change="handleFileChange"
          multiple
          accept="image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,text/plain"
        />
        <div class="flex flex-wrap gap-2 mt-2">
          <div
            v-for="(file, index) of state.attachements"
            :key="file.file.name + index"
            class="flex flex-col items-center gap-2 relative"
          >
            <div class="w-[100px] h-[100px] flex flex-col items-center justify-center overflow-hidden">
              <Icon v-if="file.preview.startsWith('tabler')" :name="file.preview" size="80px" />
              <NuxtImg v-else :src="file.preview" alt="preview" class="rounded-md" />
            </div>
            <span class="text-[10px] text-gray-600">{{ file.file.name }}</span>
            <span class="text-[10px] text-gray-600">{{ fileSize(file.file.size) }}</span>
            <Icon
              name="tabler:trash"
              size="20px"
              class="text-red-500 cursor-pointer absolute top-0 right-0"
              @click="state.attachements.splice(index, 1)"
            />
          </div>
        </div>
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
  attachements: [],
  file: '',
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

const fileSize = (size) => {
  if (size < 1024) return `${size} bytes`;
  else if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
  else return `${Math.round(size / (1024 * 1024))} MB`;
};

function handleFileChange(event) {
  const files = event.target.files;
  const maxSize = 15 * 1024 * 1024; // 15MB
  let currentSize = state.attachements.reduce((acc, file) => acc + file.file.size, 0);
  let fileErrors = [];

  if (files.length > 0) {
    Array.from(files).forEach((file) => {
      if (currentSize + file.size > maxSize) {
        fileErrors.push(file.name);
      } else {
        let preview = '';
        if (file.type.startsWith('image/')) {
          preview = URL.createObjectURL(file);
        } else if (file.type === 'application/pdf') {
          preview = 'tabler:file-type-pdf';
        } else if (file.type.startsWith('application/')) {
          preview = 'tabler:file-type-doc';
        } else {
          preview = 'tabler:file-type-txt';
        }
        state.attachements.push({ file, preview });
        currentSize += file.size;
      }
    });
  }
  if (fileErrors.length > 0) {
    const errorMessage = `The following files could be added since they would exceed the maximum total size of 15MB: ${fileErrors.join(', ')}`;
    toast.add({ title: 'Error', description: errorMessage, color: 'error' });
  }
}

const toast = useToast();
async function onSubmit() {
  let formData = new FormData();
  formData.append('name', state.name);
  if (state.email) {
    formData.append('email', state.email);
  }
  formData.append('memory', state.memory);
  if (state.attachements.length > 0) {
    state.attachements.forEach((file) => {
      formData.append('attachements[]', file.file);
    });
  }
  $fetch('/send-email', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.success) {
        toast.add({ title: 'Success', description: 'Your message has been sent!', color: 'success' });
        state.name = '';
        state.email = '';
        state.memory = '';
        state.attachements = [];
        state.file = '';
      } else {
        toast.add({
          title: 'Error',
          description:
            'There was an error sending your message. Please try again later or click on the "send us an email" link above.',
          color: 'error',
        });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      toast.add({
        title: 'Error',
        description:
          'There was an error sending your message. Please try again later or click on the "send us an email" link above.',
        color: 'error',
      });
    });
}
</script>
