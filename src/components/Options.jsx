import React from "react";

const Options = ({ icon, borderColor = "border-white", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-36 h-36 bg-white rounded-full border-[20px] flex items-center justify-center shadow-lg ${borderColor} relative`}
      style={{
        boxShadow: "inset 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <img src={icon} alt="option" className="w-14 h-14" />
    </button>
  );
};

export default Options;
