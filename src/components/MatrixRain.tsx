import React, { useEffect, useState } from "react";

const letters = "01";
const columnCount = 150; 

const getRandomChar = () =>
  letters[Math.floor(Math.random() * letters.length)];

const MatrixRain: React.FC = () => {
  const [columns, setColumns] = useState<string[][]>([]);

  useEffect(() => {
    const newColumns: string[][] = [];
    for (let i = 0; i < columnCount; i++) {
      const colLength = 20 + Math.floor(Math.random() * 30); 
      const col: string[] = [];
      for (let j = 0; j < colLength; j++) {
        col.push(getRandomChar());
      }
      newColumns.push(col);
    }
    setColumns(newColumns);
  }, []);

  return (
    <div className="absolute inset-0 flex overflow-hidden">
      {columns.map((col, colIndex) => (
        <div
          key={colIndex}
          className="flex flex-col justify-start"
          style={{
            animation: `drop ${5 + Math.random() * 5}s linear infinite`,
            marginLeft: colIndex === 0 ? "0" : "1rem",
          }}
        >
          {col.map((char, index) => (
            <span
              key={index}
              className="text-green-400/50 font-mono select-none"
              style={{
                opacity: Math.random() * 0.5 + 0.3,
                fontSize: "0.8rem",
              }}
            >
              {char}
            </span>
          ))}
        </div>
      ))}
      <style>
        {`
          @keyframes drop {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
        `}
      </style>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0b0c10] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default MatrixRain;
