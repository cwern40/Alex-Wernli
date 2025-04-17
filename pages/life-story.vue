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
    text: 'Alexander Lee Wernli was born on June 1, 1992, at 12:25 am in the Holy Cross Hospital in Salt Lake City to Robert and Linda Wernli. He was the third of five children. His parents chose the name Alexander because they wanted a strong, bold name. Alexander means "leader of men."  According to Alex, his parents chose his name because "they thought it was a studly name."',
  },
  {
    title: 'Childhood',
    imgSrc: '/img/Childhood/Alex birthday money.jpg',
    imgAlt: 'Alex excited about birthday money',
    text: "He was a very busy, mischievous, active kid who couldn't sit still. He loved sports. He played t-ball, basketball, and flag football, but his true passion was soccer. He excelled at soccer and played on a competitive team for 5 years. He really loved being outdoors. At Flaming Gorge, he liked to ride motorcycles, catch lizards, swim at the beach, and be out on the boat.",
  },
  {
    title: 'Love for Texas',
    imgSrc: 'img/Teenager/alex pic 1 (2).jpg',
    imgAlt: 'Alex portrait in a Texas shirt',
    text: 'He also loved the Texas Longhorns. This love started the love he has for his brother. He always looked up to Chris and tried to do everything Chris did. The love the Longhorns came while playing an Xbox game. the Longhorns team was the only team that he had a chance to beat Chris. His room became covered in Texas memorabilia. He converted the whole family to Texas Longhorn fans.',
  },
  {
    title: 'Aneurysm',
    imgSrc: 'img/Teenager/DSCN0129.JPG',
    imgAlt: 'Alex listening to music',
    text: "He was born with a strawberry red raised birthmark on his forehead that was very noticeable. At age 13, he decided he wanted his birthmark removed. His hair covered it up, but Mom kept telling him that he was bound to go bald. We didn't know what prompted this, but we took him to get his birthmark looked at. They did a scan of his head and found abnormal blood vessels on the right side of his brain. Some were too big and others were too small. Among those blood vessels, they found a large aneurysm. They sent his scans to other doctors across the nation to try to come up with a solution.",
  },
  {
    title: 'Aneurysm Surgery',
    imgSrc: 'img/Aneurysm/DSCN0162.JPG',
    imgAlt: 'Alex in the hospital before surgery',
    text: 'That Sunday, family and friends did a fast for Alex. It was around Christmas. The next day, we got a phone call from the doctor telling us that they had found a surgery for Alex. We thought of it as a Christmas gift from Heavenly Father. It was scary, but we were grateful, and Alex was a little concerned. He was glad that they could fix his aneurysm but would ask dad a few times if he was going to die.',
  },
  {
    title: 'Brain Hemorrhage',
    imgSrc: 'img/Aneurysm/DSCN0176.JPG',
    imgAlt: 'Alex smiling sitting on the couch at home',
    text: "The surgery was a success. The doctor got permission to publish his case. Ales was so excited that he was going to be published until he was informed that his name wouldn't be mentioned because he was a minor. He felt jipped. Six months later, when he was 14, he suffered a brain hemorrhage. He actually needed to be life flighted and the doctors didn't think that Alex was going to make it out of this one without brain damage, but he proved them wrong.",
  },
  {
    title: 'Good Year',
    imgSrc: 'img/Teenager/DSCN0204.JPG',
    imgAlt: 'Alex and Jacob',
    text: 'Due to the aneurysm and brain hemorrhage, he was no longer able to play sports. Which was a bummer, but he still enjoyed life and had fun. We had about a year of just fun times enjoying Alex. He would hang out with his friends. Watch movies with his older sister, Anna, in her room. Stay up late talking with his older brother Chris, and play games with his younger siblings Nicole and Josh. Then we started noticing some symptoms.',
  },
  {
    title: 'Diagnosis',
    imgSrc: '/img/Cancer Journey/Alex_16_hospital_bday.jpg',
    imgAlt: "Alex's hospital board with birthday wishes from the staff",
    text: 'Alex would start to slur his speech, and he had a little bit of double vision and had a staggered walk. One time, he mentioned to Mom that he had "forgotten how to swallow". Mom knew that something was wrong, but the doctors couldn\'t find anything. After a persistent mother and several scans later, they found it. On his 16th birthday, Ales was diagnosed with a brain stem tumor called diffuse intrinsic pontine glioma (DIPG).',
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
