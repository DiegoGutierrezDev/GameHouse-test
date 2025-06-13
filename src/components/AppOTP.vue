<script setup>
import { ref } from 'vue'

const otpCont = ref(null)
</script>

<template>
  <div ref="otpCont">
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
    <h2>hoasdjf</h2>
  </div>
</template>

<style>
.code-box {
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: white;
  font-size: larger;
  font-weight: 600;
  text-align: center;
  margin: 0.1em;
}
</style>
