import { List, Pagination } from "./index";
import { ItemSidebar, RelatedPost } from "../../components";
import { useSelector } from "react-redux";

const SearchDetail = () => {
  const { prices, areas } = useSelector((state) => state.app);

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        {/* <h1 className="text-[28px] font-bold">{currentCategory?.header}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p> */}
      </div>
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col justify-start gap-4">
          <ItemSidebar
            type="priceCode"
            isDouble={true}
            content={prices}
            title="Xem theo giá"
          />
          <ItemSidebar
            type="areaCode"
            isDouble={true}
            content={areas}
            title="Xem theo diện tích"
          />
          <RelatedPost />
        </div>
      </div>
    </div>
  );
};

export default SearchDetail;
