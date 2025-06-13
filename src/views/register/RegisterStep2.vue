<script setup>
import AppBenefits from '@/components/AppBenefits.vue'
import AppButton from '@/components/AppButton.vue'
import AppOTP from '@/components/AppOTP.vue'
</script>

<template>
  <main class="columns">
    <div class="left-column">
      <AppBenefits
        :benefits="[
          'Access to 10+ GAMES for FREE thanks to ads',
          'Log In Across All Your Devices',
          'Skip the Line with Customer Support',
        ]"
      />
    </div>

    <div class="white-text">
      <h1 style="font-weight: 700">Get verified!</h1>
      <h3>Enter the one-time code we sent to:</h3>
      EMAIL
      <AppOTP style="margin-top: 1.4em"></AppOTP>

      <p style="margin-top: 3em">
        Didn't get an email?
        <a href="https://company.gamehouse.com/" style="font-weight: 700">Resend Code</a>
      </p>

      <AppButton text="Verify" style="display: block; width: 100%; margin-top: 1em"></AppButton>
    </div>
  </main>
</template>
