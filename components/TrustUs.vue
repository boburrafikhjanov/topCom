<script setup lang="ts">
import { trustUs, trustInfo } from '~/constants/trustUs'

const activeIndex = ref<number | null>(null)

const toggleActive = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-[30px] lg:py-[70px]">
    <div class="container">
      <h1
        class="text-[30px] dark:text-[#fff] font-bold mb-[30px] lg:text-[56px] lg:mb-[140px] leading-[normal]"
      >
        <span class="text-[#f53700]">/</span>Why trust us
      </h1>

      <div class="lg:grid lg:grid-cols-4">
        <div
          class="grid grid-cols-2 gap-[30px] mb-[40px] lg:grid-cols-1 lg:col-span-1 lg:gap-[55px]"
        >
          <div v-for="(item, key) in trustUs" :key="key" class="flex flex-col">
            <span
              class="text-[40px] text-[#000] font-bold dark:text-[#fff] mb-[10px] leading-[normal] lg:text-[72px] lg:mb-[16px]"
              >{{ item.number }}</span
            >
            <span
              class="text-[14px] text-[#525252] leading-[normal] lg:text-[24px]"
              >{{ item.text }}</span
            >
          </div>
        </div>

        <div class="lg:grid lg:grid-cols-2 col-span-3">
          <div
            v-for="(item, index) in trustInfo"
            :key="index"
            class="mb-[40px]"
          >
            <div
              class="flex items-center mb-[16px] cursor-pointer lg:items-start"
              @click="toggleActive(index)"
            >
              <i
                v-if="activeIndex === index"
                class="icon icon-minus w-[24px] h-[24px] bg-[#F53700] mr-[20px] lg:w-[48px] lg:h-[48px] flex-none lg:mt-[10px]"
              ></i>
              <i
                v-else
                class="icon icon-plus w-[24px] h-[24px] bg-[#F53700] mr-[20px] lg:w-[48px] lg:h-[48px] flex-none lg:mt-[10px]"
              ></i>
              <span
                class="text-[24px] text-[#000] font-bold dark:text-[#fff] lg:text-[48px] leading-[normal]"
              >
                {{ item.title }}
              </span>
            </div>

            <ElCollapseTransition>
              <div
                v-show="activeIndex === index"
                class="pl-[44px] text-[14px] leading-[normal] lg:text-[24px]"
              >
                {{ item.text }}
              </div>
            </ElCollapseTransition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
