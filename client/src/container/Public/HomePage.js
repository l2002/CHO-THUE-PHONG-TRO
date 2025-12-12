import { text } from "../../ultils/constant";
import Province from "../../components/Province";
import { List, Pagination } from "./index";
import { ItemSidebar } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actions from "../../store/actions";

const HomePage = () => {
  const { categories, prices, areas } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-base text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className="w-full flex gap-4">
        <div className="w-[70%]">
          <List />
          <Pagination />
        </div>
        <div className="w-[30%] flex flex-col justify-start gap-4">
          <ItemSidebar content={categories} title="Danh sách cho thuê" />
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
