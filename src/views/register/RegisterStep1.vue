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
      <p>
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

<style>
a {
  color: rgb(2, 151, 151);
  text-decoration: none;
}
.left-column {
  align-content: space-evenly;
  flex-direction: column;
  display: flex;
}
.left-column p {
  margin-top: auto;
}
.columns {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5rem;
}

.white-text {
  justify-self: center;
  text-align: center;
  font-size: 1.2em;
  color: white;
}

.input-text {
  width: 100%;
  height: 4em;
  border-radius: 0.5em;
  padding: 2em;
  margin-top: 2em;
}

.checkbox {
  width: 1.3em;
  height: 1.3em;
  border-color: white;
  border: 2px solid #ddd;
  appearance: none;
  cursor: pointer;
  margin-right: 0.8em;
  margin-top: 6em;
}
</style>
