<script setup lang="ts">
import { Numbers } from '~/constants/numbers'
import { Stars } from '~/constants/stars'
</script>

<template>
  <section class="py-[30px]">
    <div class="container">
      <h1 class="text-[30px] dark:text[#fff] font-bold mb-[16px]">
        <span class="text-[#F53700]">/</span>About us
      </h1>

      <p class="text-[12px] mb-[24px]">
        We establish a strong DevOps culture that can lead to improved
        efficiency, faster time-to-market, and better collaboration between
        teams.
      </p>

      <div class="flex flex-col">
        <div class="text-[18px] mb-[16px]">Numbers</div>

        <div class="flex flex-col">
          <div
            v-for="number in Numbers"
            :key="number.number"
            class="flex flex-col items-center mb-[24px]"
          >
            <span class="text-[32px] mb-[16px] font-bold leading-[normal]">{{
              number.number
            }}</span>
            <span class="text-[12px] leading-[normal]">{{
              number.description
            }}</span>
          </div>

          <hr class="border-[#1B1B1B] mb-[24px]" />

          <div class="mx-auto">
            <div
              v-for="star in Stars"
              :key="star.logo"
              class="flex items-center max-w-[358px] w-full mb-[24px]"
            >
              <div
                class="flex items-center justify-center text-center text-[12px] w-[70px] h-[70px] rounded-[50%] mr-[16px] bg-[#1B1B1B] border-[#111111]"
              >
                {{ star.logo }}
              </div>
              <div class="flex flex-col">
                <div class="flex items-center mb-[10px]">
                  <i
                    v-for="(stars, i) in star.stars"
                    :key="i"
                    class="icon icon-star bg-[#F53700] w-[25px] h-[25px] mr-[5px]"
                  ></i>
                  <span class="text-[16px] text-[#525252] ml-[10px]">{{
                    star.rate
                  }}</span>
                </div>
                <div class="text-[16px]">{{ star.reviews }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
