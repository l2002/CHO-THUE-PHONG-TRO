import { text } from "../../ultils/constant";
import Province from "../../components/Province";
import { List, Pagination } from "./index";
import { ItemSidebar, RelatedPost } from "../../components";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatVietnameseToString } from "../../ultils/Common/formatVietnameseToString";

const Rental = () => {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const [categoryCode, setCategoryCode] = useState("none");
  const [currentCategory, setCurrentCategory] = useState({});
  const location = useLocation();

  useEffect(() => {
    const category = categories?.find(
      (item) => `/${formatVietnameseToString(item.value)}` === location.pathname
    );
    setCurrentCategory(category);
    if (category) {
      setCategoryCode(category.code);
    }
  }, [location]);

  console.log(categoryCode);
  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{currentCategory?.header}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List categoryCode={categoryCode} />
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

export default Rental;
