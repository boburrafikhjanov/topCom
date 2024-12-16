<script setup lang="ts">
import { reviews } from '~/constants/reviews'

const activeReviewId = ref<number | null>(0)

const activateReview = (id: number) => {
  activeReviewId.value = id
}
</script>

<template>
  <section class="py-[30px]">
    <div class="container">
      <h1 class="text-[30px] dark:text[#fff] font-bold mb-[40px]">
        <span class="text-[#F53700]">/</span>What clients think about our
        software development company:
      </h1>

      <div class="flex overflow-auto gap-[24px] mx-[-16px] pl-[16px] mb-[40px]">
        <div
          v-for="review in reviews"
          :key="review.id"
          class="flex opacity-[50%] flex-col flex-none"
          :class="{ '!opacity-[100%]': activeReviewId === review.id }"
          @click="activateReview(review.id)"
        >
          <div
            class="w-[56px] h-[56px] rounded-[50%] mb-[16px] border-[1px] border-solid border-[#111111]"
          >
            <img :src="review.image" alt="" />
          </div>
          <div
            class="text-[16px] font-bold text-[#000] dark:text-[#fff] mb-[8px] leading-[normal]"
          >
            {{ review.name }}
          </div>
          <div
            class="text-[10px] text-[#000] dark:text-[#fff] mb-[12px] font-medium"
          >
            {{ review.jobTitle }}
          </div>
          <div
            class="text-[14px] text-[#000] dark:text-[#fff] mb-[12px] font-bold leading-[normal]"
          >
            {{ review.company }}
          </div>
        </div>
      </div>

      <div v-for="review in reviews" :key="review.id">
        <div v-if="activeReviewId === review.id">
          <div class="flex items-center mb-[24px]">
            <i
              v-for="(star, i) in review.stars"
              :key="i"
              class="icon icon-star bg-[#FFC107] w-[25px] h-[25px] mr-[5px]"
            ></i>
            <span class="text-[16px] text-[#525252] ml-[10px]">{{
              review.rate
            }}</span>
          </div>
          {{ review.text }}
        </div>
      </div>
    </div>
  </section>
</template>
