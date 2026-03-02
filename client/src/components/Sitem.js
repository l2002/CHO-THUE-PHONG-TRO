import moment from "moment";
import "moment/locale/vi";
import StarIcon from "@mui/icons-material/Star";

const Sitem = ({ title, image, price, createdAt, star }) => {
  const formatTime = (createdAt) => {
    return moment(createdAt).fromNow();
  };
  return (
    <div className="w-full flex items-center gap-2 py-2 border-b border-gray-400">
      <img
        src={image[0]}
        alt="anh"
        className="w-[65px] h-[65px] object-cover flex-none rounded-md"
      />
      <div className="w-full flex flex-auto flex-col justify-between gap-1">
        <h4 className="text-blue-600">
          {Array.from({ length: star }).map((_, i) => (
            <StarIcon key={i} className="text-yellow-400" />
          ))}
          {`${title?.slice(0, 40)}...`}
        </h4>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm font-medium text-green-500">{price}</span>
          <span className="text-sm text-gray-400">{formatTime(createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default Sitem;
