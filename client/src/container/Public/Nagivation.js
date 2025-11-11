import { NavLink } from "react-router-dom";

const nav = [
  { name: "Trang chủ", path: "home" },
  { name: "Nhà nguyên căn", path: "nha-nguyen-can" },
  { name: "Căn hộ mini", path: "can-ho-mini" },
  { name: "Căn hộ dịch vụ", path: "can-ho-dich-vu" },
  { name: "Căn hộ chung cư", path: "can-ho-chung-cu" },
];

const notActive =
  "hover:bg-secondary2 py-2 px-4 h-full flex justify-center bg-secondary1";
const active =
  "hover:bg-secondary2 py-2 px-4 h-full flex justify-center bg-secondary2";

function Nagivation() {
  return (
    <div className="w-screen flex justify-center items-center bg-secondary1 text-white">
      <div className="w-1100 flex h-full items-center text-sm font-medium">
        {nav?.length > 0 &&
          nav.map((item, index) => {
            return (
              <div
                key={index}
                className="h-full flex justify-center items-center"
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? active : notActive)}
                >
                  {item.name}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Nagivation;
