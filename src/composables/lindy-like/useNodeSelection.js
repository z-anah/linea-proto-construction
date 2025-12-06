import { ref, computed } from 'vue'

export default function useNodeSelection(nodes) {
  const selectedNodeId = ref(null)

  // Get the selected node data
  const selectedNode = computed(() => {
    if (!selectedNodeId.value) return null
    return nodes.value.find(node => node.id === selectedNodeId.value)
  })

  // Get selected node configuration for editing
  const selectedNodeConfig = computed({
    get() {
      if (!selectedNode.value) return null
      return {
        title: selectedNode.value.data.title,
        description: selectedNode.value.data.description,
        step: selectedNode.value.data.step
      }
    },
    set(newConfig) {
      if (selectedNode.value && newConfig) {
        Object.assign(selectedNode.value.data, newConfig)
      }
    }
  })

  // Set selected node
  const setSelectedNode = (nodeId) => {
    selectedNodeId.value = nodeId
  }

  // Clear selection
  const clearSelection = () => {
    selectedNodeId.value = null
  }

  // Check if a node is selected
  const isNodeSelected = (nodeId) => {
    return selectedNodeId.value === nodeId
  }

  return {
    selectedNodeId,
    selectedNode,
    selectedNodeConfig,
    setSelectedNode,
    clearSelection,
    isNodeSelected
  }
}