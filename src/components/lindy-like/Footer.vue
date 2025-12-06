<script setup>
import { computed } from 'vue'

const props = defineProps({
  nodes: Array,
  selectedNodeId: [String, Number]
})

const nodeCount = computed(() => {
  return props.nodes?.length || 0
})

const statusText = computed(() => {
  if (props.selectedNodeId) {
    const selectedNode = props.nodes?.find(node => node.id === props.selectedNodeId)
    return selectedNode ? `Selected: ${selectedNode.data.title}` : 'Node selected'
  }
  return `${nodeCount.value} nodes in workflow`
})
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="status-section">
        <span class="status-text">{{ statusText }}</span>
      </div>
      <div class="info-section">
        <span class="info-text">Lindy Workflow Builder v1.0</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #ffffff;
  border-top: 1px solid #e5e5e5;
  z-index: 1000;
  display: flex;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
}

.status-section {
  display: flex;
  align-items: center;
}

.status-text {
  font-size: 0.9rem;
  color: #666666;
}

.info-section {
  display: flex;
  align-items: center;
}

.info-text {
  font-size: 0.8rem;
  color: #999999;
}
</style>