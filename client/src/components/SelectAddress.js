import { memo } from "react";

const SelectAddress = ({ label }) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="font-medium" htmlFor="select-address">
        {label}
      </label>
      <select
        id="select-address"
        className="outline-none border border-gray-300 p-2 rounded-md w-full"
      >
        <option value="">{`--Chọn ${label}--`}</option>
      </select>
    </div>
  );
};

export default memo(SelectAddress);
