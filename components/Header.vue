<script setup lang="ts">
import logoDark from '~/assets/icons/logo-dark.svg'
import logo from '~/assets/icons/logo.svg'
import { menu } from '~/constants/menu'
import LangSwitcher from '~/components/LangSwitcher.vue'
const color = useColorMode()

const header = ref<HTMLElement | null>(null)

const handleScroll = () => {
  if (header.value) {
    if (window.scrollY > 100) {
      header.value.classList.add('active')
    } else {
      header.value.classList.remove('active')
    }
  }
}

onMounted(() => {
  header.value = document.querySelector('header')
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-[999]">
    <div class="container">
      <div class="flex items-center py-[30px]">
        <NuxtLink class="flex flex-none h-[40px] w-[164px]" to="/">
          <img
            v-if="color.value === 'dark'"
            class="w-full"
            :src="logoDark"
            alt="Company Logo - Dark Mode"
          />
          <img
            v-else
            class="w-full"
            :src="logo"
            alt="Company Logo - Light Mode"
          />
        </NuxtLink>

        <nav class="hidden lg:flex mx-auto">
          <ul class="flex items-center justify-between gap-[30px]">
            <li v-for="item in menu" :key="item.href">
              <NuxtLink
                :to="item.href"
                class="hover:text-[#ff3b00] text-[20px]"
              >
                {{ $t(item.label as string) }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <ToggleTheme />
        <LangSwitcher />
      </div>
    </div>
  </header>
</template>

<style>
header.active {
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

html.dark header.active {
  background-color: #000;
}
</style>
