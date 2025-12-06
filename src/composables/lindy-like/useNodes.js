import { ref, triggerRef } from 'vue'

// Configuration for automatic layout
const LAYOUT_CONFIG = {
  startX: 400,  // Fixed X position for all nodes
  startY: 100,  // Starting Y position
  nodeSpacing: 150  // Vertical spacing between nodes
}

// Initial sample nodes
const initialNodes = [
  {
    id: '1',
    type: 'lindyNode',
    position: { x: LAYOUT_CONFIG.startX, y: LAYOUT_CONFIG.startY },
    data: {
      step: 1,
      title: 'Sample Step 1',
      description: 'This is the first step in your workflow'
    }
  },
  {
    id: '2',
    type: 'lindyNode',
    position: { x: LAYOUT_CONFIG.startX, y: LAYOUT_CONFIG.startY + LAYOUT_CONFIG.nodeSpacing },
    data: {
      step: 2,
      title: 'Sample Step 2',
      description: 'This is the second step in your workflow'
    }
  }
]

const initialEdges = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'default'
  }
]

export default function useNodes() {
  const nodes = ref([...initialNodes])
  const edges = ref([...initialEdges])

  // Get node by ID
  const getNodeById = (id) => {
    return nodes.value.find(node => node.id === id)
  }

  // Calculate next position for new node
  const getNextPosition = () => {
    const lastNode = nodes.value[nodes.value.length - 1]
    if (!lastNode) {
      return { x: LAYOUT_CONFIG.startX, y: LAYOUT_CONFIG.startY }
    }
    return {
      x: LAYOUT_CONFIG.startX,
      y: lastNode.position.y + LAYOUT_CONFIG.nodeSpacing
    }
  }

  // Add a new node with automatic positioning and connection
  const addNode = (nodeData) => {
    const newId = (Math.max(0, ...nodes.value.map(n => parseInt(n.id))) + 1).toString()
    const position = getNextPosition()
    
    const newNode = {
      id: newId,
      type: 'lindyNode',
      position: { ...position },
      data: {
        step: nodes.value.length + 1,
        title: nodeData.title || 'New Step',
        description: nodeData.description || 'Describe this step'
      }
    }
    
    // Create new array to ensure reactivity
    const newNodes = [...nodes.value, newNode]
    nodes.value = newNodes
    
    // Auto-connect to previous node if it exists
    if (newNodes.length > 1) {
      const previousNodeId = newNodes[newNodes.length - 2].id
      const newEdge = {
        id: `e${previousNodeId}-${newId}`,
        source: previousNodeId,
        target: newId,
        type: 'default'
      }
      edges.value = [...edges.value, newEdge]
    }
    
    return newNode
  }

  // Update node data
  const updateNode = (nodeId, updates) => {
    const nodeIndex = nodes.value.findIndex(node => node.id === nodeId)
    if (nodeIndex !== -1) {
      const updatedNode = {
        ...nodes.value[nodeIndex],
        data: { ...nodes.value[nodeIndex].data, ...updates }
      }
      const newNodes = [...nodes.value]
      newNodes[nodeIndex] = updatedNode
      nodes.value = newNodes
    }
  }

  // Delete node and reposition remaining nodes
  const deleteNode = (nodeId) => {
    const nodeIndex = nodes.value.findIndex(node => node.id === nodeId)
    if (nodeIndex === -1) return
    
    // Filter out the node
    let newNodes = nodes.value.filter(node => node.id !== nodeId)
    
    // Renumber steps and reposition remaining nodes
    newNodes = newNodes.map((node, index) => ({
      ...node,
      position: {
        x: LAYOUT_CONFIG.startX,
        y: LAYOUT_CONFIG.startY + (index * LAYOUT_CONFIG.nodeSpacing)
      },
      data: {
        ...node.data,
        step: index + 1
      }
    }))
    
    nodes.value = newNodes
    
    // Recreate edges for linear connection
    const newEdges = []
    for (let i = 0; i < newNodes.length - 1; i++) {
      const sourceId = newNodes[i].id
      const targetId = newNodes[i + 1].id
      newEdges.push({
        id: `e${sourceId}-${targetId}`,
        source: sourceId,
        target: targetId,
        type: 'default'
      })
    }
    edges.value = newEdges
  }

  return {
    nodes,
    edges,
    getNodeById,
    addNode,
    updateNode,
    deleteNode
  }
}