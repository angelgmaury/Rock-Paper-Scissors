import React from "react";
import rockIcon from "../assets/icon-rock.svg";
import paperIcon from "../assets/icon-paper.svg";
import scissorsIcon from "../assets/icon-scissors.svg";

const icons = {
  rock: rockIcon,
  paper: paperIcon,
  scissors: scissorsIcon,
};

const borderColors = {
  rock: "border-red-500",
  paper: "border-blue-500",
  scissors: "border-yellow-400",
};

const ResultScreen = ({ playerPick, housePick, result, onPlayAgain }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-8 w-full px-4">
      {/* Texto del resultado */}
      {result && (
        <h2 className="text-white text-3xl md:text-5xl font-bold mb-2 md:mb-4 mt-4 md:mt-8">
          {result.toUpperCase()}
        </h2>
      )}

      {/* Contenedor principal para móvil */}
      <div className="md:hidden w-full">
        {/* Contenedor de textos */}
        <div className="flex justify-between w-full max-w-xs mx-auto mb-2 px-2">
          <p className="text-white text-sm font-semibold w-1/2 text-center">
            YOU PICKED
          </p>
          <p className="text-white text-sm font-semibold w-1/2 text-center">
            THE HOUSE PICKED
          </p>
        </div>

        {/* Contenedor de selecciones */}
        <div className="flex justify-between w-full max-w-xs mx-auto mb-8">
          {/* Selección del jugador */}
          <div className="w-1/2 flex justify-center">
            <div
              className={`bg-white rounded-full p-4 border-[12px] ${borderColors[playerPick]} shadow-lg`}
            >
              <img
                src={icons[playerPick]}
                alt={playerPick}
                className="w-8 h-8"
              />
            </div>
          </div>

          {/* Selección de la casa */}
          <div className="w-1/2 flex justify-center">
            {housePick ? (
              <div
                className={`bg-white rounded-full p-4 border-[12px] ${borderColors[housePick]} shadow-lg`}
              >
                <img
                  src={icons[housePick]}
                  alt={housePick}
                  className="w-8 h-8"
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-black/20"></div>
            )}
          </div>
        </div>

        {/* Botón PLAY AGAIN */}
        {result && (
          <div className="w-full flex justify-center mt-4">
            <button
              onClick={onPlayAgain}
              className="bg-white text-[#3b4262] font-bold px-8 py-2 rounded-lg hover:bg-gray-100 text-base"
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>

      {/* Versión para desktop */}
      <div className="hidden md:flex items-center justify-center gap-8 md:gap-16">
        {/* Selección del jugador */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-white text-lg font-semibold min-w-[120px] text-center">
            YOU PICKED
          </p>
          <div
            className={`bg-white rounded-full p-6 border-[16px] ${borderColors[playerPick]} shadow-lg`}
          >
            <img
              src={icons[playerPick]}
              alt={playerPick}
              className="w-12 h-12"
            />
          </div>
        </div>

        {/* Botón PLAY AGAIN */}
        {result && (
          <div className="flex flex-col items-center justify-center mt-16 mx-8">
            <button
              onClick={onPlayAgain}
              className="bg-white text-[#3b4262] font-bold px-12 py-3 rounded-lg hover:bg-gray-100 text-lg"
            >
              PLAY AGAIN
            </button>
          </div>
        )}

        {/* Selección de la casa */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-white text-lg font-semibold min-w-[120px] text-center">
            THE HOUSE PICKED
          </p>
          {housePick ? (
            <div
              className={`bg-white rounded-full p-6 border-[16px] ${borderColors[housePick]} shadow-lg`}
            >
              <img
                src={icons[housePick]}
                alt={housePick}
                className="w-12 h-12"
              />
            </div>
          ) : (
            <div className="w-32 h-32 rounded-full bg-black/20"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
