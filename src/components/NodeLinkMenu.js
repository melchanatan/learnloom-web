"use client";
import React from "react";
import { ExternalLinkIcon, ChatIcon } from "@chakra-ui/icons";
import LinkButton from "@/components/common/LinkButton";
import SummaryLink from "@/components/SummaryLink";

const NodeLinkMenu = ({ selectedNodeName }) => {
  return (
    <div className="flex gap-2 flex-col items-center">
      <p className="mb-2">{selectedNodeName || "Select a node"}</p>
      <LinkButton title="flashcard" icon={<ChatIcon />} />
      <SummaryLink />
    </div>
  );
};

export default NodeLinkMenu;
