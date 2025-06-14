<script setup>
import AppBenefits from '@/components/AppBenefits.vue'
import AppButton from '@/components/AppButton.vue'
import { onMounted, onUnmounted, ref } from 'vue'

const widthFull = ref(window.innerWidth)

const updateWidth = () => {
  widthFull.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<template>
  <main class="columns white-text">
    <div v-if="widthFull >= 641" class="left-column">
      <div id="a">
        <AppBenefits
          :benefits="[
            'Access to 10+ GAMES for FREE thanks to ads',
            'Log In Across All Your Devices',
            'Skip the Line with Customer Support',
          ]"
        />
      </div>

      <div id="b">
        <p style="color: white">
          By continuing, you agree to our<a href="https://company.gamehouse.com/">
            Terms of Service</a
          >
          and <a href="https://company.gamehouse.com/">Privacy Policy</a> .
        </p>
      </div>
    </div>
    <template v-else>
      <div id="a" style="margin-bottom: 4em">
        <AppBenefits
          :benefits="[
            'Access to 10+ GAMES for FREE thanks to ads',
            'Log In Across All Your Devices',
            'Skip the Line with Customer Support',
          ]"
        />
      </div>

      <div id="b">
        <p style="color: white">
          By continuing, you agree to our<a href="https://company.gamehouse.com/">
            Terms of Service</a
          >
          and <a href="https://company.gamehouse.com/">Privacy Policy</a> .
        </p>
      </div>
    </template>

    <div v-if="widthFull >= 641" class="white-text">
      <div id="c" style="">
        <h1>Connect your account</h1>
        <h3>...and unlock your benefits!</h3>
      </div>
      <div id="d">
        <input type="text" class="input-text" placeholder="Email Address" />

        <input type="checkbox" class="checkbox" id="comercial" />
        <label for="comercial">Send Me Offers, News, and Fun Stuff!</label>
        <AppButton text="Connect" style="display: block; width: 100%; margin-top: 1em"></AppButton>
      </div>
    </div>
    <template v-else>
      <div id="c" style="margin-bottom: 1.3em">
        <h1>Connect your account</h1>
        <h3>...and unlock your benefits!</h3>
      </div>
      <div id="d" style="" class="one-column">
        <input type="text" class="input-text" placeholder="Email Address" />
        <div>
          <input type="checkbox" class="checkbox" id="comercial" />
          <label for="comercial">Send Me Offers, News, and Fun Stuff!</label>
        </div>

        <AppButton text="Connect" style="display: block; width: 100%; margin-top: 1em"></AppButton>
      </div>
    </template>
  </main>
</template>

<style>
#a {
  order: 2;
}
#b {
  order: 4;
}
#c {
  order: 1;
}
#d {
  order: 3;
}
@media (min-width: 641px) {
  #a {
    order: 1;
  }
  #b {
    order: 3;
  }
  #c {
    order: 2;
  }
  #d {
    order: 4;
  }
}
</style>
