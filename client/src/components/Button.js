import { memo } from "react";

const Button = ({
  text,
  textColor,
  bgColor,
  IcAfter,
  onClick,
  fullWidth,
  px,
  hover,
}) => {
  return (
    <button
      type="button"
      className={`py-2 ${px} ${textColor} ${bgColor} ${
        fullWidth && "w-full"
      } ${hover} outline-none rounded-md flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      {IcAfter && <span>{<IcAfter />}</span>}
      <span>{text}</span>
    </button>
  );
};

export default memo(Button);
