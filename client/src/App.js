import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Rental,
  HomePage,
  DetailPost,
  SearchDetail,
} from "./container/Public";
import { path } from "./ultils/constant";
import { CreatePost, System } from "./container/System";

function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={"*"} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.NHA_NGUYEN_CAN} element={<Rental />} />
          <Route path={path.CAN_HO_MINI} element={<Rental />} />
          <Route path={path.CAN_HO_DICH_VU} element={<Rental />} />
          <Route path={path.CAN_HO_CHUNG_CU} element={<Rental />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
          <Route
            path={path.DETAIL_POST__TITLE__POSTID}
            element={<DetailPost />}
          />
        </Route>
        <Route path={path.SYSTEM} element={<System />}>
          <Route path={path.CREATE_POST} element={<CreatePost />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
