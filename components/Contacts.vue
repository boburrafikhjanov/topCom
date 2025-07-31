<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <section id="contacts" class="py-[30px] md:py-[70px]">
    <div class="container">
      <h1
        class="flex items-center text-[30px] md:text-[50px] dark:text[#fff] font-bold mb-[30px] leading-[normal]"
      >
        <span
          class="icon icon-phone flex-none w-[50px] h-[50px] mr-[8px] md:w-[100px] md:h-[100px] md:mr-[16px]"
        ></span>
        <span v-if="locale === 'en'">Contacts</span>
        <span v-else-if="locale === 'ru'">Контакты</span>
      </h1>

      <p class="text-[22px] mb-[30px] md:mb-[70px]">
        <span v-if="locale === 'en'"
          >Ready to get started or have questions?</span
        >
        <span v-else-if="locale === 'ru'">Готовы начать или есть вопросы?</span>
      </p>

      <div
        class="font-bold leading-[normal] text-[24px] md:text-[56px] md:mb-[70px]"
      >
        <NuxtLink class="underline text-[#FF3B00]" to="tel:+971 52 392 1010">
          <span v-if="locale === 'en'">Contact us,</span>
          <span v-else-if="locale === 'ru'">Свяжитесь с нами,</span>
        </NuxtLink>
        <span v-if="locale === 'en'"
          >and we'll get in touch with you regarding your project.</span
        >
        <span v-else-if="locale === 'ru'">
          и мы оперативно ответим на ваш запрос относительно вашего
          проекта.</span
        >
      </div>
    </div>
  </section>
</template>
