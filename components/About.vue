<script setup lang="ts">
import { Numbers } from '~/constants/numbers'
import { Stars } from '~/constants/stars'
</script>

<template>
  <section class="py-[30px] lg:py-[70px]">
    <div class="container">
      <h1
        class="text-[30px] dark:text[#fff] font-bold mb-[16px] lg:text-[56px] lg:mb-[30px] leading-[normal]"
      >
        <span class="text-[#F53700]">/</span>About us
      </h1>

      <p
        class="text-[12px] mb-[24px] lg:text-[24px] lg:mb-[70px] lg:max-w-[950px]"
      >
        We establish a strong DevOps culture that can lead to improved
        efficiency, faster time-to-market, and better collaboration between
        teams.
      </p>

      <div
        class="flex flex-col lg:flex-row lg:grid lg:grid-cols-4 lg:gap-[20px]"
      >
        <div
          class="text-[18px] mb-[16px] lg:text-[40px] lg:mb-[0] lg:col-span-1 lg:font-bold"
        >
          Numbers
        </div>

        <div class="lg:col-span-3">
          <div class="flex flex-col lg:flex-row lg:justify-between">
            <div
              v-for="number in Numbers"
              :key="number.number"
              class="flex flex-col items-center mb-[24px] lg:items-start w-full lg:max-w-[200px]"
            >
              <span
                class="text-[32px] mb-[16px] font-bold leading-[normal] lg:text-[50px] lg:mb-[36px]"
                >{{ number.number }}</span
              >
              <span class="text-[12px] leading-[normal] lg:text-[24px]">{{
                number.description
              }}</span>
            </div>
          </div>

          <hr class="border-[#1B1B1B] mb-[30px] lg:mb-[40px]" />

          <div class="mx-auto lg:m-0 lg:grid lg:grid-cols-2 lg:gap-x-[100px]">
            <div
              v-for="star in Stars"
              :key="star.logo"
              class="flex items-center max-w-[358px] w-full mb-[24px] lg:mb-[36px] lg:flex-row"
            >
              <div
                class="flex items-center justify-center text-center text-[12px] w-[70px] h-[70px] rounded-[50%] mr-[16px] bg-[#ebebeb] border-[#111111] dark:bg-[#1B1B1B] flex-none lg:w-[100px] lg:h-[100px] lg:mr-[24px] lg:text-[14px] lg:font-bold"
              >
                {{ star.logo }}
              </div>
              <div class="flex flex-col">
                <div class="flex items-center mb-[10px] lg:mb-[16px]">
                  <i
                    v-for="(stars, i) in star.stars"
                    :key="i"
                    class="icon icon-star bg-[#F53700] w-[25px] h-[25px] mr-[5px] lg:w-[36px] lg:h-[36px] lg:mr-[8px]"
                  ></i>
                  <span
                    class="text-[16px] text-[#525252] ml-[10px] lg:text-[24px] leading-[normal]"
                    >{{ star.rate }}</span
                  >
                </div>
                <div class="text-[16px] lg:text-[24px] leading-[normal]">
                  {{ star.reviews }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
