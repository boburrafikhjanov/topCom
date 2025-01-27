<script setup lang="ts">
import { Numbers } from '~/constants/numbers'
import { Stars } from '~/constants/stars'
</script>

<template>
  <section id="about" class="py-[70px]">
    <div class="container">
      <h1
        class="flex items-center text-[50px] dark:text[#fff] font-bold mb-[30px] leading-[normal]"
      >
        <span class="icon icon-about w-[100px] h-[100px] mr-[16px]"></span>About
        us
      </h1>

      <p class="text-[22px] mb-[70px] max-w-[950px]">
        TopCom is IT outsourcing company specializing in DevOps solutions. With
        a team of seasoned experts, we bring a global perspective to local
        expertise. Our mission is to empower businesses by optimizing their IT
        infrastructure and streamlining workflows through cutting-edge DevOps
        practices. We pride ourselves on: A customer-first approach. Deep
        technical expertise in DevOps and cloud computing. A commitment to
        delivering measurable results. By choosing us, you’re partnering with a
        company that values innovation, reliability, and excellence.
      </p>

      <div class="grid grid-cols-4 gap-[20px]">
        <div class="text-[36px] col-span-1 font-bold">Numbers</div>

        <div class="col-span-3">
          <div class="flex flex-row justify-between">
            <div
              v-for="number in Numbers"
              :key="number.number"
              class="flex flex-col mb-[24px] items-start w-full max-w-[200px]"
            >
              <span class="text-[42px] mb-[20px] font-bold">{{
                number.number
              }}</span>

              <span class="text-[22px]">{{ number.description }}</span>
            </div>
          </div>

          <hr class="border-[#EBEBEB] mb-[50px] mt-[24px]" />

          <div class="grid grid-cols-2 gap-x-[100px]">
            <div
              v-for="star in Stars"
              :key="star.logo"
              class="flex items-center max-w-[358px] w-full mb-[30px] flex-row"
            >
              <div
                class="flex items-center justify-center text-center text-[12px] text-[white] font-bold w-[80px] h-[80px] rounded-[50%] mr-[16px] bg-[#1B1B1B] flex-none"
              >
                {{ star.logo }}
              </div>
              <div class="flex flex-col">
                <div class="flex items-center mb-[10px] lg:mb-[16px]">
                  <i
                    v-for="(stars, i) in star.stars"
                    :key="i"
                    class="icon icon-star bg-[#F53700] w-[28px] h-[28px] mr-[8px]"
                  ></i>
                  <span class="text-[24px] text-[#525252] ml-[8px]">{{
                    star.rate
                  }}</span>
                </div>
                <div class="text-[24px]">
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
