<script setup>
import { ref } from 'vue'

const otpCont = ref(null)
</script>

<template>
  <div ref="otpCont" class="code-container">
    <input
      type="text"
      class="code-box"
      v-for="(number, index) in 6"
      :key="number + index"
      :autofocus="index === 0"
      :placeholder="index + 1"
      maxlength="1"
      @focus="!value"
      @keydown="handleKeyDown($event, ind)"
    />
  </div>
</template>

<style scoped>
.code-box {
  width: 3.7rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: white;
  font-size: larger;
  font-weight: 600;
  text-align: center;
  margin: 0.1em;
}

.code-container {
  width: 30em;
}
</style>
