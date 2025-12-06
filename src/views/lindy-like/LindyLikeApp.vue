<script setup>
import { ref } from 'vue'
import Header from '../../components/lindy-like/Header.vue'
import LeftMenu from '../../components/lindy-like/LeftMenu.vue'
import RightInspector from '../../components/lindy-like/RightInspector.vue'
import Canvas from '../../components/lindy-like/Canvas.vue'
import Footer from '../../components/lindy-like/Footer.vue'
import LindyNode from '../../components/lindy-like/LindyNode.vue'
import useNodes from '../../composables/lindy-like/useNodes.js'
import useNodeSelection from '../../composables/lindy-like/useNodeSelection.js'

// Node types for Vue Flow
const nodeTypes = {
  lindyNode: LindyNode
}

// Initialize composables
const {
  nodes,
  edges,
  addNode,
  updateNode,
  deleteNode
} = useNodes()

const {
  selectedNodeId,
  selectedNodeConfig,
  setSelectedNode,
  clearSelection
} = useNodeSelection(nodes)

// Header actions
function handleSave() {
  console.log('Saving workflow...', { nodes: nodes.value, edges: edges.value })
  alert('Workflow saved successfully!')
}

function handleSubmit() {
  console.log('Submitting workflow...', { nodes: nodes.value, edges: edges.value })
  alert('Workflow submitted successfully!')
}

function handlePreview() {
  console.log('Previewing workflow...', { nodes: nodes.value, edges: edges.value })
  alert('Preview mode activated!')
}

// Left menu actions
function handleAddNode(nodeData) {
  addNode(nodeData)
}

// Canvas actions
function handleNodeClick(event) {
  setSelectedNode(event.node.id)
}

function handleCanvasClick() {
  clearSelection()
}

// Right inspector actions
function handleDeleteNode(nodeId) {
  deleteNode(nodeId)
  clearSelection()
}

function handleCloseInspector() {
  clearSelection()
}
</script>

<template>
  <div class="lindy-like-app">
    <!-- Header -->
    <Header 
      @save="handleSave"
      @submit="handleSubmit" 
      @preview="handlePreview"
    />
    
    <!-- Left Menu -->
    <LeftMenu 
      @add-node="handleAddNode"
    />
    
    <!-- Canvas -->
    <Canvas 
      v-model:nodes="nodes"
      v-model:edges="edges"
      :node-types="nodeTypes"
      :selected-node-id="selectedNodeId"
      @node-click="handleNodeClick"
      @canvas-click="handleCanvasClick"
    />
    
    <!-- Right Inspector -->
    <RightInspector 
      :selected-node-id="selectedNodeId"
      v-model:selected-node-config="selectedNodeConfig"
      @delete-node="handleDeleteNode"
      @close="handleCloseInspector"
    />
    
    <!-- Footer -->
    <Footer 
      :nodes="nodes"
      :selected-node-id="selectedNodeId"
    />
  </div>
</template>

<style scoped>
.lindy-like-app {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #ffffff;
}

/* Ensure all components use the design system colors */
* {
  box-sizing: border-box;
}

/* Global styles for the app */
:deep(input),
:deep(textarea),
:deep(button) {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

:deep(button) {
  cursor: pointer;
}

:deep(button:disabled) {
  cursor: not-allowed;
}

/* Scrollbar styling */
:deep(::-webkit-scrollbar) {
  width: 6px;
}

:deep(::-webkit-scrollbar-track) {
  background: #f1f1f1;
}

:deep(::-webkit-scrollbar-thumb) {
  background: #cccccc;
  border-radius: 3px;
}

:deep(::-webkit-scrollbar-thumb:hover) {
  background: #999999;
}
</style>