// GameBoard.js
import React from "react";
import handIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";
import rockIcon from "../assets/icon-rock.svg";
import triangle from "../assets/bg-triangle.svg";

const options = [
  {
    name: "rock",
    color: "bg-gradient-to-b from-[#dc2e4e] to-[#dd405d]",
    icon: rockIcon,
    position: "bottom-[0] left-1/2 -translate-x-1/2",
  },
  {
    name: "paper",
    color: "bg-gradient-to-b from-[#4865f4] to-[#5671f5]",
    icon: handIcon,
    position: "top-0 right-0",
  },
  {
    name: "scissors",
    color: "bg-gradient-to-b from-[#ec9e0e] to-[#eca922]",
    icon: scissorsIcon,
    position: "top-0 left-0",
  },
];

const GameBoard = ({ onPick }) => {
  return (
    <div className="relative w-[300px] h-[280px] mx-auto mt-10">
      <img
        src={triangle}
        alt="triangle background"
        className="absolute top-1/2 left-1/2 w-full max-w-[240px] -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {options.map((option) => (
        <button
          key={option.name}
          onClick={() => onPick(option.name)}
          className={`absolute ${option.position} w-28 h-28 rounded-full flex items-center justify-center shadow-lg ${option.color} hover:scale-110 transition-transform`}
        >
          <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-inner">
            <img src={option.icon} alt={option.name} className="w-10 h-10" />
          </div>
        </button>
      ))}
    </div>
  );
};

export default GameBoard;
