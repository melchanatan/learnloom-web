"use client";
import MyFlashcard from "@/components/MyFlashcard";
import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";
const page = ({ params }) => {
  const nodeName = params.node;

  const router = useRouter();

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <Button
        colorScheme="teal"
        variant="outline"
        position="absolute"
        top="3rem"
        left="3rem"
        onClick={() => router.push("/")}
      >
        Back
      </Button>
      <MyFlashcard />
    </div>
  );
};

export default page;
