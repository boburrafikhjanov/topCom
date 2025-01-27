<script setup lang="ts">
import { services } from '~/constants/services'
</script>

<template>
  <section id="services" class="py-[70px] relative z-10">
    <div class="container">
      <div>
        <h1
          class="flex items-center text-[50px] dark:text[#fff] font-bold mb-[30px] leading-[normal]"
        >
          <span class="icon icon-service w-[100px] h-[100px] mr-[16px]"></span
          >Our services
        </h1>

        <div class="grid grid-cols-3 gap-[20px]">
          <NuxtLink
            v-for="service in services"
            :key="service.title"
            :to="service.href"
            class="text-center rounded-[16px] p-[24px] group"
          >
            <div
              class="w-[70px] h-[70px] rounded-[50%] mb-[16px] mx-auto bg-[#ebebeb]"
            ></div>

            <div
              class="text-[20px] font-bold mb-[10px] group-hover:text-[#FF3B00]"
            >
              {{ service.title }}
            </div>
            <p
              class="text-[16px] leading-[20px] text-[#919191] dark:text[#fff] mb-[20px] group-hover:text-black dark:group-hover:text-white"
            >
              {{ service.description }}
            </p>
            <span
              class="flex items-center justify-center text-[#919191] text-[12px] group-hover:text-black dark:group-hover:text-white"
            >
              Learn more
            </span>
          </NuxtLink>
        </div>

        <!--        <div-->
        <!--          class="lg:bg-[#e9e9e9] lg:px-[120px] lg:py-[60px] lg:rounded-[30px] lg:dark:bg-[#0C0C0C]"-->
        <!--        >-->
        <!--          <div-->
        <!--            v-for="service in services"-->
        <!--            :key="service.title"-->
        <!--            class="mb-[40px] last:mb-0 lg:mb-[24px] lg:pb-[24px] lg:border-b-[1px] lg:border-[#525252] lg:last:border-0 lg:last:pb-[0]"-->
        <!--          >-->
        <!--            <NuxtLink class="lg:flex lg:items-center group" :to="service.href">-->
        <!--              <div>-->
        <!--                <div-->
        <!--                  class="text-[18px] dark:text[#fff] mb-[12px] font-bold lg:text-[40px] lg:mb-[16px] lg:group-hover:text-[#F53700]"-->
        <!--                >-->
        <!--                  {{ service.title }}-->
        <!--                </div>-->
        <!--                <p class="text-[14px] dark:text[#fff] mb-[16px] lg:text-[24px]">-->
        <!--                  {{ service.description }}-->
        <!--                </p>-->
        <!--              </div>-->

        <!--              <span-->
        <!--                class="flex items-center text-[#525252] text-[14px] lg:text-[0] lg:ml-auto"-->
        <!--                >Learn more-->
        <!--                <span-->
        <!--                  class="icon icon-right-up w-[24px] h-[24px] ml-[12px] bg-[#525252] lg:ml-auto lg:w-[96px] lg:h-[96px] lg:group-hover:bg-[#F53700]"-->
        <!--                />-->
        <!--              </span>-->
        <!--            </NuxtLink>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </section>
</template>
