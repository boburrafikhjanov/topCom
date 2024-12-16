<script setup lang="ts">
import { trustUs, trustInfo } from '~/constants/trustUs'

const activeIndex = ref<number | null>(null)

const toggleActive = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-[30px]">
    <div class="container">
      <h1 class="text-[30px] dark:text-[#fff] font-bold mb-[30px]">
        <span class="text-[#f53700]">/</span>Why trust us
      </h1>

      <div class="grid grid-cols-2 gap-[30px] mb-[40px]">
        <div v-for="(item, key) in trustUs" :key="key" class="flex flex-col">
          <span
            class="text-[40px] text-[#000] font-bold dark:text-[#fff] mb-[10px] leading-[normal]"
            >{{ item.number }}</span
          >
          <span class="text-[14px] text-[#525252] leading-[normal]">{{
            item.text
          }}</span>
        </div>
      </div>

      <div v-for="(item, index) in trustInfo" :key="index" class="mb-[40px]">
        <div class="flex items-center mb-[16px]" @click="toggleActive(index)">
          <i
            v-if="activeIndex === index"
            class="icon icon-minus w-[24px] h-[24px] bg-[#F53700] mr-[20px]"
          ></i>
          <i
            v-else
            class="icon icon-plus w-[24px] h-[24px] bg-[#F53700] mr-[20px]"
          ></i>
          <span class="text-[24px] text-[#000] font-bold dark:text-[#fff]">
            {{ item.title }}
          </span>
        </div>

        <ElCollapseTransition>
          <div
            v-show="activeIndex === index"
            class="pl-[44px] text-[14px] leading-[normal]"
          >
            {{ item.text }}
          </div>
        </ElCollapseTransition>
      </div>
    </div>
  </section>
</template>
