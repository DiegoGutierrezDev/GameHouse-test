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
    </div>

    <div class="white-text">
      <h1 style="font-weight: 700">Get verified!</h1>
      <h3>Enter the one-time code we sent to:</h3>
      EMAIL

      <p style="margin-top: 3em">
        Didn't get an email?
        <a href="https://company.gamehouse.com/" style="font-weight: 700">Resend Code</a>
      </p>

      <AppButton text="Verify" style="display: block; width: 100%; margin-top: 1em"></AppButton>
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
