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
    text: "The surgery was a success. The doctor got permission to publish his case. Alex was so excited that he was going to be published until he was informed that his name wouldn't be mentioned because he was a minor. He felt jipped. Six months later, when he was 14, he suffered a brain hemorrhage. He actually needed to be life flighted and the doctors didn't think that Alex was going to make it out of this one without brain damage, but he proved them wrong.",
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
    imgAlt: 'Alex and Jacob',
    text: 'Alex would start to slur his speech, and he had a little bit of double vision and had a staggered walk. One time, he mentioned to Mom that he had "forgotten how to swallow". Mom knew that something was wrong, but the doctors couldn\'t find anything. After a persistent mother and several scans later, they found it. On his 16th birthday, Ales was diagnosed with a brain stem tumor called diffuse intrinsic pontine glioma (DIPG).',
  },
  {
    title: 'Eagle Project',
    imgSrc: '/img/Teenager/IMG_0345.JPG',
    imgAlt: "Connor and Alex cutting wood for Alex's eagle project",
    text: "We were told that most kids that have this cancer live fore about a year. Well, what can we say. Alex is unique and this wasn't the case. He filled our lives with memories and miracles. There was a ton of support for Alex. It was overwhelming to watch. He started radiation right away and he said that it was a piece of cake compared to the surgery, he just felt tired. During his radiation treatments Alex finished his eagle project.",
  },
  {
    title: 'Make A Wish',
    imgSrc: '/img/Make A Wish/IMG_0784.JPG',
    imgAlt: 'Alex holding his Make A Wish star',
    text: 'In fall of 2008, through Make A Wish, Alex was able to receive a theater room. He had a ceremony where he raised his star with the saying "Never Give Up." That became the family motto. He wasn\'t a big gamer or movie watcher but he wanted something that everyone could enjoy and that would last. Around this same time he also started chemotherapy.',
  },
  {
    title: 'Friends leaving on a mission',
    imgSrc: '/img/Cancer Journey/IMG_1113.JPG',
    imgAlt: 'Wernli family in front of the MTC',
    text: "In May of 2009, Chris went on his mission to Guatemala. This is when Alex started faithfully emailing weekly letters and jokes to all the missionaries he knew. Even if he was in the hospital he would have to have his emails written. As it got harder for him to move his hands, he enlisted Nicole's help writing these emails. Alex was persistent and would not go to bed until he got Nicole to help him with his emails.",
  },
  {
    title: 'Texas Trip',
    imgSrc: '/img/Texas Trip/IMG_4201.JPG',
    imgAlt: 'Alex, mom, dad, and Josh with the Texas footbal team',
    text: 'In November of 2009, thanks to his aunt Terri and JetBlue, he had the chance to go to Texas, meet the team, and get a tour of the facility. During the team practice Colt McCoy took him in to break the huddle. He got many gifts from the team including a signed jersey and football. He had a constant smile on this trip.',
  },
  {
    title: 'Movie Nights',
    imgSrc: '/img/Cancer Journey/IMG_0071.JPG',
    imgAlt: 'Josh, Justin, Ryan, and Alex',
    text: " As Chris's friends started returning home form their missions they would stop by for a visit. This sparked movie nights. Alex looked forward to these movie nights with friends. Our family was impressed and touched by these boys who would come over. It brightened up Alex's life and as a consequence, our lives.",
  },
  {
    title: 'Missionary',
    imgSrc: '/img/Cancer Journey/IMG_0074.JPG',
    imgAlt: 'Alex wearing his missionary name tag',
    text: 'Alex was ordained an Elder June of 2010. He got special permission and even though he was only 18 he got called to a service mission. He was so proud to show off his missionary tag. His smile would light up every time he put it on. He followed his mission rules to the letter. he stopped listening to his normal music and started listening to Christian artists. He went faithfully to the temple, never missing a month.',
  },
  {
    title: 'Treatment',
    imgSrc: '/img/Cancer Journey/IMG_4561.JPG',
    imgAlt: 'Alex, Harry, and Dillon',
    text: "In July of 2010 Alex finished up his Chemotherapy. Since very few had made it this long with the cancer that Alex had (DIPG) then doctors weren't quite sure how to help him. In February of 2011 he started radiation again and then chemotherapy in March of that year.",
  },
  {
    title: 'Treatment',
    imgSrc: '/img/Cancer Journey/IMG_4563.JPG',
    imgAlt: 'Alex eating with Josh, Dad, and Nicole',
    text: "In March of 2011 he had a pulmonary embolism. Doctors weren't sure that he would make it and told his parents that they should have any family and friends come to the hospital to say their goodbyes. His older brother Chris was a few weeks away from finishing his mission but returned home by the end of that week to be with him. Miraculously, Alex recovered and continued his chemotherapy treatments until October of that year when he was put on hospice. During this time Alex needed care 24/7, he needed help doing pretty much everything. However, he still maintained his positive attitude and amazing sense of humor.",
  },
  {
    title: 'Jokes',
    imgSrc: '/img/Cancer Journey/IMG_0061.JPG',
    imgAlt: 'Alex, Nicole, Mom, and Dad',
    text: 'Whether it was texting rhymes to Aunt Terri, having a golf joke competition with President Welch, or just sending mass texts, Alex was always joking around. He loved to laugh and smile and love to make other people laugh and smile. His daily jokes became something that his family and friends looked forward to and once again he would enlist the help of his sister Nicole to find jokes and send them out.',
  },
  {
    title: 'Passing',
    imgSrc: '/img/Family Pictures/Alex Wernli 11 8x10.jpg',
    imgAlt: 'Alex, For My Momma, Nov 2011',
    text: 'Alex always said "everybody has pain, but misery is a choice." That is the way he lived through every challenge he faced. On March 12th, 2012 Alex peacefully returned home to his heavenly father, surrounded by his loving family.',
  },
  {
    title: 'Legacy',
    imgSrc: '/img/Family Pictures/Alex Wernli 8.jpg',
    imgAlt: 'Alex and Chris, For My Momma, Nov 2011',
    text: "I'm Alex's older brother and I created this website as a place for people to remember Alex and the way he lived his life. He's the best person I've ever known. I never liked hearing that Alex “lost” his fight with cancer. Physically, cancer took everything from him, but that was something Alex couldn’t control. If he could, he’d still be here. In fact, he probably would have beaten it shortly after he was diagnosed. Mentally, cancer couldn’t touch him. It actually made him stronger. I’m still so amazed at how strong he was. Alex was patient, kind, loving, and happy! The thing I remember most about him during his last year was his laugh. I can still see him sitting on one of the leather couches in the front room, surrounded by family and friends, just laughing as hard as he could. It was so funny when he would laugh that hard, it made everyone else laugh with him. His laugh was so infectious. Mentally, Alex beat cancer, and it wasn’t even close. He beat an aneurysm, a brain hemorrhage, a pulmonary embolism, and cancer, but unfortunately, he lost his life in the process. He was quite the fighter.",
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
