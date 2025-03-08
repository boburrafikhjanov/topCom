<script setup lang="ts">
import { trustUs, trustInfo } from '~/constants/trustUs'
const { locale, t } = useI18n()
const activeIndex = ref<number | null>(null)

const toggleActive = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-[30px] md:py-[70px]">
    <div class="container">
      <h1
        class="flex items-center text-[30px] md:text-[50px] dark:text[#fff] font-bold mb-[30px] leading-[normal]"
      >
        <span
          class="icon icon-trust w-[50px] h-[50px] mr-[8px] md:w-[100px] md:h-[100px] md:mr-[16px]"
        ></span>
        {{ t('trustUs') }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-4">
        <div
          class="grid grid-cols-2 gap-[30px] md:grid-cols-1 md:col-span-1 md:gap-[50px] mb-[40px]"
        >
          <div class="flex flex-col">
            <span
              class="leading-[normal] text-[40px] md:text-[64px] font-bold mb-[10px]"
              >5+</span
            >
            <span
              v-if="locale === 'en'"
              class="text-[20px] text-[#525252] leading-[normal]"
            >
              years of experience
            </span>

            <span
              v-else-if="locale === 'ru'"
              class="text-[20px] text-[#525252] leading-[normal]"
            >
              лет опыта
            </span>
          </div>

          <div class="flex flex-col">
            <span
              class="leading-[normal] text-[40px] md:text-[64px] font-bold mb-[10px]"
              >1 500+</span
            >
            <span
              v-if="locale === 'en'"
              class="text-[20px] text-[#525252] leading-[normal]"
              >tasks delivered</span
            >
            <span
              v-if="locale === 'ru'"
              class="text-[20px] text-[#525252] leading-[normal]"
              >выполненных задач</span
            >
          </div>

          <div class="flex flex-col">
            <span
              class="leading-[normal] text-[40px] md:text-[64px] font-bold mb-[10px]"
              >70+</span
            >
            <span
              v-if="locale === 'en'"
              class="text-[20px] text-[#525252] leading-[normal]"
              >projects nailed</span
            >
            <span
              v-if="locale === 'ru'"
              class="text-[20px] text-[#525252] leading-[normal]"
              >успешно реализованных проектов</span
            >
          </div>
        </div>

        <div class="grid md:grid-cols-2 col-span-3">
          <div v-for="(item, index) in trustInfo" :key="index" class="relative">
            <div
              class="flex items-start mb-[20px] cursor-pointer"
              @click="toggleActive(index)"
            >
              <i
                v-if="activeIndex === index"
                class="icon icon-minus w-[24px] h-[24px] md:w-[36px] md:h-[36px] bg-[#F53700] mr-[20px] flex-none mt-[3px]"
              ></i>
              <i
                v-else
                class="icon icon-plus w-[24px] h-[24px] md:w-[36px] md:h-[36px] bg-[#F53700] mr-[20px] flex-none mt-[3px]"
              ></i>
              <span
                class="text-[24px] md:text-[34px] text-[#000] font-bold dark:text-[#fff] leading-[normal]"
              >
                {{ t(item.title) }}
              </span>
            </div>

            <div class="md:absolute w-[100%] mb-[20px]">
              <ElCollapseTransition>
                <div
                  v-show="activeIndex === index"
                  class="pl-[57px] text-[16px] leading-[24px]"
                >
                  {{ t(item.text) }}
                </div>
              </ElCollapseTransition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
