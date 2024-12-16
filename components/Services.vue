<script setup lang="ts">
import { services } from "~/constants/services";
</script>

<template>
  <section class="py-[30px]">
    <div class="container">
      <div>
        <h1 class="text-[30px] dark:text[#fff] font-bold mb-[30px]">
          <span class="text-[#F53700]">/</span>Our services
        </h1>

        <div
          v-for="service in services"
          :key="service.title"
          class="mb-[40px] last:mb-0"
        >
          <NuxtLink :to="service.href">
            <div class="text-[18px] dark:text[#fff] mb-[12px] font-bold">
              {{ service.title }}
            </div>
            <p class="text-[14px] dark:text[#fff] mb-[16px]">
              {{ service.description }}
            </p>

            <span class="flex items-center text-[#525252] text-[14px]">
              Learn more<span
                class="icon icon-right-up w-[24px] h-[24px] ml-[12px] bg-[#525252]"
              />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
