<script setup>
import AppButton from '@/components/AppButton.vue'
import AppCard from '@/components/AppCard.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const products = ref([])
const router = useRouter()
const userStore = useUserStore()
const errorMessage = ref('')

onMounted(async () => {
  const res = await fetch('/api/products')
  products.value = await res.json()
})

const user_id = userStore.user_id.user_id

async function start_trial() {
  const res = await fetch('/api/start-trial?user_id=' + user_id)
  const data = await res.json()

  if (!res.ok) {
    errorMessage.value = data.error || 'Choose a plan'
    return
  }

  router.push('/step4')
}
</script>

<template>
  <div style="justify-self: start; margin-top: 0.5em">
    <button class="round-back-btn" @click="router.push('/step2')">&lt;</button>
  </div>
  <main class="one-column" style="height: 100vh">
    <div class="" style="display: flex; align-items: center; justify-content: space-between">
      <h1>Choose your plan</h1>
    </div>

    <div class="columns" style="gap: 3em">
      <AppCard :products="products"> </AppCard>
      <p v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </p>
    </div>

    <div style="display: grid; justify-items: center">
      <span class="grey-text" style="margin-bottom: 2em">Cancel anytime.</span>
      <AppButton text="Start my free trial!" theme="L-orange" @click="start_trial"></AppButton>
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
