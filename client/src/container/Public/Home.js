import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Search, Nagivation } from "./index";
import { Contact, Intro } from "../../components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { apiGetCurrent } from "../../services/user";

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  useEffect(() => {
    const fetchCurrent = async () => {
      const response = await apiGetCurrent();
      console.log(response);
    };
    isLoggedIn && fetchCurrent();
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
  }, []);
  return (
    <div className="w-full flex flex-col items-center h-full gap-4">
      <Header />
      <Nagivation />
      {isLoggedIn && <Search />}
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3">
        {/* Hiển thị các Route con nằm trong Route cha */}
        <Outlet />
      </div>
      <Intro />
      <Contact />
    </div>
  );
};

export default Home;
