import { ref, reactive, watch } from "vue";

// Default config presets for each step/node
const defaultConfigs = {
  "2": [
    { info: "Project address", check: "Procore project list" },
    { info: "Invoice Number", check: "N/A" },
    { info: "Invoice Date", check: "N/A" },
    { info: "Invoice Amount", check: "N/A" }
  ],
  "3": [
    { info: "Vendor number", findFrom: "Procore vendor list", using: "Email" }
  ],
  "4": [
    { system: "Procore", what: "Bill" }
  ]
};

export default function useNodeSelection(nodes) {
  const selectedNodeId = ref(null);
  const selectedNodeConfig = reactive({});

  function setSelectedNode(id) {
    selectedNodeId.value = id;
  }

  watch(selectedNodeId, (id) => {
    if (id && !selectedNodeConfig[id]) {
      // Use preset if available, otherwise empty array
      selectedNodeConfig[id] = defaultConfigs[id]
        ? JSON.parse(JSON.stringify(defaultConfigs[id]))
        : [];
    }
  });

  return {
    selectedNodeId,
    selectedNodeConfig,
    setSelectedNode,
  };
}
