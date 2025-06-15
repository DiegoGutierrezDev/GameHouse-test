<script setup>
import AppButton from '@/components/AppButton.vue'
import AppCard from '@/components/AppCard.vue'
</script>

<template>
  <main class="one-column" style="height: 100vh">
    <h1>Choose your plan</h1>
    <div class="columns" style="gap: 3em">
      <AppCard></AppCard>
      <AppCard></AppCard>
    </div>

    <div style="display: grid; justify-items: center">
      <span class="grey-text" style="margin-bottom: 2em">Cancel anytime.</span>
      <AppButton text="Start my free trial!" theme="L-orange"></AppButton>
      <div style="margin-top: auto">
        <a href="https://company.gamehouse.com/">Privacy Policy | </a>
        <a href="https://company.gamehouse.com/">Terms of Service | </a>
        <a href="https://company.gamehouse.com/">Restore Purchase</a>
      </div>
    </div>
  </main>
</template>

<style scoped>
a {
  color: gray;
  text-decoration: underline;
}
</style>
