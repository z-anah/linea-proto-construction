<script setup>
import { computed, watch } from 'vue'

const props = defineProps({
  selectedNodeId: [String, Number],
  selectedNodeConfig: Object
})

const emit = defineEmits(['update:selectedNodeConfig', 'delete-node', 'close'])

const config = computed({
  get() {
    return props.selectedNodeConfig || {
      title: '',
      description: '',
      step: 1
    }
  },
  set(newConfig) {
    emit('update:selectedNodeConfig', newConfig)
  }
})

const isOpen = computed(() => {
  return props.selectedNodeId !== null && props.selectedNodeConfig !== null
})

function updateTitle(value) {
  config.value = { ...config.value, title: value }
}

function updateDescription(value) {
  config.value = { ...config.value, description: value }
}

function updateStep(value) {
  config.value = { ...config.value, step: parseInt(value) }
}

function handleDelete() {
  if (confirm('Are you sure you want to delete this node?')) {
    emit('delete-node', props.selectedNodeId)
    emit('close')
  }
}

function handleClose() {
  emit('close')
}
</script>

<template>
  <aside 
    v-if="isOpen" 
    class="right-inspector"
  >
    <div class="inspector-content">
      <div class="inspector-header">
        <h2 class="inspector-title">Node Inspector</h2>
        <button class="close-btn" @click="handleClose">×</button>
      </div>

      <div class="inspector-body">
        <div class="field-group">
          <label for="node-step" class="field-label">Step Number</label>
          <input
            id="node-step"
            type="number"
            :value="config.step"
            @input="updateStep($event.target.value)"
            class="field-input"
            min="1"
          />
        </div>

        <div class="field-group">
          <label for="node-title" class="field-label">Title</label>
          <input
            id="node-title"
            type="text"
            :value="config.title"
            @input="updateTitle($event.target.value)"
            class="field-input"
            placeholder="Enter node title..."
          />
        </div>

        <div class="field-group">
          <label for="node-description" class="field-label">Description</label>
          <textarea
            id="node-description"
            :value="config.description"
            @input="updateDescription($event.target.value)"
            class="field-textarea"
            placeholder="Enter node description..."
            rows="4"
          ></textarea>
        </div>
      </div>

      <div class="inspector-footer">
        <button 
          class="delete-btn"
          @click="handleDelete"
        >
          Delete Node
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.right-inspector {
  position: fixed;
  right: 20px;
  top: 80px;
  bottom: 80px;
  width: 320px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.inspector-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.inspector-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e5e5;
}

.inspector-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666666;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
}

.close-btn:hover {
  color: #000000;
}

.inspector-body {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.field-group {
  margin-bottom: 20px;
}

.field-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 6px;
}

.field-input {
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 10px;
  font-size: 0.9rem;
  color: #000000;
}

.field-input:focus {
  outline: none;
  border-color: #FFB000;
}

.field-textarea {
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 10px;
  font-size: 0.9rem;
  color: #000000;
  resize: vertical;
  min-height: 80px;
  font-family: inherit;
}

.field-textarea:focus {
  outline: none;
  border-color: #FFB000;
}

.inspector-footer {
  padding: 20px;
  border-top: 1px solid #e5e5e5;
}

.delete-btn {
  width: 100%;
  background: #ffffff;
  color: #dc3545;
  border: 1px solid #dc3545;
  padding: 10px 16px;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.delete-btn:hover {
  background: #dc3545;
  color: #ffffff;
}
</style>