<script setup lang="ts">
import logoDark from '~/assets/icons/logo-dark.svg'
import logo from '~/assets/icons/logo.svg'
import { menu } from '~/constants/menu'
const color = useColorMode()
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-[999]">
    <div class="container">
      <div class="flex items-center justify-between py-[30px]">
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

        <nav>
          <ul class="flex items-center justify-between gap-[30px] lg:flex">
            <li v-for="item in menu" :key="item.href">
              <NuxtLink
                :to="item.href"
                class="hover:text-[#ff3b00] text-[20px]"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <ToggleTheme />
      </div>
    </div>
  </header>
</template>
