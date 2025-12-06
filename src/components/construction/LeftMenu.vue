<!-- filepath: /Users/anah/Documents/GitHub/construction/src/components/LeftMenu.vue -->
<script setup>
const instructions = defineModel('instructions', { default: '' })
const processType = defineModel('processType', { default: '' })

const emit = defineEmits(['process'])

function handleProcess() {
  emit('process', instructions.value)
}
</script>

<template>
  <aside class="left-menu">
    <div class="left-menu-content">
      <h1 class="instruction-title">Workflow Construction Instructions</h1>
      <hr class="title-divider" />

      <label for="process-type" class="left-menu-label">Type</label>
      <select id="process-type" v-model="processType" class="type-select">
        <option value="">Select a type...</option>
        <option value="data-entry">Data Entry</option>
        <option value="complete-forms">Complete Forms</option>
        <option value="follow-up">Follow-up</option>
      </select>

      <label for="workflow-instructions" class="left-menu-label">Standard Operating Process</label>
      <textarea id="workflow-instructions" v-model="instructions" class="workflow-textarea"
        placeholder="Describe or paste your workflow instructions here..."></textarea>
      <button class="process-btn" @click="handleProcess">Process</button>
    </div>
  </aside>
</template>

<style scoped>
.left-menu {
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 24px 16px;
}

.left-menu-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.instruction-title {
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0 0 16px 0;
  text-align: left;
}

.title-divider {
  border: none;
  border-top: 1px solid #b0c4de;
  margin: 0 0 16px 0;
}

.left-menu-label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
  text-align: left;
}

.workflow-textarea {
  flex: 1;
  resize: none;
  padding: 12px;
  font-size: 0.98rem;
  border-radius: 8px;
  border: 1px solid #b0c4de;
  margin-bottom: 16px;
  background: #f7fbff;
}

.process-btn {
  align-self: flex-end;
  padding: 8px 20px;
  background: #339cff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}

.process-btn:hover {
  background: #1976d2;
}

.type-select-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.type-select {
  padding: 10px 12px;
  font-size: 0.98rem;
  border-radius: 8px;
  border: 1px solid #b0c4de;
  background: #f7fbff;
  cursor: pointer;
  margin-bottom: 16px;
}

.type-select:focus {
  outline: none;
  border-color: #339cff;
}
</style>