"use client";
import React from "react";

const LinkButton = ({ onClick, icon, title }) => {
  return (
    <button
      onClick={onClick}
      className="border-[1px] border-gray-300 px-4 py-2 rounded-full flex justify-center items-center gap-2 text-lg hover:brightness-75 transition-all duration-200 active:scale-90"
    >
      {icon}
      <p>{title}</p>
    </button>
  );
};

export default LinkButton;
