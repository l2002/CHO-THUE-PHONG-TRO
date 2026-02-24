import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Rental,
  HomePage,
  DetailPost,
  SearchDetail,
  Contact,
} from "./container/Public";
import { path } from "./ultils/constant";
import {
  CreatePost,
  System,
  ManagePost,
  EditAccount,
} from "./container/System";
import * as actions from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getCurrent());
    }, 1000);
  }, [isLoggedIn]);

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
  }, []);

  return (
    <div className="bg-primary overflow-hidden">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={"*"} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.NHA_NGUYEN_CAN} element={<Rental />} />
          <Route path={path.CAN_HO_MINI} element={<Rental />} />
          <Route path={path.CAN_HO_DICH_VU} element={<Rental />} />
          <Route path={path.CAN_HO_CHUNG_CU} element={<Rental />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
          <Route path={path.CONTACT} element={<Contact />} />
          <Route
            path={path.DETAIL_POST_TITLE_POSTID}
            element={<DetailPost />}
          />
          {/* <Route path={path.DETAIL_ALL} element={<DetailPost />} /> */}
        </Route>
        <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.CREATE_POST} element={<CreatePost />} />
          <Route path={path.MANAGE_POST} element={<ManagePost />} />
          <Route path={path.EDIT_ACCOUNT} element={<EditAccount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
