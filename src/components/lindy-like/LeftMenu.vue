<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-node'])

// Predefined workflow elements/templates
const workflowElements = [
  {
    title: 'Basic Step',
    description: 'A simple workflow step',
    template: {
      title: 'New Step',
      description: 'Describe what this step does'
    }
  },
  {
    title: 'Decision Point',
    description: 'A branching decision in the workflow',
    template: {
      title: 'Decision: Choose Path',
      description: 'Make a decision based on conditions'
    }
  },
  {
    title: 'Data Processing',
    description: 'Process or transform data',
    template: {
      title: 'Process Data',
      description: 'Transform, validate, or manipulate data'
    }
  },
  {
    title: 'User Input',
    description: 'Collect information from user',
    template: {
      title: 'Get User Input',
      description: 'Collect required information from the user'
    }
  }
]

function handleElementClick(element) {
  emit('add-node', element.template)
}
</script>

<template>
  <aside class="left-menu">
    <div class="menu-content">
      <h2 class="menu-title">Workflow Elements</h2>
      
      <div class="elements-section">
        <h3 class="section-title">Click to add element</h3>
        <div class="elements-list">
          <div
            v-for="element in workflowElements"
            :key="element.title"
            class="element-item"
            @click="handleElementClick(element)"
          >
            <div class="element-title">{{ element.title }}</div>
            <div class="element-description">{{ element.description }}</div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.left-menu {
  position: fixed;
  left: 20px;
  top: 80px;
  bottom: 80px;
  width: 320px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  overflow-y: auto;
}

.menu-content {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.menu-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 20px 0;
  border-bottom: 2px solid #FFB000;
  padding-bottom: 8px;
}

.section-title {
  font-size: 1rem;
  font-weight: 600;
  color: #000000;
  margin: 0 0 12px 0;
}

.elements-section {
  margin-bottom: 24px;
}

.elements-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.element-item {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.element-item:hover {
  background: #FFF7E6;
  border-color: #FFB000;
  transform: translateY(-1px);
}

.element-item:active {
  transform: translateY(0);
}

.element-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #000000;
  margin-bottom: 4px;
}

.element-description {
  font-size: 0.8rem;
  color: #666666;
  line-height: 1.4;
}
</style>