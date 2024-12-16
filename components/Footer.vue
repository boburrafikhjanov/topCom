<script setup lang="ts">
import logoFooterDark from 'assets/icons/logoFooterDark.svg'
import logoFooterLight from 'assets/icons/logoFooterLight.svg'
import { menuFooter } from '~/constants/menuFooter'

const color = useColorMode()
</script>

<template>
  <footer class="mt-[30px] py-[40px] bg-[#e9e9e9] dark:bg-[#0C0C0C]">
    <div class="container">
      <div class="lg:grid lg:grid-cols-4 lg:gap-[20px] py-[30px]">
        <ClientOnly>
          <NuxtLink
            class="max-w-[200px] flex flex-none mb-[50px] lg:mb-auto"
            to="/"
          >
            <img
              v-if="color.value === 'dark'"
              class="w-full"
              :src="logoFooterDark"
              alt="Company Logo - Dark Mode"
            />
            <img
              v-else
              :src="logoFooterLight"
              alt="Company Logo - Light Mode"
            />
          </NuxtLink>
        </ClientOnly>

        <div v-for="(menu, key) in menuFooter" :key="key" class="mb-[40px]">
          <div class="text-[#F53700] text-[24px] font-semibold mb-[30px]">
            {{ menu.title }}
          </div>
          <ul>
            <li v-for="(item, i) in menu.menu" :key="i" class="mb-[16px]">
              <NuxtLink class="text-[16px] font-medium" :to="item.href">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
