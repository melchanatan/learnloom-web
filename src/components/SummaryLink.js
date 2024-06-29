"use client";
import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useDisclosure, Button } from "@chakra-ui/react";
import SummaryModal from "@/components/SummaryModal";

const SummaryLink = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button leftIcon={<ExternalLinkIcon />} onClick={onOpen}>
        Summary
      </Button>
      <SummaryModal onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default SummaryLink;
