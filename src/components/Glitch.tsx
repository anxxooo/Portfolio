import React from "react";

const Glitch: React.FC<{ text: string }> = ({ text }) => {
  return (
    <h1 className="font-sans glitch relative text-white">
      {text}
      <span>{text}</span>
      <span>{text}</span>
    </h1>
  );
};

export default Glitch;
