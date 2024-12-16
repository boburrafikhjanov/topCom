<script setup lang="ts">
import { services } from '~/constants/services'
</script>

<template>
  <section class="py-[30px] lg:py-[70px]">
    <div class="container">
      <div>
        <h1
          class="text-[30px] dark:text[#fff] font-bold mb-[30px] lg:text-[56px] lg:mb-[50px] leading-[normal]"
        >
          <span class="text-[#F53700]">/</span>Our services
        </h1>

        <div
          class="lg:bg-[#e9e9e9] lg:px-[120px] lg:py-[60px] lg:rounded-[30px] lg:dark:bg-[#0C0C0C]"
        >
          <div
            v-for="service in services"
            :key="service.title"
            class="mb-[40px] last:mb-0 lg:mb-[24px] lg:pb-[24px] lg:border-b-[1px] lg:border-[#525252] lg:last:border-0 lg:last:pb-[0]"
          >
            <NuxtLink class="lg:flex lg:items-center group" :to="service.href">
              <div>
                <div
                  class="text-[18px] dark:text[#fff] mb-[12px] font-bold lg:text-[40px] lg:mb-[16px] lg:group-hover:text-[#F53700]"
                >
                  {{ service.title }}
                </div>
                <p class="text-[14px] dark:text[#fff] mb-[16px] lg:text-[24px]">
                  {{ service.description }}
                </p>
              </div>

              <span
                class="flex items-center text-[#525252] text-[14px] lg:text-[0] lg:ml-auto"
                >Learn more
                <span
                  class="icon icon-right-up w-[24px] h-[24px] ml-[12px] bg-[#525252] lg:ml-auto lg:w-[96px] lg:h-[96px] lg:group-hover:bg-[#F53700]"
                />
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
