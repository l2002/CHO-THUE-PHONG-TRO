import defaultAvatar from "../../assets/avatar-facebook-mac-dinh-2.jpg";
import { useSelector, useDispatch } from "react-redux";
import menuSidebar from "../../ultils/menuSidebar";
import { NavLink } from "react-router-dom";
import * as actions from "../../store/actions";
import icons from "../../ultils/icons";

const activeStyle =
  "hover:bg-gray-200 flex items-center rounded-md flex py-2 font-bold bg-gray-200 gap-2";
const notActiveStyle =
  "hover:bg-gray-200 flex items-center py-2 gap-2 cursor-pointer";

const { LogoutIcon } = icons;
const Sidebar = () => {
  const { currentData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <div className="w-[256px] flex-none p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center">
          <img
            src={defaultAvatar}
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full border-2 border-white"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">{currentData?.name}</span>
            <small>{currentData?.phone}</small>
          </div>
        </div>
        <span>
          Mã thành viên:
          <span className="font-medium">
            {currentData?.id?.match(/\d/g).join("").slice(0, 6)}
          </span>
        </span>
      </div>
      <div>
        {menuSidebar.map((item) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              key={item.id}
              to={item?.path}
            >
              {item?.icon}
              {item.text}
            </NavLink>
          );
        })}
        <span
          className={notActiveStyle}
          onClick={() => dispatch(actions.logout())}
        >
          <LogoutIcon />
          Thoát
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
