<script setup>
import AppBenefits from '@/components/AppBenefits.vue'
import AppButton from '@/components/AppButton.vue'
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
      <p style="color: white">
        By continuing, you agree to our<a href="https://company.gamehouse.com/">
          Terms of Service</a
        >
        and <a href="https://company.gamehouse.com/">Privacy Policy</a> .
      </p>
    </div>

    <div class="white-text">
      <h1 style="font-weight: 700">Connect your account</h1>
      <h3>...and unlock your benefits!</h3>
      <input type="text" class="input-text" placeholder="Email Address" />

      <input type="checkbox" class="checkbox" id="comercial" />
      <label for="comercial">Send Me Offers, News, and Fun Stuff!</label>
      <AppButton text="Connect" style="display: block; width: 100%; margin-top: 1em"></AppButton>
    </div>
  </main>
</template>
