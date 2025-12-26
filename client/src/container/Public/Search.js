import { useState } from "react";
import { SearchItem, Modal } from "../../components";
import icons from "../../ultils/icons";
import { useSelector } from "react-redux";

const {
  NavigateNextIcon,
  LocationPinIcon,
  LocalAtmIcon,
  CropIcon,
  HouseIcon,
  SearchIcon,
} = icons;

function Search() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const { areas, prices, provinces, categories } = useSelector(
    (state) => state.app
  );

  const handleShowModal = (content, name) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  return (
    <>
      <div className="p-[10px] w-3/5 my-4 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowModal(categories, "categories")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            iconBefore={<HouseIcon />}
            fontWeight
            text="Phòng trọ, nhà trọ"
          />
        </span>
        <span
          onClick={() => handleShowModal(provinces, "provinces")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            iconBefore={<LocationPinIcon />}
            text="Toàn quốc"
            iconAfter={<NavigateNextIcon />}
          />
        </span>
        <span
          onClick={() => handleShowModal(prices, "prices")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            iconBefore={<LocalAtmIcon />}
            text="Chọn giá"
            iconAfter={<NavigateNextIcon />}
          />
        </span>
        <span
          onClick={() => handleShowModal(areas, "areas")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            iconBefore={<CropIcon />}
            text="Chọn diện tích"
            iconAfter={<NavigateNextIcon />}
          />
        </span>
        <button
          type="button"
          className="outline-none py-2 px-4 w-full bg-secondary1 text-sm flex flex-1 items-center justify-center text-white font-medium gap-2"
        >
          <SearchIcon />
          Search
        </button>
      </div>
      {isShowModal && (
        <Modal content={content} name={name} setIsShowModal={setIsShowModal} />
      )}
    </>
  );
}

export default Search;
