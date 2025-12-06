<!-- filepath: /Users/anah/Documents/GitHub/construction/src/components/RightMenu.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  selectedNodeId: {
    type: String,
    default: null
  }
})

const config = defineModel('config', {
  default: () => ({})
})

// The config for each node is initialized with defaults in useNodeSelection.js

const stepConfig = computed(() => {
  if (!props.selectedNodeId) return []
  if (!config.value[props.selectedNodeId]) {
    config.value[props.selectedNodeId] = []
  }
  return config.value[props.selectedNodeId]
})

// Add row for each step type
function addRow(type) {
  if (!props.selectedNodeId) return
  if (!config.value[props.selectedNodeId]) config.value[props.selectedNodeId] = []
  if (type === 'gather') {
    config.value[props.selectedNodeId].push({ info: '', check: '' })
  } else if (type === 'find') {
    config.value[props.selectedNodeId].push({ info: '', findFrom: '', using: '' })
  } else if (type === 'enter') {
    config.value[props.selectedNodeId].push({ system: '', what: '' })
  }
}

function removeRow(idx) {
  if (!props.selectedNodeId) return
  config.value[props.selectedNodeId].splice(idx, 1)
}

// Map nodeId to step type for rendering
function getStepType(nodeId) {
  if (nodeId === '2') return 'gather'
  if (nodeId === '3') return 'find'
  if (nodeId === '4') return 'enter'
  return null
}
</script>

<template>
  <aside class="right-menu">
    <div class="right-menu-content">
      <h3 class="config-title">Step Configuration</h3>
      <template v-if="selectedNodeId">
        <div v-if="getStepType(selectedNodeId) === 'gather'" class="config-section">
          <label class="config-label">Gather and check information</label>
          <div v-for="(row, idx) in stepConfig" :key="idx" class="vertical-group">
            <div class="vertical-input-row">
              <label class="vertical-input-label">Information</label>
              <input class="config-input" v-model="row.info" placeholder="e.g. Project address" />
            </div>
            <div class="vertical-input-row">
              <label class="vertical-input-label">Check</label>
              <input class="config-input" v-model="row.check" placeholder="e.g. Procore project list" />
            </div>
            <button class="remove-btn" @click="removeRow(idx)">Remove</button>
            <hr class="vertical-divider" v-if="idx !== stepConfig.length - 1" />
          </div>
          <button class="add-btn" @click="addRow('gather')">Add Row</button>
        </div>
        <div v-else-if="getStepType(selectedNodeId) === 'find'" class="config-section">
          <label class="config-label">Find additional information</label>
          <div v-for="(row, idx) in stepConfig" :key="idx" class="vertical-group">
            <div class="vertical-input-row">
              <label class="vertical-input-label">Information</label>
              <input class="config-input" v-model="row.info" placeholder="e.g. Vendor number" />
            </div>
            <div class="vertical-input-row">
              <label class="vertical-input-label">Find from</label>
              <input class="config-input" v-model="row.findFrom" placeholder="e.g. Procore vendor list" />
            </div>
            <div class="vertical-input-row">
              <label class="vertical-input-label">Using</label>
              <input class="config-input" v-model="row.using" placeholder="e.g. Email" />
            </div>
            <button class="remove-btn" @click="removeRow(idx)">Remove</button>
            <hr class="vertical-divider" v-if="idx !== stepConfig.length - 1" />
          </div>
          <button class="add-btn" @click="addRow('find')">Add Row</button>
        </div>
        <div v-else-if="getStepType(selectedNodeId) === 'enter'" class="config-section">
          <label class="config-label">Enter information into system</label>
          <div v-for="(row, idx) in stepConfig" :key="idx" class="vertical-group">
            <div class="vertical-input-row">
              <label class="vertical-input-label">System</label>
              <input class="config-input" v-model="row.system" placeholder="e.g. Procore" />
            </div>
            <div class="vertical-input-row">
              <label class="vertical-input-label">What</label>
              <input class="config-input" v-model="row.what" placeholder="e.g. Bill" />
            </div>
            <button class="remove-btn" @click="removeRow(idx)">Remove</button>
            <hr class="vertical-divider" v-if="idx !== stepConfig.length - 1" />
          </div>
          <button class="add-btn" @click="addRow('enter')">Add Row</button>
        </div>
        <div v-else class="config-section">
          <label class="config-label">No configuration needed for this step.</label>
        </div>
      </template>
      <template v-else>
        <div class="config-placeholder">Select a node to configure its step.</div>
      </template>
    </div>
  </aside>
</template>

<style scoped>
.right-menu {
  background: #fff;
  padding: 24px 0px;
  display: flex;
  flex-direction: column;
}

.right-menu-content {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.config-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: #339cff;
}

.config-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.config-label {
  font-weight: bold;
  margin-bottom: 8px;
  color: #333;
  text-align: left;
  padding: 0 12px;
}

.config-placeholder {
  min-height: 32px;
  background: #eaf3fb;
  border: 1px dashed #b0c4de;
  border-radius: 6px;
  padding: 6px 10px;
  color: #888;
  font-size: 0.95rem;
  margin-left: 12px
}

.config-input {
  min-height: 20px;
  font-size: 0.7rem;
  margin-bottom: 2px;
  resize: none;
  border-radius: 8px;
  border: 1px solid #b0c4de;
  margin-left: 12px;
  margin-left: 12px;
  padding: 6px 10px;
}

.add-btn, .remove-btn {
  background: #339cff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 0.95rem;
  padding: 4px 10px;
  cursor: pointer;
  margin: 0 0 0 12px;
}
.remove-btn {
  background: #ff4d4f;
  padding: 2px 8px;
  margin-left: 12px;
}
.add-btn:hover {
  background: #1976d2;
}
.remove-btn:hover {
  background: #d32f2f;
}

.vertical-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 8px;
  margin-bottom: 8px;
  position: relative;
}

.vertical-input-row {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.vertical-input-label {
  font-size: 0.7rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 2px;
  text-align: left;
  padding: 0 12px;
}

.vertical-divider {
  border: none;
  border-top: 1px dashed #b0c4de;
  margin: 12px 0 0 0;
}
</style>