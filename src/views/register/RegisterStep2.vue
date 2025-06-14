<script setup>
import AppBenefits from '@/components/AppBenefits.vue'
import AppButton from '@/components/AppButton.vue'
import AppOTP from '@/components/AppOTP.vue'
import PageWrapper from '../layouts/PageWrapper.vue'
</script>

<template>
  <PageWrapper>
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
      <AppOTP style="margin-top: 1.4em"></AppOTP>
    </template>

    <template #title>
      <h1>Get verified!</h1>
      <h3>Enter the one-time code we sent to:</h3>
      EMAIL
    </template>

    <template #resend>
      <p style="margin-top: 3em">
        Didn't get an email?
        <a href="https://company.gamehouse.com/" style="font-weight: 700">Resend Code</a>
      </p></template
    >
    <template #button>
      <AppButton text="Verify" style="display: block; width: 100%; margin-top: 1em"></AppButton>
    </template>
  </PageWrapper>
</template>
