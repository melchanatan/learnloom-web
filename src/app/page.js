import Image from "next/image";
import {
  Card,
  CardHeader,
  Stack,
  Text,
  Heading,
  Button,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import DragAndDropModal from "@/components/DragAndDropModal";
import NodeMap from "@/components/NodeMap";
import MyFlashcard from "@/components/MyFlashcard";
export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-between p-24 z-10">
      {/* <DragAndDropModal /> */}
      <NodeMap />
      <MyFlashcard />
    </div>
  );
}
