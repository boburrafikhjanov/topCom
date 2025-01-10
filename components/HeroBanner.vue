<script setup lang="ts">
const color = useColorMode()
</script>

<template>
  <section class="relative py-[180px]">
    <div class="container relative z-[10]">
      <div class="flex items-end">
        <h1 class="text-[125px] font-bold leading-[normal] max-w-[620px]">
          OPEN SOURCE DATABASE
        </h1>
        <p class="text-[22px] leading-2 mb-[15px] ml-[60px] max-w-[415px]">
          Our team provides you with access to a comprehensive suite of DevOps
          tools and services, including continuous integration and delivery
          (CI/CD), infrastructure automation, application monitoring, and
          security testing.
        </p>
      </div>
    </div>

    <img
      v-if="color.value === 'light'"
      class="absolute top-0 left-0"
      src="/img/hero_banner_bg.svg"
      alt=""
    />
    <img
      v-else-if="color.value === 'dark'"
      class="absolute top-0 left-0"
      src="/img/hero_banner_bg_dark.svg"
      alt=""
    />
  </section>
</template>
