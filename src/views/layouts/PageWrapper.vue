<template>
  <div v-if="desktop" class="columns">
    <div>
      <slot name="benefits" />
      <slot name="text" />
    </div>
    <div class="white-text">
      <slot name="title" />
      <slot name="input" />
      <slot name="resend" />
      <slot name="button" />
    </div>
  </div>
  <div v-else>
    <slot name="title" />
    <slot name="benefits" />
    <slot name="input" />
    <slot name="button" />
    <slot name="text" />
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const windowWidth = ref(window.innerWidth)
const updateWidth = () => (windowWidth.value = window.innerWidth)

onMounted(() => window.addEventListener('resize', updateWidth))
onUnmounted(() => window.removeEventListener('resize', updateWidth))

const desktop = computed(() => {
  return windowWidth.value > 641
})
</script>
