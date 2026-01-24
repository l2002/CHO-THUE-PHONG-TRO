import React from "react";

const InputFormV2 = ({ label, unit }) => {
  return (
    <div>
      <label htmlFor="title">{label}</label>
      <div className="flex items-center">
        <input
          type="text"
          id="title"
          className={`${unit ? "rounded-tl-md rounded-bl-md" : "rounded-md"} outline-none border border-gray-300 flex-auto p-2`}
        />
        {unit && (
          <span className="p-2 border flex-none w-16 flex items-center justify-center rounded-tr-md rounded-br-md bg-gray-200">
            {unit}
          </span>
        )}
      </div>
    </div>
  );
};

export default InputFormV2;
