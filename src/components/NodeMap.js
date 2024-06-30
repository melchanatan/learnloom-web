"use client";
import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import NodeLinkMenu from "@/components/NodeLinkMenu";
import SummaryModal from "@/components/SummaryModal";
import useFileStore from "@/hook/useFileStore";

const graph = {
  nodes: [
    { id: 1, label: "Node 1", title: "node 1 tootip text" },
    { id: 2, label: "Node 2", title: "node 2 tootip text" },
    { id: 3, label: "Node 3", title: "node 3 tootip text" },
    { id: 4, label: "Node 4", title: "node 4 tootip text" },
    { id: 5, label: "Node 5", title: "node 5 tootip text" },
  ],
  edges: [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ],
};

const options = {
  layout: {
    hierarchical: true,
  },
  edges: {
    color: "#000000",
  },
  height: "500px",
};

const testData = {
  "Bearing Selection": [
    "1.1: Assignment Details",
    "20,000 hr",
    "3,000 rpm",
    "Requires ball bearing with smallest possible inner diameter",
    "1.2: Selection Criteria",
    "Select from SKF Catalogue",
    "Use C, C0 from catalogue",
    "Detailed solution and brief explanation",
    "Select Part Number from catalogue",
    "Short description of the selected part",
  ],
  Calculation: [
    "2.1: Given Parameters",
    "F = ↓",
    "Fa = 2.8",
    "Life = 20,000",
    "Pre = 3,000",
    "V = 1.2",
    "CCo = 8 mm",
    "2.2: Interpolation",
    "Fa = 13",
    "Ns = 1.5",
    "P = 1.5",
    "Ta = 18.2 kN",
    "2.3: Re-calculation",
    "fofa = 14",
    "P = 13.41 kN",
    "Ta = 37.31 N",
    "Speed = 30,000 rpm",
    "Recommended speed limit = 5,000 rpm",
    "Selected model = 6",
  ],
};

const NodeMap = () => {
  const [selectedNodeName, setSelectedNodeName] = useState("");
  const { file, setFile } = useFileStore();
  let test = {
    nodes: [],
    edges: [],
  };

  useEffect(() => {
    let fileGraph = {
      nodes: [],
      edges: [],
    };
    let i = 0;
    let b = 0;
    Object.keys(testData).forEach(function (key) {
      b = i;
      fileGraph.nodes.push({ id: i, label: key, title: key });
      i++;
      for (let j = 0; j < testData.length; j++) {
        fileGraph.nodes.push({
          id: i++,
          label: testData.key[j],
          title: testData.key[j],
        });
        fileGraph.edges.push({ from: b, to: i++ });
      }
    });
    test = fileGraph;
  }, []);

  const handleSelectNode = (nodeIndex) => {
    // setSelectedNodeName(test?.nodes[nodeIndex - 1].label);
  };

  const handleEvents = {
    select: ({ nodes, pointer: { canvas } }) => {
      handleSelectNode(nodes);
    },
  };

  return (
    <div className="flex gap-3">
      <NodeLinkMenu selectedNodeName={selectedNodeName} />
      <div class="rounded-lg border-2">
        <Graph graph={test} options={options} events={handleEvents} />
      </div>
    </div>
  );
};

export default NodeMap;
