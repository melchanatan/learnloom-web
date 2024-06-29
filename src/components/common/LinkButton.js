"use client";
import React from "react";

const LinkButton = ({ onClick, icon, title }) => {
  return (
    <button onClick={onClick} className="button-outline">
      {icon}
      <p>{title}</p>
    </button>
  );
};

export default LinkButton;
