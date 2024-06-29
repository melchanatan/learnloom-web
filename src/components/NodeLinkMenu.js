"use client";
import React from "react";
import LinkButton from "@/components/common/LinkButton";
import SummaryLink from "@/components/SummaryLink";
import FlashcardLink from "@/components/FlashcardLink";

const NodeLinkMenu = ({ selectedNodeName }) => {
  return (
    <div className="flex gap-2 flex-col items-center rounded-md border-2 p-3">
      <p className="mb-2">{selectedNodeName || "Select a node"}</p>
      <FlashcardLink selectedNodeName={selectedNodeName} />
      <SummaryLink />
    </div>
  );
};

export default NodeLinkMenu;
