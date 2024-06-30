import React from "react";
import { useRouter } from "next/navigation";
import LinkButton from "@/components/common/LinkButton";
import { ChatIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Button,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const FlashcardLink = ({ selectedNodeName }) => {
  const router = useRouter();

  const pushToRoute = () => {
    if (selectedNodeName) router.push(`/flashcard/${selectedNodeName}`);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button leftIcon={<ChatIcon />} onClick={pushToRoute}>
          Flashcard
        </Button>
      </PopoverTrigger>
      {selectedNodeName == "" && (
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Alert!</PopoverHeader>
          <PopoverBody>Please, select a node first.</PopoverBody>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default FlashcardLink;
