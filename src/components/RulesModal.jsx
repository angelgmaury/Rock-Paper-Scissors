import React from "react";
import rulesImg from "../assets/image-rules.svg";

const RulesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0B1121]/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 relative">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">
          RULES
        </h2>
        <img src={rulesImg} alt="rules" className="mx-auto" />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl font-bold hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
