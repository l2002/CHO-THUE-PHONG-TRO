import { memo } from "react";

const SelectAddress = ({ label, options, value, setValue, reset }) => {
  return (
    <div className="flex flex-col gap-2 flex-1">
      <label className="font-medium" htmlFor="select-address">
        {label}
      </label>
      <select
        value={reset ? "" : value}
        onChange={(e) => setValue(e.target.value)}
        id="select-address"
        className="outline-none border border-gray-300 p-2 rounded-md w-full"
      >
        <option value="">{`--Chọn ${label}--`}</option>
        {options?.map((item) => {
          return (
            <option key={item?.code} value={item?.code}>
              {item?.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default memo(SelectAddress);
