import React from "react";

const Header = ({ score }) => {
  return (
    <header className="flex justify-between items-center p-4 md:p-6 border-2 border-gray-300 rounded-lg md:rounded-xl text-white w-full max-w-2xl mx-auto">
      {/* Título del juego */}
      <div className="leading-tight md:leading-7 text-left uppercase font-bold text-xl md:text-3xl">
        <span className="block">Rock</span>
        <span className="block">Paper</span>
        <span className="block">Scissors</span>
      </div>

      {/* Contador de puntuación */}
      <div className="bg-white text-center rounded md:rounded-lg px-4 py-2 md:px-8 md:py-4 min-w-[80px]">
        <p className="text-[10px] md:text-xs font-bold text-blue-600 tracking-wider md:tracking-widest">
          SCORE
        </p>
        <p className="text-2xl md:text-4xl font-bold text-gray-800">{score}</p>
      </div>
    </header>
  );
};

export default Header;
