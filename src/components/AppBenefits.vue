<script setup>
const props = defineProps({
  benefits: Array,
})
</script>

<template>
  <div class="benefits-container">
    <div v-for="(benefit, index) in props.benefits" :key="index" class="benefits-class">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 117.72 117.72"
        style="enable-background: new 0 0 117.72 117.72; margin-right: 0.5em"
        xml:space="preserve"
        fill="#AFEEA7"
        width="1.4em"
      >
        <g>
          <path
            class="st0"
            d="M58.86,0c9.13,0,17.77,2.08,25.49,5.79c-3.16,2.5-6.09,4.9-8.82,7.21c-5.2-1.89-10.81-2.92-16.66-2.92 c-13.47,0-25.67,5.46-34.49,14.29c-8.83,8.83-14.29,21.02-14.29,34.49c0,13.47,5.46,25.66,14.29,34.49 c8.83,8.83,21.02,14.29,34.49,14.29s25.67-5.46,34.49-14.29c8.83-8.83,14.29-21.02,14.29-34.49c0-3.2-0.31-6.34-0.9-9.37 c2.53-3.3,5.12-6.59,7.77-9.85c2.08,6.02,3.21,12.49,3.21,19.22c0,16.25-6.59,30.97-17.24,41.62 c-10.65,10.65-25.37,17.24-41.62,17.24c-16.25,0-30.97-6.59-41.62-17.24C6.59,89.83,0,75.11,0,58.86 c0-16.25,6.59-30.97,17.24-41.62S42.61,0,58.86,0L58.86,0z M31.44,49.19L45.8,49l1.07,0.28c2.9,1.67,5.63,3.58,8.18,5.74 c1.84,1.56,3.6,3.26,5.27,5.1c5.15-8.29,10.64-15.9,16.44-22.9c6.35-7.67,13.09-14.63,20.17-20.98l1.4-0.54H114l-3.16,3.51 C101.13,30,92.32,41.15,84.36,52.65C76.4,64.16,69.28,76.04,62.95,88.27l-1.97,3.8l-1.81-3.87c-3.34-7.17-7.34-13.75-12.11-19.63 c-4.77-5.88-10.32-11.1-16.79-15.54L31.44,49.19L31.44,49.19z"
          />
        </g>
      </svg>
      <span>
        {{ benefit }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.benefits-container {
  margin-top: 3em;
  margin-bottom: 5em;
  width: 100%;
}
.benefits-class {
  padding: 0.6em;
  display: flex;
  align-items: center;
  color: white;
  background: linear-gradient(135deg, #7a3fa2, #5d2c7f, #3e1d52);
}

@media (min-width: 641px) {
  .benefits-class {
    padding: 1em;
  }

  .benefits-class span {
    font-weight: 500;
    font-size: large;
  }
}
.benefits-class:nth-child(even) {
  background: none;
}
</style>
