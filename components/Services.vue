<script setup lang="ts">
import { services } from '~/constants/services'
const localePath = useLocalePath()
const { locale, t } = useI18n()
</script>

<template>
  <section id="services" class="py-[30px] md:py-[70px] relative z-10">
    <div class="container">
      <div>
        <h1
          class="flex items-center text-[30px] md:text-[50px] dark:text[#fff] font-bold mb-[30px] leading-[normal]"
        >
          <span
            class="icon icon-service w-[50px] h-[50px] mr-[8px] md:w-[100px] md:h-[100px] md:mr-[16px]"
          ></span>
          <span v-if="locale === 'en'"> Our services </span>

          <span v-else-if="locale === 'ru'">Наши услуги</span>
        </h1>

        <div class="md:grid grid-cols-3 gap-[20px]">
          <NuxtLink
            v-for="service in services"
            :key="service.title"
            :to="localePath(service.href)"
            class="text-center rounded-[16px] p-[24px] group"
          >
            <div
              class="w-[70px] h-[70px] rounded-[50%] mb-[16px] mx-auto bg-[#ebebeb]"
            ></div>

            <div
              class="text-[20px] font-bold mb-[10px] group-hover:text-[#FF3B00]"
            >
              {{ t(service.title) }}
            </div>
            <p
              class="text-[16px] leading-[20px] text-[#919191] dark:text[#fff] mb-[20px] group-hover:text-black dark:group-hover:text-white"
            >
              {{ t(service.description) }}
            </p>
            <span
              class="flex items-center justify-center text-[#919191] text-[12px] group-hover:text-black dark:group-hover:text-white"
            >
              {{ t('learnMore') }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
