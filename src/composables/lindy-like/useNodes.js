import { ref, computed } from 'vue'

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
    const newId = (Math.max(...nodes.value.map(n => parseInt(n.id))) + 1).toString()
    const position = getNextPosition()
    
    const newNode = {
      id: newId,
      type: 'lindyNode',
      position,
      data: {
        step: nodes.value.length + 1,
        title: nodeData.title || 'New Step',
        description: nodeData.description || 'Describe this step'
      }
    }
    
    nodes.value.push(newNode)
    
    // Auto-connect to previous node if it exists
    if (nodes.value.length > 1) {
      const previousNodeId = nodes.value[nodes.value.length - 2].id
      const newEdge = {
        id: `e${previousNodeId}-${newId}`,
        source: previousNodeId,
        target: newId,
        type: 'default'
      }
      edges.value.push(newEdge)
    }
    
    return newNode
  }

  // Update node data
  const updateNode = (nodeId, updates) => {
    const node = getNodeById(nodeId)
    if (node) {
      Object.assign(node.data, updates)
    }
  }

  // Delete node and reposition remaining nodes
  const deleteNode = (nodeId) => {
    const nodeIndex = nodes.value.findIndex(node => node.id === nodeId)
    if (nodeIndex === -1) return
    
    // Remove the node
    nodes.value.splice(nodeIndex, 1)
    
    // Remove edges connected to this node
    edges.value = edges.value.filter(edge => 
      edge.source !== nodeId && edge.target !== nodeId
    )
    
    // Renumber steps and reposition remaining nodes
    nodes.value.forEach((node, index) => {
      node.data.step = index + 1
      node.position = {
        x: LAYOUT_CONFIG.startX,
        y: LAYOUT_CONFIG.startY + (index * LAYOUT_CONFIG.nodeSpacing)
      }
    })
    
    // Recreate edges for linear connection
    edges.value = []
    for (let i = 0; i < nodes.value.length - 1; i++) {
      const sourceId = nodes.value[i].id
      const targetId = nodes.value[i + 1].id
      edges.value.push({
        id: `e${sourceId}-${targetId}`,
        source: sourceId,
        target: targetId,
        type: 'default'
      })
    }
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