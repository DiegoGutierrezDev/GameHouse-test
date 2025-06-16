<script setup>
import AppBenefits from '@/components/AppBenefits.vue'
import AppButton from '@/components/AppButton.vue'
import AppOTP from '@/components/AppOTP.vue'
import PageWrapper from '../layouts/PageWrapper.vue'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const otpValue = ref('')
const userStore = useUserStore()
const router = useRouter()
const email = userStore.email.email

async function verifyCode(code) {
  const res = await fetch('/api/validate-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: userStore.email.email, code }),
  })
  const data = await res.json()

  const user_id = data.user_id
  userStore.setUser_id({
    user_id: user_id,
  })
  router.push('/step3')
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
        />
      </div>
    </template>

    <template #input>
      <AppOTP style="margin-top: 1.4em" v-model:otp="otpValue" @completed="verifyCode"> </AppOTP>
    </template>

    <template #title>
      <h1>Get verified!</h1>
      <h3>Enter the one-time code we sent to:</h3>
      {{ email }}
    </template>

    <template #resend>
      <p style="margin-top: 3em">
        Didn't get an email?
        <a href="https://company.gamehouse.com/" style="font-weight: 700">Resend Code</a>
      </p></template
    >
    <template #button>
      <AppButton text="Verify" @click="verifyCode"></AppButton>
    </template>
  </PageWrapper>
</template>
