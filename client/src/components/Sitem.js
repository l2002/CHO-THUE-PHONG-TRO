import React from "react";

const Sitem = ({ title, image, price, createdAt }) => {
  return (
    <div className="w-full flex items-center gap-2 py-2 border-b border-gray-400">
      <img
        src="https://vinhtuong.com/sites/default/files/inline-images/mau-nha-dep-12335.jpeg"
        alt="anh"
        className="w-[65px] h-[65px] object-cover rounded-md"
      />
      <div className="flex flex-col justify-between gap-1">
        <h4 className="text-blue-600">{`${title?.slice(0, 40)}...`}</h4>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-green-500">{price}</span>
          <span className="text-sm text-gray-400">time</span>
        </div>
      </div>
    </div>
  );
};

export default Sitem;
