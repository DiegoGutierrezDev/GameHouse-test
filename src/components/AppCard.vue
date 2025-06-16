<script setup>
import { ref } from 'vue'

defineProps({
  products: Object,
})

const selected = ref(false)
</script>

<template>
  <div v-for="(product, index) in products" class="plan-card" :key="index">
    <div v-if="index == 'year'" class="badge">Save 20%</div>
    <div class="card-header">
      <input type="radio" class="checkbox-round" name="card" v-model="selected" />
      <h2 class="white-text">{{ index == 'year' ? 'Annual' : 'Monthly' }}</h2>
    </div>

    <div style="" class="price-container">
      <span class="white-text">{{ '$ ' + product.price }}</span>
      <span class="white-text">{{ '/' + index }}</span>
    </div>

    <p class="billing-note">Billed {{ index == 'year' ? 'annualy' : 'monthly' }}</p>

    <div class="trial">{{ product.trial_days }}-day free trial</div>
  </div>
</template>

<style scoped>
.plan-card {
  position: relative;
  background: linear-gradient(to right, #2f234d, #3c2e72);
  border-radius: 1em;
  border: 3px solid transparent;
  text-align: center;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-image: linear-gradient(90deg, #ffc978, #fd6a6a, #b991c0, #7ed6df) 1;
}

.price-container {
  margin-top: 12px;
  padding-left: 5.8em;
  padding-right: 5.8em;
}

.card-header {
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding-left: 0.4em;
  padding-right: 0.4em;
  background-color: #5a4a94;
  display: grid;
  justify-content: start;
  align-items: center;
}

.white-text {
  align-self: center;
  justify-self: center;
  grid-column: span 2 / span 2;
  font-size: 22px;
  font-weight: 700;
  color: white;
}

.checkbox-round {
  width: 1.3em;
  height: 1.3em;
  border-color: white;
  border-radius: 50%;
  border: 2px solid #ddd;
  appearance: none;
  position: relative;

  cursor: pointer;
}

.checkbox-round:checked {
  background-color: #4bbb3d;
}

.checkbox-round:checked::after {
  content: '✔';
  color: #2e3b56;
  font-size: 1em;
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 2px;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #6fd3f7;
  color: #231942;
  font-weight: bold;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;
}

.billing-note {
  margin-top: 4px;
  font-size: 14px;
  color: #d0d0d0;
}

.trial {
  margin-top: 16px;
  background-color: #1c1c1c;
  color: #fcd34d;
  font-weight: bold;
  padding: 8px;
}
</style>
