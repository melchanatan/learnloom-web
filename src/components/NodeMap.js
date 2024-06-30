"use client";
import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import NodeLinkMenu from "@/components/NodeLinkMenu";
import SummaryModal from "@/components/SummaryModal";
import useFileStore from "@/hook/useFileStore";
const graph = {
  nodes: [
    {
      id: 0,
      label: "Bearing Selection",
      title: "Bearing Selection",
    },
    {
      id: 1,
      label: "1.1: Assignment Details",
      title: "1.1: Assignment Details",
    },
    {
      id: 2,
      label: "20,000 hr",
      title: "20,000 hr",
    },
    {
      id: 3,
      label: "3,000 rpm",
      title: "3,000 rpm",
    },
    {
      id: 4,
      label: "Requires ball bearing with smallest possible inner diameter",
      title: "Requires ball bearing with smallest possible inner diameter",
    },
    {
      id: 5,
      label: "1.2: Selection Criteria",
      title: "1.2: Selection Criteria",
    },
    {
      id: 6,
      label: "Select from SKF Catalogue",
      title: "Select from SKF Catalogue",
    },
    {
      id: 7,
      label: "Use C, C0 from catalogue",
      title: "Use C, C0 from catalogue",
    },
    {
      id: 8,
      label: "Detailed solution and brief explanation",
      title: "Detailed solution and brief explanation",
    },
    {
      id: 9,
      label: "Select Part Number from catalogue",
      title: "Select Part Number from catalogue",
    },
    {
      id: 10,
      label: "Short description of the selected part",
      title: "Short description of the selected part",
    },
    {
      id: 11,
      label: "Calculation",
      title: "Calculation",
    },
    {
      id: 12,
      label: "2.1: Given Parameters",
      title: "2.1: Given Parameters",
    },
    {
      id: 13,
      label: "F = ↓",
      title: "F = ↓",
    },
    {
      id: 14,
      label: "Fa = 2.8",
      title: "Fa = 2.8",
    },
    {
      id: 15,
      label: "Life = 20,000",
      title: "Life = 20,000",
    },
    {
      id: 16,
      label: "Pre = 3,000",
      title: "Pre = 3,000",
    },
    {
      id: 17,
      label: "V = 1.2",
      title: "V = 1.2",
    },
    {
      id: 18,
      label: "CCo = 8 mm",
      title: "CCo = 8 mm",
    },
    {
      id: 19,
      label: "2.2: Interpolation",
      title: "2.2: Interpolation",
    },
    {
      id: 20,
      label: "Fa = 13",
      title: "Fa = 13",
    },
    {
      id: 21,
      label: "Ns = 1.5",
      title: "Ns = 1.5",
    },
    {
      id: 22,
      label: "P = 1.5",
      title: "P = 1.5",
    },
    {
      id: 23,
      label: "Ta = 18.2 kN",
      title: "Ta = 18.2 kN",
    },
    {
      id: 24,
      label: "2.3: Re-calculation",
      title: "2.3: Re-calculation",
    },
    {
      id: 25,
      label: "fofa = 14",
      title: "fofa = 14",
    },
    {
      id: 26,
      label: "P = 13.41 kN",
      title: "P = 13.41 kN",
    },
    {
      id: 27,
      label: "Ta = 37.31 N",
      title: "Ta = 37.31 N",
    },
    {
      id: 28,
      label: "Speed = 30,000 rpm",
      title: "Speed = 30,000 rpm",
    },
    {
      id: 29,
      label: "Recommended speed limit = 5,000 rpm",
      title: "Recommended speed limit = 5,000 rpm",
    },
    {
      id: 30,
      label: "Selected model = 6",
      title: "Selected model = 6",
    },
  ],
  edges: [
    {
      from: 0,
      to: 1,
      id: "b0eb1ca8-8ae0-4f9b-ba13-72754ceddf91",
    },
    {
      from: 0,
      to: 2,
      id: "a9bbdda2-da09-4a93-93e6-ca2a0f2deb4f",
    },
    {
      from: 0,
      to: 3,
      id: "45bc49dd-dfe0-4ff4-bba8-c310dc491294",
    },
    {
      from: 0,
      to: 4,
      id: "5c96beb6-403e-45f2-a88b-eebff045139b",
    },
    {
      from: 0,
      to: 5,
      id: "ade12cfb-6c3e-463e-86ce-62c10e60652a",
    },
    {
      from: 0,
      to: 6,
      id: "a7052fdc-eed4-4d55-bccc-c032e70c3d3e",
    },
    {
      from: 0,
      to: 7,
      id: "f58fce4b-cd75-43e6-a9b6-6bbb266b0a2c",
    },
    {
      from: 0,
      to: 8,
      id: "234ce85d-ecc1-4089-a559-dce42a184f3f",
    },
    {
      from: 0,
      to: 9,
      id: "8fb3801e-d82c-4033-a918-e89c5135d468",
    },
    {
      from: 0,
      to: 10,
      id: "7e2c7e30-64f2-4e29-985f-2cd83acb1e66",
    },
    {
      from: 11,
      to: 12,
      id: "023adbd3-44de-4495-908c-0b0f81020135",
    },
    {
      from: 11,
      to: 13,
      id: "ecfab193-bd92-4420-a1e1-16ffb17e6623",
    },
    {
      from: 11,
      to: 14,
      id: "cfd89193-0084-4989-9c61-239b7314caf8",
    },
    {
      from: 11,
      to: 15,
      id: "497d1ca8-b15b-4207-8e32-3e2fd3b2a344",
    },
    {
      from: 11,
      to: 16,
      id: "db7f15da-70f1-4e49-88c7-d2fd4d40ee22",
    },
    {
      from: 11,
      to: 17,
      id: "9976bcac-1bdf-4556-a5f2-c7b2c0c9c2d6",
    },
    {
      from: 11,
      to: 18,
      id: "e6df5b20-2bb0-416e-9367-acf43256131b",
    },
    {
      from: 11,
      to: 19,
      id: "9e6a0031-7471-4797-8cd3-274beb462634",
    },
    {
      from: 11,
      to: 20,
      id: "0334cfe3-0a31-4b11-b314-e99d2314ae94",
    },
    {
      from: 11,
      to: 21,
      id: "5d3380c9-eb0d-4d75-9855-34207daed558",
    },
    {
      from: 11,
      to: 22,
      id: "4b38c6f6-5008-4f63-9b44-a52847756dce",
    },
    {
      from: 11,
      to: 23,
      id: "032f540b-caa6-475e-b128-14ff6737aa3f",
    },
    {
      from: 11,
      to: 24,
      id: "3db3020c-5485-437f-8d26-8b6a483febd7",
    },
    {
      from: 11,
      to: 25,
      id: "3ad53204-5ef7-4af1-94ea-dc08824a04dc",
    },
    {
      from: 11,
      to: 26,
      id: "55e2a5a8-966e-4947-847d-4e8157237c15",
    },
    {
      from: 11,
      to: 27,
      id: "79d2c258-b15d-46ca-ae6e-6004d06f392e",
    },
    {
      from: 11,
      to: 28,
      id: "814d1186-ff65-4cfe-98e2-5aaf7054d2f9",
    },
    {
      from: 11,
      to: 29,
      id: "d89e496a-d672-4bd8-8260-5148bc00d95a",
    },
    {
      from: 11,
      to: 30,
      id: "d85d9ae0-bc8a-4475-b987-523b9f2db456",
    },
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
  const defaultArray = {
    nodes: [],
    edges: [],
  };

  let test = {
    nodes: [],
    edges: [],
  };
  const [selectedNodeName, setSelectedNodeName] = useState("");
  const [isDoneGenerating, setIsDoneGenerating] = useState(false);
  const { file, setFile } = useFileStore();
  const [x, setX] = useState(defaultArray);

  useEffect(() => {
    if (file.nodes != [] && file.edges != []) {
      setIsDoneGenerating(true);
      console.log("done rendering");
    }
  }, [file]);

  const handleSelectNode = (nodeIndex) => {
    setSelectedNodeName(x?.nodes[nodeIndex - 1].label);
  };

  const handleEvents = {
    select: ({ nodes, pointer: { canvas } }) => {
      handleSelectNode(nodes);
    },
  };

  return (
    <div className="flex gap-3">
      <NodeLinkMenu selectedNodeName={selectedNodeName} />
      {file && (
        <div className="rounded-lg border-2">
          <MyGraph graph={file} />
        </div>
      )}

      {/* <button onClick={reGenerateNode}> render</button> */}
    </div>
  );
};

const MyGraph = ({ graph }) => {
  return <Graph graph={graph} options={options} />;
};

export default NodeMap;
