<script setup lang="ts">
const color = useColorMode()

useHead({
  meta: [
    {
      id: 'theme-color',
      name: 'theme-color',
      content: () => (color.value === 'dark' ? '#222222' : '#ffffff'),
    },
  ],
})

function toggleDark() {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly>
    <button
      class="cursor-pointer flex items-center justify-center rounded-[8px] w-[32px] h-[32px] hover:bg-gray-50 dark:hover:bg-[#323232]"
      @click="toggleDark"
    >
      <span
        v-if="color.value === 'light'"
        class="icon icon-sun w-[20px] h-[20px] bg-[#000]"
      />
      <span
        v-else-if="color.value === 'dark'"
        class="icon icon-moon w-[20px] h-[20px] bg-[#F5F5F8]"
      />
    </button>
  </ClientOnly>
</template>
