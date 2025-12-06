import { ref } from 'vue'

export default function useEdges() {
  const edges = ref([])

  // Add edge between two nodes
  const addEdge = (sourceId, targetId) => {
    const edgeId = `e${sourceId}-${targetId}`
    const existingEdge = edges.value.find(edge => edge.id === edgeId)
    
    if (!existingEdge) {
      const newEdge = {
        id: edgeId,
        source: sourceId,
        target: targetId,
        type: 'default',
        style: {
          stroke: '#FFB000',
          strokeWidth: 2
        }
      }
      edges.value.push(newEdge)
      return newEdge
    }
    return existingEdge
  }

  // Remove edge
  const removeEdge = (edgeId) => {
    edges.value = edges.value.filter(edge => edge.id !== edgeId)
  }

  // Remove all edges connected to a specific node
  const removeEdgesForNode = (nodeId) => {
    edges.value = edges.value.filter(edge => 
      edge.source !== nodeId && edge.target !== nodeId
    )
  }

  // Get edges for a specific node
  const getEdgesForNode = (nodeId) => {
    return edges.value.filter(edge => 
      edge.source === nodeId || edge.target === nodeId
    )
  }

  return {
    edges,
    addEdge,
    removeEdge,
    removeEdgesForNode,
    getEdgesForNode
  }
}