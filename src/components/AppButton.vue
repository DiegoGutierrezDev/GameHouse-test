<script setup>
const props = defineProps({
  text: String,
  theme: {
    type: String,
    default: 'LOrange',
  },
})
</script>

<template>
  <button :class="props.theme">
    {{ props.text }}
  </button>
</template>

<style scoped>
.Mpurple {
  background-color: #c2b4f7;
  height: 3em;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: large;
}

.LOrange {
  background-color: #fccd61;
  width: 18em;
  height: 3em;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: large;
}
</style>
