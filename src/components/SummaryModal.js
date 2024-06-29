import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

const SummaryModal = ({ onClose, isOpen, title }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className="px-2 py-4">
        <ModalHeader>
          {isLoading ? (
            <div className="animate-pulse bg-slate-300 rounded-lg w-1/2 h-6"></div>
          ) : (
            "Modal Title"
          )}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {isLoading ? (
            <div className="flex flex-col gap-2">
              <div className="animate-pulse bg-slate-300 rounded-lg w-full h-4"></div>
              <div className="animate-pulse bg-slate-300 rounded-lg w-full h-4"></div>
              <div className="animate-pulse bg-slate-300 rounded-lg w-full h-4"></div>
              <div className="animate-pulse bg-slate-300 rounded-lg w-[70%] h-4"></div>
            </div>
          ) : (
            "Modal Title"
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SummaryModal;
