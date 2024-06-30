"use client";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import useFileStore from "@/hook/useFileStore";
const fileTypes = ["JPG", "PNG", "PDF"];

const DragAndDropModal = ({ isDragOpen, setIsDragOpen }) => {
  const { file, setFile } = useFileStore();

  const checkFetch = async () => {
    const response = await fetch("http://localhost:8000/ping/", {
      // mode: "no-cors",
      method: "GET",
    });

    const res = await response.json();
    console.log(res);
    setFile("hello");
  };

  const handleChange = async (file) => {
    setIsDragOpen(false);
    let data = new FormData();
    data.append("file", file);

    const response = await fetch("http://localhost:8000/getNode", {
      method: "POST",
      header: { "Content-Type": "multipart/form-data" },
      body: data,
    });

    const res = await response.json();
    const nodes = reGenerateNode(res);
    setFile(nodes);
  };

  const reGenerateNode = (res) => {
    let fileGraph = {
      nodes: [],
      edges: [],
    };
    let i = 0;
    let b = 0;
    Object.keys(res).forEach(function (key) {
      b = i;
      fileGraph.nodes.push({ id: i, label: key, title: key });
      i++;
      for (let j = 0; j < res[key].length; j++) {
        fileGraph.nodes.push({
          id: i,
          label: res[key][j],
          title: res[key][j],
        });
        fileGraph.edges.push({ from: b, to: i });
        i++;
      }
    });
    return fileGraph;
  };

  if (isDragOpen)
    return (
      <>
        <div className="absolute bg-white top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[50vw] shadow-full rounded-2xl px-20 py-[50px] flex justify-center items-center flex-col gap-5">
          <h3 className="font-bold">Drag and Drop files</h3>
          <FileUploader
            className="h-40"
            handleChange={handleChange}
            name="file"
            types={fileTypes}
          />
          <button onClick={checkFetch}> enheosehfiosede</button>
        </div>
        <span className="absolute z-30 top-0 left-0 w-full h-full bg-gray-900/40 backdrop-blur-lg"></span>
      </>
    );
};

export default DragAndDropModal;
