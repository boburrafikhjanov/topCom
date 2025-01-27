<script setup lang="ts">
import { servicesInfo } from '~/constants/services'

definePageMeta({
  layout: 'default',
})

const route = useRoute()
const service = computed(() =>
  servicesInfo.find((item) => item.id === route.params.id)
)
</script>

<template>
  <section class="pt-[150px]">
    <div class="container">
      <div v-if="service">
        <h1
          class="text-center text-[36px] dark:text[#fff] font-bold mb-[30px] leading-[normal]"
        >
          {{ service.title }}
        </h1>

        <div class="text-[22px]" v-html="service.description"></div>
      </div>
      <div v-else>
        <p>Service not found.</p>
      </div>
    </div>
  </section>
</template>
