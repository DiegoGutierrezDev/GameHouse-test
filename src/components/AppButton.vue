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
  width: 90%;
  display: block;
  margin-top: 1em;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: large;
}

.L-orange {
  background-color: #fccd61;
  width: 30em;
  height: 3.3em;
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
    width: 100%;
  }
}
</style>
