import moment from "moment";

const Sitem = ({ title, image, price, createdAt }) => {
  return (
    <div className="w-full flex items-center gap-2 py-2 border-b border-gray-400">
      <img
        src={image[0]}
        alt="anh"
        className="w-[65px] h-[65px] object-cover flex-none rounded-md"
      />
      <div className="w-full flex flex-auto flex-col justify-between gap-1">
        <h4 className="text-blue-600">{`${title?.slice(0, 40)}...`}</h4>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-green-500">{price}</span>
          <span className="text-sm text-gray-400">
            {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sitem;
