<script setup lang="ts">
import logoDark from 'assets/icons/logoDark.svg'
import logoLight from '~/assets/icons/logoLight.svg'
import { menu } from '~/constants/menu'
const color = useColorMode()
</script>

<template>
  <div class="container">
    <div class="flex items-center justify-between py-[20px] mb-[300px]">
      <ClientOnly>
        <NuxtLink class="max-w-[124px] flex flex-none mr-[30px]" to="/">
          <img
            v-if="color.value === 'dark'"
            class="w-full"
            :src="logoDark"
            alt="Company Logo - Dark Mode"
          />
          <img v-else :src="logoLight" alt="Company Logo - Light Mode" />
        </NuxtLink>
      </ClientOnly>

      <nav>
        <ul class="hidden items-center justify-between gap-[30px] lg:flex">
          <li v-for="item in menu" :key="item.href">
            <NuxtLink :to="item.href" class="hover-link-color">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <ToggleTheme />
    </div>
  </div>
</template>
