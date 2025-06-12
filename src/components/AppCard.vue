<script setup></script>

<template>
  <div class="plan-card">
    <div class="badge">Save 20%</div>
    <div class="card-header">
      <input type="checkbox" class="checkbox-round" />
      <h2 class="white-text">Annual</h2>
    </div>

    <div style="margin-top: 12px">
      <span class="white-text">$ 87.99</span>
      <span class="white-text">/year</span>
    </div>

    <p class="billing-note">Billed annually</p>

    <div class="trial">7-day free trial</div>
  </div>
</template>

<style scoped>
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
  cursor: pointer;
}

.checkbox-round:checked {
  background-color: #afeea7;
}

.plan-card {
  position: relative;
  background: linear-gradient(to right, #2f234d, #3c2e72);
  border-radius: 1em;
  border: 3px solid transparent;
  text-align: center;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  max-width: 260px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-image: linear-gradient(90deg, #ffc978, #fd6a6a, #b991c0, #7ed6df) 1;
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
