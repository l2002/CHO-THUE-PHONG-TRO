import { memo } from "react";
import icons from "../ultils/icons";

const { StarIcon, FavoriteBorderIcon, FavoriteIcon } = icons;

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/11/07/z7183338483360-c31608895aa733aca24fda2b604307d9_1762496581.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/11/07/z7183338491219-9e096774e76ad46af0759905dbd96b7e_1762496581.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/11/07/z7183338491347-27add9158bc2a8c43b25e3cf7eafa8dc_1762496582.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/11/07/z7183338505264-a27d848f02d5a2275f4caeb6791d8c03_1762496582.jpg",
];

const Item = () => {
  return (
    <div className="w-full flex">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center">
        <img
          src={images[0]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[1]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[2]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[3]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
      </div>
      <div className="w-3/5">
        <div className="flex justify-between gap-4">
          <div className="text-blue-800 font-medium">
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            Nhà gần chợ Bình Trị Đông , ngang 4.6m có 4 phòng ngủ !
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-green-600 font-bold">11.5 triệu/tháng</span>
          <span>50 m2</span>
        </div>
        <p>Bình Tân, Hồ Chí Minh</p>
        <p className="text-gray-500">
          Cho thuê nhà ngang 4.6 m gần chợ Bình Trị Đông , hẻm xe hơi chỉ 11.5
          triệu !Hẻm Bình Trị Đông ( gần Tên Lửa ) , BTĐ, Bình Tân.DT...
        </p>
        <div className="flex items-center my-5 justify-between">
          <div className="flex items-center">
            <img
              src="https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/small/avatar_hoat_hinh_db4e0e9cf4.jpg"
              alt="avatar"
              className="w-[30px] h-[30px] object-cover"
            />
            <p>Tue Thu</p>
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-700 text-white p-1 rounded-md"
            >
              Goi 123456789
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
