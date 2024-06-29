"use client";
import React from "react";
import LinkButton from "@/components/common/LinkButton";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  //   Lorem,
  Button,
} from "@chakra-ui/react";

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>something something</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SummaryLink;
