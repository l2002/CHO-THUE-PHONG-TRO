import { memo } from "react";

const Button = ({ text, textColor, bgColor, IcAfter, onClick, fullWidth }) => {
  return (
    <button
      type="button"
      className={`py-2 px-4 ${textColor} ${bgColor} ${
        fullWidth && "w-full"
      } outline-none rounded-md flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      <span>{IcAfter && <IcAfter />}</span>
      <span>{text}</span>
    </button>
  );
};

export default memo(Button);
