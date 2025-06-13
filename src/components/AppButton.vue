<script setup>
const props = defineProps({
  text: String,
  theme: {
    type: String,
    default: 'M-purple',
  },
})
</script>

<template>
  <button :class="props.theme">
    {{ props.text }}
  </button>
</template>

<style scoped>
.M-purple {
  background-color: #c2b4f7;
  height: 3.3em;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: large;
}

.L-orange {
  background-color: #fccd61;
  width: 18em;
  height: 3.3em;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: large;
}
</style>
