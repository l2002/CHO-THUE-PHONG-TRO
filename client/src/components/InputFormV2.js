import React from "react";

const InputFormV2 = ({ label, unit, value, setValue, name, small }) => {
  return (
    <div>
      <label htmlFor="title">{label}</label>
      <div className="flex items-center">
        <input
          value={value}
          onChange={(e) =>
            setValue((prev) => ({ ...prev, [name]: e.target.value }))
          }
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
      {small && <small className="opacity-70">{small}</small>}
    </div>
  );
};

export default InputFormV2;
