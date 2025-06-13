<script setup></script>

<template>
  <main class="centered">
    <h1>Congrats! You're now a <strong>subscriber</strong>!</h1>
    <span class="white-text">Explore your membership now.</span>
    <img src="/public/fire.gif" alt="Fireworks" style="width: 300px; display: block" />
  </main>
</template>

<style scoped>
a {
  color: gray;
  text-decoration: underline;
}

.centered {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  justify-items: center;
  align-items: center;
}
</style>
