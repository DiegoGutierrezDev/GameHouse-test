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
  <button type="submit" :class="props.theme">
    {{ props.text }}
  </button>
</template>

<style scoped>
.M-purple {
  cursor: pointer;
  background-color: #c2b4f7;
  height: 3.3em;
  width: 80%;
  display: block;
  margin-top: 1em;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: large;
}

.L-orange {
  cursor: pointer;
  background-color: #fccd61;
  height: 3.3em;
  width: 100%;
  display: block;
  margin-top: 1em;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: large;
}

@media (min-width: 641px) {
  .M-purple {
    width: 100%;
  }

  .L-orange {
    width: 30em;
  }
}
</style>
