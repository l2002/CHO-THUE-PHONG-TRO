import { useCallback, useState } from "react";
import { SearchItem, Modal } from "../../components";
import icons from "../../ultils/icons";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

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
  const [queries, setQueries] = useState({});
  const [arrMinMax, setArrMinMax] = useState({});
  const dispatch = useDispatch();
  const { areas, prices, provinces, categories } = useSelector(
    (state) => state.app
  );

  const handleShowModal = (content, name) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };

  const handleSubmit = useCallback(
    (e, query, arrMinMax) => {
      e.stopPropagation();
      setQueries((prev) => ({ ...prev, ...query }));
      setIsShowModal(false);
      arrMinMax && setArrMinMax((prev) => ({ ...prev, ...arrMinMax }));
    },
    [isShowModal, queries]
  );

  const handleSearch = () => {
    const queryCodes = Object.entries(queries).filter((item) =>
      item[0].includes("Code")
    );
    let queryCodesObj = {};
    queryCodes.forEach((item) => {
      queryCodesObj[item[0]] = item[1];
    });
    dispatch(actions.getPostsLimit(queryCodesObj));
  };
  return (
    <>
      <div className="p-[10px] w-3/5 my-4 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handleShowModal(categories, "category")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            iconBefore={<HouseIcon />}
            fontWeight
            text={queries.category}
            defaultText="Phòng trọ, nhà trọ"
          />
        </span>
        <span
          onClick={() => handleShowModal(provinces, "province")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            iconBefore={<LocationPinIcon />}
            text={queries.province}
            defaultText="Toàn quốc"
            iconAfter={<NavigateNextIcon />}
          />
        </span>
        <span
          onClick={() => handleShowModal(prices, "price")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            iconBefore={<LocalAtmIcon />}
            text={queries.price}
            defaultText="Chọn giá"
            iconAfter={<NavigateNextIcon />}
          />
        </span>
        <span
          onClick={() => handleShowModal(areas, "area")}
          className="cursor-pointer flex-1"
        >
          <SearchItem
            iconBefore={<CropIcon />}
            text={queries.area}
            defaultText="Chọn diện tích"
            iconAfter={<NavigateNextIcon />}
          />
        </span>
        <button
          onClick={handleSearch}
          type="button"
          className="outline-none py-2 px-4 w-full bg-secondary1 text-sm flex flex-1 items-center justify-center text-white font-medium gap-2"
        >
          <SearchIcon />
          Search
        </button>
      </div>
      {isShowModal && (
        <Modal
          content={content}
          name={name}
          queries={queries}
          setIsShowModal={setIsShowModal}
          handelSubmit={handleSubmit}
          arrMinMax={arrMinMax}
        />
      )}
    </>
  );
}

export default Search;
