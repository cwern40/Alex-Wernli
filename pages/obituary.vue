<template>
  <UContainer as="article" class="pb-10 flex justify-center flex-col">
    <h1 class="text-center font-bold text-4xl mt-8">Alexander Lee Wernli</h1>
    <NuxtImg
      src="img/Teenager/Alex_obituary.jpg"
      alt="Alexander Lee Wernli Obituary Photo"
      format="webp"
      width="150"
      class="mx-auto rounded-full my-6"
      loading="lazy"
    />
    <p class="pb-3">
      Alexander Lee Wernli, surrounded by his loving family, returned to his Heavenly Father on March 12, 2012.
    </p>
    <p class="pb-3">
      Alex was born June 1, 1992, in Salt Lake City, Utah to Robert Lee Wernli and Linda Gatrell Wernli. He attained the
      rank of Eagle Scout, graduated from high school, and completed an honorable service mission for The Church of
      Jesus Christ of Latter-day Saints - all while fighting a rare and especially difficult brain tumor.
    </p>
    <p class="pb-3">
      Throughout his long, painful ordeal, Alex remained an enduring example to all: he approached his medical
      challenges with unfailing courage, strength and dignity. Alex's strong, peaceful spirit was unmistakable; he never
      complained about his physical limitations, choosing instead to use his radiant smile and infectious sense of humor
      to brighten the lives of those around him.
    </p>
    <p class="pb-3">
      Alex was passionate about sports, especially his Texas Longhorns, and about his family. He is survived by his
      parents; siblings Anna, Christopher, Nicole, and Joshua Wernli; his Grandfather, Gordon Gatrell; and many aunts,
      uncles and cousins.
    </p>
    <p class="pb-3">
      Funeral services will be held under the direction of Anderson & Sons Mortuary at noon on Friday, March 16, 2012 at
      the Hillcrest Stake Center, 165 North 350 West, American Fork. Friends may visit Thursday from 6-8 p.m. and Friday
      from 10:00-11:30 a.m. at the same location.
    </p>
    <p class="pb-3">
      The Wernli family would like to thank Primary Children's Hospital, IHC Hospice and all the family, friends,
      neighbors and anonymous helpers for the loving acts of service and kindness that helped support them throughout
      the last several years.
    </p>
    <ULink
      to="https://www.legacy.com/us/obituaries/saltlaketribune/name/alexander-wernli-obituary?id=25736731"
      target="_blank"
      active-class="font-bold"
      inactive-class="text-burnt-orange-600 hover:text-burnt-orange-700"
    >
      View Obituary on Legacy.com</ULink
    >
  </UContainer>
</template>

<script setup>
if (import.meta.server) {
  useSeoMeta({
    description: 'The obituary of Alex Wernli, who passed away on March 12, 2012.',
    ogDescription: 'The obituary of Alex Wernli, who passed away on March 12, 2012.',
    ogImage: '/img/Teenager/Alex_obituary.jpg',
    url: 'https://alexwernli.com/obituary',
  });
}

useSeoMeta({
  title: "Alex Wernli's Obituary",
  ogtitle: "Alex Wernli's Obituary",
});
</script>
