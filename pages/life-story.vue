<template>
  <UContainer as="article" class="pb-10">
    <h1 class="text-center text-3xl font-bold my-8">Life Story</h1>
    <div class="flex flex-col items-center justify-center w-full gap-20">
      <StorySection
        v-for="(content, index) of pageContent"
        class="story-animation opacity-0 translate-y-20 transition-all duration-500"
        :key="content.text"
        :content="content"
        :imgPlacement="index % 2 === 1 ? 'right' : 'left'"
      />
    </div>
  </UContainer>
</template>

<script setup>
const pageContent = [
  {
    title: 'Birth',
    imgSrc: '/img/Childhood/Alex_baby_pic.jpg',
    imgAlt: 'Alex as a baby',
    text: 'Alex was born on June 1, 1992, at 12:25 am in the Holy Cross Hospital in Salt Lake City to Robert and Linda Wernli. He was the third of five children. Per Alex, his parents chose his name because "they thought it was a studly name." He was born with a strawberry red raised birthmark on his forehead that was very noticeable.',
  },
  {
    title: 'Childhood',
    imgSrc: '/img/Childhood/Alex birthday money.jpg',
    imgAlt: 'Alex excited about birthday money',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Childhood',
    imgSrc: '/img/Childhood/Alex birthday money.jpg',
    imgAlt: 'Alex excited about birthday money',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Childhood',
    imgSrc: '/img/Childhood/Alex birthday money.jpg',
    imgAlt: 'Alex excited about birthday money',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Childhood',
    imgSrc: '/img/Childhood/Alex birthday money.jpg',
    imgAlt: 'Alex excited about birthday money',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const handleEnter = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
      entry.target.classList.remove('opacity-0', 'translate-y-20');
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleEnter, {
    threshold: 0.1,
  });

  const elements = document.querySelectorAll('.story-animation');
  elements.forEach((el) => observer.observe(el));
});
</script>
