<script setup>
import AppBenefits from '@/components/AppBenefits.vue'
import AppButton from '@/components/AppButton.vue'
import PageWrapper from '../layouts/PageWrapper.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const email = ref('')
const comercials = ref(false)
const router = useRouter()
const userStore = useUserStore()

function handleSubmit() {
  userStore.setEmail({
    email: email.value,
    acepta: comercials.value,
  })
  router.push('/step2')
}
</script>

<template>
  <PageWrapper class="columns white-text">
    <template #benefits>
      <div class="left-column">
        <AppBenefits
          :benefits="[
            'Access to 100+ GAMES for FREE thanks to ads',
            'Log In Across All Your Devices',
            'Skip the Line with Customer Support',
          ]"
        /></div
    ></template>

    <template #text>
      <div style="margin-top: auto">
        <p style="color: white">
          By continuing, you agree to our<a href="https://company.gamehouse.com/">
            Terms of Service</a
          >
          and <a href="https://company.gamehouse.com/">Privacy Policy</a> .
        </p>
      </div>
    </template>

    <template #title>
      <h1>Connect your account</h1>
      <h3>...and unlock your benefits!</h3>
    </template>

    <template #input>
      <form @submit.prevent="handleSubmit">
        <input
          type="email"
          v-model="email"
          class="input-text"
          placeholder="Email Address"
          required
        />
        <div>
          <input type="checkbox" v-model="comercials" class="checkbox" />
          <label for="comercial">Send Me Offers, News, and Fun Stuff!</label>
        </div>
        <AppButton text="Connect"></AppButton>
      </form>
    </template>
  </PageWrapper>
</template>
