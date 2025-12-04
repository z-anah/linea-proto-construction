import { ref } from "vue";

// Nodes for "data-entry" type
const dataEntryNodes = [
  {
    id: "1",
    type: "actionNode",
    position: { x: 300, y: 0 },
    draggable: false,
    data: {
      title: "Read email and attachments",
      description: "Team members (multiple emails)",
      system: "",
      fields: "",
      formTemplate: "",
      followUp: "",
      emailTemplate: ""
    }
  },
  {
    id: "2",
    type: "actionNode",
    position: { x: 300, y: 120 },
    draggable: false,
    data: {
      title: "Gather and check information",
      description: "Collect and verify project and invoice details.",
      system: "",
      fields: "Project address, Invoice Number, Invoice Date, Invoice Amount",
      formTemplate: "",
      followUp: "",
      emailTemplate: ""
    }
  },
  {
    id: "3",
    type: "actionNode",
    position: { x: 300, y: 240 },
    draggable: false,
    data: {
      title: "Find additional information",
      description: "Locate missing vendor or project info.",
      system: "",
      fields: "Vendor number",
      formTemplate: "",
      followUp: "",
      emailTemplate: ""
    }
  },
  {
    id: "4",
    type: "actionNode",
    position: { x: 300, y: 360 },
    draggable: false,
    data: {
      title: "Enter information into system",
      description: "Input gathered data into Procore or other systems.",
      system: "",
      fields: "",
      formTemplate: "",
      followUp: "",
      emailTemplate: ""
    }
  }
];

const dataEntryEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" }
];

// Add more node sets for other types as needed
const nodeSets = {
  "data-entry": {
    nodes: dataEntryNodes,
    edges: dataEntryEdges
  }
  // ...other types
};

export default function useWorkflow() {
  const currentType = ref("data-entry");
  const nodes = ref([...nodeSets[currentType.value].nodes]);
  const edges = ref([...nodeSets[currentType.value].edges]);

  function setType(type) {
    currentType.value = type;
    if (nodeSets[type]) {
      nodes.value = [...nodeSets[type].nodes];
      edges.value = [...nodeSets[type].edges];
    } else {
      nodes.value = [];
      edges.value = [];
    }
  }

  return {
    nodes,
    edges,
    setType,
    currentType
  };
}
