<script setup lang="ts">
import { reviews } from '~/constants/reviews'

const activeReviewId = ref<number | null>(0)

const activateReview = (id: number) => {
  activeReviewId.value = id
}
</script>

<template>
  <section class="py-[30px] md:py-[70px]">
    <div class="container">
      <h1
        class="flex items-center text-[30px] md:text-[50px] dark:text[#fff] font-bold mb-[30px] leading-[normal]"
      >
        <span
          class="icon icon-reviews flex-none w-[50px] h-[50px] mr-[8px] md:w-[100px] md:h-[100px] md:mr-[16px]"
        ></span
        >What clients think about our software development company:
      </h1>

      <div class="lg:grid lg:grid-cols-4 lg:gap-[20px]">
        <div
          class="flex overflow-auto gap-[24px] mx-[-16px] pl-[16px] mb-[40px] lg:col-span-1 lg:flex-col lg:gap-[30px] lg:max-h-[800px]"
        >
          <div
            v-for="review in reviews"
            :key="review.id"
            class="flex opacity-[50%] flex-col flex-none cursor-pointer"
            :class="{ '!opacity-[100%]': activeReviewId === review.id }"
            @click="activateReview(review.id)"
          >
            <div
              class="w-[56px] h-[56px] rounded-[50%] mb-[16px] border-[1px] border-solid border-[#111111] lg:w-[100px] lg:h-[100px]"
            >
              <img :src="review.image" alt="" />
            </div>
            <div
              class="text-[16px] font-bold text-[#000] dark:text-[#fff] mb-[8px] leading-[normal] lg:text-[24px]"
            >
              {{ review.name }}
            </div>
            <div
              class="text-[10px] text-[#000] dark:text-[#fff] mb-[12px] font-medium lg:text-[16px] lg:mb-[16px]"
            >
              {{ review.jobTitle }}
            </div>
            <div
              class="text-[14px] text-[#000] dark:text-[#fff] mb-[12px] font-bold leading-[normal] lg:text-[16px]"
            >
              {{ review.company }}
            </div>
          </div>
        </div>

        <div class="lg:col-span-3">
          <div v-for="review in reviews" :key="review.id">
            <div v-if="activeReviewId === review.id">
              <div class="flex items-center mb-[24px] lg:mb-[34px]">
                <i
                  v-for="(star, i) in review.stars"
                  :key="i"
                  class="icon icon-star bg-[#FFC107] w-[25px] h-[25px] mr-[5px] lg:w-[36px] lg:h-[36px] lg:mr-[8px]"
                ></i>
                <span
                  class="text-[16px] text-[#525252] ml-[10px] leading-[normal] lg:text-[24px]"
                  >{{ review.rate }}</span
                >
              </div>

              <div
                class="text-[20px] leading-[150%] lg:text-[36px] lg:font-bold"
              >
                {{ review.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
