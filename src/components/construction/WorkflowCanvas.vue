<script setup>
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
import { VueFlow } from "@vue-flow/core";
import MyCustomNode from "./MyCustomNode.vue";

const props = defineProps({
  nodes: Array,
  edges: Array,
  nodeTypes: Object,
  selectedNodeId: [String, Number]
});
const emit = defineEmits(["update:nodes", "update:edges", "node-click"]);

function handleNodeClick(event) {
  emit("node-click", event);
}
</script>

<template>
  <VueFlow
    v-model:nodes="props.nodes"
    v-model:edges="props.edges"
    :node-types="props.nodeTypes"
    fit-view-on-init
    class="vue-flow-basic-example"
    :default-zoom="0.5"
    :min-zoom="0.2"
    :max-zoom="2"
    @node-click="handleNodeClick"
  >
    <template #node-actionNode="{ id, data }">
      <MyCustomNode
        :id="id"
        :data="data"
        :selected="props.selectedNodeId === id"
      />
    </template>
    <Background pattern-color="#aaa" :gap="8" />
    <MiniMap />
    <Controls />
  </VueFlow>
</template>

<style scoped>
.vue-flow-basic-example {
  width: 100%;
  height: 100%;
}
</style>
