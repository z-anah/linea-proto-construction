<script setup>
import { Handle, Position } from '@vue-flow/core'

const props = defineProps({
  id: String,
  data: Object,
  selected: Boolean
})

const emit = defineEmits(['update:data'])

function updateTitle(value) {
  const newData = { ...props.data, title: value }
  emit('update:data', newData)
}

function updateDescription(value) {
  const newData = { ...props.data, description: value }
  emit('update:data', newData)
}
</script>

<template>
  <div 
    :class="[
      'lindy-node',
      { 'lindy-node--selected': selected }
    ]"
  >
    <!-- Input handle -->
    <Handle
      :id="`${id}-input`"
      type="target"
      :position="Position.Top"
      class="node-handle node-handle--input"
    />
    
    <!-- Node content -->
    <div class="node-content">
      <div class="node-header">
        <span class="node-step">{{ data.step }}</span>
        <input
          v-model="data.title"
          class="node-title"
          @input="updateTitle($event.target.value)"
          @click.stop
        />
      </div>
      
      <textarea
        v-model="data.description"
        class="node-description"
        @input="updateDescription($event.target.value)"
        @click.stop
        rows="2"
      />
    </div>
    
    <!-- Output handle -->
    <Handle
      :id="`${id}-output`"
      type="source"
      :position="Position.Bottom"
      class="node-handle node-handle--output"
    />
  </div>
</template>

<style scoped>
.lindy-node {
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 6px;
  width: 500px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  position: relative;
}

.lindy-node:hover {
  border-color: #FFB000;
  box-shadow: 0 2px 6px rgba(255, 176, 0, 0.15);
}

.lindy-node--selected {
  border-color: #FFB000;
  box-shadow: 0 0 0 2px rgba(255, 176, 0, 0.2);
}

.node-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.node-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.node-step {
  background: #FFB000;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
  flex-shrink: 0;
}

.node-title {
  background: transparent;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  width: 100%;
  padding: 2px 4px;
  border-radius: 3px;
  transition: background 0.2s ease;
}

.node-title:hover,
.node-title:focus {
  background: #f8f9fa;
  outline: none;
}

.node-description {
  background: #f8f9fa;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  padding: 6px 8px;
  font-size: 0.8rem;
  color: #333333;
  resize: none;
  width: 100%;
  min-height: 36px;
  line-height: 1.3;
  font-family: inherit;
  transition: border-color 0.2s ease;
}

.node-description:hover,
.node-description:focus {
  border-color: #FFB000;
  outline: none;
}

/* Handle styles */
:deep(.node-handle) {
  width: 8px;
  height: 8px;
  background: #FFB000;
  border: 2px solid #ffffff;
  border-radius: 50%;
}

:deep(.node-handle--input) {
  top: -6px;
}

:deep(.node-handle--output) {
  bottom: -6px;
}

:deep(.node-handle:hover) {
  background: #E6A000;
  transform: scale(1.2);
}
</style>