import React from "react";
import { SearchItem } from "../../component";
import icons from "../../ultils/icons";

const {
  NavigateNextIcon,
  LocationPinIcon,
  LocalAtmIcon,
  CropIcon,
  HouseIcon,
  SearchIcon,
} = icons;

function Search() {
  return (
    <div className="p-[10px] w-3/5 my-4 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
      <SearchItem
        iconBefore={<HouseIcon />}
        fontWeight
        text="Phòng trọ, nhà trọ"
      />
      <SearchItem
        iconBefore={<LocationPinIcon />}
        text="Toàn quốc"
        iconAfter={<NavigateNextIcon />}
      />
      <SearchItem
        iconBefore={<LocalAtmIcon />}
        text="Chọn giá"
        iconAfter={<NavigateNextIcon />}
      />
      <SearchItem
        iconBefore={<CropIcon />}
        text="Chọn diện tích"
        iconAfter={<NavigateNextIcon />}
      />
      <button
        type="button"
        className="outline-none py-2 px-4 w-full bg-secondary1 text-sm flex items-center justify-center text-white font-medium gap-2"
      >
        <SearchIcon />
        Search
      </button>
    </div>
  );
}

export default Search;
