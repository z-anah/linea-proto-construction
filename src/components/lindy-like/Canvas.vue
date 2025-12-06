<script setup>
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { VueFlow } from '@vue-flow/core'

const props = defineProps({
  nodes: Array,
  edges: Array,
  nodeTypes: Object,
  selectedNodeId: [String, Number]
})

const emit = defineEmits(['update:nodes', 'update:edges', 'node-click', 'canvas-click'])

function handleNodeClick(event) {
  emit('node-click', event)
}

function handlePaneClick(event) {
  emit('canvas-click', event)
}
</script>

<template>
  <div class="canvas-container">
    <VueFlow
      v-model:nodes="props.nodes"
      v-model:edges="props.edges"
      :node-types="props.nodeTypes"
      class="lindy-canvas"
      fit-view-on-init
      :default-zoom="0.8"
      :min-zoom="0.3"
      :max-zoom="1.5"
      :nodes-draggable="false"
      :nodes-connectable="false"
      :elements-selectable="true"
      @node-click="handleNodeClick"
      @pane-click="handlePaneClick"
    >
      <Background 
        pattern-color="#e5e5e5" 
        :gap="20"
        variant="dots"
        :size="1"
      />
      <Controls 
        show-zoom
        show-fit-view
        show-interactive
        position="bottom-right"
      />
    </VueFlow>
  </div>
</template>

<style scoped>
.canvas-container {
  position: absolute;
  top: 60px; /* Header height */
  left: 0;
  right: 0;
  bottom: 60px; /* Footer height */
  background: #ffffff;
}

.lindy-canvas {
  width: 100%;
  height: 100%;
}

/* Override Vue Flow default styles */
:deep(.vue-flow__node) {
  cursor: pointer;
}

:deep(.vue-flow__edge) {
  cursor: pointer;
}

:deep(.vue-flow__controls) {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

:deep(.vue-flow__controls-button) {
  background: #ffffff;
  border: none;
  color: #000000;
  width: 32px;
  height: 32px;
}

:deep(.vue-flow__controls-button:hover) {
  background: #FFF7E6;
  color: #FFB000;
}

:deep(.vue-flow__background) {
  background: #ffffff;
}
</style>