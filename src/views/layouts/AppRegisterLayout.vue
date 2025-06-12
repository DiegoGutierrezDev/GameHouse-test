<script setup>
import { ref } from 'vue'

const activeStep = ref('step' + '2')
</script>

<template>
  <component :is="activeStep">
    <slot />
  </component>
</template>
