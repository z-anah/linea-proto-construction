<script setup>
const emit = defineEmits(['save', 'submit', 'preview'])

function handleSave() {
  emit('save')
}

function handleSubmit() {
  emit('submit')
}

function handlePreview() {
  emit('preview')
}
</script>

<template>
  <header class="header">
    <div class="header-content">
      <div class="logo-section">
        <h1 class="product-name">Lindy Workflow Builder</h1>
      </div>
      <div class="actions-section">
        <button class="header-btn" @click="handleSave">Save</button>
        <button class="header-btn" @click="handleSubmit">Submit</button>
        <button class="header-btn primary" @click="handlePreview">Preview</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100%;
  padding: 0 24px;
}

.logo-section {
  display: flex;
  align-items: center;
}

.product-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.actions-section {
  display: flex;
  gap: 12px;
}

.header-btn {
  background: #ffffff;
  border: 1px solid #FFB000;
  color: #FFB000;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.header-btn:hover {
  background: #FFF7E6;
}

.header-btn.primary {
  background: #FFB000;
  color: #ffffff;
}

.header-btn.primary:hover {
  background: #E6A000;
}
</style>