"use client";
import React from "react";
import LinkButton from "@/components/common/LinkButton";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import SummaryModal from "@/components/SummaryModal";

const SummaryLink = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}
      <LinkButton
        onClick={onOpen}
        icon={<ExternalLinkIcon />}
        title="summary"
      />
      <SummaryModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default SummaryLink;
