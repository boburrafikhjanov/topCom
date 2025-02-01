<script setup lang="ts">
const color = useColorMode()

const isLargeScreen = useMediaQuery('(min-width: 574px)')
</script>

<template>
  <section class="relative pt-[450px] pb-[100px] md:py-[180px]">
    <div class="container relative z-[10]">
      <div class="flex flex-col md:flex-row md:items-end">
        <h1
          class="text-[55px] mb-[20px] md:text-[125px] font-bold leading-[normal] max-w-[620px]"
        >
          Top Com - Your 24/7 DevOps Partner
        </h1>

        <p
          class="text-[16px] leading-2 md:text-[22px] mb-[15px] md:ml-[60px] md:max-w-[415px]"
        >
          We provide a full range of DevOps solutions to streamline your
          workflows and accelerate your time-to-market. Our services encompass
          CI/CD, infrastructure automation, comprehensive application
          monitoring, and security hardening, all available 24/7
        </p>
      </div>
    </div>

    <ClientOnly>
      <img
        v-if="color.value === 'light' && isLargeScreen"
        class="absolute top-0 left-0"
        src="/img/hero_banner_bg.svg"
        alt=""
      />
      <img
        v-else-if="color.value === 'dark' && isLargeScreen"
        class="absolute top-0 left-0"
        src="/img/hero_banner_bg_dark.svg"
        alt=""
      />

      <img
        v-if="color.value === 'light' && !isLargeScreen"
        class="absolute top-0 left-0 w-full"
        src="/img/hero_banner_mobile.svg"
        alt=""
      />
      <img
        v-else-if="color.value === 'dark' && !isLargeScreen"
        class="absolute top-0 left-0 w-full"
        src="/img/hero_banner_mobile_dark.svg"
        alt=""
      />
    </ClientOnly>
  </section>
</template>
