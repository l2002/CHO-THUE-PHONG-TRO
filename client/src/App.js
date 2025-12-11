import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  NhaNguyenCan,
  CanHoMini,
  CanHoDichVu,
  CanHoChungCu,
  HomePage,
  DetailPost,
} from "./container/Public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path={"*"} element={<HomePage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.NHA_NGUYEN_CAN} element={<NhaNguyenCan />} />
          <Route path={path.CAN_HO_MINI} element={<CanHoMini />} />
          <Route path={path.CAN_HO_DICH_VU} element={<CanHoDichVu />} />
          <Route path={path.CAN_HO_CHUNG_CU} element={<CanHoChungCu />} />
          <Route
            path={path.DETAIL_POST__TITLE__POSTID}
            element={<DetailPost />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
