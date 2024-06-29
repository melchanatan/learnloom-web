"use client";
import React, { useState } from "react";
import Graph from "react-graph-vis";
import NodeLinkMenu from "@/components/NodeLinkMenu";
import SummaryModal from "@/components/SummaryModal";

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

const NodeMap = () => {
  const [selectedNodeName, setSelectedNodeName] = useState("");

  const handleSelectNode = (nodeIndex) => {
    setSelectedNodeName(graph?.nodes[nodeIndex - 1].label);
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
        <Graph graph={graph} options={options} events={handleEvents} />
      </div>
    </div>
  );
};

export default NodeMap;
