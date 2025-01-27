<script setup lang="ts">
import { languages } from '~/constants/languages'

const { locale, setLocale } = useI18n()

const currentLang = computed(() =>
  languages.find((lang) => lang.value === locale.value)
)

function changeLang(lang): void {
  setLocale(lang.target.value)
}
</script>

<template>
  <select
    class="bg-transparent cursor-pointer text-[16px] outline-none text-[#000] dark:text-[#fff]"
    @change="changeLang"
  >
    <option
      v-for="(lang, index) in languages"
      :key="index"
      :value="lang.value"
      :selected="currentLang.value === lang.value"
      @click="changeLang(lang.value)"
    >
      {{ lang.name }}
    </option>
  </select>
</template>
