<script setup>
import { reactive, watchEffect } from 'vue'

const emit = defineEmits(['update:otp', 'completed'])

const digits = reactive(['', '', '', '', '', ''])

watchEffect(() => {
  const fullCode = digits.join('')
  emit('update:otp', fullCode)

  if (fullCode.length === 6 && !digits.includes('')) {
    emit('completed', fullCode)
  }
})

function autoFocusNext(e, index) {
  const value = e.target.value

  if (value && index < 5) {
    e.target.nextElementSibling?.focus()
  } else if (!value && index > 0) {
    e.target.previousElementSibling?.focus()
  }
}
</script>

<template>
  <div class="code-container">
    <input
      v-for="(digit, index) in digits"
      :key="index"
      type="text"
      class="code-box"
      maxlength="1"
      v-model="digits[index]"
      :autofocus="index === 0"
      @input="(e) => autoFocusNext(e, index)"
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
  margin-bottom: 4em;
}
</style>
