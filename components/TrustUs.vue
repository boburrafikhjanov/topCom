<script setup lang="ts">
import { trustUs, trustInfo } from '~/constants/trustUs'

const activeIndex = ref<number | null>(null)

const toggleActive = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-[70px]">
    <div class="container">
      <h1
        class="flex items-center text-[50px] dark:text[#fff] font-bold mb-[70px] leading-[normal]"
      >
        <span class="icon icon-trust w-[100px] h-[100px] mr-[16px]"></span>Why
        trust us
      </h1>

      <div class="grid grid-cols-4">
        <div class="grid grid-cols-1 col-span-1 gap-[50px]">
          <div v-for="(item, key) in trustUs" :key="key" class="flex flex-col">
            <span class="leading-[normal] text-[64px] font-bold mb-[10px]">{{
              item.number
            }}</span>
            <span class="text-[20px] text-[#525252] leading-[normal]">{{
              item.text
            }}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 col-span-3">
          <div v-for="(item, index) in trustInfo" :key="index" class="relative">
            <div
              class="flex items-start mb-[20px] cursor-pointer"
              @click="toggleActive(index)"
            >
              <i
                v-if="activeIndex === index"
                class="icon icon-minus w-[36px] h-[36px] bg-[#F53700] mr-[20px] flex-none mt-[3px]"
              ></i>
              <i
                v-else
                class="icon icon-plus w-[36px] h-[36px] bg-[#F53700] mr-[20px] flex-none mt-[3px]"
              ></i>
              <span
                class="text-[34px] text-[#000] font-bold dark:text-[#fff] leading-[normal]"
              >
                {{ item.title }}
              </span>
            </div>

            <div class="absolute w-[100%]">
              <ElCollapseTransition>
                <div
                  v-show="activeIndex === index"
                  class="pl-[57px] text-[20px] leading-[30px]"
                >
                  {{ item.text }}
                </div>
              </ElCollapseTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
