<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="bg-black pt-[60px]">
    <TopBar />

    <div class="bg-white">
      <div class="w-[100%] max-w-[1024px] mx-auto p-[50px]">
        <h1>Error {{ error?.statusCode }}</h1>
        <div>{{ error?.statusMessage }}</div>
        <br/>
        <NuxtLink to="/"><Button>Go back home</Button></NuxtLink>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
h1 {
  font-size: 40px;
  font-family: myriad-cond;
  letter-spacing: 3px;
}
</style>