"use client";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const DragAndDropModal = () => {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

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
      </div>
      <span className="absolute z-30 top-0 left-0 w-full h-full bg-gray-900/40 backdrop-blur-lg"></span>
    </>
  );
};

export default DragAndDropModal;
