import React from "react";

const InputReadOnly = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium" htmlFor="exactly-address">
        {label}
      </label>
      <input
        value={value || ""}
        type="text"
        id="exactly-address"
        readOnly
        className="border border-gray-200 bg-gray-300 rounded-md p-2 w-full outline-none"
      />
    </div>
  );
};

export default InputReadOnly;
