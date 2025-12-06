<script setup>
import { ref, watch } from "vue";
import MyCustomNode from "../components/construction/MyCustomNode.vue";
import LeftMenu from "../components/construction/LeftMenu.vue";
import RightMenu from "../components/construction/RightMenu.vue";
import WorkflowCanvas from "../components/construction/WorkflowCanvas.vue";
import useWorkflow from "../composables/construction/useWorkflow.js";
import useNodeSelection from "../composables/construction/useNodeSelection.js";

const nodeTypes = {
  actionNode: MyCustomNode,
};

const {
  nodes,
  edges,
  setType,
  currentType
} = useWorkflow();

const {
  selectedNodeId,
  selectedNodeConfig,
  setSelectedNode,
} = useNodeSelection(nodes);

const workflowInstructions = ref("");
const processType = ref("");

// Watch for processType changes and update nodes
watch(processType, (type) => {
  setType(type);
});

function handleProcess(instructions) {
  console.log("Processing instructions:", instructions);
  // Add your process logic here
}

function handleNodeClickView(event) {
  setSelectedNode(event.node.id);
}
</script>

<template>
  <div class="layout-container">
    <LeftMenu 
      v-model:instructions="workflowInstructions"
      v-model:processType="processType"
      @process="handleProcess"
    />
    <main class="workspace">
      <WorkflowCanvas
        v-model:nodes="nodes"
        v-model:edges="edges"
        :node-types="nodeTypes"
        :selected-node-id="selectedNodeId"
        @node-click="handleNodeClickView"
      />
    </main>
    <RightMenu 
      :selected-node-id="selectedNodeId"
      v-model:config="selectedNodeConfig"
    />
  </div>
</template>

<style scoped>
.layout-container {
  display: grid;
  grid-template-areas:
    "left workspace right";
  grid-template-columns: 400px 1fr 400px;
  grid-template-rows: 1fr;
  height: 100vh;
}

.workspace {
  grid-area: workspace;
  background: #f5f5fa;
  padding: 0;
  overflow: hidden;
}

.vue-flow-basic-example {
  width: 100%;
  height: 100%;
}

.action-node {
  background: #fff;
  border: 1px solid #bbb;
  border-radius: 0;
  box-shadow: none;
  padding: 8px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: border-color 0.2s;
}

.action-node.selected-node {
  border-color: #339cff;
}

.action-title {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  text-align: left;
}

.action-desc {
  font-size: 0.95rem;
  color: #444;
  background: #fafafa;
  border: 1px solid #eee;
  border-radius: 0;
  padding: 4px;
  resize: none;
  min-height: 28px;
  width: 100%;
  margin: 0;
}
</style>
