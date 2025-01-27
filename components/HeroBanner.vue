<script setup lang="ts">
const color = useColorMode()
</script>

<template>
  <section class="relative py-[180px]">
    <div class="container relative z-[10]">
      <div class="flex items-end">
        <h1 class="text-[125px] font-bold leading-[normal] max-w-[620px]">
          Top Com - Your 24/7 <br />
          DevOps Partner
        </h1>
        <p class="text-[22px] leading-2 mb-[15px] ml-[60px] max-w-[415px]">
          We provide a full range of DevOps solutions to streamline your
          workflows and accelerate your time-to-market. Our services encompass
          CI/CD, infrastructure automation, comprehensive application
          monitoring, and security hardening, all available 24/7
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
