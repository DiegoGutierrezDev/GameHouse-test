<template>
  <slot name="backButton"></slot>
  <div v-if="desktop" class="columns">
    <div style="flex-direction: column; display: flex">
      <slot name="benefits" />
      <slot name="text" />
    </div>
    <div>
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
    <slot name="resend" />
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
