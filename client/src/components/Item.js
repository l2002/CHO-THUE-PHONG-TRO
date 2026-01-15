import { memo, useState } from "react";
import icons from "../ultils/icons";
import { useNavigate, Link } from "react-router-dom";
import { formatVietnameseToString } from "../ultils/Common/formatVietnameseToString";

const { StarIcon, FavoriteBorderIcon, FavoriteIcon } = icons;

const indexs = [0, 1, 2, 3];

const Item = ({
  address,
  attributes,
  description,
  images,
  star,
  title,
  user,
  id,
}) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full flex border-t border-orange-600 py-4">
      <Link
        to={`chi-tiet/${formatVietnameseToString(title)}/${id}`}
        className="w-2/5 flex flex-wrap gap-[2px] items-center relative cursor-pointer"
      >
        {images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i, index) => {
              return (
                <img
                  key={index}
                  src={i}
                  alt="preview"
                  className="w-[47%] h-[120px] object-cover"
                />
              );
            })}
        <span className="bg-overlay-70 text-white px-2 left-1 bottom-4 rounded-md absolute">
          {`${images?.length} ảnh`}
        </span>
        <span
          className=" text-white right-4 bottom-1 absolute"
          onMouseEnter={() => setIsHoverHeart(true)}
          onMouseLeave={() => setIsHoverHeart(false)}
        >
          {isHoverHeart ? (
            <FavoriteIcon className="text-red-600" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </span>
      </Link>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <div className="text-blue-800 font-medium">
            {Array.from({ length: star }).map((_, i) => (
              <StarIcon key={i} className="text-yellow-400" />
            ))}
            {title}
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-green-600 font-bold">{attributes?.price}</span>
          <span>{attributes?.acreage}</span>
        </div>
        <p>{`${address.split(",")[address.split(",").length - 2]}${
          address.split(",")[address.split(",").length - 1]
        }`}</p>
        <p className="text-gray-500 w-full h-[50px] text-ellipsis overflow-hidden">
          {description}
        </p>
        <div className="flex items-center my-5 justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/small/avatar_hoat_hinh_db4e0e9cf4.jpg"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover"
            />
            <p>{user?.name}</p>
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              Goi {user?.phone}
            </button>
            <button
              type="button"
              className="text-blue-700 px-1 rounded-md border border-blue-700"
            >
              Nhan zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
